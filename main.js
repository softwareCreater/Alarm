console.table({
    lang:"javaScript",
    project:'alarm clock',
    giveBy:"Harry Bhaiya"
});

const popUP = document.querySelector('.pop-up');

setInterval(() => {
    const time = new Date();
    let hour =time.getHours();
    let min = time.getMinutes(); 
    let sec = time.getSeconds();
    
    const displayTime = document.querySelector('.time');
    if(hour>=12){
        document.querySelector('.ampm').innerHTML= 'pm';
    }
    else{
        document.querySelector('.ampm').innerHTML= 'am';

    }
    if(hour<10){
        hour = `0${hour}`;
    }
    if(min<10){
        min = `0${min}`;
    }
    if(sec<10){
        sec = `0${sec}`;
    }
    // if(hour===14 && min ===52 && sec===25)
    if( sec===00)
    
    {
        console.log("alram play")
        popUP.style.opacity = '1';
        const alarmAudio = new Audio('alarm.mp3');
        alarmAudio.play();
    }
    displayTime.innerHTML = `${hour} : ${min} : ${sec}`;
}, 1000);





