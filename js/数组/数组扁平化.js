
// 多维数组扁平化。原数组[[0],[2,3,4],1,[1,[2,3]]]，输出[0,2,3,4,1,1,2,3]


let arr = [[0], [2, 3, 4], 1, [1, [2, 3,[8,[10],11]]]]

// let res1=arr.join().split(',')
// console.log(res1);


// let res2=arr.flat(3)
// console.log(res2);



const flat = (arr) => arr.reduce((acc, item) => acc.concat(Array.isArray(item) ? flat(item) : item), [])


console.log(flat(arr)); 