const babel = require("@babel/core");
const plugin = require("./");
const plugin2 = require("./index2");

var example = `
var foo = 1;
if (foo) console.log(foo);
if(1 == 2){
    
}
var bar2 = 2;
`;
const { code } = babel.transform(example, { plugins: [plugin,plugin2] });

console.log(code);
