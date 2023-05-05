const timerForm = document.querySelector('#timer-form');
const timerDisplay = document.querySelector('#timer');
const alarmSound = document.querySelector('#alarm');

let countdown;

function displayTimeLeft(seconds) {
	const hours = Math.floor(seconds / 3600);
	const minutes = Math.floor((seconds % 3600) / 60);
	const remainderSeconds = seconds % 60;
	const display = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${remainderSeconds.toString().padStart(2, '0')}`;
	document.title = display;
	timerDisplay.textContent = display;
}

function displayEndTime(timestamp) {
	const end = new Date(timestamp);
	const hour = end.getHours();
	const adjustedHour = hour > 12 ? hour - 12 : hour;
	const minutes = end.getMinutes();
	const seconds = end.getSeconds();
	const ampm = hour >= 12 ? 'PM' : 'AM';
	const formatted = `Timer ends at ${adjustedHour.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString. padStart(2, '0')} ${ampm}`;
    timerDisplay.textContent = formatted;
    }
    
    function startTimer(event) {
    event.preventDefault();
    const seconds = parseInt(timerForm.hours.value * 3600) + parseInt(timerForm.minutes.value * 60) + parseInt(timerForm.seconds.value);
    if (isNaN(seconds) || seconds <= 0) {
    alert('Please enter a valid time.');
    return;
    }
    displayEndTime(Date.now() + (seconds * 1000));
    displayTimeLeft(seconds);
    timerForm.reset();
    clearInterval(countdown);
    countdown = setInterval(() => {
    secondsLeft = Math.round((endTime - Date.now()) / 1000);
    if (secondsLeft < 0) {
    clearInterval(countdown);
    timerDisplay.classList.remove('paused');
    timerDisplay.textContent = 'Time is up!';
    alarmSound.play();
    window.alert('Time is up!');
    return;
    }
    displayTimeLeft(secondsLeft);
    }, 1000);
    }
    
    timerForm.addEventListener('submit', startTimer);
