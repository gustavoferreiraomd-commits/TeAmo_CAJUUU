const screens = document.querySelectorAll(".screen");
const music = document.getElementById("music");

let correctChest = Math.floor(Math.random() * 3);
let specialHeart = Math.floor(Math.random() * 12);
let word = "amor";

function changeScreen(id){
screens.forEach(s=>s.classList.remove("active"));
document.getElementById(id).classList.add("active");
window.scrollTo(0,0);
}

function startGame(){
music.play();
generateChests();
changeScreen("chests");
}

function generateChests(){
const container=document.querySelector(".chest-container");
container.innerHTML="";
for(let i=0;i<3;i++){
let chest=document.createElement("div");
chest.innerHTML="🧰";
chest.classList.add("chest");
chest.onclick=()=>checkChest(i);
container.appendChild(chest);
}
}

function checkChest(index){
let msg=document.getElementById("chestMessage");
if(index===correctChest){
msg.innerText="Você encontrou o começo da nossa história 💖";
setTimeout(()=>changeScreen("memory"),1500);
}else{
msg.innerText="Hmm… não é esse 👀 tenta de novo!";
}
}

function checkMemory(){
let input=document.getElementById("memoryInput").value;
let msg=document.getElementById("memoryMessage");

// ALTERE AQUI SUA DATA
if(input==="18/03/2024"){
msg.innerText="Desde esse dia eu sou mais feliz 💫";
setTimeout(()=>changeScreen("wordPuzzle"),1500);
}else{
msg.innerText="Quase... pensa no dia que mudou tudo 😉";
}
}

document.getElementById("scrambled").innerText=
word.split('').sort(()=>0.5-Math.random()).join('');

function checkWord(){
let input=document.getElementById("wordInput").value.toLowerCase();
let msg=document.getElementById("wordMessage");

if(input===word){
msg.innerText="Porque é isso que eu sinto por você ❤️";
setTimeout(()=>{
generateHearts();
changeScreen("heartGame");
},1500);
}else{
msg.innerText="Hmm... tenta de novo 💭";
}
}

function generateHearts(){
const container=document.getElementById("heartsContainer");
container.innerHTML="";
for(let i=0;i<12;i++){
let heart=document.createElement("div");
heart.innerHTML="❤️";
heart.classList.add("heart");
heart.onclick=()=>checkHeart(i);
container.appendChild(heart);
}
}

function checkHeart(index){
if(index===specialHeart){
launchConfetti();
changeScreen("final");
}else{
alert("Esse não é o especial 😅 tenta outro!");
}
}

function launchConfetti(){
for(let i=0;i<40;i++){
let conf=document.createElement("div");
conf.innerHTML="💖";
conf.style.position="fixed";
conf.style.left=Math.random()*100+"%";
conf.style.top="-20px";
conf.style.fontSize="20px";
conf.style.animation="fall 3s linear forwards";
document.body.appendChild(conf);
}
}

const style=document.createElement("style");
style.innerHTML=`
@keyframes fall{
to{transform:translateY(110vh) rotate(720deg);opacity:0;}
}`;
document.head.appendChild(style);
