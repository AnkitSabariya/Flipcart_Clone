const cardBox = document.querySelector(".cardbox");
let key = 0
    function renderCards() {
        fetch("./json/watchesmen.json")
        .then((res)=> res.json())
        .then((data)=>{

            cardBox.innerHTML = "";
      
            data.forEach((product) => {
              const {
                brand,
                model,
                category,
                type,
                dial_shape,
                strap_material,
                water_resistant,
                color,
                price_usd,
                image,
                short_description
              } = product;
      
              const price_inr = Math.round(price_usd * 83); // USD to INR approx
      
              const card = document.createElement("a");
              card.className = "max-w-[350px] bg-white flex flex-col  rounded-lg overflow-hidden shadow hover:shadow-lg transition-all duration-300 group cursor-pointer";
            //   card.setAttribute("href","#")
                card.setAttribute("onclick",`local(${key})`)
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
                  <p class="text-sm text-gray-700">${model} ${type} ${dial_shape} ${strap_material}</p>
                  <div class="text-base font-bold text-gray-900 mt-1">₹<span id="price">${Math.round(price_usd * 83)}</span></div>
              </div>
              `;
      
              cardBox.appendChild(card);
              key++
            });
        })
    }
    function local(key){
    fetch("./json/watchesmen.json")
    .then((res)=> res.json())
    .then((data)=> {
        localStorage.clear()
        localStorage.setItem("image",`${data[key].image}`)
        localStorage.setItem("model",`${data[key].model}`)
        localStorage.setItem("brand",`${data[key].brand}`)
        localStorage.setItem("category",`${data[key].category}`)
        localStorage.setItem("type",`${data[key].type}`)
        localStorage.setItem("dial",`${data[key].dial_shape}`)
        localStorage.setItem("material",`${data[key].strap_material}`)
        localStorage.setItem("resistant",`${data[key].water_resistant}`)
        localStorage.setItem("color",`${data[key].color}`)
        localStorage.setItem("desp",`${data[key].short_description}`)
        const price_inr = Math.round(data[key].price_usd * 83);
        localStorage.setItem("price", price_inr);
        
    })
}
    renderCards();