//Consumir un servicoo de forma asincróbica


//Ajax


//1. Definir la url del servicio

let url='GET https://api.spotify.com/v1/artists';

//definir un objeto tipo ajax
let objetoAjax = new XMLHttpRequest();

//abrir la conexion

//variable para almacenar el token
let token='Bearer BQAwL1uGSB4H6FoPinrD1MSGk8eQk38bNF3oi-Bvl7VjxRv-edqleIZsiziIbcjMnX5n4ZdRr9gureXqd1EMyu1lnA_eQ08jyPqowelrDZKgFpdOmJVVAUr-zbgRNVehBaHdyILla9_N6LB8SQ';

//open de la conexion
objetoAjax.open('GET', url, true);

//crear un header en la peticion
objetoAjax.setRequestHeader('Authorization', token);

//cargar datos
objetoAjax.onload=function() {
    
}