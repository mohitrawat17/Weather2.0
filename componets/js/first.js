 const submitBtn=document.getElementById('submitBtn')
const cityName=document.getElementById('city')
const output=document.getElementById('city_data')
const temp_new=document.querySelector('#temp_new')
const temp_status=document.querySelector('#temp_status')
const datahide=document.querySelector('.weather_data')

const  getInfo=async(event)=>{
    event.preventDefault();
    let cityVal=cityName.value;
if(cityVal===""){
output.innerText="Please enter a city name for the response";
datahide.classList.add('data_hide')
}
else{
    try{
    let url=`https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units&metric&appid=69b121632c2fe65c4caab10c2cb110b3`
    const response = await  fetch(url);
    const data=await response.json();
    const arrData=[data];
    output.innerText=`${arrData[0].name},${arrData[0].sys.country}`
    temp_new.innerText=((arrData[0].main.temp)-273.15).toFixed(1);


    const tempMood=arrData[0].weather[0].main
    if(tempMood=== "Clear"){
        temp_status.innerHTML="<i class='fas fa-sun' style='color:#eccc68;'></i>";
    }  else if(tempMood==="Clouds"){
        temp_status.innerHTML="<i class='fas fa-cloud' style='color:#f1f2f6;'></i>";
    }
    else if(tempMood==="Rain"){
        temp_status.innerHTML="<i class='fas fa-rain' style='color:#f1f2f6;'></i>";
    }
    else{
        temp_status.innerHTML="<i class='fas fa-sun' style='color:#eccc68;'></i>";
    }
    datahide.classList.remove('data_hide')

    }
    catch{
        output.innerText=`Please enter a valid city name`;
        datahide.classList.add('data_hide')
    }
}
}

 submitBtn.addEventListener('click', getInfo)

//  