/* 
    Simplement, el botó toTop() és un botó que fa scroll a la part superior de la pàgina.
*/

function toTop() {
    const btnScrollToTop = document.querySelector("#btnScrollToTop");
    btnScrollToTop.addEventListener("click", function() {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
    });

}

/* 
    Funció creada per randomitzar les barres de progrés dels projectes. Genera una array de números aleatoris entre 0 i 100 i els assigna a les barres de progrés. 
    En el cas de la darrera, inclús calcula els doblers en base al percentatge aleatori generat.
*/

function god2(word) {
    let array = [];
    let max = 100;
    let min = 0;
    let random = 0;
    for (i = 0; i < 10; i++) {
        random = Math.floor(Math.random() * (max - min + 1) + min);
        random = random + "%";
        array.push(random);
    }
    console.log(array);
    if (word == 'prg1') {
        document.getElementsByClassName('prg1')[0].style.width = array[0];
    }
    if (word == 'prg2') {
        document.getElementsByClassName('prg2')[0].style.width = array[1];
    }
    if (word == 'prg3') {
        document.getElementsByClassName('prg3')[0].style.width = array[2];
    }
    if (word == 'prg4') {
        document.getElementsByClassName('prg4')[0].style.width = array[3];
    }
    if (word == 'prg5') {
        document.getElementsByClassName('prg5')[0].style.width = array[4];
    }
    if (word == 'prg6') {
        document.getElementsByClassName('prg6')[0].style.width = array[5];
    }
    if (word == 'prg7') {
        document.getElementsByClassName('prg7')[0].style.width = array[6];
    }
    if (word == 'prg8') {
        document.getElementsByClassName('prg8')[0].style.width = array[7];
        document.getElementById('subprogress').innerHTML += array[7];
        let numero = array[7].replace("%", "");
        numero = parseInt(numero);
        numero = (numero / 100) * 50000;
        document.getElementById('donar').innerHTML += "Right now is up to" + " " + numero + "€";
    }

}

/* 
    Executa la funció de aleatorització de les barres de progrés al carregar la pàgina.
*/

function generate() {
    god2('prg1');
    god2('prg2');
    god2('prg3');
    god2('prg4');
    god2('prg5');
    god2('prg6');
    god2('prg7');
};

function generateProject() {
    god2('prg8');
}