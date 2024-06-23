// Grab the dom elements we are planning to dynamically update below
const mainnav = document.querySelector('.navigation');
const hambutton = document.querySelector('#menu');

// Register events that we want to make changes when it happens
hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
});

// Set the last updated date
// const lastUpdated = document.getElementById('last-updated');
// lastUpdated.textContent = document.lastModified;