var imagenes = ["1", "2", "3", "4", "5", "6"];

function play(){
    var i = Math.floor(Math.random ()*(imagenes.length))
    var j = Math.floor(Math.random ()*(imagenes.length))

    if(i>j){
        document.getElementById("img1").src = "img/" + imagenes[i]+".png";
        document.getElementById("img2").src = "img/" + imagenes[j]+".png";
        document.getElementById("result").innerHTML = "Player 1 WINS!";
    }
    
    else if(i<j){
        document.getElementById("img1").src = "img/" + imagenes[i]+".png";
        document.getElementById("img2").src = "img/" + imagenes[j]+".png";
        document.getElementById("result").innerHTML = "Player 2 WINS!";
    }
        
    else if(i=j){
        play();
    }
}