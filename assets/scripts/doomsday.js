// esse ano é bissexto? (0: não 1: sim)
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

function intAleat(max) {
    return Math.floor(Math.random() * max);
}

// retorna quantos dias tem em um mês
function diasNoMes (mes, ano) {
    if (mes == 2) {
        if (leap(ano))
            return 29;
        return 28;
    }

    if (mes < 8) {
        if ((mes % 2) == 0)
            return 30
        return 31
    }

    if ((mes % 2) == 0)
        return 31

    return 30 
}

function dataAleat () {
    let data;

    // ano de 1583 até 4000
    data = 1583 + intAleat(2417);

    data = (1 + intAleat(12)) * 10000 + data;

    data = (1 + intAleat(diasNoMes(data / 10000, data % 10000))) * 1000000 + data;

    return data;
}

function calcDiaSemana (d, m, a) {
    // vetor de doomsdays 
    // (estão em zero ou - para nao fazer mod com numero -)
    const doom = [-4, 0, 0, -3, -5, -1, -3, -6, -2, -4, 0, -2];
    let doomsday, dia;

    // ancora
    switch (Math.floor(a / 100) % 4) {
        case 0: doomsday = 2; break;
        case 1: doomsday = 0; break;
        case 2: doomsday = 5; break;
        default:  doomsday = 3; break;
    }

    console.log("âncora: %d", doomsday);

    // doomsday do ano
    doomsday = (doomsday + Math.floor((a % 100) + ((a % 100) / 4))) % 7;

    console.log("ano: %d", doomsday);

    // dia da semana
    if ((m <= 2) && (leap(a))) {
        dia = (doomsday + (d - doom[m-1]) + 1) % 7;   
    } else {
        dia = (doomsday + (d - doom[m-1])) % 7;
    }

    console.log("dia: %d", dia);

    // tradução numero -> dia
    switch (dia) {
        case 1: dia = "Segunda"; break;
        case 2: dia = "Terça"; break;
        case 3: dia = "Quarta"; break;
        case 4: dia = "Quinta"; break;
        case 5: dia = "Sexta"; break;
        case 6: dia = "Sábado"; break;
        default: dia = "Domingo"; break;
    }

    // montagem do elemento HTML
    const fala = document.getElementById("dia");
    if (fala) 
        fala.innerText= "\n\nHoje é " + dia + "! \n:D\n\n\n";
}

// main
const d = new Date();

window.addEventListener('load', calcDiaSemana(d.getDate(), d.getMonth() + 1, d.getFullYear()));
