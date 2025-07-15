const params = new URLSearchParams(window.location.search);
const id = params.get("id");
const json = params.get("json");

fetch(`./json/${json}.json`)
  .then((res) => res.json())
  .then((data) => {
    // Name diffrent so Data Nomrlistation
    const normalizedData = data.map((raw, i) => {
      return {
        id: raw.id || i + 1,
        title: (raw.brand && (raw.model || raw.name || raw.title)
          ? (raw.model || raw.name || raw.title)
              .toLowerCase()
              .includes(raw.brand.toLowerCase())
            ? raw.model || raw.name || raw.title
            : `${raw.brand} ${raw.model || raw.name || raw.title}`
          : raw.model || raw.name || raw.title || "No Title"
        ).trim(),
        images: Array.isArray(raw.images) ? raw.images
      : raw.image ? [raw.image]
      : raw.image_url ? [raw.image_url]
      : [],
           price: raw.price || raw.price_usd || raw.price_inr || 0,
            discountPercentage: raw.discountPercentage || 10,
      rating: raw.rating || 4.5,
      category: raw.category || [],
      };
    });

    const product = normalizedData.find(p => p.id == id);
    if (!product) {
      alert("Product not found!");
      return;
    }
    console.log(data);

   
    // 3️⃣ Populate UI
    document.getElementById("productTitle").textContent = product.title;

    // Image check
    document.getElementById("mainImage").src = product.images[0] || "https://via.placeholder.com/400x400";

    document.getElementById("currentPrice").textContent = `₹${product.price}`;

    const originalPrice = Math.round(
      product.price / (1 - product.discountPercentage / 100)
    );
    document.getElementById("originalPrice").textContent = `₹${originalPrice}`;
    document.getElementById("discount").textContent = `${product.discountPercentage}% off`;
    document.getElementById("ratingValue").textContent = product.rating;
    document.getElementById("ratingText").textContent = `${Math.floor(product.rating * 10)} Ratings`;

    // Offers
    const offersList = document.getElementById("offersList");
    const offer = document.createElement("div");
    offer.textContent = `Bank Offer: Save ${product.discountPercentage}%`;
    offersList.appendChild(offer);

    // Specifications
    const specs = document.getElementById("specificationsList");
    if (Array.isArray(product.category)) {
      product.category.forEach(cat => {
        const spec = document.createElement("div");
        spec.textContent = cat;
        specs.appendChild(spec);
      });
    } else if (typeof product.category === "string") {
      const spec = document.createElement("div");
      spec.textContent = product.category;
      specs.appendChild(spec);
    }

    // Thumbnails
    const thumbs = document.getElementById("thumbnailContainer");
    product.images.forEach(imgUrl => {
      const img = document.createElement("img");
      img.src = imgUrl;
      img.style.width = "50px";
      img.style.height = "50px";
      img.style.marginRight = "10px";
      img.style.objectFit = "contain";
      img.style.cursor = "pointer";
      img.onclick = () => {
        document.getElementById("mainImage").src = imgUrl;
      };
      thumbs.appendChild(img);
    });

    // Add to Cart example
    window.addToCart = () => {
      let cart = JSON.parse(localStorage.getItem("cart")) || [];
      cart.push(product);
      localStorage.setItem("cart", JSON.stringify(cart));
      alert(`${product.title} added to cart!`);
    };
  });
