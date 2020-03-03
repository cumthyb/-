function printNum(n ,m ,num) {
  if(n === 0){
      return;
  }
  if(m === 0 ){
      console.log(num)
  }

  num.push(n);
  printNum(n-1,(m-n),num);
  num.pop();
  printNum(n-1,m,num);

}

printNum(14, 15, []);

