class Empleado{
    codigo= 0;
    nombre= "";
    apellido= "";
    correo= "";
    cargo= "";
    sueldoBruto=()=>{
        let cargos = {
            'jefe': 5000,
            'analista': 4000,
            'programador': 3000,
            'soporte': 2000,
            'asistente': 1500,
        }
        return cargos[this.cargo]
    }

    descuento=()=>{
        return this.sueldoBruto()*0.125;
    }

    sueldoNeto=()=>{
        return this.sueldoBruto()-this.descuento();
    }
}
  
const agregar=()=>{
    let empleado = new Empleado();
    empleado.codigo = document.getElementById("codigo").value
    empleado.nombre = document.getElementById("nombre").value
    empleado.apellido = document.getElementById("apellido").value
    empleado.correo = document.getElementById("email").value
    empleado.cargo = document.getElementById("cargo").value
    
    const mostrar = document.getElementById("mostrar");
    const nom = document.getElementById("nom");
    const ape = document.getElementById("ape");
    const cod = document.getElementById("cod");
    const cor = document.getElementById("cor");
    const car = document.getElementById("car");
    const sueldo = document.getElementById("sueldo");
    const descuento = document.getElementById("descuento");

    nom.innerHTML = "<b>Nombre:</b> " + empleado.nombre;
    ape.innerHTML = "<b>Apellido:</b> " + empleado.apellido;
    cod.innerHTML = "<b>Codigo:</b> " + empleado.codigo;
    cor.innerHTML = "<b>Correo:</b> " + empleado.correo;
    car.innerHTML = "<b>Cargo:</b> " + empleado.cargo;
    sueldo.innerHTML = "<b>Sueldo bruto:</b> " + empleado.sueldoBruto() + " soles";
    descuento.innerHTML = "<b>Tu descuento es:</b> " + empleado.descuento() + " soles";
    mostrar.innerHTML = "<b>Tu sueldo neto es:</b> " + empleado.sueldoNeto() + " soles";
}

