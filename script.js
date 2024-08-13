let hr = document.getElementById("hours");
let min = document.getElementById("minutes");
let sec = document.getElementById("seconds");
let ms = document.getElementsByClassName("ms")[0];
let start = document.getElementById("startBtn");
let pause = document.getElementById("pauseBtn");
let reset = document.getElementById("resetBtn");
let msd = document.getElementById('msd');
let disp = document.getElementById('disp');
let rec = document.getElementById('record');
let clr = document.getElementById('clear');
let theme = document.getElementById('themeSelector');
let cont = document.getElementsByClassName('watch-cont')[0];

let strt ,elapsedTime = 0, timer;
let startTimer = ()=>{
        strt = performance.now() - elapsedTime;
        timer = setInterval(() => {
        elapsedTime = performance.now() - strt;
        msd.innerText = Math.floor(elapsedTime % 1000);
        sec.innerText = Math.floor((elapsedTime / 1000) % 60).toString().padStart(2, '0');
        min.innerText = Math.floor((elapsedTime / 60000) % 60).toString().padStart(2, '0');
        hr.innerText = Math.floor((elapsedTime / 3600000) % 24).toString().padStart(2, '0');
  },100);
};

start.addEventListener("click",() => {
    start.classList.add("opacity");
    pause.classList.remove("opacity");
    reset.classList.remove("opacity");
    ms.style.display = 'flex';
    startTimer();
});

pause.addEventListener("click",() => {
    pause.classList.add("opacity");
    start.classList.remove("opacity");
    reset.classList.remove("opacity");
    clearInterval(timer);
});

reset.addEventListener("click",() => {
    reset.classList.add("opacity");
    start.classList.remove("opacity");
    pause.classList.remove("opacity");
    clearInterval(timer);
    elapsedTime = 0;
    ms.style.display = 'none';
    milsec = 0;
    msd.innerText = '00';
    sec.innerText = '00';
    min.innerText = '00';
    hr.innerText = '00';
    disp.innerText = '';
});

let display = (arr)=>{
    disp.innerHTML = '';
    arr.forEach((item,index) => {
        let div = document.createElement('div');
        div.classList.add('flex');
        div.innerText = `Time: ${item}`;
        disp.appendChild(div);
    });
}

let arr = [];
rec.addEventListener("click",() => {
    let time = `${hr.innerText}:${min.innerText}:${sec.innerText}.${msd.innerText}`;

    arr.push(time);
    display(arr);
});

clr.addEventListener("click",() => {
    arr = [];
    disp.innerHTML = '';
});

theme.addEventListener("change",() => {

    let value = theme.value;

    if(value == 'default') {
        cont.className = "";
        cont.classList.add("watch-cont");
    }
    cont.className = "";
    cont.classList.add(`stopwatch-${value}`);
});
    