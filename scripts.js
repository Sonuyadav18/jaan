function loadImage(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const photoDisplay = document.getElementById('photo-display');
            photoDisplay.src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
}

function clearImage() {
    document.getElementById('photo-input').value = '';
    const photoDisplay = document.getElementById('photo-display');
    photoDisplay.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 400'%3E%3Cdefs%3E%3ClinearGradient id='grad' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23ff69b4;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23ff1493;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='400' height='400' fill='url(%23grad)'/%3E%3Ctext x='50%25' y='45%25' font-size='80' font-weight='bold' fill='white' text-anchor='middle' font-family='Arial'%3E❤️%3C/text%3E%3Ctext x='50%25' y='65%25' font-size='30' fill='white' text-anchor='middle' font-family='Arial'%3EYou are%3C/text%3E%3Ctext x='50%25' y='85%25' font-size='28' fill='white' text-anchor='middle' font-family='Arial'%3EBeautiful! 💕%3C/text%3E%3C/svg%3E";
}

function showMessage() {
    const heartMessage = document.getElementById('heart-message');
    heartMessage.style.display = 'block';
    
    // Create floating hearts animation
    createFloatingHearts();
    
    // Scroll to message
    heartMessage.scrollIntoView({ behavior: 'smooth' });
}

function createFloatingHearts() {
    for (let i = 0; i < 10; i++) {
        const heart = document.createElement('div');
        heart.innerHTML = '❤️';
        heart.style.position = 'fixed';
        heart.style.left = Math.random() * 100 + '%';
        heart.style.top = '50%';
        heart.style.fontSize = (Math.random() * 20 + 10) + 'px';
        heart.style.opacity = '1';
        heart.style.pointerEvents = 'none';
        heart.style.zIndex = '1000';
        
        document.body.appendChild(heart);
        
        // Animate the heart
        let top = 50;
        const speed = Math.random() * 2 + 1;
        const xMove = Math.random() * 200 - 100;
        
        const interval = setInterval(() => {
            top -= speed;
            heart.style.top = top + '%';
            heart.style.left = (parseInt(heart.style.left) + xMove / 100) + '%';
            heart.style.opacity = (100 - top) / 100;
            
            if (top < -10) {
                clearInterval(interval);
                heart.remove();
            }
        }, 20);
    }
}

// Add some interactivity on page load
document.addEventListener('DOMContentLoaded', function() {
    console.log('❤️ Love website loaded! ❤️');
});
