var email = document.getElementById('username');
var password = document.getElementById('password');
var login_form = document.getElementById('login_form_container');
var todolister = document.getElementById('todolister_container');
var user = document.getElementById('user_id');
var todo = document.getElementById('todo');
function userlogin(){
    if(!email.value || !password.value){
        alert("please full your email or password field")
    }

    localStorage.setItem('email', email.value);
    checkuser();
}

 function checkuser(){
    var email = localStorage.getItem("email");
    if(email){
        login_form.style.display = 'none';
        todolister.style.display = 'block';
        user.innerText = email;
        console.log(email)
    }
    else{
        login_form.style.display = 'block';
        todolister.style.display = 'none';
    }
 }
 checkuser();

 function logoutuser(){
    var email = localStorage.clear("email")
    if(!email){
        login_form.style.display = 'block'
        login_form.style.display = 'none'
    }

    checkuser();
 }


 function addnotes(){
    var email = localStorage.getItem("email");

    var object = {
        email: email,
        todo: todo.value
    };
    console.log(object)
 }
