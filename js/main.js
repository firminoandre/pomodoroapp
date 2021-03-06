// create variable
var minutes = 25;
var seconds = "00";
var jaFoiClicado = false; // começa com false pra poder ser clicado pela primeira vez
console.log(jaFoiClicado);

// run sounds in every action
var play = new Audio("assets/songs/run.mp3");
var replay = new Audio("assets/songs/replay.mp3");
var finish = new Audio("assets/songs/finish.mp3");


// insert visualy variable minutes and seconds in html
function template() {
    document.getElementById("minutes").innerHTML = "00";
    optionSelect = document.getElementById("select").value;
    if (optionSelect == 4) {
        optionSelect = 5
        document.getElementById("minutes").innerHTML = optionSelect;
        return;
    }
    if (optionSelect == 9) {
        optionSelect = 10
        document.getElementById("minutes").innerHTML = optionSelect;
        return;
    }
    if (optionSelect == 14) {
        optionSelect = 15
        document.getElementById("minutes").innerHTML = optionSelect;
        return;
    }
    if (optionSelect == 19) {
        optionSelect = 20
        document.getElementById("minutes").innerHTML = optionSelect;
        return;
    }
    if (optionSelect == 24) {
        optionSelect = 25
        document.getElementById("minutes").innerHTML = optionSelect;
        return;
    }

    document.getElementById("seconds").innerHTML = seconds;

}


function mostrarValor() {
    document.getElementById("secao").value;
}


function clickButton() {
    var div = document.getElementById("btnPause");
    div.style.display = "none";
    if (!jaFoiClicado) { // clicou no botao primeira vez vai verificar se o input ta vazio
        verifyInput();
        jaFoiClicado = true;
        console.log(jaFoiClicado)
        return;
    }
    $('#alertModal').modal('show')
     
}


function verifyInput() {
    var input = document.getElementById("secao").value;
    if (input.length === 0 || !input.trim()) {
        $('#alertModal2').modal('show')
        
        return;
    }

    start();
    
    
}


function start() {
    play.play();
    // define minutes and seconds to start
    minutes = optionSelect - 1;
    seconds = 59;

    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    var minutes_interval = setInterval(minutesTimer, 60000);
    var seconds_interval = setInterval(secondsTimer, 1000);

    function minutesTimer() {
        minutes = minutes - 1;
        document.getElementById("minutes").innerHTML = minutes;
    }

    function secondsTimer() {
        seconds = seconds - 1;
        document.getElementById("seconds").innerHTML = seconds;
        if (seconds <= 0) {
            if (minutes == 0) {
                clearInterval(minutes_interval);
                clearInterval(seconds_interval);

                document.getElementById("done").innerHTML = "Pomodoro completo com sucesso! Dê um intervalo de 5min";

                document.getElementById("done").classList.add("showMsg");
                
                var tabela = document.getElementById("tabelinha");
                tabela.style.display = "block";


                var table = document.getElementById("table");
                var numberLines = table.rows.length;
                var line = table.insertRow(numberLines);
                var section = document.getElementById("secao").value;
                var local = localStorage.getItem('user');




                var user = line.insertCell(0);
                var pomodoroSection = line.insertCell(1);

                //user.innerHTML = "User 1";
                //nome = pomodoroSection.innerHTML = section;

                localStorage.setItem('user', user.innerHTML = "User 1");
                localStorage.setItem('name', pomodoroSection.innerHTML = section);

                finish.play();

            }
            seconds = 60;
        }
    }

}