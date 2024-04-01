const rollbtn = document.getElementById("rollbtn");
const img1 = document.getElementsByClassName("img1")[0];
const img2 = document.getElementsByClassName("img2")[0];
const h1 = document.getElementsByClassName("myh1")[0];



//function to randomize the image
rollbtn.onclick = function (){
    //generate random number between 1-6
    var randomNum = Math.floor(Math.random()*6)+1;
    var randomNum1 = Math.floor(Math.random() * 6) + 1;
    //set the source of the image based on the random number 
    var randomImagesrc = "./images/dice" + randomNum +".png";
    var randomImagesrc2 = "./images/dice" + randomNum1 + ".png";
    img1.setAttribute ("src",randomImagesrc);
    img2.setAttribute ("src",randomImagesrc2);

    //evaluate the winner
    if(randomNum > randomNum1){
        h1.innerHTML = "Player 1 wins";
    }


    else if(randomNum < randomNum1){
        h1.innerHTML = "Player 2 wins";
    }

    
    else if(randomNum === randomNum1){
        h1.innerHTML = "It's a Tie";
    }
}


