
var credentials1 = {
    admin: {
      username1: "admin",
      password1: "admin123"
    }
};
var credentials2 = {
    user: {
      username2: "user",
      password2: "user123"
}
};

function login(){
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    
    var accounts1 = credentials1[username];
    var accounts2 = credentials2[username];
    if(accounts1 && credentials1.admin.password1 === password){
      // console.log('hello admin');
      window.location.href = "../adminAcc/admin.html";
    } 
    else if(accounts2 && credentials2.user.password2 === password){
      // console.log('hello user');
        window.location.href = "../../Assets/userAcc/user.html";
    } 
    else{
        alert("Invalid username or password");
    }

}