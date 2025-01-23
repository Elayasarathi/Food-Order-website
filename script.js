// Function to start the offer timers
function startTimers() {
    const timers = document.querySelectorAll('.timer');

    timers.forEach(timer => {
        let remainingTime = parseInt(timer.getAttribute('data-time')); // Get initial time in seconds

        const interval = setInterval(() => {
            if (remainingTime > 0) {
                remainingTime--;

                // Calculate minutes and seconds
                const minutes = Math.floor(remainingTime / 60);
                const seconds = remainingTime % 60;

                // Update timer display
                timer.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
            } else {
                // When timer reaches 0, stop the timer and show offer ended message
                clearInterval(interval);
                timer.textContent = 'Offer Ended';
                timer.classList.add('offer-ended');
            }
        }, 1000); // Update every second
    });
}

// Start the timers when the page loads
document.addEventListener('DOMContentLoaded', startTimers);




