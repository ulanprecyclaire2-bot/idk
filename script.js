let points=0;
let i=0;
let r=0;

const text="13th Monthsary 💜";

// 💖 FULL REASONS
const reasons=[
"You make me smile without trying",
"You are my safe place",
"You always supports me and make me feel special"
"You stay even when I'm difficult",
"You make everything feel better",
"You are my favorite person",
"You love me in a calm way",
"You never give up on me",
"You are real and genuine",
"You being yourself.. pinaka fav"
];

// 🎡 FULL SPIN WHEEL
const prizes=[
"💜 Kisssss",
"💙 Hugg",
"💜 Unlimited Bites",
"💙 Walking",
"💜 You decide",
"💙 Try again",
"💜 So sad.. wala"
];

function unlock(){
let pass=document.getElementById("passwordInput").value.trim();

// 💡 hint always shown
if(document.getElementById("hint")){
document.getElementById("hint").innerText="CS";
}

if(pass==="Babi"){

let overlay=document.createElement("div");
overlay.style.position="fixed";
overlay.style.width="100%";
overlay.style.height="100%";
overlay.style.background="linear-gradient(135deg,#4b0082,#1e90ff,#8a2be2)";
overlay.style.display="flex";
overlay.style.justifyContent="center";
overlay.style.alignItems="center";
overlay.style.color="white";
overlay.style.fontSize="22px";
overlay.innerHTML="💜 Unlocking 13th Monthsary... 💙";
document.body.appendChild(overlay);

setTimeout(()=>overlay.innerHTML="💖 Welcome Babi...",1500);
setTimeout(()=>{
overlay.remove();
document.getElementById("gameArea").classList.remove("hidden");
showSection('mainSec');
typeText();
};
