document.addEventListener('DOMContentLoaded', function() {
  const searchButton = document.querySelector('.search-button');
  const searchInput = document.querySelector('#search-input');
  let lunrIndex = null;
  let store = {};

  fetch('/assets/json/search-index.json')
    .then(response => {
        if (!response.ok) {
        throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        if (!data) {
        throw new Error('JSON data is empty or invalid');
        }
    lunrIndex = lunr.Index.load(data); 
    function performSearch(query) {
        const results = lunrIndex.search(query);
        displayResults(results);
    }

    function displayResults(results) {
      const searchResults = document.getElementById('searchResults');
      searchResults.innerHTML = '';

      if (results.length === 0) {
        searchResults.style.display = 'none';
        return;
      }

      searchResults.style.display = 'block';

      results.forEach(result => {
        const a = document.createElement('a');
        a.href = result.ref;
        console.log('Result ref:', result.ref);
        console.log('Store item:', result);
        a.textContent = store[result.ref]?.title || 'Untitled';
        searchResults.appendChild(a);
        const br = document.createElement('br');
        searchResults.appendChild(br);
      });
    }


    searchInput.addEventListener('input', function() {
        const query = this.value;
        performSearch(query);
    });
    })
    .catch(error => console.error('Error loading search index global:', error));

  searchButton.addEventListener('click', function(e) {
    e.preventDefault();
    searchInput.classList.toggle('active');
    if (searchInput.classList.contains('active')) {
      searchInput.focus();
    }
  });

  // Close search when clicking outside
  document.addEventListener('click', function(e) {
    if (!e.target.closest('.search-container')) {
      searchInput.classList.remove('active');
    }
  });

  // Close search when pressing Escape
  searchInput.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      searchInput.classList.remove('active');
    }
  });
});
