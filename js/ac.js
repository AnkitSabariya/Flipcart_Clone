const cardBox = document.querySelector(".cardbox");
let key = 0
function renderCards() {
    fetch("./json/ac.json")
    .then((res)=> res.json())
    .then((data)=> {

        cardBox.innerHTML = "";
      
        data.forEach((product, index) => {
          const {
            brand,
            model,
            type,
            capacity_ton,
            energy_rating,
            cooling_technology,
            smart_features,
            price_inr,
            images,
            short_description,
            features,
            id
          } = product;
      
          let currentImg = 0;
      
          const card = document.createElement("a");
          card.className =
            "bg-white w-full sm:h-[320px] flex flex-col sm:flex-row p-4 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300";
  card.setAttribute("href", `product.html?id=${id}&json=ac`);
          card.innerHTML = `
            <!-- Image with slider -->
            <div class="relative w-full sm:w-[250px] flex items-center justify-center">
              <img src="${images[0]}" id="img-${index}" class="object-contain h-[200px] max-w-full transition-all duration-300" />
            </div>
      
            <!-- Product Info -->
            <div class="flex-1 px-4 py-2">
              <h2 class="text-lg font-semibold text-gray-800">${brand} ${model}</h2>
              <p class="text-sm text-gray-600 mt-1">${short_description}</p>
              <ul class="list-disc list-inside text-sm text-gray-700 mt-3 space-y-0.5">
                <li><strong>Type:</strong> ${type}</li>
                <li><strong>Capacity:</strong> ${capacity_ton} Ton</li>
                <li><strong>Energy Rating:</strong> ${energy_rating}</li>
                <li><strong>Cooling Tech:</strong> ${cooling_technology}</li>
                <li><strong>Smart Features:</strong> ${smart_features.length > 0 ? smart_features.join(", ") : "N/A"}</li>
                <li><strong>Extra:</strong> ${features}</li>
              </ul>
            </div>
      
            <!-- Pricing Section -->
            <div class="w-full sm:w-[150px] flex flex-col items-start px-4 justify-center mt-4 sm:mt-0">
              <div class="text-xl font-bold text-gray-800">₹${price_inr.toLocaleString()}</div>
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
    fetch("./json/ac.json")
    .then((res)=> res.json())
    .then((data)=> {
        localStorage.clear()
        localStorage.setItem("image",`${data[key].images[0]}`)
        localStorage.setItem("model",`${data[key].model}`)
        localStorage.setItem("brand",`${data[key].brand}`)
        localStorage.setItem("type",`${data[key].type}`)
        localStorage.setItem("capacity",`${data[key].capacity_ton}`)
        localStorage.setItem("rating",`${data[key].energy_rating}`)
        localStorage.setItem("cool",`${data[key].cooling_technology}`)
        localStorage.setItem("smart_features",`${data[key].smart_features}`)
        localStorage.setItem("desp",`${data[key].short_description}`)
        localStorage.setItem("features",`${data[key].features}`)
        localStorage.setItem("price",`${data[key].price_inr}`)
        
    })

}
renderCards();
