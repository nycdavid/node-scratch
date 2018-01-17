const json = require('ot-json0').type;

let doc = { items: ['a', 'b', 'c'] };
json.apply(doc, [{ p: ['items', 0], li: 'ginger' }]);
console.log(doc);
