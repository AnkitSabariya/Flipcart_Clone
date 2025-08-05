const cardBox = document.querySelector(".cardbox");
let key = 0
    function renderCards() {
        fetch("./json/sarees.json")
        .then((res)=> res.json())
        .then((data)=>{

            cardBox.innerHTML = "";
      
            data.forEach((product) => {
              const {
                brand,
                model,
                category,
                weave,
                fabric,
                sizes,
                colors,
                price_usd,
                image,
                occasion,
                sleeve,
                featureTags,
                id
              } = product;
      
            //   const price_inr = Math.round(price_usd * 83); // USD to INR approx
      
              const card = document.createElement("a");
              card.className = "max-w-[350px] bg-white flex flex-col  rounded-lg overflow-hidden shadow hover:shadow-lg transition-all duration-300 group cursor-pointer";
             card.setAttribute("href", `product.html?id=${id}&json=sarees`);
              card.innerHTML = `
                            <!-- Image Section -->
              <div class="relative w-full h-[76%] overflow-hidden">
                  <img src="${image}" 
                      alt="${model}"
                      class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />

                  <!-- Sizes Slide on Hover -->
                  <div class="absolute bottom-0 left-0 w-full bg-white bg-opacity-90 px-3 py-2 translate-y-full group-hover:translate-y-0 transition-all duration-300 ease-in-out text-sm text-gray-800 text-center font-medium">
                  Sizes: S, M, L, XL
                  </div>
              </div>

              <!-- Product Info -->
              <div class="p-3 space-y-1 text-center">
                  <h2 class="text-sm font-semibold text-gray-800">${brand} </h2>
                  <p class="text-sm text-gray-700">${model} ${fabric} ${weave}</p>
                  <div class="text-base font-bold text-gray-900 mt-1">₹<span id="price">${Math.round(price_usd * 83)}</span></div>
              </div>
              `;
      
              cardBox.appendChild(card);
              key++
            });
        })
    }

    renderCards();