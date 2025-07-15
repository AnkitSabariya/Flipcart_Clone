const cardBox = document.querySelector(".cardbox");
let key = 0
    function renderCards() {
        fetch("./json/curtains.json")
        .then((res)=> res.json())
        .then((data)=>{

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
                price_usd,
                image,
                short_description,
                id
            } = product;
      
              const price_inr = Math.round(price_usd * 83);
      
              const card = document.createElement("a");
              card.className = "bg-white w-full sm:h-[300px] h-auto flex flex-col sm:flex-row p-4 border items-center border-gray-200 rounded-lg shadow-sm hover:shadow-lg cursor-pointer transition";
            card.setAttribute("href", `product.html?id=${id}&json=curtains`);
              card.innerHTML = `
                <!-- Image -->
                <div class="w-full sm:w-[220px] flex items-center justify-center mb-4 sm:mb-0">
                  <img src="${image}" alt="${model}" class="object-contain max-h-[200px] rounded" />
                </div>
      
                <!-- Details -->
                <div class="flex-1 px-4 py-2">
                  <h2 class="text-lg font-semibold text-gray-800">${brand} - ${model}</h2>
                  <ul class="list-disc list-inside text-sm text-gray-700 mt-3 space-y-0.5">
                    <li><strong>Material:</strong> ${material}</li>
                    <li><strong>Color:</strong> ${color}</li>
                    <li><strong>Category:</strong> ${category}</li>
                    <li><strong>Dimensions:</strong> ${dimensions}</li>
                    <li><strong>Description:</strong> ${short_description}</li>
                    <li><strong>Features:</strong> ${features.join(", ")}</li>
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