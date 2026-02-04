// Get buttons
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');

// YES button - go to coupon page
yesBtn.addEventListener('click', () => {
    window.location.href = 'coupons.html';
});

// NO button - reload the page (forcing them to choose again)
noBtn.addEventListener('click', () => {
    // Go to the "are you sure?" page
    window.location.href = 'no.html';
});