// SHOW MAIN AFTER INTRO
setTimeout(() => {
  document.getElementById("main").classList.remove("hidden");
}, 4500);

// TYPEWRITER
const text = "I’ve been thinking about us… and I don’t want a future where you aren’t mine.";
let i = 0;
const speed = 45;
const target = document.getElementById("typewriter");

function type() {
  if (i < text.length) {
    target.innerHTML += text.charAt(i);
    i++;
    setTimeout(type, speed);
  }
}
setTimeout(type, 4500);

// BUTTONS
document.getElementById("no").addEventListener("touchstart", moveNo);
document.getElementById("no").addEventListener("mouseover", moveNo);

function moveNo(e) {
  e.preventDefault();
  const btn = e.target;
  btn.style.position = "absolute";
  btn.style.left = Math.random() * 70 + "%";
  btn.style.top = Math.random() * 70 + "%";
}

document.getElementById("yes").onclick = () => {
  document.getElementById("main").classList.add("hidden");
  document.getElementById("letter").classList.remove("hidden");
};

// HEART PARTICLES
const canvas = document.getElementById("heartCanvas");
const ctx = canvas.getContext("2d");
canvas.width = innerWidth;
canvas.height = innerHeight;

let particles = [];
for (let t = 0; t < 1200; t += 0.15) {
  const x = 16 * Math.pow(Math.sin(t), 3);
  const y = -(13 * Math.cos(t) - 5 * Math.cos(2*t) - 2 * Math.cos(3*t) - Math.cos(4*t));
  particles.push({
    x: canvas.width / 2 + x * 15,
    y: canvas.height / 2 + y * 15,
    r: Math.random() * 1.5 + 0.5
  });
}

function draw() {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.fillStyle = "rgba(255,120,180,0.9)";
  particles.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fill();
  });
  requestAnimationFrame(draw);
}
draw();
let particles = [];
for (let i = 0; i < 80; i++) {
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 2 + 1,
    vx: Math.random() * 0.5,
    vy: Math.random() * 0.5
  });
}

function animate() {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.fillStyle = "rgba(255,255,255,0.7)";
  particles.forEach(p => {
    p.x += p.vx;
    p.y += p.vy;
    if (p.x > canvas.width) p.x = 0;
    if (p.y > canvas.height) p.y = 0;
    ctx.beginPath();
    ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
    ctx.fill();
  });
  requestAnimationFrame(animate);
}
animate();
