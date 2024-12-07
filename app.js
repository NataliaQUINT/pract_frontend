//const carrito = JSON.parse(localStorage.getItem('carrito'));
const carrito = []
carrito.push();


const producto = {
    'id': 3,
    'nombre_producto': 'Churrasco',
    'precio': 3000
};

//carrito.push(producto);

// creamos una lista de objetos
// a esa lista la guardamos en local storage en formato string con JSON.stringify 
// traemos de vuelta la lisa y la pasamos a su estado original con JSON.parse
// agregamos mas productos a la lista
// ACTUALIZAMOs el carrito en local storage con la lista actualizada



document.querySelector('ul');
carrito.forEach(producto => {
    let list_item = document.createElement('li');
    list_item.innerHTML = producto.nombre_producto;
    console.log(list_item);
    lista.appendChild(list_item);

});


const lista = 
localStorage.setItem('carrito', JSON.stringify(carrito));



// html que tenga un imput para crear tareas, adicionalmenmte tiene un boton para guardarlas
// al apretar boton con js obtenemos valor del input (lo que puso el usuario)
// esa tarea que creo quedara guardada en una lista que almacena en localstorage
//la lista se muestra debajo del input y se actualiza cada vez que el usuario guarda una nueva tarea
//
//1. crear una lista de tareas y guardarlas en local storage
//2. obtener el valor del input al momento de paretar el boton guardar
//3. traer de vuelta la lista 
//4. añadir la tarea a la lista
//5. guardar nuevamente la lista en local storage y limpiar el input
//6.actualizar la lista de tareas que ve el usuario

const tarea = document.querySelector('#task');
const boton = document.querySelector('#save_task');

function listar_tareas(){
    const tareas = JSON.parse(localStorage.getItem('tareas'))
    const task_list = document.querySelector('#task_list')
    task_list.innerHTML = ''

    tareas.forEach(tarea => {
        let li = document.createElement('li')
        li.innerHTML = tarea.innerHTML
        li.setAttribute('class', 'list-group-item')//clase boostrap
        task_list.appendChild(li)
    });

}

listar_tareas()
boton.addEventListener('Click',()=>{
    let nueva_tarea = tarea.value 
    const tareas = JSON.parse(localStorage.getItem('tareas'))
    tareas.push(nueva_tarea)
    localStorage.setItem('tareas', JSON.stringify(tareas))
    tarea.value = ''
    listar_tareas()
})

//boton.addEventListener('click',()=>{
//    window.alert(tarea.value)
//
