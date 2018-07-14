function convertToRoman (num)
{

    var roman={
        1:"I",
        4:"IV",
        5:"V",
        9:"IX",
        10:"X",
        40:"XL",
        50:"L",
        90:"XC",
        100:"C",
        400:"CD",
        500:"D",
        900:"CM",
        1000:"M",
    }

    var mul={
        1:1,
        2:10,
        3:100,
        4:1000,
    }

    var romanarr=[1,4,5,9,10,40,50,90,100,400,500,900,1000];

    var arr=[];
    var finalarr=[];
    var str=num.toString().split("");
    var largest=0;

    while(str.length>0){
        for(var i =0;i<str.length;i++){
            arr.push(str[0]*mul[str.length]);
            str.shift();
            }
        }
        i=0;
    
 
    for(var i=0;i<arr.length;i++){
        if (arr[i] in roman){
            finalarr.push(roman[arr[i]]);
        }
        else if (parseInt(arr[i])===0){
            continue;
        }
        else if(parseInt(arr[i])>1000){
            
            largest=parseInt((arr[i].toString().split("")[0]));
            for(var d =1;d<=largest;d++){
            finalarr.push("M");
            }
        }
        else{
            var x = parseInt(arr[i]);
            while(x!=0){
                for(var j=0;j<romanarr.length;j++){
                    if (x<romanarr[j]){
                        finalarr.push(roman[romanarr[j-1]]);
                        x=x-(romanarr[j-1])
                        break;
                    }
                }
            j=0;
        }
    }
}
    


return (finalarr.join(""));

}


convertToRoman(2014);
