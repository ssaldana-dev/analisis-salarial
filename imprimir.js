const salarysContainer = document.querySelector('#salarys-box');
const botonEmpresa = document.querySelector('#enterprices-button');
const botonPersonas = document.querySelector('#persons-button');
const nombreProyeccionEmpresa = document.querySelector('#enterprise-projection-name');
const botonProyeccionEmpresa = document.querySelector('#enterprise-projection-button');
const resultadoProyeccionEmpresa = document.querySelector('#enterprise-projection-result')
const nombrePromedioEmpresa = document.querySelector('#enterprise-average-name')
const yearPromedioEmpresa = document.querySelector('#enterprise-average-year');
const botonPromedioEmpresa = document.querySelector('#enterprise-average-button');
const resultadoPromedioEmpresa = document.querySelector('#enterprise-average-result');

botonEmpresa.addEventListener('click', imprimirEmpresas);
botonPersonas.addEventListener('click', imprimirSalarios);
botonProyeccionEmpresa.addEventListener('click', imprimirProyeccionEmpresa);
botonPromedioEmpresa.addEventListener('click', imprimirPromedioEmpresa);


function imprimirProyeccionEmpresa () {
    const nombre = nombreProyeccionEmpresa.value;
    const resultado = proyeccionSalarialEmpresarial(nombre);

    resultadoProyeccionEmpresa.innerText = resultado;
}

function imprimirPromedioEmpresa () {
    const nombre = nombrePromedioEmpresa.value;
    const year = yearPromedioEmpresa.value;
    const resultado = mediaPorAñoEmpresas(nombre, year);

    resultadoPromedioEmpresa.innerHTML = resultado;
}

function imprimirSalario(persona) {
    const salario = document.createElement('article');
    const nombre = document.createElement('span');
    const datos = document.createElement('div');

    salario.classList.add('box__salary');
    nombre.classList.add('box__salary__name');
    datos.classList.add('box__salary__data');

    nombre.append(document.createTextNode(persona.name));

    for (dato of persona.trabajos) {
        const datoSalario = document.createElement('div');
        const enterprise = document.createElement('span');
        const year = document.createElement('span');
        const amount = document.createElement('span');

        datoSalario.classList.add('data__element');
        enterprise.classList.add('data__element__enterprise');
        year.classList.add('data__element__year');
        amount.classList.add('data__element__amount');

        enterprise.append(document.createTextNode(dato.empresa));
        year.append(document.createTextNode(dato.year));
        amount.append(document.createTextNode(`$${dato.salario}`));

        datoSalario.append(enterprise);
        datoSalario.append(year);
        datoSalario.append(amount);

        datos.append(datoSalario);
    }

    salario.append(nombre);
    salario.append(datos);

    salarysContainer.append(salario);
}

function imprimirSalarios () {
    botonEmpresa.className = 'salarys__change-button';
    botonPersonas.className = 'salarys__change-button salarys__change-button--active';

    salarysContainer.innerHTML = '';
    for (persona of salarios) {
        imprimirSalario(persona);
    }
}

function imprimirEmpresas () {
    botonEmpresa.className = 'salarys__change-button salarys__change-button--active';
    botonPersonas.className = 'salarys__change-button';

    salarysContainer.innerHTML = '';

    const nombresEmpresas = Object.keys(empresas)
    for (nombre of nombresEmpresas) {
        const articuloEmpresa = document.createElement('article');
        const nombreEmpresa = document.createElement('span');
        const datosEmpresa = document.createElement('div');

        articuloEmpresa.classList.add('enterprise');
        nombreEmpresa.classList.add('enterprise__name');
        datosEmpresa.classList.add('enterprise__data')

        nombreEmpresa.append(document.createTextNode(nombre));

        const years = Object.keys(empresas[nombre]);
        for (year of years) {
            const datoEmpresa = document.createElement('div');
            const yearEmpresa = document.createElement('span');

            yearEmpresa.append(document.createTextNode(year));
            datoEmpresa.append(yearEmpresa);

            datoEmpresa.classList.add('data__year');
            yearEmpresa.classList.add('data__year__text');

            for (salario of empresas[nombre][year]) {
                const salarioEmpresa = document.createElement('span');
                salarioEmpresa.append(document.createTextNode(`$${salario}`));

                salarioEmpresa.classList.add('data__year__amount');

                datoEmpresa.append(salarioEmpresa);
            }
            datosEmpresa.append(datoEmpresa);
        }
        articuloEmpresa.append(nombreEmpresa);
        articuloEmpresa.append(datosEmpresa);
        salarysContainer.append(articuloEmpresa);
    }
}

// imprimirEmpresas();
imprimirSalarios();