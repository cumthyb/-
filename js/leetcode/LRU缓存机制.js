


/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.cache = new Set()
  this.entrys = new Array()
  this.capacity = capacity
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  if (this.cache.has(key)) {
    var idx = this.entrys.findIndex(item => item.key === key)
    [this.entrys[0], this.entrys[idx]] = [this.entrys[idx], this.entrys[0]]
    return this.entrys[0].value
  } else {
    return -1
  }
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  if (this.cache.has(key)) {
    var idx = this.entrys.findIndex(item => item.key === key)
    [this.entrys[0], this.entrys[idx]] = [this.entrys[idx], this.entrys[0]]
    this.cache.add(key)
  }

  if (this.entrys.length === this.capacity) {
    let { key } = this.entrys.pop()
    this.cache.delete(key)
  }


  this.entrys.unshift({ key, value })
  this.cache.add(key)
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */


var cache = new LRUCache(2 /* 缓存容量 */);

// cache.put(1, 1);
// cache.put(2, 2);
// console.log(cache.get(1)) ;       // 返回  1
// cache.put(3, 3);    // 该操作会使得密钥 2 作废
// console.log(cache.get(2));       // 返回 -1 (未找到)
// cache.put(4, 4);    // 该操作会使得密钥 1 作废
// console.log(cache.get(1));       // 返回 -1 (未找到)
// console.log(cache.get(3));       // 返回  3
// console.log(cache.get(4));       // 返回  4


// ["LRUCache","get","put","get","put","put","get","get"]
// [[2],[2],[2,6],[1],[1,5],[1,2],[1],[2]]

console.log(cache.get(2))
cache.put(2, 6)
console.log(cache.get(1))
cache.put(1, 5)
cache.put(1, 2)
console.log(cache.get(1))
console.log(cache.get(2))

