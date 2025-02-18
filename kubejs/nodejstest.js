
const lines = `
`;

const sorted = lines.split('\n')
    .map(s => s.trim())
    .map(s => s.endsWith(',') ? s : s + ',')
    .sort()
    .join('\n')

console.log(sorted)