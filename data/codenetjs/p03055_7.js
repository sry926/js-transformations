"use strict";
function I(t,i){this._s=t.split("\n"),this._c=0,this._l=0,this._f=i||Number}I.prototype.a=function(t){var i=this._s[this._l];if(i){var s=i.trim().split(" "),h=s[this._c];return this._c++,s.length===this._c&&(this._c=0,this._l++),t?t(h):this._f(h)}},I.prototype.l=function(t){var i=this._s[this._l];if(i)return this._c=0,this._l++,i.split(" ").map(t||this._f)},module.exports=I;
function Queue(e){this._queue=e?e.slice():[],this._tail=this._queue.length,this._head=0,this._maxLength=100}Queue.prototype.enqueue=function(e){this._tail+1===this._head||0===this._head&&this._tail===this._maxLength-1?console.error("===queue overflow==="):(this._queue[this._tail]=e,this._tail+=1,this._tail===this._maxLength&&(this._tail=0))},Queue.prototype.dequeue=function(){if(this._tail!==this._head){var e=this._queue[this._head];return this._head+=1,this._head===this._maxLength&&(this._head=0),e}console.error("===queue underflow===")},Queue.prototype.size=function(){var e=this._tail-this._head;return e<0&&(e+=this._maxLength),e};

function main(input) {
  var o = new I(input);

  var n = o.a();

  var adj = Array(n+1).fill().map(() => []);
  adj[0] = undefined;
  for (var i = 0; i < n - 1; i ++) {
    var a = o.a();
    var b = o.a();

    adj[a].push(b);
    adj[b].push(a);
  }

  var queue = new Queue([1]);
  var color = [];
  var dis = [];
  color[1] = "black";
  dis[1] = 0;
  while (queue.size() > 0) {
    var v = queue.dequeue();

    adj[v].forEach(u => {
      if (color[u] !== "black") {
        queue.enqueue(u);
        dis[u] = dis[v] + 1;
        color[u] = "black";
      }
    })
  }

  var max = 0;
  var maxV;
  for (var i = 1; i < dis.length ; i++) {
    if (dis[i] > max) {
      max = dis[i];
      maxV = i;
    }
  }

  var queue = new Queue([maxV]);
  var color = [];
  var dis = [];
  color[maxV] = "black";
  dis[maxV] = 0;
  while (queue.size() > 0) {
    var v = queue.dequeue();

    adj[v].forEach(u => {
      if (color[u] !== "black") {
        queue.enqueue(u);
        dis[u] = dis[v] + 1;
        color[u] = "black";
      }
    })
  }

  var diameter = 0;
  for (var i = 1; i < dis.length ; i++) {
    if (dis[i] > diameter) {
      diameter = dis[i];
    }
  }

  console.log(diameter % 3 === 1 ? "Second" : "First");
}


main(require("fs").readFileSync("/dev/stdin", "utf8"));
