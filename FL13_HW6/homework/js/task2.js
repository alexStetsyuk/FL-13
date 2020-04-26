let userWord=prompt('Enter your word').trim();
let character= userWord.length/2;
if(userWord===''){
    alert('Invalid value');
}else if(userWord.length<=4 && character%2===0){
        alert(userWord.substr(character-1,2));
} else{
    alert(userWord.charAt(character));
}