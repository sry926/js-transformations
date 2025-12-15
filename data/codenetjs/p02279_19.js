const input = require('fs').readFileSync('/dev/stdin', 'utf8');

const inputs = input.trim().split('\n');
const n = Number(inputs.shift());
const adj = inputs.map((s) => s.split(' ').map(Number));

class Node {
  constructor(id) {
    this.id = id;
    this.children = [];
  }
  getDepth() {
    return this.parent ? this.parent.getDepth() + 1 : 0;
  }
  add(node) {
    node.parent = this;
    this.children.push(node);
  }
  getType() {
    if (this.getDepth() === 0) {
      return 'root';
    }
    return this.children.length ? 'internal node' : 'leaf';
  }
  toString() {
    return 'node ' + this.id + ': ' + [
      'parent = ' + (this.parent ? this.parent.id : -1),
      'depth = ' + this.getDepth(),
      this.getType(),
      '[' + this.children.map(node => node.id).join(', ') + ']',
    ].join(', ');
  }
}

class Tree {
  constructor() {
    this.map = new Map();
  }
  getNode(id) {
    if (!this.map.has(id)) {
      this.map.set(id, new Node(id));
    }
    return this.map.get(id);
  }
  print() {
    for (let i = 0; i < this.map.size; i++) {
      const node = this.map.get(i);
      console.log(node.toString());
    }
  }
}

const tree = new Tree();
adj.forEach(([id, k, ...ck]) => {
  const parent = tree.getNode(id);
  ck.forEach(c => {
    const node = tree.getNode(c);
    parent.add(node);
  });
});

tree.print();

