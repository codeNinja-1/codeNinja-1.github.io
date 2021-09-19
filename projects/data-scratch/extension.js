class Data {
  getInfo() {
    return {
      id: 'data',
      name: 'Data+',
      blocks: [
        {
          opcode: 'itemOf',
          blockType: Scratch.BlockType.REPORTER,
          text: 'item [ONE] of [TWO]',
          arguments: {
            ONE:{
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: "1"
            },
            TWO:{
              type: Scratch.ArgumentType.STRING,
              defaultValue: "[\"apple\", \"banana\", \"carrot\"]"
            }
          }
        },
        {
          opcode: 'value',
          blockType: Scratch.BlockType.REPORTER,
          text: 'value of [ONE]',
          arguments: {
            ONE:{
              type: Scratch.ArgumentType.STRING,
              defaultValue: "\"banana\""
            }
          }
        },
        {
          opcode: 'jsonNumber',
          blockType: Scratch.BlockType.REPORTER,
          text: 'number [ONE]',
          arguments: {
            ONE:{
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 0
            }
          }
        },
        {
          opcode: 'jsonBoolean',
          blockType: Scratch.BlockType.REPORTER,
          text: 'boolean [ONE]',
          arguments: {
            ONE:{
              type: Scratch.ArgumentType.BOOLEAN,
              defaultValue: true
            }
          }
        },
        {
          opcode: 'jsonString',
          blockType: Scratch.BlockType.REPORTER,
          text: 'string [ONE]',
          arguments: {
            ONE:{
              type: Scratch.ArgumentType.STRING,
              defaultValue: "banana"
            }
          }
        }
      ]
    };
  }
  itemOf(args) {
    return JSON.stringify(JSON.parse(args.TWO)[args.ONE]);
  }
  number(args) {
    return JSON.stringify(args.ONE);
  }
  boolean(args) {
    return JSON.stringify(args.ONE);
  }
  string(args) {
    return JSON.stringify(args.ONE);
  }
  value(args) {
    var json = JSON.parse(args.ONE);
    if (json instanceof Object) return args.ONE;
    else return json;
  }
}

Scratch.extensions.register(new Data());
