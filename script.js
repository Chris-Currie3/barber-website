/*document.addEventListener("DOMContentLoaded", function () {
    // Admin password protection
    const adminPassword = "admin123";
    const enteredPassword = prompt("Enter Admin password, if not admin press cancel.");

    const adminPanel = document.querySelector('.admin-panel');
    const appointmentList = document.querySelector('.appointments');
    const bookingForm = document.querySelector('.booking-form');

    if (enteredPassword === adminPassword) {
        adminPanel.style.display = 'block';
        appointmentList.style.display = 'block';
        bookingForm.style.display = 'none';
        slideshow.style.display = 'none'; 
    } else {
        adminPanel.style.display = 'none';
        appointmentList.style.display = 'none';
        bookingForm.style.display = 'block';
    }

    loadBookedAppointments();

    document.getElementById('appointment-form').addEventListener('submit', function (event) {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const date = document.getElementById('date').value;
        const time = document.getElementById('time').value;
        saveAppointment({ name, date, time });
        event.target.reset();
    });

    document.getElementById('admin-form').addEventListener('submit', function (event) {
        event.preventDefault();
        const day = document.getElementById('date').value;
        const time = document.getElementById('time').value;
        saveAvailableSlot({ day, time });
        event.target.reset();
    });

    function saveAvailableSlot(slot) {
        let slots = JSON.parse(localStorage.getItem('availableSlots')) || [];
        slots.push(slot);
        localStorage.setItem('availableSlots', JSON.stringify(slots));
        loadAvailableSlots();
    }

    function saveAppointment(appointment) {
        let appointments = JSON.parse(localStorage.getItem('appointments')) || [];
        appointments.push(appointment);
        localStorage.setItem('appointments', JSON.stringify(appointments));

        let slots = JSON.parse(localStorage.getItem('availableSlots')) || [];
        slots = slots.filter(slot => !(slot.day === appointment.date && slot.time === appointment.time));
        localStorage.setItem('availableSlots', JSON.stringify(slots));

        loadBookedAppointments();
        loadAvailableSlots();
    }

    function loadBookedAppointments() {
        let appointments = JSON.parse(localStorage.getItem('appointments')) || [];
        const appointmentList = document.getElementById('appointment-list');
        appointmentList.innerHTML = '';
        appointments.forEach(function (appointment) {
            const listItem = document.createElement('li');
            listItem.textContent = `${appointment.name} - ${appointment.date} at ${appointment.time}`;
            appointmentList.appendChild(listItem);
        });
    }

    function loadAvailableSlots() {
        let slots = JSON.parse(localStorage.getItem('availableSlots')) || [];
        const timeSelect = document.getElementById('available-times');
        timeSelect.innerHTML = '<option value="">Select a time</option>';
        slots.forEach(slot => {
            const option = document.createElement('option');
            option.value = slot.time;
            option.textContent = `${slot.day} - ${slot.time}`;
            timeSelect.appendChild(option);
        });
    }

    loadAvailableSlots();

    // ===========================
    // SLIDESHOW FUNCTIONALITY
    // ===========================
    let slideIndex = 0;
    const slides = document.querySelectorAll(".slide");
    const totalSlides = slides.length;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? "block" : "none";
        });
    }

    function changeSlide(direction) {
        slideIndex += direction;
        if (slideIndex >= totalSlides) {
            slideIndex = 0;
        } else if (slideIndex < 0) {
            slideIndex = totalSlides - 1;
        }
        showSlide(slideIndex);
    }

    document.querySelector(".prev").addEventListener("click", function () {
        changeSlide(-1);
    });

    document.querySelector(".next").addEventListener("click", function () {
        changeSlide(1);
    });

    showSlide(slideIndex);

    // Auto-slide every 5 seconds
    setInterval(() => {
        changeSlide(1);
    }, 5000);
}); */
//all above might do something, might not
function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove("active");
    });
    slides[index].classList.add("active");
  }
  