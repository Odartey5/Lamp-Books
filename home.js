// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
     anchor.addEventListener('click', function(e) {
         e.preventDefault();
 
         const targetId = this.getAttribute('href');
         const targetElement = document.querySelector(targetId);
 
         // Smooth scroll to the target section
         targetElement.scrollIntoView({
             behavior: 'smooth',
             block: 'start'
         });
     });
 });


 //Vote page
 document.addEventListener("DOMContentLoaded", function () {
    const voteForm = document.getElementById("voteForm");

    if (voteForm) {
        voteForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const selectedCelebrity = document.querySelector('input[name="celebrity"]:checked');

            if (!selectedCelebrity) {
                alert("Please select a celebrity before voting.");
                return;
            }

            localStorage.setItem("votedCelebrity", selectedCelebrity.value);
            alert(`You voted for ${selectedCelebrity.value}!`);
        });
    }
});



//tickets page
const ticketsForm = document.getElementById('ticketForm');

ticketsForm.addEventListener('submit', function(e) {

    const email = document.getElementById('email').value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {
            alert('Please enter a valid email address.');
            e.preventDefault();
        } else {
            alert('Thank you for booking your tickets!');
        }
});


//contact page
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name === '' || email === '' || message === '') {
        alert('Please fill in all fields.');
    } else {
        alert('Thank you for your message!');
        contactForm.reset();
    }
});


