const getTime=()=>{
    let date= new Date();
    //Date returns current date
    //console.log(date);

    //Using conditions:
    // let hours = date.getHours();
    // let amPm = hours >= 12 ? "PM" : "AM" ;
    // hours = hours % 12;
    // hours = hours ==0 ? 12 : hours;
    // let minutes=date.getMinutes();
    // minutes=minutes>9?minutes:"0"+minutes;
    // let seconds = date.getSeconds();
    // seconds=seconds>9?seconds:"0"+seconds;
    //let miliseconds = date.getmilliseconds;

    // return `${hours} : ${minutes} : ${seconds} : ${miliseconds} : ${amPm}`;

    
    
    //Using Methods: its simpler way
    return date.toLocaleTimeString();
    //return date.toLocaleString();
}
//console.log(getTime());
setInterval(()=>{
    //console.log(getTime());
    let clockOb=document.querySelector(".clock");
    clockOb.innerHTML = getTime();
},1000)


