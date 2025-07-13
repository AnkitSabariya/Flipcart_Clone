const cardBox = document.querySelector(".cardbox");
let key = 0
function renderWasherCard() {
    fetch("./json/washingmachine.json")
        .then((res) => res.json())
        .then((data) => {

            cardBox.innerHTML = "";
            data.forEach((product, index) => {
                const {
                    brand,
                    model,
                    type,
                    load_capacity_kg,
                    dryer_capacity_kg,
                    energy_rating,
                    smart_features,
                    spin_speed_rpm,
                    price_usd,
                    weight_kg,
                    dimensions_mm,
                    images,
                    short_description,
                    features
                } = product;

                let currentImg = 0;

                const card = document.createElement("a");
                card.className =
                    "bg-white w-full sm:h-auto flex flex-col sm:flex-row p-4 border border-gray-200 cursor-pointer shadow-sm hover:shadow-md transition";
                 // card.setAttribute("href","#")
                card.setAttribute("onclick",`local(${key})`)
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
                <li><strong>Load Capacity:</strong> ${load_capacity_kg}kg</li>
                <li><strong>Dryer Capacity:</strong> ${dryer_capacity_kg}kg</li>
                <li><strong>Energy Rating:</strong> ${energy_rating}</li>
                <li><strong>Spin Speed:</strong> ${spin_speed_rpm} RPM</li>
                <li><strong>Smart Features:</strong> ${smart_features.join(", ")}</li>
                <li><strong>Features:</strong> ${features}</li>
                <li><strong>Dimensions:</strong> ${dimensions_mm.join(" x ")} mm</li>
                <li><strong>Weight:</strong> ${weight_kg} kg</li>
              </ul>
            </div>
      
            <!-- Pricing Section -->
            <div class="w-full sm:w-[150px] flex flex-col items-start px-4 justify-center mt-4 sm:mt-0">
              <div class="text-xl font-bold text-gray-800">₹${(price_usd * 83).toFixed(0)}</div>
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
function local(key){
    fetch("./json/washingmachine.json")
    .then((res)=> res.json())
    .then((data)=> {
        localStorage.clear()
        localStorage.setItem("image", data[key].images[0]);
        localStorage.setItem("brand", data[key].brand);
        localStorage.setItem("model", data[key].model);
        localStorage.setItem("desp", data[key].short_description);
        localStorage.setItem("type", data[key].type);
        localStorage.setItem("price", Math.round(data[key].price_usd * 83));
        localStorage.setItem("capacity", data[key].load_capacity_kg);
        localStorage.setItem("dryer_capacity_kg", data[key].dryer_capacity_kg);
        localStorage.setItem("raing", data[key].energy_rating);
        localStorage.setItem("spin_speed_rpm", data[key].spin_speed_rpm);
        localStorage.setItem("smart_features", data[key].smart_features.join(", "));
        localStorage.setItem("features", data[key].features);
        localStorage.setItem("dimensions", data[key].dimensions_mm.join(" x "));
        localStorage.setItem("weight", data[key].weight_kg);
        
    })
}
renderWasherCard();