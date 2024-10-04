function updateTimezone(){
//los Angeles
let losAngelesElement = document.querySelector("#los-angeles");
if(losAngelesElement){ 
let losAngelDateElement = losAngelesElement.querySelector(".date");
let losAngelTimeElement = losAngelesElement.querySelector(".time");
let timezonela = moment().tz("America/Los_Angeles");
losAngelDateElement.innerHTML= timezonela.format("MMMM Do YYYY");
losAngelTimeElement.innerHTML =  timezonela.format("h:mm:ss [<small>]A[</small>]");
}
//douala
let doualaElement = document.querySelector("#douala");
if(doualaElement){ 
let doualaDateElement = doualaElement.querySelector(".date");
let doualaTimeElement = doualaElement.querySelector(".time");
let timezonedouala = moment().tz("America/Los_Angeles");
doualaDateElement.innerHTML= timezonedouala.format("MMMM Do YYYY");
doualaTimeElement.innerHTML =  timezonedouala.format("h:mm:ss [<small>]A[</small>]");

}
}


function updateCity(event){
    let cityzone = event.target.value;
    if(cityzone ==="current"){ 
        cityzone = moment.tz.guess();
    }
    let city = cityzone.replace("_", "").split("/")[1];
    let cityTimezone = moment().tz(cityzone);
    let citiesElement = document.querySelector("#cities");
    citiesElement.innerHTML =  ` 
    <div class="city" >
         <div>
            <h2>${city}</h2>
                <div class="date">${cityTimezone.format("MMMM Do YYYY")} </div>
                <div class="time">${cityTimezone.format("h:mm:ss")} <small>${cityTimezone.format("A")}</small></div>

         </div>
           
    </div>`;

}

updateTimezone();
setInterval(updateTimezone,1000);
let citiesElement = document.querySelector("#city-list");
citiesElement.addEventListener("change", updateCity);
