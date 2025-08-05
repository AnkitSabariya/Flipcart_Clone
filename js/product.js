// const params = new URLSearchParams(window.location.search);
// const id = params.get("id");
// const json = params.get("json");
// let product;
// function buyNow() {
//     // Get current product data
//      if (!product) {
//         alert("Product data not loaded yet. Please wait and try again.");
//         return;
//     }
//     const productData = {
//         id: currentProduct.id,
//         title: currentProduct.title,
//         price: currentProduct.price,
//         discountPercentage: currentProduct.discountPercentage,
//         category: currentProduct.category,
//         images: currentProduct.images,
//         image: currentProduct.thumbnail, // fallback
//         qty: 1
//     };
    
//     // Store product data for direct buy
//     localStorage.setItem("directBuy", JSON.stringify(productData));
    
//     // Navigate to bill page
//     window.location.href = "bill.html";
// }
// fetch(`./json/${json}.json`)
//   .then((res) => res.json())
//   .then((data) => {
//     // Name diffrent so Data Nomrlistation
//     const normalizedData = data.map((raw, i) => {
//       return {
//         id: raw.id || i + 1,
//         title: (raw.brand && (raw.model || raw.name || raw.title)
//           ? (raw.model || raw.name || raw.title)
//               .toLowerCase()
//               .includes(raw.brand.toLowerCase())
//             ? raw.model || raw.name || raw.title
//             : `${raw.brand} ${raw.model || raw.name || raw.title}`
//           : raw.model || raw.name || raw.title || "No Title"
//         ).trim(),
//         images: Array.isArray(raw.images)
//           ? raw.images
//           : Array.isArray(raw.image)
//           ? raw.image
//           : raw.image
//           ? [raw.image]
//           : raw.image_url
//           ? [raw.image_url]
//           : [],
//         price: raw.price || raw.price_usd || raw.price_inr || 0,
//         discountPercentage: raw.discountPercentage || 10,
//         rating: raw.rating || 4.5,
//         category: raw.category || [],
//       };
//     });

//     product = normalizedData.find((p) => p.id == id);
//     if (!product) {
//       alert("Product not found!");
//       return;
//     }
//     product.json = json;

//     // 3️⃣ Populate UI
//     document.getElementById("productTitle").textContent = product.title;

//     // Image check
//     document.getElementById("mainImage").src =
//       product.images[0] || "https://via.placeholder.com/400x400";

//     document.getElementById("currentPrice").textContent = `₹${product.price}`;

//     const originalPrice = Math.round(
//       product.price / (1 - product.discountPercentage / 100)
//     );
//     document.getElementById("originalPrice").textContent = `₹${originalPrice}`;
//     document.getElementById(
//       "discount"
//     ).textContent = `${product.discountPercentage}% off`;
//     document.getElementById("ratingValue").textContent = product.rating;
//     document.getElementById("ratingText").textContent = `${Math.floor(
//       product.rating * 10
//     )} Ratings`;

//     // Offers
//     const offersList = document.getElementById("offersList");
//     const offer = document.createElement("div");
//     offer.textContent = `Bank Offer: Save ${product.discountPercentage}%`;
//     offersList.appendChild(offer);

//     // Specifications
//     const specs = document.getElementById("specificationsList");
//     if (Array.isArray(product.category)) {
//       product.category.forEach((cat) => {
//         const spec = document.createElement("div");
//         spec.textContent = cat;
//         specs.appendChild(spec);
//       });
//     } else if (typeof product.category === "string") {
//       const spec = document.createElement("div");
//       spec.textContent = product.category;
//       specs.appendChild(spec);
//     }

//     // Thumbnails
//     const thumbs = document.getElementById("thumbnailContainer");
//     product.images.forEach((imgUrl) => {
//       const img = document.createElement("img");
//       img.src = imgUrl;
//       img.style.width = "50px";
//       img.style.height = "50px";
//       img.style.marginRight = "10px";
//       img.style.objectFit = "contain";
//       img.style.cursor = "pointer";
//       img.onclick = () => {
//         document.getElementById("mainImage").src = imgUrl;
//       };
//       thumbs.appendChild(img);
//     });

//     //======== add to cart logic=========
//   });
// function addToCart() {
//   let cart = JSON.parse(localStorage.getItem("cart")) || [];
//   const exit = cart.find(
//     (item) => item.id === product.id && item.json == product.json
//   );
//   if (exit) {
//     exit.qty += 1;
//     alert(`${exit.title} : ${exit.qty}`);
//   } else {
//     product.qty = 1;
//     cart.push(product);
//   }
//   localStorage.setItem("cart", JSON.stringify(cart));
//    updateCartCounter();
  
