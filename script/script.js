document.addEventListener('DOMContentLoaded', function() {
    document.body.classList.add('fade-in');
});

// Fixing the event handling for beforeunload
window.addEventListener('beforeunload', function(event) {
    document.body.classList.add('fade-out');
    
    // Delay the page load to allow the fade-out effect to complete
    setTimeout(function() {
        window.location.href = event.target.activeElement.href; // Navigate to the new page
    }, 500); // Adjust the timing as needed
});

// Swipe functionality
let startX;
const homeImg = document.querySelector('.home-img');

homeImg.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
});

homeImg.addEventListener('touchmove', (e) => {
    const moveX = e.touches[0].clientX;
    const diffX = startX - moveX;

    if (diffX > 50) {
        // Swipe left
        homeImg.style.transform = 'translateX(-100%)'; // Adjust as needed
    } else if (diffX < -50) {
        // Swipe right
        homeImg.style.transform = 'translateX(100%)'; // Adjust as needed
    }
});

// Custom button functionality
document.getElementById('swipe-left').addEventListener('click', () => {
    homeImg.style.transform = 'translateX(-100%)'; // Swipe left
});

document.getElementById('swipe-right').addEventListener('click', () => {
    homeImg.style.transform = 'translateX(100%)'; // Swipe right
});
