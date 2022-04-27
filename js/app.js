var app = {
    triggerType: function(){
        setTimeout(()=>{
            $("#type").html("");
            app.typeWriter("Strength?")
        })
        setTimeout(()=>{
            $("#type").html("");
            app.typeWriter("Weight?")
        },2000)
        setTimeout(()=>{
            $("#type").html("");
            app.typeWriter("Sleep?")
        },3400)
        setTimeout(()=>{
            $("#type").html("");
            app.typeWriter("Beauty?")
        },4800)
        setTimeout(()=>{
            $("#type").html("");
            app.typeWriter("WellBeing?")
        },6200)
        setTimeout(app.triggerType,9000);
    },
    typeWriter: function(txt) {
        var arr = ["Strength?", "Weight?", "Sleep?", "Beauty?", "Wellbeing?"]
            
        var i = 0;
        var speed = 200;
        function typeWrite() {
            if (i < txt.length) {
                document.getElementById("type").innerHTML += txt.charAt(i);
                i++;
                setTimeout(typeWrite, speed);
            }
        }
        typeWrite()
    },
    init: function(){
        this.triggerType();
    }
}
$(document).ready(function(){
    console.log('coming here')
    app.init();
})