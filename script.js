// TYPEWRITER
const text = `I’ve been thinking a lot...  
About us, about moments, and about the future.  
So here I am, asking you something very special.`;

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
type();

// BUTTONS
const noBtn = document.getElementById("no");
noBtn.addEventListener("mouseover", () => {
  noBtn.style.position = "absolute";
  noBtn.style.left = Math.random() * 70 + "%";
  noBtn.style.top = Math.random() * 70 + "%";
});

document.getElementById("yes").onclick = () => {
  document.querySelector(".card").style.display = "none";
  document.getElementById("final").classList.remove("hidden");
};

// PARTICLES
const canvas = document.getElementById("bg");
const ctx = canvas.getContext("2d");
canvas.width = innerWidth;
canvas.height = innerHeight;

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
