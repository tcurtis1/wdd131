document.addEventListener('DOMContentLoaded', () => {
    const temples = [
        {
            templeName: "Aba Nigeria",
            location: "Aba, Nigeria",
            dedicated: "2005, August, 7",
            area: 11500,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
        },
        {
            templeName: "Manti Utah",
            location: "Manti, Utah, United States",
            dedicated: "1888, May, 21",
            area: 74792,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
        },
        {
            templeName: "Payson Utah",
            location: "Payson, Utah, United States",
            dedicated: "2015, June, 7",
            area: 96630,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
        },
        {
            templeName: "Yigo Guam",
            location: "Yigo, Guam",
            dedicated: "2020, May, 2",
            area: 6861,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
        },
        {
            templeName: "Washington D.C.",
            location: "Kensington, Maryland, United States",
            dedicated: "1974, November, 19",
            area: 156558,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
        },
        {
            templeName: "Lima Perú",
            location: "Lima, Perú",
            dedicated: "1986, January, 10",
            area: 9600,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
        },
        {
            templeName: "Mexico City Mexico",
            location: "Mexico City, Mexico",
            dedicated: "1983, December, 2",
            area: 116642,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
        },
        {
            templeName: "San Diego California",
            location: "San Diego, California",
            dedicated: "1993, April, 25-30",
            area: 72000,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/san-diego-california/400x250/san-diego-temple-765109-wallpaper.jpg"
        },
        {
            templeName: "Córdoba Argentina",
            location: "Córdoba, Argentina",
            dedicated: "2015, May, 17",
            area: 34369,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/cordoba-argentina/400x250/cordoba-argentina-temples-buildings-1436938-wallpaper.jpg"
        },
        {
            templeName: "Chicago Illinois",
            location: "Chicago, Illinois",
            dedicated: "1985, August, 9",
            area: 37062,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/chicago-illinois/400x250/Chicago-Temple_0738.jpg"
        },
    ];

    const container = document.getElementById('tiles-container');

    temples.forEach(temple => {
        const tile = document.createElement('div');
        tile.classList.add('tile', 'temple');
        tile.dataset.dedicated = new Date(temple.dedicated).getFullYear();
        tile.dataset.area = temple.area;
        
        const title = document.createElement('h2');
        title.textContent = temple.templeName;
        tile.appendChild(title);

        const location = document.createElement('p');
        location.innerHTML = `<strong>Location:</strong> ${temple.location}`;
        tile.appendChild(location);

        const dedicated = document.createElement('p');
        dedicated.innerHTML = `<strong>Dedicated:</strong> ${temple.dedicated}`;
        tile.appendChild(dedicated);

        const area = document.createElement('p');
        area.innerHTML = `<strong>Area:</strong> ${temple.area} sq ft`;
        tile.appendChild(area);

        const image = document.createElement('img');
        image.src = temple.imageUrl;
        image.alt = temple.templeName;
        image.loading = "lazy";
        tile.appendChild(image);

        container.appendChild(tile);
    });

    const menuBtn = document.querySelector('.menu-btn');
    const navigation = document.querySelector('.navigation');
    let menuOpen = false;

    menuBtn.addEventListener('click', () => {
        menuBtn.classList.toggle('open');
        navigation.classList.toggle('showMenu');
        menuOpen = !menuOpen;
    });

    // Function to show all temples if "home is selected"
    const showAllTemples = () => {
        console.count("Home menu selected or page reset");
        const temples = document.querySelectorAll('.temple');
        temples.forEach(temple => {
            temple.style.display = 'block';
        });
    };

    // Function to filter temples according to the dataset from each temple tile
    const filterTemples = (conditionFn) => {
        const temples = document.querySelectorAll('.temple');
        temples.forEach(temple => {
            console.log(`This is a temple selected - dataset: ${JSON.stringify(temple.textContent)}`);
        });
        temples.forEach(temple => {
            if (conditionFn(temple)) {
                console.log(`This temple is now visible: ${temple.dataset.menuLink}`);
                temple.style.display = 'block';
            } else {
                console.log(`This temple is filtered out: ${temple.textContent}`);
                temple.style.display = 'none';
            }
        });
    };

    // Check when nav menu is clicked and find ot which items was clicked
    const handleMenuClick = (event) => {
        event.preventDefault();  // Prevent the default link behavior
        const menuItem = event.target.textContent;  // Get the text of the clicked menu item
        console.log(`Which menu was selected?: ${menuItem}`);
        switch (menuItem) {
            
            case 'Home':
                showAllTemples();
                break;
            case 'Old':
                filterTemples(temple => parseInt(temple.dataset.dedicated) < 1900);
                break;
            case 'New':
                filterTemples(temple => parseInt(temple.dataset.dedicated) > 2000);
                break;
            case 'Large':
                filterTemples(temple => parseInt(temple.dataset.area) > 90000);
                break;
            case 'Small':
                filterTemples(temple => parseInt(temple.dataset.area) < 10000);
                break;
            default:
                showAllTemples();
        }
        
        // Close the nav menu after clicking a menu item
        menuBtn.classList.remove('open');
        navigation.classList.remove('showMenu');
        menuOpen = false;
    };

    // Add event listeners to each menu link
    const menuLinks = document.querySelectorAll('.menuLink');
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener('click', handleMenuClick);
    });
});




