// task 5: read through the JavaScript starter code to determine where each given function is declared and where each given function is called.

// input variables
let image = document.querySelector(".image");
let songName = document.querySelector(".song-name");
let artist = document.querySelector(".artist");
let songLink = document.querySelector(".song-link");

// button variable
let add = document.querySelector(".add");

// task 6: declare variables for your display divs: the image url, song name, artist, and song link. Go back to the HTML to check that you are using the correct class names.

let displayImages = document.querySelector(".display-image");
let displaySongs = document.querySelector(".display-song");
let displayArtists = document.querySelector(".display-artist");
let displayLinks = document.querySelector(".display-link");
let display = document.querySelector(".display");


// let songNames = ["Are You Bored Yet?", "2 Soon", "Sofia", "Ivy", "Bags"];

// let songImages = [
//   "https://upload.wikimedia.org/wikipedia/en/2/2d/Wallows_nothing_happens.png",
//   "https://i.pinimg.com/564x/3f/7c/0f/3f7c0ff2d6beab408be2c93b2ef5a9e9.jpg",
//   "https://upload.wikimedia.org/wikipedia/en/5/56/Clairo_-_Immunity.png",
//   "https://upload.wikimedia.org/wikipedia/en/a/a0/Blonde_-_Frank_Ocean.jpeg",
//   "https://upload.wikimedia.org/wikipedia/en/5/56/Clairo_-_Immunity.png",
// ];

// let songArtists = ["Wallows", "Keshi", "Clairo", "Frank Ocean", "Clairo"];

// let songLinks = [
//   "https://youtu.be/wIgmyE5Juzw?si=zSovQsLBc-RUxUDQ",
//   "https://youtu.be/LKZyp2cSAy4?si=GRuMXYUG-9kdmQCm",
//   "https://youtu.be/rO3gFl32JeE?si=bGPuD2T2HVv_AJeB",
//   "https://youtu.be/AE005nZeF-A?si=lmXD1X_-2swy4Az3",
//   "https://youtu.be/L9HYJbe9Y18?si=zJJSu0_S2cls-zoc",
// ];

//REFACTOR ARRAYS DAY
// task 11: comment out the arrays data.
// task 12: create an object for each of your songs.
// task 13: inside each object, add key/value pairs to store the image url, song name, artist, and song link.
// task 14: create an array that stores all of the objects.



const areYouBoredYet = { "name": "Are you bored Yet", "image": "https://upload.wikimedia.org/wikipedia/en/2/2d/Wallows_nothing_happens.png", "artist": "Wallows", "link": "https://youtu.be/wIgmyE5Juzw?si=zSovQsLBc-RUxUDQ"};

const soon2 = { "name": "2 soon", "image":  "https://i.pinimg.com/564x/3f/7c/0f/3f7c0ff2d6beab408be2c93b2ef5a9e9.jpg", "artist": "Keshi", "link":  "https://youtu.be/LKZyp2cSAy4?si=GRuMXYUG-9kdmQCm"};

const sofia = { "name": "Sofia", "image":  "https://upload.wikimedia.org/wikipedia/en/5/56/Clairo_-_Immunity.png", "artist": "Clario", "link": "https://youtu.be/rO3gFl32JeE?si=bGPuD2T2HVv_AJeB",};

const ivy = { "name": "Ivy", "image":"https://upload.wikimedia.org/wikipedia/en/a/a0/Blonde_-_Frank_Ocean.jpeg", "artist": "Frank Ocean", "link": "https://youtu.be/AE005nZeF-A?si=lmXD1X_-2swy4Az3" }

const bags = { "name": "Bags", "image": "https://upload.wikimedia.org/wikipedia/en/5/56/Clairo_-_Immunity.png", "artist": "Clairo", "link": "https://youtu.be/L9HYJbe9Y18?si=zJJSu0_S2cls-zoc"};


let songs = [ areYouBoredYet, soon2, sofia, ivy, bags]; 

function addSongInfo() {
  // task 9: declare a variable to save the user input of the image url. Declare three more variables that save user input: One for the song names, one for the artists, and a last one for the song links.
  // task 10: use `.push()` to add each input value to the correct array.
  let imageUr1 = document.getElementById('imageInput').value;
  let songUr1 = document.getElementById('songInput').value;
  let artistUr1 = document.getElementById('artistInput').value;
  let linkUr1 = document.getElementById('linkInput').value;

  const inputPush = { "name": songUr1, "image": imageUr1, "artist": artistUr1, "link": linkUr1};

  songs.push(inputPush);

  document.getElementById('imageInput').value = '';
  document.getElementById('songInput').value = '';
  document.getElementById('artistInput').value = '';
  document.getElementById('linkInput').value = '';
}


function emptyDisplay(divsave){
  display.innerHTML = "";
}

function displaySongInfo() {
  emptyDisplay();
    // task 8: loop through your images array and display the images to your songs in the correct div. Create three more loops. One for the song names, one for the artists, and a last one for the song links.
    for( let i = 0; i < songs.length; i=i+1) {
      let divsave = document.createElement("div");
      
      let song1 = document.createElement("img");
      song1.src = songs[i]["image"];
      song1.classList.add("imgchange");
      divsave.appendChild(song1);
      
      let songname = document.createElement("p");
    songname.innerHTML = songs[i]["name"];
    songname.classList.add("songP");
    divsave.appendChild(songname);
      
      let songArtist1 = document.createElement("p");
    songArtist1.innerHTML = songs[i]["artist"];
    songArtist1.classList.add("songP2");
    divsave.appendChild(songArtist1); 
    
      let drag = document.createElement("button");
    drag.innerHTML = "Video Link"; //songLinks[i]; 
    drag.classList.add("Songlinkbutton");
    drag.addEventListener('click', () => {
      window.open(songs[i]["link"], "_blank");
    });
  
    divsave.appendChild(drag);
      display.appendChild(divsave);
    };
  }
  


// function displaySongInfo() {
// emptyDisplay();
//   // task 8: loop through your images array and display the images to your songs in the correct div. Create three more loops. One for the song names, one for the artists, and a last one for the song links.
//   for( let i = 0; i < songImages.length; i=i+1) {
//     let divsave = document.createElement("div");
    
//     let song1 = document.createElement("img")
//     song1.src = songImages[i];
//     divsave.appendChild(song1);
    
//     let songname = document.createElement("p");
//   songname.innerHTML = songNames[i];
//   divsave.appendChild(songname);
    
//     let songArtist1 = document.createElement("p");
//   songArtist1.innerHTML = songArtists[i];
//   divsave.appendChild(songArtist1); 
  
//     let drag = document.createElement("button");
//   drag.innerHTML = "Video Link"; //songLinks[i]; 
//   drag.classList.add("Songlinkbutton");
//   drag.addEventListener('click', () => {
//     window.open(songLinks[i], "_blank");
//   });

//   divsave.appendChild(drag);
//     display.appendChild(divsave);
//   };
// }


// /******** this function empties the display divs each time the button is clicked so that your playlist does not repeatedly add the data too many times. Where should this function be placed???********/

// function emptyDisplay() {
//   displayImages.innerHTML = "";
//    displaySongs.innerHTML = "";
//   displayArtists.innerHTML = "";
//   displayLinks.innerHTML = "";
//  }


// click event to add and display songs
add.onclick = function () {
  addSongInfo();
  displaySongInfo();
};




// function call to display stored songs
displaySongInfo();