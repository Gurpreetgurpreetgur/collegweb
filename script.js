// loadHeader.js  // Fetch the content of header.html and footer.html

// Wrap fetch calls in Promise.all to make sure both are loaded before proceeding
Promise.all([
    fetch('header.html').then(response => response.text()),
    fetch('footer.html').then(response => response.text())
])
.then(([headerData, footerData]) => {
    // Insert the content of the header and footer
    document.getElementById('header-placeholder').innerHTML = headerData;
    document.getElementById('footer-placeholder').innerHTML = footerData;

    // Now, we can safely manipulate other DOM elements
    let navbar = document.querySelector('.header .navbar');
    
    // Menu button toggle event
    document.querySelector('#menu-btn').onclick = () => {
        navbar.classList.toggle('active');
    };
    
    // Remove 'active' class when scrolling
    window.onscroll = () => {
        navbar.classList.remove('active');
    };
    
    // Main video logic
    let mainVid = document.querySelector('.main-video');
    
    // Loop through all video elements and set up onclick events
    document.querySelectorAll('.course-3 .box .video video').forEach(vid => {
        vid.onclick = () => {
            let src = vid.getAttribute('src');
            mainVid.classList.add('active');
            mainVid.querySelector('video').src = src;
        };
    });
    
    // Close the video when clicking on the close button
    document.querySelector('#close-vid').onclick = () => {
        mainVid.classList.remove('active');
    };
})
.catch(error => {
    console.error('Error loading header or footer HTML:', error);
});
