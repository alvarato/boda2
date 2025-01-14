const boda = {
    "boda1":"Sofia Pons",
    "boda2":"Juan Manuel Fernandez",
    "day":"Sábado",
    "date":"27 de Septiembre de 2025",
    "text":["Tenemos algo que celebrar",
        "por eso tenemos el inmenso honor de invitarte a que nos acompañes en el día más especial de nuestras vidas."
    ],
    "info":{
        "salon":{
            "link":"https://maps.app.goo.gl/GZjo3qMk5162ZFrn8",
            "time":"16:00",
            "name":"Hotel W Beach"
            },
        "iglesia":{
            "link":"https://maps.app.goo.gl/ZD67mwUVhi3bfabe9",
            "time":"17:00",
            "name":"Iglesia Sagrada Familia"
            }
    }
    
}
const boda1 = document.getElementById('boda1');
const boda2 = document.getElementById('boda2');
const day = document.getElementById('day');
const date = document.getElementById('date');
const bodaText = document.getElementById('bodaText');
const princpalDay = document.getElementById('principalDay');
const principalDate = document.getElementById('principalDate');
const salon = document.getElementById('salon');
const iglesia = document.getElementById('iglesia');
const bodaInfo = document.getElementById('bodaInfo');

boda1.innerHTML = boda.boda1;
boda2.innerHTML = boda.boda2+"<br><br>";
day.innerHTML = boda.day;
date.innerHTML = boda.date;
//princpalDay.innerHTML = boda.day;
principalDate.innerHTML = boda.date;

let text = "";
boda.text.forEach((e) => {
    text += `${e}<br><br>`;
});
const loadBodaInfo = () =>{
    text = ` <h2>${boda.info.iglesia.name}</h2><h2>${boda.info.iglesia.time}</h2>
        <a href="${boda.info.iglesia.link}" target="_blank"><h2>Ver ubicación</h2></a>
        <h2>${boda.info.salon.name}</h2><h2>${boda.info.salon.time}</h2>
        <a href="${boda.info.salon.link}" target="_blank"><h2>Ver ubicación</h2></a>
    `;
    bodaInfo.innerHTML = text;
    text ="";
}

bodaText.innerHTML =text;
loadBodaInfo();