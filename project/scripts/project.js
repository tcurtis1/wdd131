document.addEventListener('DOMContentLoaded', () => {
    const lastModified = document.getElementById('last-modified');
    lastModified.textContent = document.lastModified;

    const visitorCountElement = document.getElementById('visitor-count');
    let visitorCount = localStorage.getItem('visitorCount') || 0;
    visitorCount++;
    localStorage.setItem('visitorCount', visitorCount);
    visitorCountElement.textContent = `Visitor Count: ${visitorCount}`;

    const mainnav = document.querySelector('.navigation');
    const hambutton = document.querySelector('#menu');

    hambutton.addEventListener('click', () => {
        mainnav.classList.toggle('show');
        hambutton.classList.toggle('show');
    });

    // Sorting and searching functions
    const searchInput = document.getElementById('search');
    if (searchInput) {
        searchInput.addEventListener('keyup', () => {
            const filter = searchInput.value.toLowerCase();
            const rows = document.querySelectorAll('#project-table tbody tr');
            rows.forEach(row => {
                const cells = row.getElementsByTagName('td');
                let match = false;
                for (let i = 0; i < cells.length; i++) {
                    if (cells[i].textContent.toLowerCase().indexOf(filter) > -1) {
                        match = true;
                        break;
                    }
                }
                row.style.display = match ? '' : 'none';
            });
        });
    }

    window.sortTable = (n) => {
        const table = document.getElementById('project-table');
        let switching = true, shouldSwitch, dir = 'asc', switchCount = 0;
        while (switching) {
            switching = false;
            const rows = table.rows;
            for (let i = 1; i < rows.length - 1; i++) {
                shouldSwitch = false;
                const x = rows[i].getElementsByTagName('TD')[n];
                const y = rows[i + 1].getElementsByTagName('TD')[n];
                if (dir === 'asc') {
                    if (x.textContent.toLowerCase() > y.textContent.toLowerCase()) {
                        shouldSwitch = true;
                        break;
                    }
                } else if (dir === 'desc') {
                    if (x.textContent.toLowerCase() < y.textContent.toLowerCase()) {
                        shouldSwitch = true;
                        break;
                    }
                }
            }
            if (shouldSwitch) {
                rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
                switching = true;
                switchCount++;
            } else {
                if (switchCount === 0 && dir === 'asc') {
                    dir = 'desc';
                    switching = true;
                }
            }
        }
    };
});
