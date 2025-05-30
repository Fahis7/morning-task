const items=[2,5,7,8,9,0,3];
let n=[0];
function large(num1) {
    for(i=0;i<=num1.length;i++){
        if (n<num1[i]) {
            n= num1[i];
        }
    }
        
        return n;
    
}
console.log(large(items));
