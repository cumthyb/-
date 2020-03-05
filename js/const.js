var _const=function (data,value) {
  window.data=value
  Object.defineProperty(window,data,{
    get:function(){
      return window.data
    },
    set:function(newVal,oldVal){
      if (newVal!==oldVal) {
        throw Error('error')
      }
    }
  })
}