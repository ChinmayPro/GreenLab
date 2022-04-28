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
    },3500)
    setTimeout(()=>{
        postMessage("",)
        typeWriter("Sleep?")
    },6500)
    setTimeout(()=>{
        postMessage("")
        typeWriter("Beauty?")
    },9000)
    setTimeout(()=>{
        postMessage("")
        typeWriter("Well-Being?")
    },11000)
    setTimeout(()=>{
        clearTimeout();
        triggerType()
    },15000);
}
triggerType();