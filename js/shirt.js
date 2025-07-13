const cardBox = document.querySelector(".cardbox");
let key = 0
    function renderCards() {
        fetch("./json/shirt.json")
        .then((res)=> res.json())
        .then((data)=>{

            cardBox.innerHTML = "";
      
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
                price_usd,
                image,
                pattern,
                occasion,
                sleeve,
                featureTags
              } = product;
      
              const price_inr = Math.round(price_usd * 83); // USD to INR approx
      
              const card = document.createElement("a");
              card.className = "bg-white w-full flex flex-col items-center p-4 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 rounded-xl";
            //   card.setAttribute("href","#")
                card.setAttribute("onclick",`local(${key})`)
              card.innerHTML = `
                <!-- Image -->
                <div class="w-full sm:w-[220px] flex items-center justify-center mb-4 sm:mb-0">
                  <img src="${image}" alt="${model}" class="object-contain max-h-[250px] w-full" />
                </div>
      
                <!-- Details -->
                <div class="flex-1 px-4 py-2">
                  <h2 class="text-lg font-semibold text-gray-800">${brand} ${model}</h2>
                  <p class="text-sm text-gray-600 mt-1">${occasion} wear ${category.toLowerCase()} shirt</p>
                  <ul class="list-disc list-inside text-sm text-gray-700 mt-3 space-y-0.5">
                    <li><strong>Category:</strong> ${category}</li>
                    <li><strong>Gender:</strong> ${gender}</li>
                    <li><strong>Fit:</strong> ${fit}</li>
                    <li><strong>Fabric:</strong> ${fabric}</li>
                    <li><strong>Pattern:</strong> ${pattern}</li>
                    <li><strong>Sleeve:</strong> ${sleeve} Sleeve</li>
                    <li><strong>Color:</strong> ${color}</li>
                    <li><strong>Sizes:</strong> ${sizes.join(", ")}</li>
                    <li><strong>Features:</strong> ${featureTags.join(", ")}</li>
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
    function local(key){
    fetch("./json/shirt.json")
    .then((res)=> res.json())
    .then((data)=> {
        localStorage.clear()
        localStorage.setItem("image",`${data[key].image}`)
        localStorage.setItem("model",`${data[key].model}`)
        localStorage.setItem("brand",`${data[key].brand}`)
        localStorage.setItem("category",`${data[key].category}`)
        localStorage.setItem("ocassion",`${data[key].occasion}`)
        localStorage.setItem("gender",`${data[key].gender}`)
        localStorage.setItem("fit",`${data[key].fit}`)
        localStorage.setItem("fabric",`${data[key].fabric}`)
        localStorage.setItem("color",`${data[key].color}`)
        localStorage.setItem("sizes",`${data[key].sizes}`)
        localStorage.setItem("desp",`${data[key].pattern}`)
        localStorage.setItem("features",`${data[key].featureTags}`)
        const price_inr = Math.round(data[key].price_usd * 83);
        localStorage.setItem("price", price_inr);
        
    })
}
    renderCards();