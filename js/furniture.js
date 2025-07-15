const cardBox = document.querySelector(".cardbox");
let key = 0
    function renderCards() {
        fetch("./json/furniture.json")
        .then((res)=> res.json())
        .then((data)=> {

            cardBox.innerHTML = "";
      
            data.forEach((product) => {
              const {
                brand,
                model,
                category,
                material,
                color,
                dimensions,
                features,
                assembly_required,
                warranty_years,
                price_usd,
                image,
                id
              } = product;
      
              const price_inr = Math.round(price_usd * 83); // USD to INR approx
      
              const card = document.createElement("a");
              card.className = "bg-white w-full flex flex-col sm:flex-row p-4 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 rounded-xl";
                  card.setAttribute("href", `product.html?id=${id}&json=furniture`);
              card.innerHTML = `
                <!-- Image -->
                <div class="w-full sm:w-[220px] flex items-center justify-center mb-4 sm:mb-0">
                  <img src="${image}" alt="${model}" class="object-contain max-h-[250px] rounded" />
                </div>
      
                <!-- Details -->
                <div class="flex-1 px-4 py-2">
                  <h2 class="text-lg font-semibold text-gray-800">${brand} - ${model}</h2>
                  <p class="text-sm text-gray-600 mt-1">${category}</p>
                  <ul class="list-disc list-inside text-sm text-gray-700 mt-3 space-y-0.5">
                    <li><strong>Material:</strong> ${material}</li>
                    <li><strong>Color:</strong> ${color}</li>
                    <li><strong>Dimensions:</strong> ${dimensions}</li>
                    <li><strong>Features:</strong> ${features.join(", ")}</li>
                    <li><strong>Assembly:</strong> ${assembly_required ? "Required" : "Not Required"}</li>
                    <li><strong>Warranty:</strong> ${warranty_years} years</li>
                  </ul>
                </div>
      
                <!-- Price -->
                <div class="w-full sm:w-[160px] flex flex-col items-start px-4 justify-center mt-4 sm:mt-0">
                  <div class="text-xl font-bold text-gray-800">₹${price_inr.toLocaleString()}</div>
                </div>
              `;
      
              cardBox.appendChild(card);
              key++
            });
        })
    }

    renderCards();