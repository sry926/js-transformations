class _Node {
  constructor(key, parent = null, left = null, right = null) {
    this.key = key;
    this.parent = parent;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  static get Node() { return _Node; }

  insert(key) {
    this.root = new BinaryTree.Node(key, null, null, null);

    this.insert = (key) => {
      let x = this.root, y;
      let newNode = new BinaryTree.Node(key, null, null, null);
      while (x != null) {
        y = x;
        x = x[key < x.key ? 'left' : 'right'];
      }
      newNode.parent = y;
      y[key < y.key ? 'left' : 'right'] = newNode;
    }
  }

  printByIneorder() {
    let str = '';
    let innerFunc = (n) => {
      if (n === null) return;
      innerFunc(n.left);
      str += ` ${n.key}`;
      innerFunc(n.right);
    }
    innerFunc(this.root)
    console.log(str);
  }

  printByPreorder(n = this.root) {
    let str = '';
    let innerFunc = (n) => {
      if (n === null) return;
      str += ` ${n.key}`;
      innerFunc(n.left);
      innerFunc(n.right);
    }
    innerFunc(this.root)
    console.log(str);
  }

  print() {
    this.printByIneorder();
    this.printByPreorder();
  }
}

(function main(){
  const lines = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
  const n = Number(lines.shift());

  const tree = new BinaryTree();
  const commands = lines.map((line) => line.split(' '));
  commands.forEach(function(cmd) {
    switch(cmd[0].charAt(0)) {
    case 'i': tree.insert(Number(cmd[1])); break;
    default: tree.print();
    }
  });

})();

