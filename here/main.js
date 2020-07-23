
// add div to "document" and within hold child divs one which contains timer
const container = document.createElement('button');
container.id = "timerHack"
container.innerHTML = "CLICK HERE TO START TIMER"
container.style.fontSize = "30px"
container.style.position = "absolute"
container.style.top = "0"
container.style.zIndex = '1000'
container.style.backgroundColor = 'white';
container.style.opacity = '0.5'
container.style.margin = '50px 0px 0px 50px'


const memeArray = ['https://sayingimages.com/wp-content/uploads/what-are-you-doing-get-back-to-work-meme.png', 
'https://sayingimages.com/wp-content/uploads/the-best-things-in-life-get-back-to-work-meme.jpg', 
'https://sayingimages.com/wp-content/uploads/heres-an-idea-get-back-to-work-meme.jpg', 
'https://sayingimages.com/wp-content/uploads/get-back-to-work-cat-meme.jpg', 
'https://sayingimages.com/wp-content/uploads/if-you-could-that-would-be-great-get-back-to-work-meme.png', 
'https://sayingimages.com/wp-content/uploads/im-sorry-youre-tired-get-back-to-work-meme.jpg', 
'https://sayingimages.com/wp-content/uploads/just-kidding-get-back-to-work-meme.png', 
'https://sayingimages.com/wp-content/uploads/thats-enough-get-back-to-work-meme.jpg', 
'https://sayingimages.com/wp-content/uploads/quit-socializing-get-back-to-work-meme.png', 
'https://sayingimages.com/wp-content/uploads/cheerful-baby-get-back-to-work-meme-1.png', 
'https://sayingimages.com/wp-content/uploads/stop-daydreaming-get-back-to-work-meme.jpg', 
'https://sayingimages.com/wp-content/uploads/angry-man-is-like-a-boss-get-back-to-work-meme.jpg', 
'https://sayingimages.com/wp-content/uploads/conratulations-get-back-to-work-meme.jpg', 
'https://sayingimages.com/wp-content/uploads/the-working-dead-get-back-to-work-meme.png', 
'https://sayingimages.com/wp-content/uploads/my-grandfather-says-get-back-to-work-meme.jpg', 
'https://sayingimages.com/wp-content/uploads/fair-enough-get-back-to-work-meme.jpg', 
'https://sayingimages.com/wp-content/uploads/the-party-is-over-get-back-to-work-meme.png', 
'https://sayingimages.com/wp-content/uploads/you-talk-too-much-get-back-to-work-meme.jpg']


const body = document.querySelector("body");
body.appendChild(container);

container.addEventListener('click', ()=> {
    let count = 4;
    container.innerHTML = count + " minutes left"

    const set = setInterval(function() {
        count -= 1;
        container.innerHTML = count + " minutes left"
        if (count === 0) {
          clearInterval(set)
          container.innerHTML = "";
          const img = document.createElement('img');
          img.src = memeArray[Math.floor(Math.random() * 18)]

          img.style.zIndex = "1001"
          
          img.style.position = "fixed"
          img.style.top = "15%"
          img.style.left = "15%"




          body.style.backgroundColor = 'red'
          document.head.style.backgroundColor = 'red'

          body.appendChild(img);

            const soundArray = ['/Sam.mp3', "/SoundBite.mp3"]

            var myAudio = new Audio(chrome.runtime.getURL(soundArray[Math.floor(Math.random() * 2)]));
            myAudio.play()

          setTimeout(function(){
            body.removeChild(img)
            body.style.backgroundColor = 'initial'
            container.innerHTML = "CLICK HERE TO START TIMER"
          },5000)
        }
    }, 	1000)
    
})
//create a function which is a timer
    //every 60 seconds decrement the number displayed
        //stretch = last 30 seconds have a read out
     //output of timer function





//button clicked -> countdown starting from 10 min (stretch - user inputs the time)
    //after 10 minutes, something pops up to remind you to keep working
    //stretch - countdown moves out of the way
    