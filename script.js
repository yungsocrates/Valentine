// Get buttons
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');

// YES button - go to coupon page
yesBtn.addEventListener('click', () => {
    window.location.href = 'coupons.html';
});

// NO button - reload the page (forcing them to choose again)
noBtn.addEventListener('click', () => {
    // Add a little shake animation before reloading
    noBtn.style.animation = 'shake 0.5s';
    
    // Reload after a short delay to show the animation
    setTimeout(() => {
        window.location.reload();
    }, 500);
});