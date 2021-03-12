// cariable global y diccionario de Strings que contiene la informacion de los partido.
var nameTeams = { "Arsenal": ["03/01/2021", "17:00"], "Aston Villa": ["10/01/2021", "17:00"], "Brighton": ["17/01/2021", "12:00"], "Burnley": ["24/01/2021", "17:00"], "Crystal Palace": ["1/02/2021", "17:00"], "Fulham": ["08/02/2021", "18:00"], "Everton": ["15/02/2021", "17:00"], "Leeds": ["22/02/2021", "19:00"], "Leicester City": ["02/03/2021", "13:00"], "Liverpool": ["09/03/2021", "17:00"], "Manchester City": ["16/03/2021", "14:00"], "Manchester United": ["23/03/2021", "14:00"], "Newcastle": ["06/04/2021", "11:00"], "Sheffield United": ["13/04/2021", "17:00"], "Southampton": ["20/04/2021", "12:00"], "Tottenham": ["27/04/2021", "17:00"], "West Bromwich": ["01/05/2021", "19:00"], "West Ham": ["07/05/2021", "14:00"], "Wolverhampton": ["19/05/2021", "19:00"] };
// cariable global y lista de Strings que contiene los nombres de los estadios.
var nameStadium = ["Emirates Stadium", "Stamford Bridge", "Stamford Bridge", "Stamford Bridge", "Stamford Bridge", "Craven Cottage", "Goodinson Park", "Stamford Bridge", "King Power Stadium", "Anfield", "Etihad Stadium", "Old Trafford", "St James' Park", "Stamford Bridge", "Stamford Bridge", "Totthenham Hotspur Stadium", "Stamford Bridge", "London Stadium", "Molineux Stadium"];

/**
 * Esta función genera los datos de los partidos de futbol, fecha, hora y lugar del encuentro.
 * @param {string} team es el nombre del equipo que jugarará contra el chelsea.
 * @param {boolean} test es un booleano que especifica si se encuentra en test, true si lo estas de lo contrario no estará en test.
 * @returns es un string, el nombre del equipo contrincante.
 */
function information(team, test) {
    //dataSelect son los datos temporales del partido, es una lista de string, donde hay hora y fecha.
    var dateSelect = nameTeams[team];
    //indice para buscar la informacion del equipo contrincante en nameTeams.
    var indexTeam = Object.keys(nameTeams).indexOf(team);
    //Verifica si se esta ejecuntado la funcion como una prueba.
    if (test == false) {
        //Se verifica si Chelsea es el equipo local o visitante.
        if (nameStadium[indexTeam] == "Stamford Bridge") {
            //Se informara mediante un mensaje la informacion del partido.
            alert("Chelsea FC  Vs  " + team + "\n" + nameStadium[indexTeam] + "\n" + dateSelect[0] + " - " + dateSelect[1]);
        }
        else {
            alert(team + "  Vs  Chelsea FC" + "\n" + nameStadium[indexTeam] + "\n" + dateSelect[0] + " - " + dateSelect[1]);
        }
    }
    else {
        //Es un string, el nombre del equipo contrincante.
        return team;
    }
}

/**
 * Esta funcion re dirige a l usuario a la pagina del sponsor que  selecciono.
 * @param {any} link es un valor entero que se utiliza como indice para buscar los links en la lista page.
 * @param {boolean} test es un booleano que especifica si se encuentra en test, true si lo estas de lo contrario no estará en test.
 * @returns el link de la pagina que selecciono el usuario.
 **/
function alerta(link, test) {
    //es una lista de link de los sponsor.
    var page = ["https://www.beatsbydre.com/", "https://www.ea.com/sports", "https://www.hyundaiusa.com/us/en", "https://www.nike.com/", "http://www.three.co.uk/"];
    //Verifica si se esta ejecuntado la funcion como una prueba.
    if (test == false) {
        //mensaje de confirmacion para redirigirse a la nueva pagina.
        var atention = confirm("you want to go to? " + page[link]);
        //se verifiva si el usuario acepto o denego ir a la nueva pagina.
        if (atention == true) {
            console.log("Accept: " + page[link]);
            window.location = page[link];
        } else {
            console.log("Cancel: " + page[link]);
        }
    }
    else {
        //el link de la pagina que selecciono el usuario.
        return page[link];
    }
}

/**
 * Esta funcion genera prueba ciertas funciones determinar su funcionamiento.
 **/
function testOk() {
    //datos dados para su verificacion.
    const resultadoType = information('Arsenal', true);
    //resultado que se espera.
    const esperadoType = '03/01/2021';
    //se verifica si el resultado es el deseado o no.
    if (nameTeams[resultadoType][0] == esperadoType) {
        console.log(`${resultadoType} is date match of ${esperadoType}`);
    }
    else {
        //Se presenta que el resultado no es el esperado.
        throw new Error(`${resultadoType} is not date match of ${esperadoType}`)
    }
}
/**
 * Esta funcion genera prueba ciertas funciones determinar su funcionamiento.
 **/
function testNotOk() {
    //datos dados para su verificacion.
    const resultadoNotType = information('Allianz Arena', true);
    //resultado que se espera.
    const esperadoNotType = 'Stamford Bridge';
    //se verifica si el resultado es el deseado o no.
    if (resultadoNotType == esperadoNotType) {
        console.log(`${resultadoNotType} is same${esperadoNotType}`)
    }
    else {
        //Se presenta que el resultado no es el esperado.
        throw new Error(`${resultadoNotType} is not same ${esperadoNotType}`)
    }
}
testOk();
testNotOk();