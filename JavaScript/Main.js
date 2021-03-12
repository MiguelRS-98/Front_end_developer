/**
 * Esta funcion guarda los datos digitados por el usuario.
 * @param {boolean} test es un booleano que especifica si se encuentra en test, true si lo estas de lo contrario no estará en test.
 * @returns inf que contine dos strings , el primero el nombre y el segundo el dorsal del usuario.
 **/
function saveUser(test) {
    /**
     * Esta duncion define los datos destinados a guardar.
     * @param {string} name es un string que contiene el nombre del usuario.
     * @param {string} number es un string que contiene el dorsal del usuario.
     **/
    function user(name, number) {
        //nombre del usuario.
        this.name = name;
        //nombre del usuario.
        this.number = number;
    }
    //nombre del nuevo usuario.
    var nameUser = document.getElementById("nameUser").value;
    //numero del nuevo usuario.
    var numberUser = document.getElementById("numberUser").value;

    //Verifica si los datos del usuario son vacios o no.
    if (nameUser != "" && numberUser != "") {
        //Verifica si se esta ejecuntado la funcion como una prueba.
        if (test == false) {
            newUser = new user(nameUser, numberUser);
            console.log("Name: " + newUser + "; Number: " + numberUser);
            //Se llama la funcion de añadir usuarios.
            addUser();
        }
        else {
            //inf que contine dos strings , el primero el nombre y el segundo el dorsal del usuario.
            var inf = [nameUser, numberUser];
            return inf;
        }
    }
    //Si los datos son vacios, se pide al usuario ingresarlos.
    else {
        if (nameUser != "") {
            alert("No number.");
        }
        else {
            if (numberUser != "") {
                alert("No name.");
            }
            else {
                alert("No name and no number.");
            }
        }
    }
}

//Data una variable global en la que se guarda los datos de usuario.
var data = [];
/**
 *Esta funcion añade la informacion de usuarios a la variable data
 **/
function addUser() {
    //Añade newUser a la data.
    data.push(newUser);
    console.log(newUser);
    //Llama la función para poder proseguir a la siguiente pantalla.
    nextPage(newUser);
}
/**
 *Esta funcion realiza el cambio de ventana, se dirige a la proxima pagina.
 **/
function nextPage() {
    alert("Thanks for your information.");
    //Envia al usuario a la siguiente pagina.
    window.location = "Menu.html";
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
    const resultadoType = saveUser(true);
    //resultado que se espera.
    const esperadoType = '';
    //se verifica si el resultado es el deseado o no.
    if (resultadoType != esperadoType) {
        console.log('No hay es vacio.');
    }
    else {
        //Se presenta que el resultado no es el esperado.
        throw new Error('Hay datos vacios')
    }
}

/**
 * Esta funcion genera prueba ciertas funciones determinar su funcionamiento.
 **/
function testNok() {
    //datos dados para su verificacion.
    const resultadoType = saveUser(true);
    //resultado que se espera.
    const esperadoType = '';
    //se verifica si el resultado es el deseado o no.
    if (resultadoType == esperadoType) {
        //Se presenta que el resultado no es el esperado.
        console.log('Hay datos vacios');
    }
    else {
        throw new Error('No hay datos vacios')
    }
}
testOk();
testNotOk();