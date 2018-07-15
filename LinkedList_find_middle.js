//Linked List

class LinkedList{
    constructor(value){
        this.head=null;
        this.length=0;
        this.addToHead(value);
    }

    addToHead(value) {
        const newNode = { value };
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }
    
    removeFromHead(){
    		if(this.length==0){
       		this.head=null;
        }
        else{
          const value=this.head;
          this.head=this.head.next;
          this.length--;
          return value;
        }
    }
    
    find(value){
    		let thisNode=this.head;
          while(thisNode){
          	if(thisNode===value){
            	return thisNode;
            }
            else{
            	thisNode=thisNode.next;
            }
          }
        return thisNode;
    }
  	
    printList(){
    		var arr=[];
        let thisNode=this.head;
        //arr.push(thisNode.value)
        for(var i=0;i<this.length;i++){
        		arr.push(thisNode.value);
            thisNode=thisNode.next;
            }
        return arr;
    }
    
    findMiddle(){
    		let thisNode=this.head;
        if((this.length-1)%2==1){
        	var	index=Math.ceil(((this.length-1)/2)-1);
          console.log(index);
    		}
        else{
        	index=((this.length-1)/2);
        }
        for(var i=0;i<index;i++){
        	console.log(thisNode);
        	thisNode=thisNode.next;
        }
        return thisNode;
    }  
}
     
       let x= new LinkedList();
       x.addToHead(3);
       x.addToHead(4);
       x.addToHead(2);
       x.addToHead(6);
       x.addToHead(9);
       x.addToHead(12);
       x.addToHead(15);
             
       document.write(x.findMiddle().value);     
       document.write("The list is:");
       document.write(x.printList());