// }
// document.querySelectorAll('.add-to-cart').forEach(btn => {
//   btn.addEventListener('click', () => {
//     const product = {
//       id: btn.dataset.id,
//       json: btn.dataset.json
//       // aur bhi fields daal sakta hai yahan
//     };
//     addToCart(product);
//   });
// });
const params = new URLSearchParams(window.location.search);
const id = params.get("id");
const json = params.get("json");
let product;

// Fixed buyNow function - use 'product' instead of 'currentProduct'
function buyNow() {
    // Check if product data is loaded
    if (!product) {
        alert("Product data not loaded yet. Please wait and try again.");
        return;
    }

    // Get current product data
    const productData = {
        id: product.id,
        title: product.title,
        price: product.price,
        discountPercentage: product.discountPercentage,
        category: product.category,
        images: product.images,
        image: product.images[0], // fallback
        qty: 1,
        json: product.json
    };

    console.log("Product data for buy now:", productData); // Debug log

    // Store product data for direct buy
    localStorage.setItem("directBuy", JSON.stringify(productData));

    // Navigate to bill page
    window.location.href = "bill.html";
}

fetch(`./json/${json}.json`)
    .then((res) => res.json())
    .then((data) => {
        // Name different so Data Normalization
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
                images: Array.isArray(raw.images)
                    ? raw.images
                    : Array.isArray(raw.image)
                    ? raw.image
                    : raw.image
                    ? [raw.image]
                    : raw.image_url
                    ? [raw.image_url]
                    : [],
                price: raw.price || raw.price_usd || raw.price_inr || 0,
                discountPercentage: raw.discountPercentage || 10,
                rating: raw.rating || 4.5,
                category: raw.category || [],
            };
        });

        product = normalizedData.find((p) => p.id == id);

        if (!product) {
            alert("Product not found!");
            return;
        }

        product.json = json;

        // 3️⃣ Populate UI
        document.getElementById("productTitle").textContent = product.title;

        // Image check
        document.getElementById("mainImage").src =
            product.images[0] || "https://via.placeholder.com/400x400";

        document.getElementById("currentPrice").textContent = `₹${product.price.toLocaleString()}`;

        const originalPrice = Math.round(product.price / (1 - product.discountPercentage / 100));
        document.getElementById("originalPrice").textContent = `₹${originalPrice.toLocaleString()}`;

        document.getElementById("discount").textContent = `${product.discountPercentage}% off`;

        document.getElementById("ratingValue").textContent = product.rating;
        document.getElementById("ratingText").textContent = `${Math.floor(product.rating * 10)} Ratings`;

        // Offers
        const offersList = document.getElementById("offersList");
        const offer = document.createElement("div");
        offer.innerHTML = `<i class="fas fa-tag text-green-600 mr-2"></i>Bank Offer: Save ${product.discountPercentage}%`;
        offer.className = "text-sm";
        offersList.appendChild(offer);

        // Specifications
        const specs = document.getElementById("specificationsList");
        if (Array.isArray(product.category)) {
            product.category.forEach((cat) => {
                const spec = document.createElement("div");
                spec.textContent = cat;
                spec.className = "text-sm";
                specs.appendChild(spec);
            });
        } else if (typeof product.category === "string") {
            const spec = document.createElement("div");
            spec.textContent = product.category;
            spec.className = "text-sm";
            specs.appendChild(spec);
        }

        // Thumbnails
        const thumbs = document.getElementById("thumbnailContainer");
        product.images.forEach((imgUrl, index) => {
            const img = document.createElement("img");
            img.src = imgUrl;
            img.className = "w-16 h-16 object-contain cursor-pointer border border-gray-200 rounded-lg hover:border-blue-500 transition-colors";
            img.onclick = () => {
                document.getElementById("mainImage").src = imgUrl;
            };
            thumbs.appendChild(img);
        });

        console.log("Product loaded:", product); // Debug log
    })
    .catch((error) => {
        console.error("Error loading product:", error);
        alert("Error loading product data. Please try again.");
    });

function addToCart() {
    // Check if product data is loaded
    if (!product) {
        alert("Product data not loaded yet. Please wait and try again.");
        return;
    }

    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingItem = cart.find(
        (item) => item.id === product.id && item.json == product.json
    );

    if (existingItem) {
        existingItem.qty += 1;
        alert(`${existingItem.title} quantity updated: ${existingItem.qty}`);
    } else {
        const cartItem = {
            ...product,
            qty: 1
        };
        cart.push(cartItem);
        alert(`${product.title} added to cart!`);
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    
    // Update cart counter if function exists
    if (typeof updateCartCounter === 'function') {
        updateCartCounter();
    }
}

// Handle add to cart buttons with data attributes
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.add-to-cart').forEach(btn => {
        btn.addEventListener('click', () => {
            const productData = {
                id: btn.dataset.id,
                json: btn.dataset.json
                // you can add more fields here
            };
            addToCart(productData);
        });
    });
});