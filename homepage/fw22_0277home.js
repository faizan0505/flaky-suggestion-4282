
function myFun(){
    document.querySelector("#dropdown").classList.toggle("show");
    
}

function signIn(){
    document.querySelector("#sign").classList.toggle("show");
    
 
    
}

function home(){
    window.location.href="home.html"
}

function tripCont(){
   
    console.log("ck")
}


document.querySelector("#stay").addEventListener("click",()=>{
    document.querySelector("#top-cont").innerHTML=`
     <div class="input_search">
    <div id="go">
     <div><img src="https://t3.ftcdn.net/jpg/00/95/07/14/240_F_95071432_1O8BWEIDGtd27ogifnx0aIiCcsDcLtUD.jpg" alt="" width="100%" height="100%"></div>
     <div><p>Going to</p></div>
    </div>
    <div class="cal">
     <div><img src="https://cdn-icons-png.flaticon.com/128/2278/2278049.png" alt="" width="50%" height="50%"></div>
     <div>
         <div><p>Check-in</p></div>
         <div><input type="date"></div>
     </div>
    </div>
    <div class="cal">
     <div><img src="https://cdn-icons-png.flaticon.com/128/2278/2278049.png" alt="" width="50%" height="50%"></div>
     <div>
         <div><p>Check-out</p></div>
         <div><input type="date"></div>
     </div>
    </div>
    <div class="travellers">
     <div><img src="https://cdn-icons-png.flaticon.com/128/3059/3059518.png" alt="" width="100%" height="100%"></div>
     <div>
         <div><p>Travellers</p></div>
         <div><p style="color: black;">1 room, 2 person</p></div>
     </div>
    </div>
    
 </div>
 <div class="checkBox">
     <div><input type="checkbox"><label for=""> Add a flight</label></div>
     <div><input type="checkbox"><label for=""> Add a car</label></div>    
 </div>

 <div class="search_button">
     
         <h3>Search</h3>
     
 </div>
`
})

document.querySelector("#flight").addEventListener("click",()=>{
    document.querySelector("#top-cont").innerHTML=`
    <div class="flight-top">
    <div onclick="tripCont()"><p>Roundtrip </p></div>
    
    <div>
        <div>1 traveller</div>
        <div>economy</div>
    </div>
</div>
<div class="fligt-search">
    <div>
        <div><img src="https://t3.ftcdn.net/jpg/00/95/07/14/240_F_95071432_1O8BWEIDGtd27ogifnx0aIiCcsDcLtUD.jpg" alt="" width="60%"></div>
        <div><p>Leaving From</p></div>
    </div>
    <div>
        <div><img src="https://t3.ftcdn.net/jpg/00/95/07/14/240_F_95071432_1O8BWEIDGtd27ogifnx0aIiCcsDcLtUD.jpg" alt="" width="60%"></div>
        <div><p>Going To</p></div>
    </div>
    <div>
        <div class="cal">
            <div><img src="https://cdn-icons-png.flaticon.com/128/2278/2278049.png" alt="" width="50%" height="50%"></div>
            <div>
                <div><p>Check-out</p></div>
                <div><input type="date"></div>
            </div>
           </div>
    </div>
    <div>
        <div class="cal">
            <div><img src="https://cdn-icons-png.flaticon.com/128/2278/2278049.png" alt="" width="50%" height="50%"></div>
            <div>
                <div><p>Check-out</p></div>
                <div><input type="date"></div>
            </div>
           </div>
    </div>
</div>
<div class="checkBox">
    <div><input type="checkbox"><label for=""> Add a Place to Stay</label></div>
    <div><input type="checkbox"><label for=""> Add a car</label></div>    
</div>

<div class="search_button">
    
        <h3>Search</h3>
    
</div>`
})


