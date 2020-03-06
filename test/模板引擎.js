let template = '我是{{name}}，年龄{{age}}，性别{{sex}}';
let data = {
  name: '姓名',
  age: 18
}
render(template, data); // 我是姓名，年龄18，性别undefined



function render(template, data) {
  let reg = /\{\{(?<key>\w+)\}\}/g
  template = template.replace(reg, function (m, g1) {
    return data[g1]
  })
  return template
}