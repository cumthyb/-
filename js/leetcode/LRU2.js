var LRUCache = class {

  constructor(capacity) {
      this.cache = new Map();
      this.capacity = capacity;
  }

  /**
   * @param {number} key
   * @return {number}
   */
  get(key) {
      let cache = this.cache;
      if (cache.has(key)) {
          let temp = cache.get(key)
          cache.delete(key);
          cache.set(key, temp);
          return temp;
      } else {
          return -1;
      }
  };

  /**
   * @param {number} key
   * @param {number} value
   * @return {void}
   */
  put(key, value) {
      let cache = this.cache;
      if (cache.has(key)) {
          cache.delete(key);
      } else if (cache.size >= this.capacity) {
          cache.delete(cache.keys().next().value);
      }
      cache.set(key, value);
  };
};



var cache = new LRUCache(2 /* 缓存容量 */);
console.log(cache.get(2))
cache.put(2,6)
console.log(cache.get(1))
cache.put(1,5)
cache.put(1,2)
console.log(cache.get(1))
console.log(cache.get(2))