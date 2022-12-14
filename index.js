let home = document.getElementById("home")
let guest = document.getElementById("guest")

let totalHome = 0
let totalGuest = 0

function add1Home() {
    totalHome +=1;
    home.textContent = totalHome;
}

function add2Home() {
    totalHome +=2;
    home.textContent = totalHome;
}

function add3Home() {
    totalHome +=3;
    home.textContent = totalHome;
}






function add1Guest() {
    totalGuest +=1;
    guest.textContent = totalGuest;
}

function add2Guest() {
    totalGuest +=2;
    guest.textContent = totalGuest;
}

function add3Guest() {
    totalGuest +=3;
    guest.textContent = totalGuest;
}


function newGame(){
    totalHome = 0;
    totalGuest = 0;
    home.textContent = totalHome
    guest.textContent = totalGuest;
}