

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
    carrito = recuperando_carrito;
    escribircarrito()
    

function escribircarrito(){
    for(let producto_guardado of carrito){
        mostrar_carrito(producto_guardado);
        function mostrar_carrito(producto_guardado){
    
            let fila = document.createElement("tr");
            fila.innerHTML = `<td><img src="${producto_guardado.imagen}"></td>
                <td>${producto_guardado.nombre}</td>
                <td>${producto_guardado.cantidad}</td>
                <td>${producto_guardado.precio}</td>
                <td><button class="btn btn-danger borrar_elemento">Borrar</td>`;
            
                console.log( fila );      
                let tabla = document.getElementById("tbody");
                tabla.append( fila );
            
                let btn_borrar = document.querySelectorAll(".borrar_elemento");
            
                for( let boton of btn_borrar){
                    boton.addEventListener("click" , borrar_producto);
                }
            }
    }
}



function borrar_producto(e){

    let hijo =e.target;
    let padre= hijo.parentNode;
    let abuelo = padre.parentNode;

    localStorage.removeItem(e)
    abuelo.remove();
    

}


}