document.querySelector("#car").addEventListener("click",()=>{
    document.querySelector("#top-cont").innerHTML=`
    <div class="car-top">
    <div><p>Rental Cars </p></div>
    
</div>
<div class="car-search">
    <div>
        <div><img src="https://t3.ftcdn.net/jpg/00/95/07/14/240_F_95071432_1O8BWEIDGtd27ogifnx0aIiCcsDcLtUD.jpg" alt="" width="35%"></div>
        <div><p>Pick-Up</p></div>
    </div>
    <div>
        <div><img src="https://t3.ftcdn.net/jpg/00/95/07/14/240_F_95071432_1O8BWEIDGtd27ogifnx0aIiCcsDcLtUD.jpg" alt="" width="35%"></div>
        <div><p>Same as Pick-up</p></div>
    </div>
</div>

<div class="car-search2">
    <div> <div class="cal">
        <div><img src="https://cdn-icons-png.flaticon.com/128/2278/2278049.png" alt="" width="50%" height="50%"></div>
        <div>
            <div><p>Pick-Up date</p></div>
            <div><input type="date"></div>
        </div>
       </div></div>
    <div> <div class="cal">
        <div><img src="https://cdn-icons-png.flaticon.com/128/2278/2278049.png" alt="" width="50%" height="50%"></div>
        <div>
            <div><p>Drop-Off date</p></div>
            <div><input type="date"></div>
        </div>
       </div></div>
    <div> <div class="cal">
        <div><img src="https://cdn-icons-png.flaticon.com/128/992/992700.png" alt="" width="50%" height="50%"></div>
        <div>
            <div><p>Pick-Up time</p></div>
            <div><input type="time"></div>
        </div>
       </div></div>
    <div> <div class="cal">
        <div><img src="https://cdn-icons-png.flaticon.com/128/992/992700.png" alt="" width="50%" height="50%"></div>
        <div>
            <div><p>Drop-Off Time</p></div>
            <div><input type="time"></div>
        </div>
       </div></div>
</div>
<div class="checkBox">
    <div><input type="checkbox"><label for=""> Include AARP member rates</label></div>
     
</div>

<div class="search_button">
    
        <h3>Search</h3>
    
</div>`
})


