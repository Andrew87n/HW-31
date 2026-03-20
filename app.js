let time1 = 60;
const timer1El = document.getElementById("timer1");
const interval1 = setInterval(() => {
    time1--;
    let minutes = time1;
    let seconds = 0;
    timer1El.textContent = `${minutes}:00`;
    if (time1 === 30) {
        alert("Залишилось менше половини часу!");
    }

    if (time1 <= 0) {
        clearInterval(interval1);
        timer1El.textContent = "Час вийшов!";
    }

}, 60000);



const timer2El = document.getElementById("timer2");
const startBtn = document.getElementById("startBtn");
let interval2;
const duration = 30000;
startBtn.addEventListener("click", () => {
    startBtn.disabled = true;
    timer2El.classList.remove("warning");
    const startTime = Date.now();
    interval2 = setInterval(() => {
        const elapsed = Date.now() - startTime;
        const remaining = duration - elapsed;
        if (remaining <= 0) {
            clearInterval(interval2);
            timer2El.textContent = "0.000";
            startBtn.disabled = false;
            alert("Час вийшов!");
            return;
        }
        timer2El.textContent = (remaining / 1000).toFixed(3);
        if (remaining <= 10000) {
            timer2El.classList.add("warning");
        }
    }, 16);
});