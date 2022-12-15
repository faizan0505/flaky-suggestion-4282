let res = document.querySelector("#res").addEventListener("click",()=>{
    window.scrollTo({top: 1250, behavior:"smooth"})
})

let check_in = document.querySelector("#in");
let check_out = document.querySelector("#out");
let reserve = document.querySelector(".but");
let pay = document.querySelector("#pay");
let paynow = document.querySelector("#paynow");
let popup = document.querySelector("#popup")
let close = document.querySelector("#close")

reserve.addEventListener("click",()=>{
    if(check_in.value == "" || check_out.value == ""){
        alert("Please select the date for Check-In & Check-Out")
    } else{
        popup.style.display = "block";
    }
})
document.querySelector(".butt").addEventListener("click",()=>{
    if(check_in.value == "" || check_out.value == ""){
        alert("Please select the date for Check-In & Check-Out")
    } else{
        popup.style.display = "block";
    }
})
document.querySelector(".butto").addEventListener("click",()=>{
    if(check_in.value == "" || check_out.value == ""){
        alert("Please select the date for Check-In & Check-Out")
    } else{
        popup.style.display = "block";
    }
})
document.querySelector(".button").addEventListener("click",()=>{
    if(check_in.value == "" || check_out.value == ""){
        alert("Please select the date for Check-In & Check-Out")
    } else{
        popup.style.display = "block";
    }
})

close.addEventListener("click",()=>{
    popup.style.display = "none";
})

pay.addEventListener("click",()=>{
    location.href = "payment.html"
})
paynow.addEventListener("click",()=>{
    location.href = "payment.html"
})