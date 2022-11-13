$(document).ready(function(){
    $('#eye').click(function(){
        $(this).toggleClass('open');
        $(this).children('i').toggleClass('fa-eye-slash fa-eye');
        if($(this).hasClass('open')){
            $(this).prev().attr('type', 'text');
        }else{
            $(this).prev().attr('type', 'password');
        }
    });
});

check()

var pw = document.getElementById('password').value;
var repw = document.getElementById('repassword').value

function store() {
    var userData = {
        username: document.getElementById('username').value,
        password: document.getElementById('password').value,
        isLogin: false
    }

    if(pw == repw) {
        window.location.replace("http://127.0.0.1:5500/account/login.html")
        alert("Successfully registered")
        localStorage.setItem('UsersLogin', JSON.stringify(userData));
    } else {
        alert("Please re-enter correct password")
        console.log(pw)
        console.log(repw)
    }

}
function check() {
    const loginData = JSON.parse(localStorage.getItem('UsersLogin'))
    if (loginData.isLogin === true) return window.location.replace("http://127.0.0.1:5500/index.html")
}

function login() {
    var loginUser = document.getElementById('username').value
    var loginPw = document.getElementById('password').value
    if(localStorage.getItem('UsersLogin')) {
        const loginData = JSON.parse(localStorage.getItem('UsersLogin'))
        if (loginData.isLogin === true) return alert("")
        if(loginUser == loginData.username && loginPw == loginData.password) {
            alert("Successfully logined")
            window.location.replace("http://127.0.0.1:5500/index.html")
            loginData.isLogin = true
            localStorage.setItem("UsersLogin", JSON.stringify(loginData));
        } else {
            alert("failed")
        }   
    }
}
