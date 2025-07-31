fetch('thela.json')
  .then(res => res.json())
  .then(data => {
    const row = document.getElementById('productRow');
    data.forEach(product => {
      row.innerHTML += `
        <div class="product-box">
          <img src="${product.image[0]}" alt="${product.brand}">
          <div class="product-title">${product.brand} - ${product.model}</div>
          <div class="product-rating">${product.category} • ${product.fabric}</div>
          <div class="product-price">₹${product.price_usd}</div>
          <div class="product-offer">${product.occasion}</div>
        </div>
      `;
    });
  })
  .catch(err => console.error("JSON load error:", err));
