function typeWriter(txt){
    var arr = ["Strength?", "Weight?", "Sleep?", "Beauty?", "Well-being?"]      
    var i = 0;
    var speed = 300;
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
    },3000)
    setTimeout(()=>{
        postMessage("",)
        typeWriter("Sleep?")
    },4400)
    setTimeout(()=>{
        postMessage("")
        typeWriter("Beauty?")
    },5800)
    setTimeout(()=>{
        postMessage("")
        typeWriter("WellBeing?")
    },7200)
    setTimeout(()=>{
        clearTimeout();
        triggerType()
    },10000);
}
triggerType();