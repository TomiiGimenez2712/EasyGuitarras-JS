

let carrito= [];
let btn_compra = document.getElementsByClassName("botonCompra");

for (let boton of btn_compra){

    boton.addEventListener("click", agregar_a_carrito);

}

function agregar_a_carrito(e){
//para saber que boton se cliqueo

    let hijo =e.target;
    let padre =hijo.parentNode;
    let abuelo =padre.parentNode;


    let nombre_producto= padre.querySelector("h3").textContent;
    let precio_producto= padre.querySelector("span").textContent;
    let img_producto= padre.querySelector("img").src;

    

    let producto ={

        nombre: nombre_producto,
        precio: precio_producto,
        imagen: img_producto,
        cantidad:1
    }


    carrito.push(producto);




    //LOCAL STORAGE

    let carrito_JSON= JSON.stringify(carrito)
    localStorage.setItem("carrito", carrito_JSON);
    console.log(carrito_JSON) //borrar


    let recuperando_carrito =localStorage.getItem("carrito");
    recuperando_carrito= JSON.parse(recuperando_carrito);
    
    console.log(recuperando_carrito);
    console.log(recuperando_carrito.precio);
    let carroPrecio = recuperando_carrito[0].precio
    console.log(carroPrecio)



    mostrar_carrito(recuperando_carrito);



}

function mostrar_carrito(producto){

    let fila = document.createElement("tr");
    fila.innerHTML = `<td><img src="${producto.imagen}"></td>
        <td>${recuperando_carrito[0].nombre}</td>
        <td>${recuperando_carrito[0].cantidad}</td>
        <td>${recuperando_carrito[0].precio}</td>
        <td><button class="btn btn-danger borrar_elemento">Borrar</td>`;

        let tabla = document.getElementById("tbody");
        tabla.append( fila );
    
        let btn_borrar = document.querySelectorAll(".borrar_elemento");
    
        for( let boton of btn_borrar){
    
            boton.addEventListener("click" , borrar_producto);
        }
    
    }

function borrar_producto(e){

    let hijo =e.target;
    let padre= hijo.parentNode;
    let abuelo = padre.parentNode;

    abuelo.remove();

}


let btn_carrito = document.getElementById("mostrar_carrito");

btn_carrito.addEventListener("click", function(){



    if(ocultarcarrito.style.display != "none"){

        ocultarcarrito.style.display = "none";
    }
    else{
        ocultarcarrito.style.display = "flex";
    }

} )
