/*
  This is file /dhesketh_final/js/final.js 
  It contains the JavaScript code for
  Programming Fundamentals Final Project File: /dhesketh_final/index.html
*/

//DesiredMoodSongGenerator

//Declare variables and prompt for input

  var currentMood = prompt("How are you feeling? happy, sad, angry, tired, excited");
  var desiredMood = prompt("How would you like to feel? happy, sad, angry, tired, excited");
  var suggestedSong;
  var randomArrayChoice;

//Convert the inputs to lowercase for easier comparing and processing 
  currentMood = currentMood.toLowerCase();
  desiredMood = desiredMood.toLowerCase();


//Song Arrays
/*
A number of songs have been added to each type of array. It's designed to display a link for the user to click on,
which will then open in a new tab, allowing them to return to the program and run it again if they want to.
*/

  var happySongs = [
    '<a target="blank_" href="https://www.youtube.com/watch?v=ZbZSe6N_BXs">' + "Pharrell Williams - Happy" + '</a>',
    '<a target="blank_" href="https://www.youtube.com/watch?v=ru0K8uYEZWw">' + "Justin Timberlake - Can\'t stop the feeling" + '</a>',
    '<a target="blank_" href="https://www.youtube.com/watch?v=5QYxuGQMCuU">' + "Michael Buble - It\'s A Beautiful Day" + '</a>',
    '<a target="blank_" href="https://www.youtube.com/watch?v=apBWI6xrbLY">' + "The Beach Boys - Good Vibrations" + '</a>',
    '<a target="blank_" href="https://www.youtube.com/watch?v=Gs069dndIYk">' + "Earth, Wind & Fire - September" + '</a>',
    '<a target="blank_" href="https://www.youtube.com/watch?v=aQUlA8Hcv4s">' + "Electric Light Orchestra - Mr. Blue Sky" + '</a>',
    '<a target="blank_" href="https://www.youtube.com/watch?v=GmK5_lnQUbE">' + "Neil Diaomond - Sweet Caroline" + '</a>',
    '<a target="blank_" href="https://www.youtube.com/watch?v=uSD4vsh1zDA">' + "The Black Eyed Peas - I Gotta Feeling" + '</a>'
   ];
  
  var sadSongs = [
    '<a target="blank_" href="https://www.youtube.com/watch?v=5rOiW_xY-kc">' + "REM - Everybody Hurts" + '</a>',
    '<a target="blank_" href="https://www.youtube.com/watch?v=TJAfLE39ZZ8">' + "Amy Winehouse - Back to Black" + '</a>',
    '<a target="blank_" href="https://www.youtube.com/watch?v=AscPOozwYA8">' + "Eric Clapton - Tears in Heaven" + '</a>',
    '<a target="blank_" href="https://www.youtube.com/watch?v=lPXWt2ESxVY">' + "The Flaming Lips - Do You Realize??" + '</a>',
    '<a target="blank_" href="https://www.youtube.com/watch?v=KUwjNBjqR-c">' + "Harry Chapin - Cats In The Cradle" + '</a>',
    '<a target="blank_" href="https://www.youtube.com/watch?v=3w68krri0bw">' + "Bon Iver - Re: Stacks" + '</a>',
    '<a target="blank_" href="https://www.youtube.com/watch?v=s26e_86-K0k">' + "Peter, Paul & Mary - Puff, the Magic Dragon" + '</a>'
    ];
    
  var angrySongs = [
    '<a target="blank_" href="https://www.youtube.com/watch?v=U6YQ8VBusQI">' + "Alice In Chains - Dam That River" + '</a>',
    '<a target="blank_" href="https://www.youtube.com/watch?v=kqHSGVtfXhc">' + "Nonpoint - Bullet With A Name" + '</a>',
    '<a target="blank_" href="https://www.youtube.com/watch?v=4qlCC1GOwFw">' + "Linkin Park - One Step Closer" + '</a>',
    '<a target="blank_" href="https://www.youtube.com/watch?v=d8ekz_CSBVg">' + "Three Days Grace - I Hate Everything About You" + '</a>',
    '<a target="blank_" href="https://www.youtube.com/watch?v=3rFoGVkZ29w">' + "Metallica - St Anger" + '</a>'
    ];
  
  var tiredSongs = [
    '<a target="blank_" href="https://www.youtube.com/watch?v=F4Bb8Nf5-QQ">' + "The Beatles - Good Night" + '</a>',
    '<a target="blank_" href="https://www.youtube.com/watch?v=t894eGoymio">' + "Johannes Brahms - Lullaby" + '</a>',
    '<a target="blank_" href="https://www.youtube.com/watch?v=tO4dxvguQDk">' + "Norah Jones - Don't Know Why" + '</a>',
    '<a target="blank_" href="https://www.youtube.com/watch?v=i9sR_T76H34">' + "Weightless Soul Healing - Fall Into Sleep Instantly" + '</a>',
    '<a target="blank_" href="https://www.youtube.com/watch?v=8myYyMg1fFE">' + "Rain Sound and Rainforest Animals Sound" + '</a>'
    ];
  
  var excitedSongs = [
    '<a target="blank_" href="https://www.youtube.com/watch?v=DPVf01jXL7M">' + "The Isley Brothers - Shout" + '</a>',
    '<a target="blank_" href="https://www.youtube.com/watch?v=7Ya2U8XN_Zw">' + "Mark Ronson - Uptown Funk ft. Bruno Mars" + '</a>',
    '<a target="blank_" href="https://www.youtube.com/watch?v=HgzGwKwLmgM">' + "Queen - Don\'t Stop Me Now" + '</a>',
    '<a target="blank_" href="https://www.youtube.com/watch?v=vDHr85LiwUM">' + "Dog Days Are Over - Florence + The Machine" + '</a>',
    '<a target="blank_" href="https://www.youtube.com/watch?v=SBjQ9tuuTJQ">' + "Foo Fighters - The Pretender" + '</a>',
    '<a target="blank_" href="https://www.youtube.com/watch?v=HTvu1Yr3Ohk">' + "Trapt - Headstrong" + '</a>'
    ];
    
  
