const json = require('ot-json0').type;

let doc = { items: ['a', 'b', 'c'] };
json.apply(doc, [{ p: ['items', 0], li: 'ginger' }]);
// 1. Use json.apply to apply transformations to data
// 2. Pass it an array of transformation
// 3. Each transformation has 2 attributes: p, and some transformation op

let stringDoc = { blogPost: 'This is the first sentence of my blog post.' }
json.apply(stringDoc, [{ p: ['blogPost', 5], si: 'hijacked!' }]);

console.log(stringDoc);
