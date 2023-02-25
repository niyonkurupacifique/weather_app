console.log("helooooo")
const div_space=document.getElementById("api_data_space")
const urlSearch=new URLSearchParams(window.location.search)
const city= urlSearch.get('city')
console.log(city)
const getdata=async()=>{
const result=await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=1383c1ef39cccbbc106d269850cfc481`) 
const result2=await result.json()
console.log(result2.message)
const msg=result2.message
const result3=result2.list[0]
const result4=result2.city

console.log(result4.country)

   let contents=`<div>
                 <h1>COUNTRY(abbreviation):${result4.country}</h1> 
                 <h1>CITY:${result4.name}</h1>
                 <h1>POPULATION:${result4.population}</h1>
                 <h1>LATITUDE:${result4.coord.lat}</h1>
                 <h1>LONGITUDE:${result4.coord.lon}</h1>


                 <h2>MAIN WEATHER INFORMATION</h2>
                 <h3>minimum temperature:${result3.main.temp_min}</h3>
                 <h3>maximum temperature:${result3.main.temp_max}</h3>
                 <h3>humidity:${result3.main.humidity}</h3>
                 <h3>main:${result3.weather[0].main}</h3>
                 <h3>description:${result3.weather[0].description}</h3>
                 <h3>wind speed:${result3.wind.speed}</h3>
                 

                 
                 
                 

                 </div>`

div_space.innerHTML=contents
}


window.addEventListener("DOMContentLoaded",()=>getdata())
