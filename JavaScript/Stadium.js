/**
 * Esta funcion re dirige a l usuario a la pagina del sponsor que  selecciono.
 * @param {any} link es un valor entero que se utiliza como indice para buscar los links en la lista page.
 * @param {boolean} test es un booleano que especifica si se encuentra en test, true si lo estas de lo contrario no estar? en test.
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
    const resultadoType = alerta(8, true);
    const esperadoType = undefined;
    if (resultadoType == esperadoType) {
        console.log(`${resultadoType} is same ${esperadoType}`);
    }
    else {
        throw new Error(`${resultadoType} is not same ${esperadoType}`)
    }
}

/**
 * Esta funcion genera prueba ciertas funciones determinar su funcionamiento.
 **/
function testOk() {
    const resultadoType = alerta(0, true);
    const esperadoType = '';
    if (resultadoType == esperadoType) {
        console.log(`${resultadoType} is same ${esperadoType}`);
    }
    else {
        throw new Error(`${resultadoType} is not same ${esperadoType}`)
    }
}
testOk();
testNotOk();