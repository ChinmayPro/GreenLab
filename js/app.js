// importScripts("./typeWriter.js");
var app = {
    createWorker: function() {
        if(typeof(Worker) !== "undefined"){
            if(typeof(w) == "undefined"){
                w = new Worker("/greenlab/js/typeWriter.js");
            }
            w.onmessage = function(event) {
                if(event.data === ""){
                    document.getElementById("type").innerHTML = "";
                } else {
                    document.getElementById("type").innerHTML += event.data;
                }
            };
        } else {
            console.log("No web worker support");
        }
    },
    init: function(){
        this.createWorker();
    }
}
$(document).ready(function(){
    console.log('coming here')
    app.init();
})