const params = new URLSearchParams(window.location.search);
const id = params.get("id");
const json = params.get("json");

fetch(`./json/${json}.json`)
  .then(res => res.json())
  .then(data => {
    const product = data.products.find(p => p.id == id);
    if (!product) {
      alert("Product not found!");
      return;
    }

    // Populate UI
    document.getElementById("productTitle").textContent = product.model;
    document.getElementById("mainImage").src = product.images[0];
    document.getElementById("currentPrice").textContent = `₹${product.price}`;
    const originalPrice = Math.round(product.price / (1 - product.discountPercentage / 100));
    document.getElementById("originalPrice").textContent = `₹${originalPrice}`;
    document.getElementById("discount").textContent = `${product.discountPercentage}% off`;
    document.getElementById("ratingValue").textContent = product.rating;
    document.getElementById("ratingText").textContent = `${Math.floor(product.rating * 10)} Ratings`;

    // Offers example
    const offersList = document.getElementById("offersList");
    const offer = document.createElement("div");
    offer.textContent = `Bank Offer: Save ${product.discountPercentage}%`;
    offersList.appendChild(offer);

    // Specifications (using category here)
    const specs = document.getElementById("specificationsList");
    product.category.forEach(cat => {
      const spec = document.createElement("div");
      spec.textContent = cat;
      specs.appendChild(spec);
    });

    // Thumbnails
    const thumbs = document.getElementById("thumbnailContainer");
    product.images.forEach(imgUrl => {
      const img = document.createElement("img");
      img.src = imgUrl;
      img.style.width = "50px";
      img.style.height = "50px";
      img.style.marginRight = "10px";
      img.style.objectFit ="contain"
      img.style.cursor = "pointer";
      img.onclick = () => {
        document.getElementById("mainImage").src = imgUrl;
      };
      thumbs.appendChild(img);
    });

    // Add to cart
    window.addToCart = () => {
      let cart = JSON.parse(localStorage.getItem("cart")) || [];
      cart.push(product);
      localStorage.setItem("cart", JSON.stringify(cart));
      alert(`${product.model} added to cart!`);
    };

  });
