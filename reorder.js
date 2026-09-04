const fs = require('fs');

let text = fs.readFileSync('packages/site-personal/src/config.ts', 'utf-8');
text = text.replace(/\r\n/g, '\n'); // Normalize newlines

const startIndex = text.indexOf('  projects: [');
const endIndex = text.lastIndexOf('\n  ]\n};');

if (startIndex !== -1 && endIndex !== -1) {
    let before = text.substring(0, startIndex + 14);
    let arrayContent = text.substring(startIndex + 14, endIndex);
    let after = text.substring(endIndex);

    let blocks = arrayContent.split('    },\n    {');
    
    let parsedBlocks = blocks.map((b, i) => {
        let blockText = b;
        if (i === 0) blockText = blockText.trimStart();
        if (i > 0) blockText = '    {\n' + blockText;
        if (i < blocks.length - 1) blockText = blockText + '\n    }';
        else blockText = blockText.trimEnd(); 
        return blockText;
    });

    let normal = [];
    let moved = [];
    parsedBlocks.forEach(b => {
        if (b.includes("id: 'anvilmesh'") || b.includes("id: 'traceforge'")) {
            moved.push(b);
        } else {
            normal.push(b);
        }
    });

    let newBlocks = [...normal, ...moved];
    let newArrayContent = newBlocks.join(',\n');

    fs.writeFileSync('packages/site-personal/src/config.ts', before + newArrayContent + after, 'utf-8');
    console.log('Successfully reordered');
} else {
    console.log('Could not find bounds');
}
