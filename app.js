// a comment 
/* 
multi comment 
*/
/* syntax 

Data types : 
- numbers: 1 , 5 , -7

- boolean : true/false

- strings : "ahmad" , 'feygfrjj 134'

variables :

- to store anything in them 

var name = "ahmad"

var x = 10

var sum = 0 + 10 => 10

operators :

arthmatic operators : 

+ , _ , * , /

1+1
7*9

assigment operator :  

= 

*/ 


/*var firstname = "Ahlam"

console.log(firstname)

console.log("hello world")


var name = prompt("what is your name?")

alert("welcome to Anime website" +  name)

var favAnime = prompt("what is your fav Anime?")

if(favAnime == "Hunter x Hunter"){
document.write("Hunter x Hunter") 

}

else if (favAnime == "Naruto")
{
  document.write("<p>"+"great Anime choice")

}
else {
  alert("sorry we don't have Anime")

} */




<<<<<<< HEAD
/*var favAnime = prompt("what is your fav anime? (Hunter x Hunter , One piece  )")
=======
var favAnime = prompt("what is your fav anime? (Hunter x Hunter , One piece  )")
>>>>>>> 7905bb94aa9d54e9d7794564d72b6b12a33974a8

while(favAnime != "One piece" && favAnime != "Hunter x Hunter") {favAnime = prompt("what is your fav Anime? (Hunter x Hunter , One piece)")
}

if(favAnime == "Hunter x Hunter"){
var times = prompt("how many times you wish to see it on my page")

for(var i = 0 ; i <= times ; i++){
document.write("<div>" + "<h3>" + favAnime + "</h3>" + "img src='https://m.media-amazon.com/images/M/MV5BZjNmZDhkN2QtNDYyZC00YzJmLTg0ODUtN2FjNjhhMzE3ZmUxXkEyXkFqcGdeQXVyNjc2NjA5MTU@._V1_UY1200_CR85,0,630,1200_AL_.jpg' alt='Hunter x Huter'>" + "</div>")
}

}
else if (favAnime == "One piece")
var times = prompt("how many times you wish to see it on my page")
while(times > 10){
  times = prompt("please enter less than 10 times to see the anime")
}

for(var i = 0 ; i <= times ; i++){
document.write("<div>" + "<h3>" + favAnime + "</h3>" + "img src='https://ae01.alicdn.com/kf/HTB1ayvsOVXXXXcKXFXXq6xXFXXXy/Custom-Canvas-One-Piece-Poster-One-Piece-Anime-Wall-Stickers-Luffy-Crew-Wallpaper-Ace-Sticker-Kids.jpg_Q90.jpg_.webp' alt='One piece'>" + "</div>")

}
