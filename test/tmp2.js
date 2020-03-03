// 5. 改正代码，输出0123401234

function a () {
  for (let i = 0; i < 5; i++) {
      this.i = i
      setTimeout(function () {
          console.log(i)
      }, 0)
      console.log(this.i)
  }
}

a()