document.querySelector("#package").addEventListener("click",()=>{
    document.querySelector("#top-cont").innerHTML=`
    <p class="package-choose">Choose two or more items and save on your trip:</p>
                
    <div class="package-top">
        <div >
            <div><p>Stay added </p></div>
            <div><p>car added </p></div>
            <div><p> added a car </p></div>
           
        </div>
        
        <div>
            <div>1 traveller</div>
            <div>economy</div>
        </div>
    </div>
    <div class="package-search">
        <div>
            <div><img src="https://t3.ftcdn.net/jpg/00/95/07/14/240_F_95071432_1O8BWEIDGtd27ogifnx0aIiCcsDcLtUD.jpg" alt="" width="60%"></div>
            <div><p>Leaving From</p></div>
        </div>
        <div>
            <div><img src="https://t3.ftcdn.net/jpg/00/95/07/14/240_F_95071432_1O8BWEIDGtd27ogifnx0aIiCcsDcLtUD.jpg" alt="" width="60%"></div>
            <div><p>Going To</p></div>
        </div>
        <div>
            <div class="cal">
                <div><img src="https://cdn-icons-png.flaticon.com/128/2278/2278049.png" alt="" width="50%" height="50%"></div>
                <div>
                    <div><p>Departing</p></div>
                    <div><input type="date"></div>
                </div>
               </div>
        </div>
        <div>
            <div class="cal">
                <div><img src="https://cdn-icons-png.flaticon.com/128/2278/2278049.png" alt="" width="50%" height="50%"></div>
                <div>
                    <div><p>Returning</p></div>
                    <div><input type="date"></div>
                </div>
               </div>
        </div>
    </div>
    <div class="checkBox">
        <div><input type="checkbox"><label for=""> I only need accommodations for part of my trip</label></div>
            
    </div>
    
    <div class="search_button">
        
            <h3>Search</h3>
        
    </div>
    `})

   
   
   
 document.querySelector("#things").addEventListener("click",()=>{
    document.querySelector("#top-cont").innerHTML=`
    <div class="ttd">
    <div id="go2">
     <div><img src="https://t3.ftcdn.net/jpg/00/95/07/14/240_F_95071432_1O8BWEIDGtd27ogifnx0aIiCcsDcLtUD.jpg" alt="" width="100%" height="100%"></div>
     <div><p>Going to</p></div>
    </div>
    <div class="cal">
     <div><img src="https://cdn-icons-png.flaticon.com/128/2278/2278049.png" alt="" width="50%" height="50%"></div>
     <div>
         <div><p>Check-in</p></div>
         <div><input type="date"></div>
     </div>
    </div>
    <div class="cal">
     <div><img src="https://cdn-icons-png.flaticon.com/128/2278/2278049.png" alt="" width="50%" height="50%"></div>
     <div>
         <div><p>Check-out</p></div>
         <div><input type="date"></div>
     </div>
    </div>
   
    
    
 </div>


 <div class="search_button">
     
         <h3>Search</h3>
     
 </div>
    
    `})


    

    let count=0;
    document.querySelector("#bottom-hotels").addEventListener("click",()=>{
        count++;
        if(count%2==0){
            document.querySelector("#bottom-hotels").innerHTML=`
            <div><h4>Hotels</h4></div>
            <div> <i class="arrow down"></i></div>
            `
        }else if(count%2==1){
            document.querySelector("#bottom-hotels").innerHTML=`
            <div>
                            
            <h4>Hotels</h4>
            <div>
                <ul>
                <li> Chicago hotels</li>
                <li>Baltimore hotels</li>
                <li>London hotels</li>
                <li>Paris hotels</li>
                <li>France hotels</li>
            </ul>
                
            </div>
           
        </div>
        <div> <i class="arrow up"></i></div>
            `
        }
    })

    let count1=0;
    document.querySelector("#bottom-Flights").addEventListener("click",()=>{
        count1++;
        if(count1%2==0){
            document.querySelector("#bottom-Flights").innerHTML=`
            <div><h4>Flights</h4></div>
            <div> <i class="arrow down"></i></div>
            `
        }else if(count1%2==1){
            document.querySelector("#bottom-Flights").innerHTML=`
            <div>
                            
            <h4>Flights</h4>
            <div>
                <ul>
                <li> Chicago hotels</li>
                <li>Baltimore hotels</li>
                <li>London hotels</li>
                <li>Paris hotels</li>
                <li>France hotels</li>
            </ul>
                
            </div>
           
        </div>
        <div> <i class="arrow up"></i></div>
            `
        }
    })
    

    let count2=0;
    document.querySelector("#bottom-vacation").addEventListener("click",()=>{
        count2++;
        if(count2%2==0){
            document.querySelector("#bottom-vacation").innerHTML=`
            <div><h4>Vacation Packages</h4></div>
            <div> <i class="arrow down"></i></div>
            `
        }else if(count2%2==1){
            document.querySelector("#bottom-vacation").innerHTML=`
            <div>
                            
            <h4>Vacation Packages</h4>
            <div>
                <ul>
                <li> Chicago hotels</li>
                <li>Baltimore hotels</li>
                <li>London hotels</li>
                <li>Paris hotels</li>
                <li>France hotels</li>
            </ul>
                
            </div>
           
        </div>
        <div> <i class="arrow up"></i></div>
            `
        }
    })
    

    let count3=0;
    document.querySelector("#bottom-cars").addEventListener("click",()=>{
        count3++;
        if(count3%2==0){
            document.querySelector("#bottom-cars").innerHTML=`
            <div><h4>Cars</h4></div>
            <div> <i class="arrow down"></i></div>
            `
        }else if(count3%2==1){
            document.querySelector("#bottom-cars").innerHTML=`
            <div>
                            
            <h4>Cars</h4>
            <div>
                <ul>
                <li> Chicago hotels</li>
                <li>Baltimore hotels</li>
                <li>London hotels</li>
                <li>Paris hotels</li>
                <li>France hotels</li>
            </ul>
                
            </div>
           
        </div>
        <div> <i class="arrow up"></i></div>
            `
        }
    })
    

    let count4=0;
    document.querySelector("#bottom-cruises").addEventListener("click",()=>{
        count4++;
        if(count4%2==0){
            document.querySelector("#bottom-cruises").innerHTML=`
            <div><h4>Cruises</h4></div>
            <div> <i class="arrow down"></i></div>
            `
        }else if(count4%2==1){
            document.querySelector("#bottom-cruises").innerHTML=`
            <div>
                            
            <h4>Cruises</h4>
            <div>
                <ul>
                <li> Chicago hotels</li>
                <li>Baltimore hotels</li>
                <li>London hotels</li>
                <li>Paris hotels</li>
                <li>France hotels</li>
            </ul>
                
            </div>
           
        </div>
        <div> <i class="arrow up"></i></div>
            `
        }
    })
    
    let count5=0;
    document.querySelector("#bottom-resorts").addEventListener("click",()=>{
        count5++;
        if(count5%2==0){
            document.querySelector("#bottom-resorts").innerHTML=`
            <div><h4>All inclusive resorts</h4></div>
            <div> <i class="arrow down"></i></div>
            `
        }else if(count5%2==1){
            document.querySelector("#bottom-resorts").innerHTML=`
            <div>
                            
            <h4>All inclusive resorts</h4>
            <div>
                <ul>
                <li> Chicago hotels</li>
                <li>Baltimore hotels</li>
                <li>London hotels</li>
                <li>Paris hotels</li>
                <li>France hotels</li>
            </ul>
                
            </div>
           
        </div>
        <div> <i class="arrow up"></i></div>
            `
        }
    })
    

    let count6=0;
    document.querySelector("#bottom-deals").addEventListener("click",()=>{
        count6++;
        if(count6%2==0){
            document.querySelector("#bottom-deals").innerHTML=`
            <div><h4>Travel deals</h4></div>
            <div> <i class="arrow down"></i></div>
            `
        }else if(count6%2==1){
            document.querySelector("#bottom-deals").innerHTML=`
            <div>
                            
            <h4>Travel deals</h4>
            <div>
                <ul>
                <li> Chicago hotels</li>
                <li>Baltimore hotels</li>
                <li>London hotels</li>
                <li>Paris hotels</li>
                <li>France hotels</li>
            </ul>
                
            </div>
           
        </div>
        <div> <i class="arrow up"></i></div>
            `
        }
    })

    window.addEventListener("load",()=>{
        
            document.querySelector(".menu>div:nth-child(1)").classList.add("underline")
            document.querySelector(".menu>div:nth-child(2)").classList.remove("underline")
            document.querySelector(".menu>div:nth-child(3)").classList.remove("underline")
            document.querySelector(".menu>div:nth-child(4)").classList.remove("underline")
            document.querySelector(".menu>div:nth-child(5)").classList.remove("underline")
            
        
    })
    


