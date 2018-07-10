//JavaScript-C24.2.0 (SpiderMonkey)

function checkCashRegister(price,cash,cid){

    var values=[["PENNY", 0.01],
                ["NICKEL", 0.05],
                ["DIME", 0.1],
                ["QUARTER", 0.25],
                ["ONE", 1],
                ["FIVE", 5],
                ["TEN", 10],
                ["TWENTY", 20],
                ["ONE HUNDRED", 100]]
    
    var answer={
        status:"",
        change:[],
    };
    
   

    var arr=[];
    var num_of_notes=[];
    var x=cash-price;
    var total=0;
    var status;
    
    for(var i=0; i < values.length;i++){
        num_of_notes.push(Math.round((cid[i][1]/values[i][1])));
        arr.push(values[i][1]);
        total=total+cid[i][1];
    }    
    
 
    arr=arr.reverse();
    num_of_notes=num_of_notes.reverse();
    var cid_rev=cid.reverse();
 
    var count=0;
    var result=[];
    
    
    
    for(var i=0; i < arr.length;i++){
        var notes=num_of_notes[i];
           if(arr[i]<=x){
              while(notes>0 && arr[i]<=x){
                x=(x-arr[i]).toFixed(2);
                count=count+arr[i]
                
                notes=notes-1;
                total=total-arr[i]
              //  total=total-arr[i];
              }
               
            }
            result.push([cid_rev[i][0],Math.round(count*100)/100]);
               count=0;
       }
        


    result = result.sort(function(a, b) {
    return a[1] - b[1];});
    answer.change=result.reverse();   
 
    
    if(x> 0){
        answer.status="INSUFFICIENT_FUNDS";
        answer.change=[];
    }
    else if(total<=0 && x<= 0){
        answer.status="CLOSED";
      
    }
    else{
        answer.status="OPEN";
    }
    
    if (answer.status=="OPEN"){
         var len=answer.change.length;
        for(var i=0;i<len;i++){
            if(answer.change[i][1]==0){
                answer.change.splice(i,1);
                i=0;
                len=answer.change.length;
            }
        }
    }
   
 
    
    //print (answer[0]);
    return(answer);
};

checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])