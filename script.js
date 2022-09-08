function encontrarPersona (nombre) {
    return salarios.find(persona => persona.name === nombre);
}

function guardarSalarios (persona) {
    return persona.trabajos.map (trabajo => trabajo.salario);
}

function proyeccionSalarialPersonal (nombrePersona) {
    const persona = encontrarPersona(nombrePersona);
    const salariosPersona = guardarSalarios(persona);
    const porcentajesCrecimiento = [];
    for (let i = 1; i < salariosPersona.length; i++) {
        const salarioActual = salariosPersona[i];
        const salarioAnterior = salariosPersona[i -1];
        const crecimiento = (salarioActual - salarioAnterior) / salarioAnterior;
        porcentajesCrecimiento.push(crecimiento);
    }
    const mediaDeCrecimiento = media.aritmetica(porcentajesCrecimiento);
    const mediaDeSalarios = media.aritmetica(salariosPersona);
    const salarioActual = salariosPersona[salariosPersona.length -1];

    let salarioProyectado;
    if (mediaDeSalarios > salarioActual) {
        salarioProyectado = mediaDeSalarios + (mediaDeCrecimiento * mediaDeSalarios);
    } else {
        salarioProyectado = salarioActual + (mediaDeCrecimiento * salarioActual);
    }

    return parseFloat((salarioProyectado).toFixed(2));
}

function mediaPorAñoEmpresas (nombreEmpresa, year) {
    const empresa = empresas[nombreEmpresa];
    if (empresa) {
        if (empresa[year]) {
            return `Media salarial de ${nombreEmpresa} en el año ${year}: $${media.aritmetica(empresa[year]).toFixed(2)}`;
        } else {
            return `No hay registros de ${nombreEmpresa} en el año ${year}.`;
        }
    } else {
        return 'No existe esa empresa';
    }
}

function proyeccionSalarialEmpresarial (nombreEmpresa) {
    const empresa = empresas[nombreEmpresa];
    if (empresa) {
        const yearsEmpresa = Object.keys(empresa);
        const mediaAnualSalarios = [];
        const crecimiento = [];
        for (year of yearsEmpresa) {
            mediaAnualSalarios.push(media.aritmetica(empresa[year]));
        }
        for (let i = 1; i < mediaAnualSalarios.length; i++) {
            crecimiento.push(
                (mediaAnualSalarios[i] - mediaAnualSalarios[i - 1]) / mediaAnualSalarios[i - 1]
            )
        }
        
        const proyeccion =  media.aritmetica(crecimiento) * media.aritmetica(mediaAnualSalarios) + mediaAnualSalarios[mediaAnualSalarios.length - 1];
    
        return `La proyección salarial media de ${nombreEmpresa} para 2024 es de $${proyeccion.toFixed(2)}`;
    } else {
        return 'No tenemos registros de esta empresa.';
    }

}