
function myFun(){
    document.querySelector("#dropdown").classList.toggle("show");
    
}

function signIn(){
    document.querySelector("#sign").classList.toggle("show");
    
 
    
}

function home(){
    window.location.href="home.html"
}

document.querySelector("#go").addEventListener("click",()=>{
    console.log("clicked")
})