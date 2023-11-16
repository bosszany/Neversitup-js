const messages = [';D', ':-(', ':-)', ';~)'];

let True = 0
for(let i = 0; i <= messages.length-1; i++){
    let readysp = messages[i].split('');
    if(readysp.length == 3){
        arraynumber = 0
        if(readysp[1] != '-' && readysp[1] != '~'){
            arraynumber = arraynumber
        }
        else{
            arraynumber = arraynumber + 1
        }
        if(readysp[2] == ')' || readysp[2] == 'D'){
            arraynumber = arraynumber + 1
        }
    }
    else{
        arraynumber = 1
        if(readysp[1] == ')' || readysp[1] == 'D'){
            arraynumber = arraynumber + 1
        }
    }
    if(readysp[0] == ':' || readysp[0] == ';'){
        arraynumber = arraynumber + 1
    }
    if(arraynumber == 3){
        True = True + 1
    }
}
console.log("Return " + True)