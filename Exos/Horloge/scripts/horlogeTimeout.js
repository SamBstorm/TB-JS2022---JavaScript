function setTitleHorloge(){
    let today = new Date;
    let hour = today.getHours();
    let minute = today.getMinutes();
    let second = today.getSeconds();

    //document.title est aussi un moyen d'accéder au title car il est unique
    //document.getElementsByTagName('title')[0]
    document.querySelector('title').innerText = `${two_digits(hour)} : ${two_digits(minute)} : ${two_digits(second)}`;
    
    setTimeout(setTitleHorloge, 1000);
}

function two_digits(number){
    return (number<10)?'0'+number : number;
}

setTitleHorloge();
