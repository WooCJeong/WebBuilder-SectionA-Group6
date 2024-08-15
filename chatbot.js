document.getElementById('chatbot-send').onclick = function() {
    let inputField = document.getElementById('chatbot-input');
    let message = inputField.value;
    inputField.value = '';

    displayMessage(message, 'user');

    fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer API Key'
        },
        body: JSON.stringify({
            model: 'gpt-4-turbo',
            messages: [{ role: 'user', content: message }],
            max_tokens: 150
        })
    }).then(response => response.json())
    .then(data => {
        displayMessage(data.choices[0].message.content.trim(), 'bot');
    })
    .catch(error => {
        console.error('Error:', error);
        displayMessage('Sorry, there was an error processing your request.', 'bot');
    });
};

function displayMessage(message, sender) {
    let messagesContainer = document.getElementById('chatbot-messages');
    let messageDiv = document.createElement('div');
    messageDiv.textContent = message;
    messageDiv.className = sender + '-message';
    messagesContainer.appendChild(messageDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.mobile-menu span');
    const navigation = document.querySelector('.navigation');

    menuIcon.addEventListener('click', function() {
        navigation.style.display = navigation.style.display === 'flex' ? 'none' : 'flex';
    });

    const chatbotMessages = document.getElementById('chatbot-messages');
    const initialMessage = document.createElement('div');
    initialMessage.classList.add('bot-message');
    initialMessage.textContent = "Hello. How are you? My name is Hiker's Companion. Do you have any questions? Feel free to ask anything.";
    chatbotMessages.appendChild(initialMessage);

    const chatbot = document.getElementById('chatbot');
    const increaseSizeButton = document.getElementById('increase-size');
    const decreaseSizeButton = document.getElementById('decrease-size');

    increaseSizeButton.addEventListener('click', function() {
        chatbot.style.width = '50%';
        chatbot.style.height = '40%';
    });

    decreaseSizeButton.addEventListener('click', function() {
        chatbot.style.width = '20%';
        chatbot.style.height = '5%';
    });
});