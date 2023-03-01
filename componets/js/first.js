 const submitBtn=document.getElementById('submitBtn')
const cityName=document.getElementById('city')
const output=document.getElementById('city_data')
const temp=document.querySelector('#temp')
const temp_status=document.querySelector('#temp_status')


const  getInfo=async(event)=>{
    event.preventDefault();
    let cityVal=cityName.value;
if(cityVal===""){
output.innerText="Please enter a city name for the response";
}
else{
    try{
    let url=`https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units&metric&appid=69b121632c2fe65c4caab10c2cb110b3`
    const response = await  fetch(url);
    const data=await response.json();
    console.log(data);
    const arrData=[data];

    temp.innerText=arrData[0].main.temp;
    temp_status.innerText=arrData[0].weather[0].main;
    }
    catch{
        output.innerText=`Please enter a valid city name`;
    }
}
}

 submitBtn.addEventListener('click', getInfo)

//  