//Random Array Function
/*
This function uses a calculation function to generate a random number between 0-1, and then multiplies it by the length of the array.
Since there are different arrays being used based on each mood, moodArray has been used as a parameter
*/
  function randomArrayChoice(moodArray){
    return moodArray[Math.floor(Math.random() * moodArray.length)];
  }
 
//If statement and case to decide song based on mood
/*
If statement checks to see if inputs are equal, and if so, states that program isn't needed and ends
*/ 
  if (currentMood === desiredMood){
    document.write("You're feeling exactly how you want to! You don't need this program!");
    document.write("\n\n  If you want to try again, click " + '<a href="index.html">' + "here" + '</a>' + " to try again.");
    END
  }else{
    switch(desiredMood){
      case 'happy':
        suggestedSong = randomArrayChoice(happySongs);
        break;
      case 'sad':
        suggestedSong = randomArrayChoice(sadSongs);
        break;
      case 'angry':
        suggestedSong = randomArrayChoice(angrySongs);
        break;
      case 'tired':
        suggestedSong = randomArrayChoice(tiredSongs);
        break;
      case 'excited':
        suggestedSong = randomArrayChoice(excitedSongs);
        break;
      default:
        document.write("Are you sure you entered the correct values?")
        document.write("\n\n  Click " + '<a href="index.html">' + "here" + '</a>' + " to try again.");
        END
   }
  }
 //Output suggested song name and link, and an option to try again
  document.write("Here is a song to make you feel " + desiredMood + " - " + suggestedSong);
  document.write("\n\n  If that didn't help, click " + '<a href="index.html">' + "here" + '</a>' + " to try again.");
  
  