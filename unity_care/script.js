document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Add your login logic here
    window.location.href = 'index.html';
});

document.addEventListener('DOMContentLoaded', function() {
    const toggleButtons = document.querySelectorAll('.toggle-button');
    const appointmentTimeInput = document.getElementById('appointmentTime');

    toggleButtons.forEach(button => {
        button.addEventListener('click', function() {
            toggleButtons.forEach(btn => btn.classList.remove('selected'));
            this.classList.add('selected');
            appointmentTimeInput.value = this.getAttribute('data-time');
        });
    });

    document.getElementById('appointmentForm').addEventListener('submit', function(event) {
        event.preventDefault();
        // Add your form submission logic here
        alert('Appointment submitted successfully!');
    });
});
