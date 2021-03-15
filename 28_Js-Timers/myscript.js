function myCode(){
    console.log("This is dhruba");
    console.log("this is test");
}


let timer;
function start(){
    //js function calling:
    //myCode();

    //setTimeout() example:
   // setTimeout(myCode,3000);
    //setTimeout(function, delay in ms)

    //setInterval() example:
    //syntax:  setInterval(function, regularInterval in ms)
    //setInterval(myCode,2000);

    //clearInterval() example:
    //syntax:  setInterval(function, regularInterval in ms)
    timer=setInterval(myCode,2000);
    console.log(timer);

}

function stop(){
    clearInterval(timer);

}