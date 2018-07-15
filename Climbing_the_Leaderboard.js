
function climbingLeaderboard(scores, alice) {
    
    var ref=[];
    var arr=scores;
    var rank=1;
    
    for(var i=0;i<scores.length;i++){
        ref.push(0)
    }
    
    var x=arr[0];
    for(var i=0;i<scores.length;i++){
        if(arr[i]==x){
            ref[i]=rank;
        }
        else if(arr[i]<x){
            rank++;
            ref[i]=rank;
            x=arr[i];
        }
    }
    
    var new_arr=arr.reverse();
    var rank_arr=[];
    ref=ref.reverse()
    for(var i=0;i<alice.length;i++){
        for(var j=0; j<new_arr.length;j++){
            if(alice[i]<new_arr[0]){
                rank_arr.push(ref[0]+1)
                break;
            }
            else if(alice[i]===new_arr[0]){
                rank_arr.push(ref[0]);
                break;
                    }
            else if(alice[i]>=new_arr[new_arr.length-1]){
                rank_arr.push(1);
                break;
            }
            else if(alice[i]<new_arr[j]){
                rank_arr.push(ref[j]+1);
                break;
            }
            else if(alice[i]===new_arr[j]){
                rank_arr.push(ref[j]);
                break;
            }
        }
    }
        
    return (rank_arr);

}
