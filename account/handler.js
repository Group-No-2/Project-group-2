check()

var pw = document.getElementById('password').value;
var repw = document.getElementById('repassword').value
//store user and password when register
async function store() {
    var userData = {
        username: document.getElementById('username').value,
        password: document.getElementById('password').value,
        isLogin: false
    }

    if(pw == repw) {
        alert("Successfully registered")
        localStorage.setItem('UsersLogin', JSON.stringify(userData));
    } else {
        alert("Please re-enter correct password")
    }

}
//check user is already login
function check() {
    const loginData = JSON.parse(localStorage.getItem('UsersLogin'))
    if (loginData.isLogin === true) return window.location.replace("http://127.0.0.1:5500/index.html")
}
//login
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
