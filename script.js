function register(){

    let username =
    document.getElementById("regUser").value;

    let password =
    document.getElementById("regPass").value;

    if(username==="" || password===""){
        alert("Please fill all fields");
        return;
    }

    localStorage.setItem("username", username);
    localStorage.setItem("password", password);

    alert("Registration Successful!");

    window.location.href="index.html";
}

function login(){

    let user =
    document.getElementById("loginUser").value;

    let pass =
    document.getElementById("loginPass").value;

    let storedUser =
    localStorage.getItem("username");

    let storedPass =
    localStorage.getItem("password");

    if(user===storedUser &&
       pass===storedPass){

        window.location.href="home.html";
    }
    else{

        document.getElementById("message")
        .innerHTML =
        "❌ Invalid Username or Password";

        document.getElementById("message")
        .style.color="red";
    }
}
