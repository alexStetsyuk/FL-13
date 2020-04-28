let userLogin = prompt('Enter your login');
let userPassword='';
let currentHours = new Date().getHours();
if(userLogin===''||userLogin===null){
    alert('Canceled')
}if(userLogin.length<4){
    alert("I don't know any users having name length less than 4 symbols");
}
if(userLogin==='User'||userLogin==='Admin'){
    userPassword=prompt('Enter your password');
    if(userPassword===''||userPassword===null){
        alert('Canceled');
    } else if(userLogin==='User'&&userPassword==='UserPass'){
        if(currentHours<20){
            alert('Good day, dear User!')
        } else if(currentHours>=20){
            alert('Good evening, dear User!');
        }
    } else if(userLogin==='Admin'&&userPassword==='RootPass'){
        if(currentHours<20){
            alert('Good day, dear Admin!')
        } else if(currentHours>=20){
            alert('Good evening, dear Admin!');
        }
    } else {
        alert('Wrong password');
    }
} else {
    alert("I don't know you");
}
