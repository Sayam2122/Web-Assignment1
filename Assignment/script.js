// Guestbook Form Functionality
document.getElementById('guestbook-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from refreshing the page

    // Get form inputs
    const name = document.getElementById('name').value.trim();
    const message = document.getElementById('message').value.trim();

    // Basic validation
    if (name === '' || message === '') {
        alert('Please fill in all fields.');
        return;
    }

    // Create message element
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message');
    messageDiv.innerHTML = `<strong>${name}</strong>: ${message} <br><small>${new Date().toLocaleString()}</small>`;

    // Append to messages container
    document.getElementById('messages').prepend(messageDiv);

    // Clear form
    document.getElementById('guestbook-form').reset();

    // Save to localStorage (for demo persistence)
    saveMessage(name, message);
});

// Function to save messages to localStorage
function saveMessage(name, message) {
    const messages = JSON.parse(localStorage.getItem('guestbookMessages')) || [];
    messages.push({ name, message, timestamp: new Date().toLocaleString() });
    localStorage.setItem('guestbookMessages', JSON.stringify(messages));
}

// Load messages from localStorage on page load
function loadMessages() {
    const messages = JSON.parse(localStorage.getItem('guestbookMessages')) || [];
    const messagesContainer = document.getElementById('messages');

    messages.forEach(msg => {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message');
        messageDiv.innerHTML = `<strong>${msg.name}</strong>: ${msg.message} <br><small>${msg.timestamp}</small>`;
        messagesContainer.prepend(messageDiv);
    });
}

// Call loadMessages when page loads
window.onload = loadMessages;