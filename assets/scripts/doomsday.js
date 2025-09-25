function leap (ano) {
    if (ano % 400 == 0) {
        return 1;
    } else if (ano % 100 == 0) {
        return 0;
    } else if (ano % 4 == 0) {
        return 1;
    }
    
    return 0;
}

function calcDiaSemana (d, m, a) {
    // vetor de doomsdays 
    // (estão em zero ou - para nao fazer mod com numero -)
    const doom = [-4, 0, 0, -3, -5, -1, -3, -6, -2, -4, 0, 2];
    let doomsday, dia;

    switch (Math.floor(a / 100) % 4) {
        case 0: doomsday = 2; break;
        case 1: doomsday = 0; break;
        case 2: doomsday = 5; break;
        default:  doomsday = 3; break;
    }

    // doomsday do ano
    doomsday = doomsday + Math.floor((a % 100) + ((a % 100) / 4));

    if ((m <= 2) && (leap(a))) {
        dia = (doomsday + (d - doom[m-1]) + 1) % 7;   
    }

    dia = (doomsday + (d - doom[m-1])) % 7;

    switch (dia) {
        case 1: dia = "Segunda"; break;
        case 2: dia = "Terça"; break;
        case 3: dia = "Quarta"; break;
        case 4: dia = "Quinta"; break;
        case 5: dia = "Sexta"; break;
        case 6: dia = "Sábado"; break;
        default: dia = "Domingo"; break;
    }

    document.getElementById("dia").innerText= "\n\nHoje é " + dia + "! \n:D\n\n\n";
}

const d = new Date();

window.onload = calcDiaSemana(d.getDate(), d.getMonth() + 1, d.getFullYear());