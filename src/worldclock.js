function updateTimezone(){
//los Angeles
let losAngelesElement = document.querySelector("#los-angeles");
let losAngelDateElement = losAngelesElement.querySelector(".date");
let losAngelTimeElement = losAngelesElement.querySelector(".time");
let timezonela = moment().tz("America/Los_Angeles");
losAngelDateElement.innerHTML= timezonela.format("MMMM Do YYYY");
losAngelTimeElement.innerHTML =  timezonela.format("h:mm:ss [<small>]A[</small>]");

//douala
let doualaElement = document.querySelector("#douala");
let doualaDateElement = doualaElement.querySelector(".date");
let doualaTimeElement = doualaElement.querySelector(".time");
let timezonedouala = moment().tz("America/Los_Angeles");
doualaDateElement.innerHTML= timezonedouala.format("MMMM Do YYYY");
doualaTimeElement.innerHTML =  timezonedouala.format("h:mm:ss [<small>]A[</small>]");

}
updateTimezone();
setInterval(updateTimezone,1000);