const randomColor=function(){
    let allColor="0123456789ABCDEF";
    let result="#";
    for (let i=0;i<6;i++){
        result+=allColor[Math.floor(Math.random()*16)];
    }
    return result;
}
let intervalId;
const StartBgChange=function(){
    if (!intervalId){
        intervalId=setInterval(function(){
            document.body.style.backgroundColor=randomColor();
        },1000);
    }
    
};
const StopBgChange=function(){
    clearInterval(intervalId);
    intervalId=null;
};
document.querySelector('#start').addEventListener('click',StartBgChange);
document.querySelector('#stop').addEventListener('click',StopBgChange);