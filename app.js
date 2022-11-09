

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

    console.log(hijo);
    console.log(padre);

    let nombre_producto= padre.querySelector("h3").textContent;
    let precio_producto= padre.querySelector("span").textContent;
    let img_producto= padre.querySelector("img").src;

    console.log(nombre_producto);
    console.log(precio_producto);
    console.log(img_producto);
    

    let producto ={

        nombre: nombre_producto,
        precio: precio_producto,
        imagen: img_producto,
        cantidad:1
    }

    carrito.push(producto);
    mostrar_carrito(producto);
}

function mostrar_carrito( producto ){

    let fila = document.createElement("tr");
    fila.innerHTML = `<td><img src="${producto.imagen}"></td>
        <td>${producto.nombre}</td>
        <td>${producto.cantidad}</td>
        <td>${producto.precio}</td>
        <td><button class="btn btn-danger borrar_elemento">Borrar</td>`;
    
        console.log( fila );      
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
