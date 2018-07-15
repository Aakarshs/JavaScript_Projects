function staircase(n) {

    var space=n-2;
    var hash=1;
    
    for(var i =1;i<=n;i++){
        //space
         for(var j=0;j<=space;j++){
            process.stdout.write(" ");
        }
        space--;

        //hash
        for(var k=1;k<=hash;k++){
            process.stdout.write("#");
        }
        hash++;
        
        if(hash==n+1){
            break;
        }
        
        process.stdout.write("\n")   
    }        
}

/*
     #
    ##
   ###
  ####
 #####
######

*/
