const cardBox = document.querySelector(".cardbox");
let key= 0
// "id": 18,
//     "brand": "Reynolds",
//     "model": "Gel Pens Pack of 10",
//     "category": "School Supplies",
//     "type": "Gel Pens",
//     "material": "Plastic",
//     "color": "Blue",
//     "dimensions": "14 cm each",
//     "features": ["Smooth ink", "Comfort grip"],
//     "price": 75,
//     "image": [
//   "https://m.media-amazon.com/images/I/71cMuo8+s5L._UF1000,1000_QL80_.jpg",
//   "https://images.meesho.com/images/products/446381834/kx9rt_512.webp"
// ] ,
//     "short_description": "High
function loadProducts() {
  fetch(`./json/schoolsupplies.json`)
  .then((res)=> res.json())
  .then((data)=> {
      cardBox.innerHTML = '';
    data.forEach((product) => {
            const {
                brand,
                model,
                category,
                type,
                material,
                fabric,
                sizes,
                color,
                price,
                image,
                short_description,
                id
            } = product;

    let currentImg = 0;

    const card = document.createElement("a");
    card.className =
        "max-w-[350px] bg-white flex flex-col  rounded-lg overflow-hidden shadow hover:shadow-lg transition-all duration-300 group cursor-pointer ";
            card.setAttribute("href", `product.html?id=${id}&json=schoolsupplies`);
        card.innerHTML = `
        <!-- Image Section -->
    <div class="relative w-full h-[76%] overflow-hidden">
        <img src="${image}" 
            alt="${model}"
            class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />

       
    </div>

    <!-- Product Info -->
    <div class="p-3 space-y-1 text-center">
        <h2 class="text-sm font-semibold text-gray-800">${brand} </h2>
        <p class="text-sm text-gray-700">${model} ${category} ${type}</p>
        <div class="text-base font-bold text-gray-900 mt-1">₹<span id="price">${Math.round(price)}</span></div>
    </div>
        `;

    cardBox.appendChild(card);
    key++

  });
})
}

loadProducts();