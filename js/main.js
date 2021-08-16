// create variable
var minutes = 25;
var seconds = "00";

// run sounds in every action
var play = new Audio("assets/songs/run.mp3");
var replay = new Audio("assets/songs/replay.mp3");
var finish = new Audio("assets/songs/finish.mp3");


// insert visualy variable minutes and seconds in html
function template() {
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

}

function mostrarValor() {
    document.getElementById("secao").value;
}



function verifyInput(){
    var input = document.getElementById("secao").value;
    if (input == ""){
        alert("Preencha o campo de seção");
        return;
    }

    start();
}



function start() {
    play.play();
    // define minutes and seconds to start
    minutes = 00;
    seconds = 02;

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


                var table = document.getElementById("table");
                var numberLines = table.rows.length;
                var line =  table.insertRow(numberLines); 
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