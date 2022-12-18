let res = document.querySelector("#res").addEventListener("click", () => {
    window.scrollTo({ top: 1250, behavior: "smooth" })
})

let check_in = document.querySelector("#in");
let check_out = document.querySelector("#out");
let reserve = document.querySelector(".bu");
let pay = document.querySelector("#pay");
let paynow = document.querySelector("#paynow");
let popup = document.querySelector("#popup")
let close = document.querySelector("#close")


// document.querySelector("#in_date").innerText = "Check In : "+ check_in.value
// document.querySelector("#out_date").innerText = "Check Out : "+ check_out.value

reserve.addEventListener("click", () => {
    if (check_in.value == "" || check_out.value == "") {
        alert("Please select the date for Check-In & Check-Out")
    } else {
        loader = document.querySelector("#loading")
        loader.style.display = "block"
        setTimeout(() => {
            loader.style.display = "none"
            popup.style.display = "block";
        }, 1000)
    }
})
document.querySelector(".butts").addEventListener("click", () => {
    if (check_in.value == "" || check_out.value == "") {
        alert("Please select the date for Check-In & Check-Out")
    } else {
        loader = document.querySelector("#loading")
        loader.style.display = "block"
        setTimeout(() => {
            loader.style.display = "none"
            popup.style.display = "block";
        }, 1000)
    }
})
document.querySelector(".butto").addEventListener("click", () => {
    if (check_in.value == "" || check_out.value == "") {
        alert("Please select the date for Check-In & Check-Out")
    } else {
        loader = document.querySelector("#loading")
        loader.style.display = "block"
        setTimeout(() => {
            loader.style.display = "none"
            popup.style.display = "block";
        }, 1000)
    }
})
document.querySelector(".buttons").addEventListener("click", () => {
    if (check_in.value == "" || check_out.value == "") {
        alert("Please select the date for Check-In & Check-Out")
    } else {
        loader = document.querySelector("#loading")
        loader.style.display = "block"
        setTimeout(() => {
            loader.style.display = "none"
            popup.style.display = "block";
        }, 1000)
    }
})

close.addEventListener("click", () => {
    popup.style.display = "none";
})

pay.addEventListener("click", () => {
    location.href = "payment.html"
})

let overview_page = document.querySelector("#upmain");
let room_page = document.querySelector("#roomins");
let location_page = document.querySelector("#location");
let policy_page = document.querySelector("#policy");

let Overview_btn = document.querySelector("#Overview_btn");
let rooms_btn = document.querySelector("#rooms_btn");
let location_btn = document.querySelector("#location_btn");
let policy_btn = document.querySelector("#policy_btn");

Overview_btn.addEventListener("click", () => {
    // Overview_btn.style.color = "rgba(0, 0, 255, 0.884)";
    // rooms_btn.style.color = "rgb(60, 68, 75)"
    // location_btn.style.color = "rgb(60, 68, 75)"
    // policy_btn.style.color = "rgb(60, 68, 75)"

    // Overview_btn.style.border-bottom = "2px solid rgba(0, 0, 255, 0.884)";

    // overview_page.style.display = "block";
    room_page.style.display = "none";
    location_page.style.display = "none";
    policy_page.style.display = "none";
})

rooms_btn.addEventListener("click", () => {

    room_page.style.display = "block";
    // overview_page.style.display = "none";
    location_page.style.display = "none";
    policy_page.style.display = "none";
})

location_btn.addEventListener("click", () => {

    room_page.style.display = "none";
    // overview_page.style.display = "none";
    location_page.style.display = "block";
    policy_page.style.display = "none";
})

policy_btn.addEventListener("click", () => {

    room_page.style.display = "none";
    // overview_page.style.display = "none";
    location_page.style.display = "none";
    policy_page.style.display = "block";
})


let hoteldata = JSON.parse(localStorage.getItem("keyhotel"));

console.log(hoteldata)

let topimg = document.querySelector("#topimg");
topimg.innerHTML = `<img src="${hoteldata[0].image}" alt="">`
document.querySelector("#headd").innerText = hoteldata[0].name;
document.querySelector("#discrip").innerText = `${hoteldata[0].description.substring(0,100)+"..."}`;
document.querySelector(".paisa1").innerText = "$ "+ hoteldata[0].price
document.querySelector(".paisa2").innerText = "$ "+ hoteldata[0].price
document.querySelector(".paisa3").innerText = "$ "+ hoteldata[0].price
document.querySelector(".paisa4").innerText = "$ "+ hoteldata[0].price
document.querySelector(".paisa5").innerText = "$ "+ hoteldata[0].price
document.querySelector("#tota").innerText = "$ "+ (hoteldata[0].price+Number(80))+" total (including all taxes)"
let totalamt = (hoteldata[0].price+Number(80));

localStorage.setItem("payment",JSON.stringify(totalamt))