document.addEventListener("DOMContentLoaded", function() {
    // Admin password protection
    const adminPassword = "admin123"; // Set a simple password here
    const enteredPassword = prompt("Enter Admin password, if not admin press cancell.");

    const adminPanel = document.querySelector('.admin-panel');
    const appointmentList = document.querySelector('.appointments');
    const bookingForm = document.querySelector('.booking-form'); // Select the booking form

    // Check password and show/hide sections
    if (enteredPassword === adminPassword) {
        // Show admin panel and booked appointments
        adminPanel.style.display = 'block';
        appointmentList.style.display = 'block'; // Show booked appointments section

        // Hide the booking section for regular users
        bookingForm.style.display = 'none'; 
    } else {
        // Hide admin panel and booked appointments if incorrect password
        adminPanel.style.display = 'none';
        appointmentList.style.display = 'none'; // Hide booked appointments section

        // Show the booking section
        bookingForm.style.display = 'block'; 
    }

    // Load and display booked appointments (if any)
    loadBookedAppointments();

    // Handle appointment form submission
    document.getElementById('appointment-form').addEventListener('submit', function(event) {
        event.preventDefault();
        
        const name = document.getElementById('name').value;
        const date = document.getElementById('date').value;
        const time = document.getElementById('time').value;

        // Save the new appointment to local storage (or server)
        saveAppointment({ name, date, time });
        
        event.target.reset(); // Clear the form
    });

    // Handle admin form submission (for adding available time slots)
    document.getElementById('admin-form').addEventListener('submit', function(event) {
        event.preventDefault();

        const day = document.getElementById('day').value;
        const time = document.getElementById('time').value;

        // Save the available slot to local storage
        saveAvailableSlot({ day, time });
        
        event.target.reset(); // Clear the form
    });
});

// Function to save available time slots (for the admin)
function saveAvailableSlot(slot) {
    let slots = JSON.parse(localStorage.getItem('availableSlots')) || [];
    slots.push(slot);
    localStorage.setItem('availableSlots', JSON.stringify(slots));
}

// Function to save appointment
function saveAppointment(appointment) {
    let appointments = JSON.parse(localStorage.getItem('appointments')) || [];
    appointments.push(appointment);
    localStorage.setItem('appointments', JSON.stringify(appointments));
    loadBookedAppointments(); // Refresh the list after saving
}

// Function to load and display booked appointments
function loadBookedAppointments() {
    let appointments = JSON.parse(localStorage.getItem('appointments')) || [];
    const appointmentList = document.getElementById('appointment-list');
    appointmentList.innerHTML = '';

    appointments.forEach(function(appointment) {
        const listItem = document.createElement('li');
        listItem.textContent = `${appointment.name} - ${appointment.date} at ${appointment.time}`;
        appointmentList.appendChild(listItem);
    });
}
