const user = {
   info: `I am currently learning web development and exploring opportunities to develop my programming skills.
          Now i'm looking for an Intership within a mission-driven company to continue growing my skills
          while contributing to a production-level codebase`, 
   wallpaper: [ 'myimage1.jpeg', 'myimage2.jpg', 'myimage3.jpg']
}

const profile = document.getElementById('image');
let index = 0;

const container = document.getElementById('message-container');
const message = document.getElementById('message');
const image = document.getElementById('image');
const { info } = user;

const arrMessage = info.split('');
let messageIndex = 0;

setInterval(() => {
    profile.setAttribute('src', `Images/${user.wallpaper[index]}`);
    index++;
    
    if(index >= user.wallpaper.length) {
        index = 0;
    }
}, 4000);


container.addEventListener('mouseenter', () => {
    image.style.filter = 'brightness(0.4)';
    image.style.transition = 'all 0.5s ease-in';  
    
    const timerId = setInterval(() => {
         message.textContent += arrMessage[messageIndex];
         messageIndex++;

         if(messageIndex >= arrMessage.length) {
            clearInterval(timerId);
            setTimeout(() => {
                messageIndex = 0;
                message.textContent = '';
                image.style.filter = '';
                image.style.transition = 'all 0.5s';  
            }, 3000);     
         }
         
    }, 50); 
}); 







