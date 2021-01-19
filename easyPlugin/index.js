module.exports = function testPlugin(babel) {
    return {
      visitor: {
        Identifier(path) {
        // 将所有的foo改成bar
          if (path.node.name === 'foo') {
            path.node.name = 'bar';
          }
        }
      }
    };
  };