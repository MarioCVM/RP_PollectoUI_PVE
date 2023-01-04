const rdAlimentacion1 = document.getElementById('tipoAlimentacion1');
const rdAlimentacion2 = document.getElementById('tipoAlimentacion2');
const rdAlimentacion3 = document.getElementById('tipoAlimentacion3');
const rdFinalizacion1 = document.getElementById('finalizacion1');
const rdFinalizacion2 = document.getElementById('finalizacion2');
const ddlLinea = document.getElementById('ddlLinea');

rdAlimentacion1.addEventListener('click', () =>{
    if(!rdAlimentacion1.classList.contains('squer-active')){
        rdAlimentacion1.classList.toggle('squer-active');

        rdAlimentacion2.classList.remove('squer-active');
        rdAlimentacion3.classList.remove('squer-active');
    }
});

rdAlimentacion2.addEventListener('click', () =>{
    if(!rdAlimentacion2.classList.contains('squer-active')){
        rdAlimentacion2.classList.toggle('squer-active');

        rdAlimentacion1.classList.remove('squer-active');
        rdAlimentacion3.classList.remove('squer-active');
    }
});

rdAlimentacion3.addEventListener('click', () =>{
    if(!rdAlimentacion3.classList.contains('squer-active')){
        rdAlimentacion3.classList.toggle('squer-active');

        rdAlimentacion1.classList.remove('squer-active');
        rdAlimentacion2.classList.remove('squer-active');
    }
});

rdFinalizacion1.addEventListener('click', () =>{
    if(!rdFinalizacion1.classList.contains('squer-active')){
        rdFinalizacion1.classList.toggle('squer-active');
        rdFinalizacion2.classList.toggle('squer-active');
    }
});

rdFinalizacion2.addEventListener('click', () =>{
    if(!rdFinalizacion2.classList.contains('squer-active')){
        rdFinalizacion1.classList.toggle('squer-active');
        rdFinalizacion2.classList.toggle('squer-active');
    }
});