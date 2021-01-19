module.exports = function testPlugin(babel) {
  return {
    visitor: {
      Identifier(path) {
        // 将所有的foo改成bar
        if (path.node.name === "bar2") {
          path.node.name = "bar3";
        }
      },
      //将==变成===
      BinaryExpression(path) {
        if (path.node.operator == "==") {
          path.node.operator = "===";
        }
        // ...
      },
    },
  };
};
