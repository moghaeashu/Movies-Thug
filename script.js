// Navbar
// script.js
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });
});

// Slideshow Section
// script.js
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });

    // Slideshow functionality
    let slideIndex = 0;
    showSlides();

    function showSlides() {
        let i;
        const slides = document.getElementsByClassName("slides");
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) {slideIndex = 1}
        slides[slideIndex-1].style.display = "block";
        setTimeout(showSlides, 3000); // Change image every 3 seconds
    }

    window.plusSlides = function(n) {
        showSlides(slideIndex += n);
    }
});

// Movies Gallery Searchbar
const movies = [
    { title: "Love Me If You Dare", id: "Love Me If You Dare" },
    { title: "The Garfield Movie", id: "The Garfield Movie" },
    { title: "Bad Cop season 1", id: "Bad Cop season 1" },
    { title: "Saving Bikini Bottom The Sandy Cheeks", id: "Saving Bikini Bottom The Sandy Cheeks" },
    { title: "freddy", id: "freddy" },
    { title: "Saving Bikini Bottom The Sandy Cheeks", id: "Saving Bikini Bottom The Sandy Cheeks" },
    { title: "mirzapur season 3", id: "mirzapur season 3" },
    { title: "the legend of hanuman season 4", id: "the legend of hanuman season 4" },
    { title: "yakshini", id: "yakshini" },
    { title: "boy Kills World", id: "boy Kills World" },
    { title: "kingdom of the planet of the apes", id: "kingdom of the planet of the apes" },
    { title: "kung fu panda 4", id: "kung fu panda 4" },
    { title: "deadpool and wolverine", id: "deadpool and wolverine" },
    { title: "bhaiyya ji", id: "bhaiyya ji" },
    { title: "sarfira", id: "sarfira" },
    { title: "kalki", id: "kalki" },
    { title: "shaitaan", id: "shaitaan" },
    { title: "bade miyan chote miyan", id: "bade miyan chote miyan" },
    { title: "teri baaton mein aisa uljha jiya", id: "teri baaton mein aisa uljha jiya" },
    { title: "ruslaan", id: "ruslaan" },
    { title: "bhimaa", id: "bhimaa" },
    { title: "madgaon express", id: "madgaon express" },
    { title: "crew", id: "crew" },
    { title: "chaari 111", id: "chaari 111" },
    { title: "goatlife", id: "goatlife" },
    // Add more movie objects here
];

function searchMovies() {
    const searchInput = document.getElementById('search-input').value.toLowerCase();
    const filteredMovies = movies.filter(movie => movie.title.toLowerCase().includes(searchInput));
    
    if (filteredMovies.length > 0) {
        const movieId = filteredMovies[0].id;
        const movieElement = document.getElementById(movieId);
        if (movieElement) {
            movieElement.style.display = 'block'; // Show the image
            movieElement.scrollIntoView({ behavior: 'smooth' }); // Scroll to the image
        }
    } else {
        alert("No movies found.");
    }
}

// Display all movies initially
displayMovies(movies);
