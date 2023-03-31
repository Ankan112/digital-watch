function myWatch() {
    let myDate = new Date();
    let hours;
    let minutes = (myDate.getMinutes() < 10) ? '0' + myDate.getMinutes() : myDate.getMinutes();
    let sec = (myDate.getSeconds() < 10) ? '0' + myDate.getSeconds() : myDate.getSeconds();

    let M = (myDate.getHours() >= 12) ? 'PM' : 'AM';
    if (myDate.getHours() == 0) {
        hours = 12;
    }
    else if (myDate.getHours() > 12) {
        hours = myDate.getHours() - 12;
    }
    else {
        hours = myDate.getHours();
    }

    let liveTime = hours + ":" + minutes + ":" + sec + ":" + M;

    document.getElementsByClassName('hours')[0].innerHTML = liveTime;

    let day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        myDay = myDate.getDate();
    let year = myDate.getFullYear();
    let liveDate = day[myDate.getDay()] + ', ' + months[myDate.getMonth()] + " " + myDay + ", " + year;

    document.getElementsByClassName('date')[0].innerHTML = liveDate;
}

myWatch();

setInterval(function () {
    myWatch();
}, 1000);