const fs = require('fs');
let text = fs.readFileSync('packages/site-personal/src/config.ts', 'utf-8');

text = text.replace(
  /id: 'unlimited-lob',([\s\S]*?)githubUrl: 'https:\/\/github.com\/Rowrow620\/UnlimitedLOBPointsAndAgents',/,
  "id: 'unlimited-lob',$1githubUrl: 'https://github.com/Rowrow620/UnlimitedLOBPointsAndAgents',\n      liveUrl: 'https://www.nexusmods.com/lobotomycorporation/mods/1282',"
);

text = text.replace(
  /id: 'fastforwardspeed',([\s\S]*?)githubUrl: 'https:\/\/github.com\/Rowrow620\/FastForwardSpeed',/,
  "id: 'fastforwardspeed',$1githubUrl: 'https://github.com/Rowrow620/FastForwardSpeed',\n      liveUrl: 'https://www.nexusmods.com/lobotomycorporation/mods/1281',"
);

fs.writeFileSync('packages/site-personal/src/config.ts', text, 'utf-8');
console.log('URLs added.');
