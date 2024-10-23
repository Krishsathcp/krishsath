const chatbox = document.getElementById('chatbox');
const userInput = document.getElementById('userInput');
const sendButton = document.getElementById('sendButton');
const resetButton = document.getElementById('resetButton');

// Event listener for Enter key to send message
userInput.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        sendMessage(); // Call sendMessage function on Enter key press
    }
});

sendButton.addEventListener('click', sendMessage);
resetButton.addEventListener('click', () => {
    chatbox.innerHTML = ''; // Clear chat history
});

function sendMessage() {
    const message = userInput.value.trim(); // Trim whitespace
    if (message === '') return;

    // Display the user's message
    displayMessage('You', message, 'user');

    // Generate a chatbot response
    generateBotResponse(message);

    // Clear the input field
    userInput.value = '';
}

function displayMessage(sender, message, messageType) {
    const messageElement = document.createElement('p');
    messageElement.innerHTML = `${sender}: ${message}`;  // Use innerHTML to render HTML
    messageElement.classList.add('message', messageType);  // Add message class based on user or bot
    chatbox.appendChild(messageElement);
    chatbox.scrollTop = chatbox.scrollHeight;  // Scroll to the latest message
}

function generateBotResponse(input) {
    let botResponse = '';

    // Simple chatbot responses based on the top questions
    if (input.toLowerCase() === 'tell me about yourself.') {
        botResponse = 'I am <span style="color: blue;">Krishsath, a recent Engineering graduate with a passion for computer science, eager to apply academic knowledge and gain practical experience in machine learning and data analysis.</span>';
    } else if (input.toLowerCase() === 'what skills do you have?') {
        botResponse = 'I have skills in C, C++, Java, SQL, and a beginner understanding of machine learning and data analysis.';
    } else if (input.toLowerCase() === 'what projects have you worked on?') {
        botResponse = 'I worked on a Car Rental System project during my academic work.';
    } else if (input.toLowerCase() === 'can i download your resume?') {
        botResponse = 'Yes, you can download my resume by clicking the "Download Resume" button on the About section.';
    } else if (input.toLowerCase() === 'what is your educational background?') {
        botResponse = 'I graduated with a Bachelor of Engineering in Computer Science from Anna University MIT Campus (2023-2027).';
    } else {
        botResponse = "I'm sorry, I don't understand that. Please ask me something else.";
    }

    displayMessage('Bot', botResponse, 'bot');
}

function askQuestion(question) {
    displayMessage('You', question, 'user');
    generateBotResponse(question);
}
