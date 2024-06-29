const typingText = document.getElementById('typing-text');
const cursor = document.getElementById('cursor');

const texts = ["Hi, I'm Faahim.", "I'm a Web Developer.", "Welcome to my Portfolio."];
let textIndex = 0;
let charIndex = 0;
let typingSpeed = 100;
let pauseBetweenTexts = 2000;

function type() {
    if (charIndex < texts[textIndex].length) {
        typingText.textContent += texts[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingSpeed);
    } else {
        setTimeout(erase, pauseBetweenTexts);
    }
}

function erase() {
    if (charIndex > 0) {
        typingText.textContent = texts[textIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, typingSpeed / 2);
    } else {
        textIndex = (textIndex + 1) % texts.length;
        setTimeout(type, typingSpeed);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    setTimeout(type, typingSpeed);
});

// APPEARING BODY FUNCTION
    document.getElementById('toggle-btn').addEventListener('click', function() {
        const container = document.getElementById('landing-div');
        const mainBody = document.getElementById('main-body');

        container.classList.add('hidden');
        
        // Allow some time for the hidden transition to complete
        setTimeout(() => {
            container.style.display = 'none';
            mainBody.style.display = 'block';
            mainBody.classList.add('visible');
        }, 500); 
    });


// drop down menu function
    const settingsBtn =
        document.getElementById('settings-btn');
    const dropdown =
        document.querySelector('.dropdown');
    
    settingsBtn.addEventListener('click', () => {
            dropdown.style.display =
        dropdown.style.display==='block' ? 'none' : 'block';
    });
// disappearing menu function
    const downBtn =
        document.getElementById('menu-gif');
    const dropmenu =
        document.querySelector('.nav-bar');
    
    downBtn.addEventListener('click', () => {
            dropmenu.style.display =
        dropmenu.style.display==='block' ? 'none' : 'block';
    });
 
// JavaScript Function
function toggleMenu() {
    var menuGif = document.getElementById('menu-gif');
    
    // Check the current background image URL
    var currentImage = menuGif.style.backgroundImage;
    
    // Toggle between menu and close icons
    if (currentImage.includes('close_24dp_FILL0_wght400_GRAD0_opsz24.png')) {
        menuGif.style.backgroundImage = 'url(./assets/icons_dark/New/icons8-menu-50.png)';
    } else {
        menuGif.style.backgroundImage = 'url(./assets/icons_dark/New/close_24dp_FILL0_wght400_GRAD0_opsz24.png)';
    }
}

