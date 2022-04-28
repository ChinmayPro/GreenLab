function typeWriter(txt){
    var arr = ["Strength?", "Weight?", "Sleep?", "Beauty?", "Wellbeing?"]      
    var i = 0;
    var speed = 200;
    function typeWrite() {
        if (i < txt.length) {
            postMessage(txt.charAt(i));
            i++;
            setTimeout(typeWrite, speed);
        }
    }
    typeWrite()
}
function triggerType(){
    setTimeout(()=>{
        postMessage("",)
        typeWriter("Strength?")
    })
    setTimeout(()=>{
        postMessage("")
        typeWriter("Weight?")
    },2000)
    setTimeout(()=>{
        postMessage("",)
        typeWriter("Sleep?")
    },3400)
    setTimeout(()=>{
        postMessage("")
        typeWriter("Beauty?")
    },4800)
    setTimeout(()=>{
        postMessage("")
        typeWriter("WellBeing?")
    },6200)
    setTimeout(()=>{
        clearTimeout();
        triggerType()
    },9000);
}
triggerType();