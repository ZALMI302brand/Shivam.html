function generateCaptcha(){
let chars="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
let captcha="";
for(let i=0;i<5;i++){
captcha+=chars.charAt(Math.floor(Math.random()*chars.length));
}
document.getElementById("captchaText").innerText=captcha;
}

function login(){
let id=document.getElementById("userid").value;
let pass=document.getElementById("password").value;
let captchaInput=document.getElementById("captchaInput").value;
let captchaText=document.getElementById("captchaText").innerText;

if(id=="shivam728080" && pass=="shivam@@" && captchaInput==captchaText){
window.location="student.html";
}else{
alert("Wrong ID, Password or Captcha");
generateCaptcha();
}
}

function updateClock(){
let now=new Date();
document.getElementById("clock").innerText=
"Login Time: "+now.toLocaleString();
}

setInterval(updateClock,1000);
