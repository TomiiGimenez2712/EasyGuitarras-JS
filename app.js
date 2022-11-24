
//API de cotización dolar blue
let dolar= 0
fetch("https://api.bluelytics.com.ar/v2/latest",{
})
.then((response)=> response.json())
.then((data)=>{
    dolar= data.blue.value_sell;

})
let carrito= [];

let btn_compra = document.getElementsByClassName("botonCompra");

    for (let boton of btn_compra){
        boton.addEventListener("click", agregar_a_carrito);
    }

    function agregar_a_carrito(e){
        let hijo =e.target;
        let padre =hijo.parentNode;
        let abuelo =padre.parentNode;


        let nombre_producto= padre.querySelector("h3").textContent;
        let precio_producto= padre.querySelector("span").textContent;
        let img_producto= padre.querySelector("img").src;
        precio_producto=(parseInt(precio_producto)*dolar)

        
    
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
    
        recuperando_carrito =localStorage.getItem("carrito");
            
        recuperando_carrito= JSON.parse(recuperando_carrito);
    
        mostrar_carrito(recuperando_carrito);
    }
    
    //cargar carrito al recargar la pagina
    window.onload = function(){
        let recuperando_carrito = JSON.parse(localStorage.getItem("carrito"));
        if(recuperando_carrito){
            mostrar_carrito(recuperando_carrito)
        }
    }
    
    
    //mostar carrito
    function mostrar_carrito(carrito){
        let tabla = document.getElementById("tbody");
        tabla.innerHTML = ``

        carrito.forEach(item => {
            let fila = document.createElement("tr");
            fila.innerHTML = `<td><img src="${item.imagen}"></td>
            <td>${item.nombre}</td>
            <td>${item.cantidad}</td>
            <td>${item.precio}</td>
            <td><button class="btn btn-danger borrar_elemento">Borrar</td>`;
        
            tabla.append( fila );
    
            //borrar elemento
            let btn_borrar = document.querySelectorAll(".borrar_elemento");
            for( let boton of btn_borrar){
                boton.addEventListener("click" , borrar_producto);
            }
        });
    
        //vaciar carrito
        let btn_vaciar = document.querySelectorAll(".vaciar_carrito");
        
        for( let boton of btn_vaciar){
            boton.addEventListener("click" , vaciar_carrito);
        }
        
        }
    
    
    
    
    
    //borrar elemento
    function borrar_producto(e){
    
        let hijo =e.target;
        let padre= hijo.parentNode;
        let abuelo = padre.parentNode;
        abuelo.remove(e);
    }
    
    
    //Vaciar carrito
    
    let btn_vaciar = document.querySelectorAll(".vaciar_carrito");
                    
    for( let boton of btn_vaciar){
        boton.addEventListener("click" , vaciar_carrito);
    }
    function vaciar_carrito(){
        localStorage.clear();
        location.reload()
        
    }











