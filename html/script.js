document.addEventListener('DOMContentLoaded', function() {
    document.body.classList.add('fade-in');
});

window.addEventListener('beforeunload', function() {
    document.body.classList.add('fade-out');
    
    // Delay the page load to allow the fade-out effect to complete
    setTimeout(function() {
        window.location.href = event.target.activeElement.href; // Navigate to the new page
    }, 500); // Adjust the timing as needed
});