document.querySelector("#stay").addEventListener("click",()=>{
    document.querySelector(".menu>div:nth-child(1)").classList.add("underline")
    document.querySelector(".menu>div:nth-child(2)").classList.remove("underline")
    document.querySelector(".menu>div:nth-child(3)").classList.remove("underline")
    document.querySelector(".menu>div:nth-child(4)").classList.remove("underline")
    document.querySelector(".menu>div:nth-child(5)").classList.remove("underline")
    
})

document.querySelector("#flight").addEventListener("click",()=>{
    document.querySelector(".menu>div:nth-child(1)").classList.remove("underline")
    document.querySelector(".menu>div:nth-child(2)").classList.add("underline")
    document.querySelector(".menu>div:nth-child(3)").classList.remove("underline")
    document.querySelector(".menu>div:nth-child(4)").classList.remove("underline")
    document.querySelector(".menu>div:nth-child(5)").classList.remove("underline")
    
})
document.querySelector("#car").addEventListener("click",()=>{
    document.querySelector(".menu>div:nth-child(1)").classList.remove("underline")
    document.querySelector(".menu>div:nth-child(2)").classList.remove("underline")
    document.querySelector(".menu>div:nth-child(3)").classList.add("underline")
    document.querySelector(".menu>div:nth-child(4)").classList.remove("underline")
    document.querySelector(".menu>div:nth-child(5)").classList.remove("underline")
    
})
document.querySelector("#package").addEventListener("click",()=>{
    document.querySelector(".menu>div:nth-child(1)").classList.remove("underline")
    document.querySelector(".menu>div:nth-child(2)").classList.remove("underline")
    document.querySelector(".menu>div:nth-child(3)").classList.remove("underline")
    document.querySelector(".menu>div:nth-child(4)").classList.add("underline")
    document.querySelector(".menu>div:nth-child(5)").classList.remove("underline")
    
})
document.querySelector("#things").addEventListener("click",()=>{
    document.querySelector(".menu>div:nth-child(1)").classList.remove("underline")
    document.querySelector(".menu>div:nth-child(2)").classList.remove("underline")
    document.querySelector(".menu>div:nth-child(3)").classList.remove("underline")
    document.querySelector(".menu>div:nth-child(4)").classList.remove("underline")
    document.querySelector(".menu>div:nth-child(5)").classList.add("underline")
    
})