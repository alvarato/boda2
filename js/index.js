/*
const object = {
    "id":"1",
    "name":"Alvaro Bernabey Izquierdo",
    "person":0,
    "quantity":5,
    "done":false,
    "guests":[
        ]
}
*/

const object = {
    "id":"1",
    "name":"Alvaro Bernabey Izquierdo",
    "person":0,
    "quantity":5,
    "done":true,
    "guests":[
       { "allergens":['leche'],
        "name":"Alvaro Bernabey Izquierdo",},
        {"allergens":[],"name":"Maria"}
        ]
}




/*consts*/
const selectQuantity = document.getElementById('quantity');
const formGuests = document.getElementById('guests');
const popUPAllergens = document.getElementById('popUPAllergens');
const form = document.getElementById('form');


const allergensData = [
    {
        "name": "leche",
        "img": "../alergenos/leche.png"
    },
    {
        "name": "glutten",
        "img": "../alergenos/glutten.png"
    },
    {
        "name": "frutosSeco",
        "img": "../alergenos/frutosSeco.png"
    },
    {
        "name": "mostaza",
        "img": "../alergenos/mostaza.png"
    },
    {
        "name": "apio",
        "img": "../alergenos/apio.png"
    },
    {
        "name": "altramuz",
        "img": "../alergenos/altramuz.png"
    },
    {
        "name": "cacahuetes",
        "img": "../alergenos/cacahuetes.png"
    },
    {
        "name": "crustaceos",
        "img": "../alergenos/crustaceos.png"
    },
    {
        "name": "huevo",
        "img": "../alergenos/huevo.png"
    },
    {
        "name": "pescado",
        "img": "../alergenos/pescado.png"
    },
    {
        "name": "moluscos",
        "img": "../alergenos/moluscos.png"
    },
    {
        "name": "sésamo",
        "img": "../alergenos/sesamo.png"
    },
    {
        "name": "soja",
        "img": "../alergenos/soja.png"
    },
    {
        "name": "vegano",
        "img": "../alergenos/vegan.png"
    }
];


const createAllergensPopUp = () =>{
    let options = `<form id="formAllergens">`;

    allergensData.forEach(element => {
        options +=`<label class="d-flex border">
            <img src="${element.img}" style="width: 30px; border:solid; border-radius: 100%;">
            ${element.name}
             <input type="checkbox" name="alergenos" value="${element.name}" class="allergensSelector">
        </label>`;
    });

    options +="<button onclick='closePopUp()'>Cerrar</button>";
    options +="</form>";
    popUPAllergens.innerHTML = options;

    const listAllernger = document.querySelectorAll('.allergensSelector');
    const guest = document.getElementById('allergensGuestNum').value;
    if(guest >=0){
        console.log(object.guests[guest].allergens);
        for (let index = 0; index < object.guests[guest].allergens.length; index++) {
        listAllernger.forEach(e =>{
           if(e.defaultValue == object.guests[guest].allergens[index]){
            e.checked = true;
           }
        });
        }
    }

    

}

const closePopUp = () =>{
    event.preventDefault();
    popUPAllergens.classList.add('hide');
    const listAllernger = document.querySelectorAll('.allergensSelector');
    let list = [];
    listAllernger.forEach(e =>{
        if(e.checked){
            list.push(e.value);
        }
    });
    const guest = document.getElementById('allergensGuestNum').value;
    object.guests[guest].allergens = list;
    listAllernger.forEach(e =>e.checked = false);
}

const addQuantity = () =>{
    const elementoOpcion = document.createElement('option');
        elementoOpcion.value = 0;
        elementoOpcion.textContent = "Selecione la Cantidad";
        selectQuantity.appendChild(elementoOpcion);
    for (let index = 0; index < object.quantity; index++) {
        const elementoOpcion = document.createElement('option');
        elementoOpcion.value = index+1;
        elementoOpcion.textContent = index+1;
        selectQuantity.appendChild(elementoOpcion);
    }
    
}

const allAllergens = (num) =>{
    event.preventDefault();
    popUPAllergens.classList.remove('hide');
    document.getElementById('allergensGuestNum').value = num;
    createAllergensPopUp();
}

const editQuantityGuests = (quantity) =>{
    object.guests = [];
    formGuests.innerHTML ="<div class='col'>";
    for (let index = 0; index < quantity; index++) {
        const newGuest = `<div class="row">
        <input placeholder="Nombre Completo" name="name${index}" id="name${index}" type="text" class="wd-80">
        <br>
        <br>
        <button onclick="allAllergens(${index})" class="wd-60">Selecionar Alergenos</button>
    </div><br>`;
    formGuests.innerHTML += newGuest;
    object.guests.push({"name:": "","allergens":[]});
    }
    formGuests.innerHTML += `</div><button onclick="save()">save</button>`;
    if(quantity > 0){
        document.getElementById('name0').value = object.name;
    }
}

const save = () =>{
    for (let index = 0; index < object.guests.length; index++) {
        object.guests[index].name = document.getElementById('name'+index).value;
        console.log(object.guests[index].name);
    }
    
    console.log(object);
}


const qrGenerator = (qrList) =>{
    for (let index = 0; index < qrList.length; index++) {
        const url = "hola/"+object.id+"/"+index;
        new QRCode(document.getElementById('qrCodeId'+index),url);
    }
   
}
/*ejecuciones*/
window.load
document.addEventListener('DOMContentLoaded', function() {
    if(!object.done){
        form.innerHTML =`
        <p>Informacion de los Invitados</p>
        <select id="quantity" onchange="editQuantityGuests(this.value)">
        </select>
        <div id="guests">
        </div>`;
        addQuantity();
        createAllergensPopUp();
    }else{
        form.innerHTML =`<div id="qrcode"></div>`;
        sliderGenerator(object.guests);
    }
  });

  const sliderGenerator = (qrList) =>{
    let print = `<div id="slider">`;
    for (let index = 0; index < qrList.length; index++) {
        if(index == 0){
            print+=` <input type="radio" name="slider" id="slide1" checked>`;
        }else{
            print+=`<input type="radio" name="slider" id="slide${index+1}">`;  
        }
       
    }
        print+=`<div id="slides">
                <div id="overflow">
                <div class="inner">
        `;
    for (let index = 0; index < qrList.length; index++) {
        print+=`
                <div class="slide slide_${index+1}">
                    <div class="slide-content">
                        <p>${qrList[index].name}</p>
                        <div id="qrCodeId${index}"></div>
                        <p>Esta es tu entrada, no la compartas</p>
                    </div>
                </div>`;  
    }
    print+=`</div></div></div><div id="controls">`;
    for (let index = 0; index < qrList.length; index++) {
        print+=`<label for='slide${index+1}'></label>`;  
    }
    print+=`</div><div id="bullets">`;
    for (let index = 0; index < qrList.length; index++) {
        print+=`<label for="slide${index+1}"></label>`;  
    }
    print+=`</div></div>`;
   document.getElementById('qrcode').innerHTML= print;
   qrGenerator(qrList);
  }