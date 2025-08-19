document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    const statusDiv = document.getElementById('form-status');
    const sendBtn = document.getElementById('send-btn');

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        // Validate form
        if (!name || !email || !message) {
            showStatus('Please fill in all fields.', 'error');
            return;
        }

        // Disable button and show loading
        sendBtn.disabled = true;
        sendBtn.textContent = 'Sending...';
        
        // Prepare email data
        const subject = `Contact Form Message from ${name}`;
        const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0AMessage:%0D%0A${message}`;
        
        // Create mailto link
        const mailtoLink = `mailto:rimpuhwemanzi@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
        
        // Open email client
        window.location.href = mailtoLink;
        
        // Show success message
        showStatus('Email client opened! Please send the message from your email app.', 'success');
        
        // Reset form
        contactForm.reset();
        
        // Re-enable button
        sendBtn.disabled = false;
        sendBtn.textContent = 'Send';
    });

    function showStatus(message, type) {
        statusDiv.textContent = message;
        statusDiv.className = `form-status ${type}`;
        
        // Hide message after 5 seconds
        setTimeout(() => {
            statusDiv.textContent = '';
            statusDiv.className = '';
        }, 5000);
    }
});
