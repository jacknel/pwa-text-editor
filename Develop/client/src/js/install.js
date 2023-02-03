const butInstall = document.getElementById('buttonInstall');

window.addEventListener('beforeinstallprompt', (event) => {
// Prevent the default prompt
event.preventDefault();

// Store the event to use later
window.deferredPrompt = event;

// Show the install button
butInstall.style.display = 'block';
});

butInstall.addEventListener('click', async () => {
// Hide the install button
butInstall.style.display = 'none';

// Show the install prompt
window.deferredPrompt.prompt();

// Wait for the user to respond to the prompt
const choiceResult = await window.deferredPrompt.userChoice;

// Clean up the prompt
window.deferredPrompt = null;
});

window.addEventListener('appinstalled', (event) => {
console.log('PWA installed');
});