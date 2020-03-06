var entry = {
  'a.b.c.dd': 'abcdd',
  'a.b.c.gg': 'abcgg',
  'a.d.xx': 'adxx',
  'a.d.yy': 'adyy',
  'a.e': 'ae'
}


var obj = {
  a: {
    b: {
      c: {
        dd: 'abcdd',
        gg: 'abcgg'
      }
    },
    d: {
      xx: 'adxx',
      yy: 'adyy'
    },
    e: 'ae'
  }
}

function map(entry) {
  const obj = Object.create(null);
  for (const key in entry) {
    const keymap = key.split('.');
    set(obj, keymap, entry[key])
  }
  return obj;
}

function set(obj, keys, val) {
  let tmp;
  if (!obj[keys[0]])
    obj[keys[0]] = Object.create(null);

  tmp = obj[keys[0]];

  for (let i = 1; i < keys.length; i++) {
    if (!tmp[keys[i]])
      tmp[keys[i]] = keys.length - 1 === i
        ? val
        : Object.create(null);
    tmp = tmp[keys[i]];
  }
}
console.log(map(entry));

