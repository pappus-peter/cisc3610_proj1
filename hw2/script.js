const button1 = document.getElementById('01');
const button2 = document.getElementById('02');
const button3 = document.getElementById('03');
const button4 = document.getElementById('04');
const button5 = document.getElementById('05');
const button6 = document.getElementById('06');
const button7 = document.getElementById('07');
const button8 = document.getElementById('08');
const button9 = document.getElementById('09');
const button10 = document.getElementById('10');
const button11 = document.getElementById('11');
const button12 = document.getElementById('12');
const button13 = document.getElementById('13');
const button14 = document.getElementById('14');
const button15 = document.getElementById('15');
const button16 = document.getElementById('16');
const button17 = document.getElementById('17');
const button18 = document.getElementById('18');

button1.addEventListener('click', () => playSound('sound/Absorb.mp3'));
button2.addEventListener('click', () => playSound('sound/Acid.mp3'));
button3.addEventListener('click', () => playSound('sound/AcidArmor.mp3'));
button4.addEventListener('click', () => playSound('sound/Agility.mp3'));
button5.addEventListener('click', () => playSound('sound/Amnesia.mp3'));
button6.addEventListener('click', () => playSound('sound/AuroraBeam.mp3'));
button7.addEventListener('click', () => playSound('sound/Barrage.mp3'));
button8.addEventListener('click', () => playSound('sound/Barrier.mp3'));
button9.addEventListener('click', () => playSound('sound/Barrier.mp3'));
button10.addEventListener('click', () => playSound('sound/Bind.mp3'));
button11.addEventListener('click', () => playSound('sound/Bite.mp3'));
button12.addEventListener('click', () => playSound('sound/Blizzard.mp3'));
button13.addEventListener('click', () => playSound('sound/BodySlam.mp3'));
button14.addEventListener('click', () => playSound('sound/Bonemerang.mp3'));
button15.addEventListener('click', () => playSound('sound/Bubble.mp3'));
button16.addEventListener('click', () => playSound('sound/Clamp.mp3'));
button17.addEventListener('click', () => playSound('sound/CometPunch.mp3'));
button18.addEventListener('click', () => playSound('sound/Confused.mp3'));

function playSound(soundFile) {
    const audio = new Audio(soundFile);
    audio.play();
}