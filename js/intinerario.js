const objIntinerario = [
    {
        "img":"../img/sagrada-familia.png",
        "time":"16:00",
        "name":"Ceremonia"
        },
    {
        "img":"../img/cocktail.png",
        "time":"17:00",
        "name":"Cocktail"
    },
    {
        "img":"../img/comida.png",
        "time":"19:00",
        "name":"Comida"
    },
    {
        "img":"../img/baile.png",
        "time":"22:00",
        "name":"Baile"
    }
];

const intinerario = document.getElementById('intinerario');

const printIntinerario = () =>{
    let print = "";
    for (let index = 0; index < objIntinerario.length; index++) {
        if(index != 0){
        print += `<div> <section class="stick"></section>`;
        }else{
           print +=`<div>`; 
        }
        print +=`
        <p>${objIntinerario[index].name}</p>
        <img src="${objIntinerario[index].img}" style="width:80px; margin-top:5px;">
        <p>${objIntinerario[index].time}</p>
    </div>`;
        
    }
    intinerario.innerHTML = print;
}
printIntinerario();