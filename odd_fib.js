function sumFibs(num) {
  
  var old=0;
  var neew=1;
  var x =0;
  var add =0;
  var arry=[1];
  var arr2=[];
  
  while (x<num){
    x=old+neew;
    arry.push(x);
    old=neew;
    neew=x;
  }
   
  arry.pop();
    
   var res = arry.reduce(function(prev, curr) {
      if (curr%2 !== 0) return prev + curr;
      else return prev;
    });

  return(res);
}
  
  
sumFibs(1000);
