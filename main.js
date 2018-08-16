let restaurantes = [];
let s_restaurantes = [];
let selected = {};

const searchInput = document.getElementById("search");
const modal = document.getElementById("modal");
const closeModalBtn = document.getElementById("close-btn");

extractJSON("/Places.json");

searchInput.addEventListener("keyup",(e) => {
    //value = Restaurante
    let value = e.target.value;
    s_restaurantes = [];
    for(let key = 0; key<restaurantes.length; key++){
        let restaurant = restaurantes[key];
        //restaurante.food = Cafeteria
        if(restaurant.food.toUpperCase() == value.toUpperCase()){
            s_restaurantes.push(restaurant);
        }
    }
    paintResult();
});

function initListEvent(){
    const items = document.getElementsByClassName("list-item");    
    for(i=0;i<items.length;i++){
        items[i].addEventListener("click",(e) => {
            let pos = e.target.getAttribute("data-key");
            selected = s_restaurantes[pos];
            showModal();
        });
    }
}

function showModal(){    
    //Agregar datos
    document.getElementById("selected-name").innerHTML = selected.name;
    document.getElementById("selected-address").innerHTML = selected.address;
    //Mostrar
    modal.classList.add("active");
}

closeModalBtn.addEventListener("click",(e) => {
    modal.classList.remove("active");
});

function paintResult(){
    let html = "";
    if(s_restaurantes.length > 0){
        html = "<ul class='result-list'>";
        for(let key in s_restaurantes){
            let restaurant = s_restaurantes[key];
            html += "<li class='list-item' data-key='"+key+"'>";
            html += restaurant.name;
            html += "</li>";
        }
        html += "</ul>";
        const contenedor_resultado = document.getElementById("result");
        contenedor_resultado.innerHTML = html;
        initListEvent();
    }else{
        const contenedor_resultado = document.getElementById("result");
        contenedor_resultado.innerHTML = html;
    } 
}

function extractJSON(url){
     fetch(url)
     .then(res => {
         return res.json();
     })
     .then(data => {
         callback(data);
     })
     .catch(error=>{
        console.log(error);
     });
  };

function callback (data){
    restaurantes = data;
}