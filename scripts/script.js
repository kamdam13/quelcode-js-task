let n = 100;
for(let i = 1;i <= n;i++){
  let s = "";
  if(i % 3 === 0){
    s += "Fizz";
  }
  if(i % 5 === 0 ){
    s += "Buzz";
  }
  if(s === "" ){
    s = i;
  }
  console.log(`${s}`);
}