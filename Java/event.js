const arr = [1,2,3,4,5,8,8,8,8];

let len = arr.length-1;
const arraynumber = [0,0,0,0,0,0,0,0,0,0]
while (len+1 >= 0) {
    if (len != 0) {
    	if (arr[len] == [1]){
            arraynumber[0] = arraynumber[0]+1
        }
        else if (arr[len] == [2]){
            arraynumber[1] = arraynumber[1]+1
        }
        else if (arr[len] == [3]){
            arraynumber[2] = arraynumber[2]+1
        }
        else if (arr[len] == [4]){
            arraynumber[3] = arraynumber[3]+1
        }
        else if (arr[len] == [5]){
            arraynumber[4] = arraynumber[4]+1
        }
        else if (arr[len] == [6]){
            arraynumber[5] = arraynumber[5]+1
        }
        else if (arr[len] == [7]){
            arraynumber[6] = arraynumber[6]+1
        }
        else if (arr[len] == [8]){
            arraynumber[7] = arraynumber[7]+1
        }
        else if (arr[len] == [9]){
            arraynumber[8] = arraynumber[8]+1
        }
        else if (arr[len] == [0]){
            arraynumber[9] = arraynumber[9]+1
        }
    }
    
    else {
        console.log(arraynumber)
        for (let i = 9; i >= 0; i--){
            if( ( arraynumber[i] % 2 ) != 0 ) {
                let number = i+1
                let timesss = arraynumber[i]
                console.log("return "+ number + " appear " + timesss);
    }}}
    len--;
}