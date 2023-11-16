const input = ['abc'];
const Already = input[0].split("");
console.log(Already.length);
console.log(myFunc(Already));

function myFunc(arr) {
    const output = [];
    let len = arr.length;
    let count = 0;
    let copy = [];
    
    while (count < len) {
        for (let x = 0; x < len; x++) {
            copy[x] = arr[x];
        }
        for(let i = 0; i < len; i++){
            let keep = copy[i]  
            copy[i] = copy[count]  
            copy[count] = keep  

            let adding = []
            let similar = 0
            for(let j = 0; j < len; j++){
                adding = adding + copy[j]
            }
            for(let k = 0; k < output.length; k++){
                if(adding == output[k]){
                    similar = 1
                }
            }
            if(similar == 0){
                output.push(adding);
            }
        }
        for(let i = 0; i < len; i++){
            for (let x = 0; x < len; x++) {
                copy[x] = arr[x];
            }
            let keep = copy[i]  
            copy[i] = copy[count]  
            copy[count] = keep  

            let adding = []
            let similar = 0
            for(let j = 0; j < len; j++){
                adding = adding + copy[j]
            }
            for(let k = 0; k < output.length; k++){
                if(adding == output[k]){
                    similar = 1
                }
            }
            if(similar == 0){
                output.push(adding);
            }
        }
        count++;
    }
  return output;
}

/*let boss = ['a', 'b', 'c']
let adding = []
let tmp = boss.splice(1, 1)
boss.unshift(tmp[0])
for(let i = 0; i <= boss.length-1; i++){
    adding = adding + boss[i]
}
console.log(adding)
console.log(boss[0]+boss[1]+boss[2])*/
//abc bac  cab bac abc acb