let digitalElement = document.querySelector('.digital');
let sElement = document.querySelector('.p_s');
let mElement = document.querySelector('.p_m');
let hElement = document.querySelector('.p_h');

function updateClock(){
    let now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();


    digitalElement.innerHTML = `${fixZero(hour)}:${fixZero(minute)}:${fixZero(second)}`; // insere um texto dentro do HTML, no caso as horas

    let sDeg = ((360/60)*second) -90; // Formula para encontrar quantos graus equivale a 1segundo e posteriormente subtraindo 90 graus para poder alinhar o 0° com o eixo do relógio
    let mDeg = ((360/60)*minute) -90;
    let hDeg=((360/12)*hour)-90;

    sElement.style.transform =`rotate(${sDeg}deg)`;
    mElement.style.transform =`rotate(${mDeg}deg)`;
    hElement.style.transform =`rotate(${hDeg}deg)`;
}

function fixZero(time){ // corrige a formatação do horario adicionando um zero
    if(time<10){
        return '0'+time;
    }else{
        return time;
    }
}
updateClock(); // roda a função uma vez para que logo que abrir a página não tenha delay de 1s
setInterval(updateClock,1000); // a cada 1 segundo é executada a função
