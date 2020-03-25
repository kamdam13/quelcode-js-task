function hasThree(num){
  while(num > 0){
    if(num % 10 === 3){
      return true;
    }else{
      num = Math.floor(num/10);
    }
  }
  return false;
}

let n = 100;

for(let i = 1;i <= n; i++){
  if(hasThree(i) || i % 3 === 0){
    console.log(`${i}!`);
  }else{
    console.log(`${i}`);
  }
}