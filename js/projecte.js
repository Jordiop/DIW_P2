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
        document.getElementById('projectProgress').innerHTML += "Right now is up to" + " " + numero + "€";
    }

}

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