document.getElementById('search-btn').addEventListener('click', function() {
    let searchTerm = document.getElementById('search-box').value.toLowerCase();
    let products = document.querySelectorAll('.product-card');
  
    products.forEach(function(product) {
      let productName = product.querySelector('h3').innerText.toLowerCase();
      if (productName.includes(searchTerm)) {
        product.style.display = 'block';
      } else {
        product.style.display = 'none';
      }
    });
  });
  