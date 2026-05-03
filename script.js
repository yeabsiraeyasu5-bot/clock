const clock = document.querySelector(".clock");
function tick() {
    const format = (n) => String(n).padStart(2, "0");
    const now = new Date();
    let h = now.getHours();
const m = now.getMinutes();
const s = now.getSeconds();

let period = "AM";

if (h >= 12) {
    period = "PM";
}

if (h > 12) {
    h = h - 12;
}
    
    const html = `
    <span>${format(h)} :</span>
    <span>${format(m)} :</span>
    <span>${format(s)} ${period}</span>
`;
clock.innerHTML = html;
}
tick();
setInterval(tick, 1000);