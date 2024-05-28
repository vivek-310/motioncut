document.getElementById('search-btn').addEventListener('click', function() {
  let searchQuery = document.getElementById('search').value;
  alert('Searching for: ' + searchQuery);
  // You can add your search functionality here
});

const buyButtons = document.querySelectorAll('.buy-btn');
buyButtons.forEach(button => {
  button.addEventListener('click', () => {
      alert('Item added to cart!');
  });
});
