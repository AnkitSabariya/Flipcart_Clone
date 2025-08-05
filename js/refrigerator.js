const cardBox = document.querySelector(".cardbox");
key = 0
function renderRefrigeratorCard() {
    fetch("./json/refrigerator.json")
    .then((res)=> res.json())
    .then((data)=> {

        cardBox.innerHTML = "";
        data.forEach((product, index) => {
          const {
            brand,
            model,
            type,
            capacity_liters,
            energy_rating,
            smart_features,
            price_usd,
            weight_kg,
            dimensions_mm,
            images,
            short_description,
            features,
            id
          } = product;
      
          let currentImg = 0;
      
          const card = document.createElement("a");
          card.className =
            "bg-white w-full flex flex-col sm:flex-row p-4 border border-gray-200 cursor-pointer shadow-sm hover:shadow-md transition";
              card.setAttribute("href", `product.html?id=${id}&json=refrigerator`);
          card.innerHTML = `
            <!-- Image Carousel -->
            <div class="relative w-full sm:w-[250px] flex items-center justify-center">
              <img src="${images[0]}" id="img-${index}" class="object-contain h-[200px] max-w-full transition-all duration-300">
            </div>
      
            <!-- Product Info -->
            <div class="flex-1 px-4 py-2">
              <h2 class="text-lg font-semibold text-gray-800">${brand} ${model} (${type})</h2>
              <p class="text-sm text-gray-600 mt-1">${short_description}</p>
              <ul class="list-disc list-inside text-sm text-gray-700 mt-3 space-y-0.5">
                <li><strong>Capacity:</strong> ${capacity_liters} L</li>
                <li><strong>Energy Rating:</strong> ${energy_rating}</li>
                <li><strong>Smart Features:</strong> ${smart_features.join(", ")}</li>
                <li><strong>Features:</strong> ${features}</li>
                <li><strong>Dimensions:</strong> ${dimensions_mm.join(" x ")} mm</li>
                <li><strong>Weight:</strong> ${weight_kg} kg</li>
              </ul>
            </div>
      
            <!-- Pricing Section -->
            <div class="w-full sm:w-[150px] flex flex-col items-start px-4 justify-center mt-4 sm:mt-0">
              <div class="text-xl font-bold text-gray-800">₹${Math.round(
                price_usd * 83
              )}</div>
            </div>
          `;
      
          cardBox.appendChild(card);
          key++
      
          const imgEl = card.querySelector(`#img-${index}`);

        // Hover to auto slide images
        let interval;
        card.addEventListener("mouseenter", () => {
        interval = setInterval(() => {
            currentImg = (currentImg + 1) % images.length;
            imgEl.src = images[currentImg];
        }, 1000);
        });

        card.addEventListener("mouseleave", () => {
        clearInterval(interval);
        });
        });
    })
}


renderRefrigeratorCard();