const babel = require("@babel/core");
const plugin = require("../");

var example = `
var foo = 1;
if (foo) console.log(foo);
`;

describe("test", () => {
  test("works", () => {
    const { code } = babel.transform(example, { plugins: [plugin] });
    expect(code).toMatchSnapshot();
  });
});
