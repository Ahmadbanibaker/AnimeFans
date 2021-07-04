var favAnime = prompt("what is your fav anime? (Hunter x Hunter , One piece  )")

function animefunc() {



  var favAnime = prompt("what is your fav anime? (Hunter x Hunter , One piece  )")


  var favAnime = prompt("what is your fav anime? (Hunter x Hunter , One piece  )")

  var favAnime = prompt("what is your fav anime? (Hunter x Hunter , One piece  )")


  while (favAnime != "One piece" && favAnime != "Hunter x Hunter") {
    favAnime = prompt("what is your fav Anime? (Hunter x Hunter , One piece)")
  }

  if (favAnime == "Hunter x Hunter") {
    var times = prompt("how many times you wish to see it on my page")

    for (var i = 0; i <= times; i++) {
      document.write("<div>" + "<h3>" + favAnime + "</h3>" + "<img src='https://m.media-amazon.com/images/M/MV5BZjNmZDhkN2QtNDYyZC00YzJmLTg0ODUtN2FjNjhhMzE3ZmUxXkEyXkFqcGdeQXVyNjc2NjA5MTU@._V1_UY1200_CR85,0,630,1200_AL_.jpg' alt='Hunter x Huter'/>" + "</div>")
    }

  }
  else if (favAnime == "One piece")
    var times = prompt("how many times you wish to see it on my page")
  while (times > 10) {
    times = prompt("please enter less than 10 times to see the anime")
  }

  for (var i = 0; i <= times; i++) {
    document.write("<div>" + "<h3>" + favAnime + "</h3>" + "<img src='https://ae01.alicdn.com/kf/HTB1ayvsOVXXXXcKXFXXq6xXFXXXy/Custom-Canvas-One-Piece-Poster-One-Piece-Anime-Wall-Stickers-Luffy-Crew-Wallpaper-Ace-Sticker-Kids.jpg_Q90.jpg_.webp' alt='One piece'/>" + "</div>")

  }
}

animefunc();


var stars = prompt("How many stars do you rate our website ?")


function starsfan(num) {
  var output = ''
  for (var i = 0; i < num; i++) {
    output = output + "<img src='https://png.pngtree.com/png-vector/20190130/ourmid/pngtree-star-mbe-commercial-element-png-image_675788.jpg' alt='stars'>"
  }

  return output;
}

document.write(starsfan(stars))

