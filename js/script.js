//toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

//scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {

    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            //active navbar links
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });

            //active sections for animation on scroll

            sec.classList.add('show-animate');
        }

        else {
            sec.classList.remove('show-animate');
        }
    });
  
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    //remove toggle icon and navbar when click navbar links (scroll)

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    //animation footer on scroll
    // Add an event listener to the window to track scroll events
window.addEventListener('scroll', function() {
    let footer = document.querySelector('footer');
    let scrollTriggerPosition = 300; // Adjust this value as needed
    let shouldShowAnimate = this.scrollY >= scrollTriggerPosition;

    // Toggle the 'show-animate' class based on the condition
    footer.classList.toggle('show-animate', shouldShowAnimate);
});

}

// Gallery Modal Logic for Projects
const galleryImages = [
    ["images/scheduling_system/campus1.jfif", "images/scheduling_system/campus2.jfif", "images/scheduling_system/campus3.jfif"],
    ["images/sanitation_system/sanitation2.jfif", "images/sanitation_system/sanitation3.jfif", "images/sanitation_system/sanitation4.jfif","images/sanitation_system/sanitation5.jfif"],
    ["images/Advising_system/advising2.jfif", "images/Advising_system/advising3.jfif", "images/Advising_system/advising4.jfif"],
    ["images/eccommerce/eccommerce2.jfif", "images/eccommerce/eccommerce3.jfif","images/eccommerce/eccommerce4.jfif","images/eccommerce/eccommerce5.jfif"],
    ["images/job_hunting/jobhunting2.jfif","images/job_hunting/jobhunting3.jfif","images/job_hunting/jobhunting4.jfif","images/job_hunting/jobhunting5.jfif","images/job_hunting/jobhunting6.jfif"]
];

function openGallery(index) {
    const modal = document.getElementById('galleryModal');
    const container = document.getElementById('galleryImages');
    container.innerHTML = "";

    galleryImages[index].forEach(src => {
        const img = document.createElement("img");
        img.src = src;
        img.alt = "Project Gallery Image";
        container.appendChild(img);
    });

    modal.style.display = "block";
    document.body.style.overflow = "hidden"; // Prevent background scrolling
}

function closeGallery() {
    const modal = document.getElementById('galleryModal');
    modal.style.display = "none";
    document.body.style.overflow = "auto"; // Restore scrolling
}

// Close modal when clicking outside the images
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('galleryModal');
    
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeGallery();
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            closeGallery();
        }
    });
});
