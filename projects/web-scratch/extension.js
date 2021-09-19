class Web {
  getInfo() {
    return {
      id: 'web',
      name: 'Web',
      blocks: [
        {
          opcode: 'ipAddress',
          blockType: Scratch.BlockType.REPORTER,
          text: 'ip address'
        },
        {
          opcode: 'fetch',
          blockType: Scratch.BlockType.REPORTER,
          text: 'fetch [ONE]',
          arguments: {
            ONE:{
              type: Scratch.ArgumentType.STRING,
              defaultValue: "url"
            }
          }
        }
      ]
    };
  }
  ipAddress() {
    return new Promise(function (resolve, reject) {
      fetch('https://www.cloudflare.com/cdn-cgi/trace')
      .then(response => response.text())
      .then(function(data) {
        data = parseData(data);
        resolve(data.ip);
      });
    });
    function parseData(data) {
      let result = {};
      for (var i = 0; i < data.split("\n").length; i++) {
        let pair = data.split("\n")[i];
        let index = pair.indexOf("=");
        let key = pair.slice(0, index);
        let value = pair.slice(index + 1, pair.length);
        result[key] = value;
      }
      delete result[""];
      return result;
    }
  }
  fetch(args) {
    return new Promise(function (resolve, reject) {
      try {
        fetch(args.ONE)
        .then(response => response.text())
        .then(function(data) {
          resolve(data);
        });
      } catch (error) {
        resolve(error.toString());
      }
    });
  }
}

Scratch.extensions.register(new Web());
