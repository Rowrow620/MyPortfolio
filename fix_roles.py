with open('packages/site-personal/src/config.ts', 'r', encoding='utf-8') as f:
    text = f.read()

lines = text.split('\n')
new_lines = []
in_project = None

for line in lines:
    if 'id: ' in line:
        in_project = line.split('id:')[1].strip().strip(\"',\")
    
    if 'role:' in line:
        if in_project in ['algobuddy', 'pixelbuddy', 'art-portfolio']:
            new_lines.append(line)
    else:
        new_lines.append(line)

with open('packages/site-personal/src/config.ts', 'w', encoding='utf-8') as f:
    f.write('\n'.join(new_lines))

print('Fixed roles in config.ts')
