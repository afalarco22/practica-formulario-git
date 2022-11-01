const btnGuardar = document.querySelector('#btnGuardar');
let nuevoPaciente;
btnGuardar.addEventListener('click', (e)=> {
    e.preventDefault();

    function Paciente(nombre, correo, telefono, fecha){
        this.nombre = nombre;
        this.correo = correo;
        this.telefono = telefono;
        this.fecha = fecha;




    }

    const nombre = document.querySelector('#nombre').value;
    console.log(nombre)
    const correo = document.querySelector('#correo').value;
    console.log(correo)
    const telefono = document.querySelector('#telefono').value;
    console.log(telefono)
    const fecha = document.querySelector('#fecha').value;
    console.log(fecha)
    nuevoPaciente = new Paciente(nombre, correo, telefono, fecha);
    console.log(nuevoPaciente)
    agregarPaciente()

});


let listadoPacientes = [];
const agregarPaciente = ()=> {
    listadoPacientes.push(nuevoPaciente);
    //const nombre = document.createElement('td');
    //nombre.textContent = nuevoPaciente.nombre;
    document.getElementById('table1').innerHTML +=
    `
    <tbody> 
        <td>${nuevoPaciente.nombre} </td>
        <td>${nuevoPaciente.correo} </td>
        <td>${nuevoPaciente.telefono} </td>
        <td>${nuevoPaciente.fecha} </td>
    </tbody>
     
    `

};

console.log(listadoPacientes)