function myReplace(str, before, after) {
 
  var newafter = after.split("");
  var newbefore = before.split("");

  
  newafter[0] = newafter[0].toUpperCase();
  newafter = newafter.join("");   
  var x = str.split(" ");
   
  for(var i = 0 ; i <= x.length;  i++){
    if (x[i]==before){
      if(x[i][0] === x[i][0].toUpperCase()){
        x[i]=newafter;
      }
      else{
       x[i]=after;
      }
    }
  }
  
  var fin = x.join(" ");
  return(fin);
  
}

myReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped");
