//lista de string, nombre de los jugadores del equipo chelsea.
var namePlayers = ["Rüdiger", "Alonso", "Christensen", "Zouma", "Reece", "Azpilicueta", "Tomori", "Emerson", "Ziyech", "Jorginho", "Kanté", "Barkley", "Loftus-Cheek", "Kovacic", "Werner", "Abraham", "Giroud", "Hudson-Odoi", "Batshuayi"]
//lista de string, nombre de los equipos del equipo chelsea.
var nameTeams = ["Arsenal", "Aston Villa", "Brighton", "Burnley", "Crystal Palace", "Fulham", "Everton", "Leeds", "Leicester City", "Liverpool", "Manchester City", "Manchester United", "Newcastle", "Sheffield United", "Southampton", "Tottenham", "West Bromwich", "West Ham", "Wolverhampton"];
//diccionario de string en donde se encuentra las estadisticas de goleador, asistidor, cartas, etc...
var numberType = { 'goal': 10, 'assistance': 8, 'pass': 5, 'minuteMore': 5, 'foul': 5, 'yellow': 3, 'red': 1, 'minuteNotMore': 3 };

/**
 * Esta funcion determina la cantidad de goles, asistencias, et... en las estadisticas principales.
 * @param {string} type es un string en donde se determina si el jugador es goleador, asistidor, etc...
 * @param {boolean} test es un booleano que especifica si se encuentra en test, true si lo estas de lo contrario no estará en test.
 * @ return es un string en donde se determina si el jugador es goleador, asistidor, etc...
 */
function information(type, test) {
    //Verifica si se esta ejecuntado la funcion como una prueba.
    if (test == false) {
        console.log(type + " : " + numberType[type]);
        //Si el jugador es asistente o pasador, se mostrara los compañeros a quien se realizaron esta acción.
        if (type == 'assistance' || type == 'pass') {
            //Se llama la función para generar nombres al azar de jugadores.
            generateMessage(namePlayers, numberType[type]);
        }
        else {
            //Se llama la función para generar nombres al azar de equipos.
            generateMessage(nameTeams, numberType[type]);
        }
    }
    else {
        //Es un string en donde se determina si el jugador es goleador, asistidor, etc...
        return type;
    }
} 
/**
 * Esta dncion genera el mensjae al usuario informanco las estadisticas del jugador seleccionado.
 * @param {array} array es un array de string en donde se extraeran los nombres tanto de jugadores como de equipo.
 * @param {int} max es un entero, el maximo dato de equipos o jugadores que se puedan presentar.
 */
function generateMessage(array, max) {
    //mensaje que se mostrara al usuario.
    var message = "";
    console.log(random);
    //se genera la lista que se mostrara al usuario.
    for (var i = 0; i < max; i++) {
        //se genera numeros aleatorios para poder ser indices en el array de jugadores o equipos.
        var random = Math.round((Math.random() * (array.length - 1)));
        //se suma la cantidad de jugadores y equipos para poder ser presentada al usuario.
        message = message + (i+1) +". " + (array[random] + "\n");
    }
    alert("Selected statistic:\n" + message);
    console.log(message);
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
    const resultadoType = information("yellow", true);
    //resultado que se espera.
    const esperadoType = numberType;
    //se verifica si el resultado es el deseado o no.
    if (resultadoType in esperadoType) {
        console.log(`${resultadoType} in ${esperadoType}`);
    }
    else {
        //Se presenta que el resultado no es el esperado.
        throw new Error(`${resultadoType} not in ${esperadoType}`)
    }
}

/**
 * Esta funcion genera prueba ciertas funciones determinar su funcionamiento.
 **/
function testNotOk() {
    //datos dados para su verificacion.
    const resultadoNotType = information('green', true);
    //resultado que se espera.
    const esperadoNotType = numberType;
    //se verifica si el resultado es el deseado o no.
    if (resultadoNotType in esperadoNotType) {
        console.log(`${resultadoNotType} in ${esperadoNotType}`)
    }
    else {
        //Se presenta que el resultado no es el esperado.
        throw new Error(`${resultadoNotType} not in ${esperadoNotType}`)
    }
}
testOk();
testNotOk();