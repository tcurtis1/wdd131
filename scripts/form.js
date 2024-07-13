const products = [
    {
      id: 'fc-1888',
      name: "flux capacitor",
      avgRating: 4.5
    },
    {
      id: 'fc-2050',
      name: "power laces",
      avgRating: 4.7
    },
    {
      id: 'fs-1987',
      name: "time circuits",
      avgRating: 3.5
    },
    {
      id: 'ac-2000',
      name: "low voltage reactor",
      avgRating: 3.9
    },
    {
      id: 'jj-1969',
      name: "warp equalizer",
      avgRating: 5.0
    }
  ];
  
  document.addEventListener('DOMContentLoaded', () => {
      const productNameSelect = document.getElementById('productName');
      
      products.forEach(product => {
          const option = document.createElement('option');
          option.value = product.name;
          option.textContent = product.name;
          productNameSelect.appendChild(option);
      });
  });
  
  // Counter logic for review.html (this should be included in review.html)
  // Assuming you navigate to review.html upon form submission
  
  // scripts for review.html
  if (window.location.pathname.endsWith('review.html')) {
      let reviewCount = localStorage.getItem('reviewCount') || 0;
      reviewCount++;
      localStorage.setItem('reviewCount', reviewCount);
      document.body.innerHTML += `<p>Review Count: ${reviewCount}</p>`;
  }
  