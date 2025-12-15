class BinaryTree {
  constructor(n) {
    this.nodes = [];
    for (let i = 0; i < n; i++) this.nodes[i] = {id: i + 1, parentId: -1, leftId: -1, rightId: -1}
  }

  get root() { return this.nodes.find(n => n.parentId === -1); }

  add(id, leftId, rightId) {
    let n = this.find(id);
    [n.leftId, n.rightId] = [leftId, rightId];
    if (leftId !== -1) this.find(leftId).parentId = id;
    if (rightId !== -1) this.find(rightId).parentId = id;
  }

  find(id) { return this.nodes[id - 1]; }

  getByPostorder() {
    let res = [];
    const postorder = (id) => {
      if (id === -1) return;
      let n = this.find(id);
      postorder(n.leftId);
      postorder(n.rightId);
      res.push(id);
    };
    postorder(this.root.id);
    return res;
  }
}

(function main(){
  const lines = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
  const n = Number(lines.shift());
  const preOrder = lines.shift().split(' ').map(Number);
  const inOrder = lines.shift().split(' ').map(Number);

  let tree = makeTree(preOrder, inOrder);
  console.log(tree.getByPostorder().join(' '));
})();

function makeTree(preOrder, inOrder) {
  let tree = new BinaryTree(preOrder.length);
  const f = (p, i) => {
    let rootId = p[0];
    let rootIdx = i.indexOf(rootId);
    if (rootIdx === -1) return i[0] || -1;
    tree.add(rootId, f(p.slice(1), i.slice(0, rootIdx)), f(p.slice(1), i.slice(rootIdx + 1)));
    return rootId;
  }
  f(preOrder, inOrder);
  return tree;
}

