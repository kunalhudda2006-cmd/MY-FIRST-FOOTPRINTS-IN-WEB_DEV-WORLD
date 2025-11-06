let but=document.querySelector("button");
but.addEventListener("click",async()=>{
    const apiKey = "db76ac0d5a7881b6ddc2e593bf0926a6";
    const city=document.querySelector("#city").value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    const response = await fetch(url);
    const data = await response.json();
    const iconCode = data.weather[0].icon;
    const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
    document.querySelector("#temp").textContent = `${data.main.temp}°C`;
    document.querySelector("#desc").textContent = data.weather[0].description;
    document.querySelector("#humidity").textContent = `${data.main.humidity}%`;
    document.querySelector("#img").src=iconUrl;
    document.querySelector("#img").style.display="block";
    
});