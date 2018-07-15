function miniMaxSum(arr) {
    
    var min=0;
    var max=0;
    
    for(var i=0;i<arr.length;i++){
           for(var j=i;j<arr.length;j++){
               if(arr[i]>arr[j]){
                   var x=arr[i];
                   arr[i]=arr[j];
                   arr[j]=x;
               }
           }
    }
    
    for(var i=1;i<arr.length;i++){
        max=max+arr[i];
    }
    for(var i=0;i<arr.length-1;i++){
        min=min+arr[i];
    }
    
    console.log (min,max);
    
}
