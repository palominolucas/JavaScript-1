'use strict';


//Fetch (Ajax) y peticiones a servicios / APIS REST
var div_usuarios = document.querySelector("#usuarios");
var div_jannet = document.querySelector("#jannet");
var div_programador = document.querySelector("#programador");


getUsuarios()
    .then(data => data.json())
    .then(users => {
        listadoUSuarios(users.data)

        return getJannet();
    })
    .then(data => data.json())
    .then(user =>{
        mostrarJannet(user.data)
        
        return getInfo();
    })
    .then(data => {
       console.log(data);
        div_programador.innerHTML = data;
    })
    .catch(error =>{
        console.log(error);
    });


function getUsuarios(){
    return fetch("https://reqres.in/api/users")
}

function getJannet(){
    return fetch("https://reqres.in/api/users/2")
}

function getInfo(){
    var programador = {
        nombre: "Lucas",
        apellido: "Palomino",
        url: "https://www.linkedin.com/in/lucas-palomino-47217957/",
    };


    return new Promise((resolve, reject) => {
        var profesor_string = JSON.stringify(programador);

        if(typeof profesor_string != "string"){
             return reject("error");
        }else{
            setTimeout(() => {
                return resolve(profesor_string);
            }, 3000);
     
        }

        
    });
    

}

function listadoUSuarios(usuarios){
    usuarios.map((users, i) => {
        let nombre = document.createElement("h2");

        nombre.innerHTML = i + ". " + users.first_name + " " + users.last_name;

        div_usuarios.appendChild(nombre);

        document.querySelector(".loading").style.display = "none";
    });
};


function mostrarJannet(user){

    let nombre = document.createElement("h4");
    let avatar = document.createElement("img");

    nombre.innerHTML = user.first_name + " " + user.last_name;
    avatar.src = user.avatar;
    avatar.width = "100";
    

    div_jannet.appendChild(nombre);
    div_jannet.appendChild(avatar);

    document.querySelector(".loading2").style.display = "none";
  
};

