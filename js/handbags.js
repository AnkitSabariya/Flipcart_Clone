const cardBox = document.querySelector(".cardbox");
let key= 0
function loadProducts() {
  fetch(`./json/handbags.json`)
  .then((res)=> res.json())
  .then((data)=> {
      cardBox.innerHTML = '';
    data.forEach((product) => {
            const {
                brand,
                model,
                category,
                gender,
                fit,
                fabric,
                sizes,
                color,
                price,
                image,
                wash,
                short_description,
                id
            } = product;

    let currentImg = 0;

    const card = document.createElement("a");
    card.className =
        "max-w-[350px] bg-white flex flex-col  rounded-lg overflow-hidden shadow hover:shadow-lg transition-all duration-300 group cursor-pointer ";
            card.setAttribute("href", `product.html?id=${id}&json=handbags`);
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
        <p class="text-sm text-gray-700">${model} ${fabric} ${wash}</p>
        <div class="text-base font-bold text-gray-900 mt-1">₹<span id="price">${Math.round(price)}</span></div>
    </div>
        `;

    cardBox.appendChild(card);
    key++

  });
})
}

loadProducts();