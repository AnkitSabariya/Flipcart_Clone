const cardBox = document.querySelector(".cardbox");
let key = 0
function renderCards() {
    fetch("./json/t-shirts.json")
    .then((res)=> res.json())
    .then((data)=> {
        
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
                images,
                short_description,
                features
            } = product;
            
            const price_inr = Math.round(price_usd * 83); // Approx conversion
            
            const card = document.createElement("a");
            card.className =
            "bg-white w-full flex flex-col items-start p-4 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300";
            // card.setAttribute("href","#")
            card.setAttribute("onclick",`local(${key})`)
            card.innerHTML = `
            <!-- Image -->
            <div class="w-full sm:w-[200px] flex items-center justify-center">
            <img src="${images[0]}" alt="${model}" class="object-contain max-h-[200px]" />
            </div>
            
            <!-- Details -->
            <div class="flex-1 px-4 py-2">
            <h2 class="text-lg font-semibold text-gray-800">${brand} ${model}</h2>
            <p class="text-sm text-gray-600 mt-1">${short_description}</p>
            <ul class="list-disc list-inside text-sm text-gray-700 mt-3 space-y-0.5">
            <li><strong>Category:</strong> ${category}</li>
            <li><strong>Gender:</strong> ${gender}</li>
            <li><strong>Fit:</strong> ${fit}</li>
            <li><strong>Fabric:</strong> ${fabric}</li>
            <li><strong>Color:</strong> ${color}</li>
            <li><strong>Sizes:</strong> ${sizes.join(", ")}</li>
            <li><strong>Feature:</strong> ${features}</li>
            </ul>
            </div>
            
            <!-- Price -->
            <div class="w-full sm:w-[150px] flex flex-col items-start px-4 justify-center mt-4 sm:mt-0">
            <div class="text-xl font-bold text-gray-800">₹${price_inr.toLocaleString()}</div>
            </div>
          `;
          key++
          cardBox.appendChild(card);
        });
    })
}

function local(key){
    fetch("./json/t-shirts.json")
    .then((res)=> res.json())
    .then((data)=> {
        localStorage.clear()
        localStorage.setItem("image",`${data[key].images[0]}`)
        localStorage.setItem("model",`${data[key].model}`)
        localStorage.setItem("brand",`${data[key].brand}`)
        localStorage.setItem("gender",`${data[key].gender}`)
        localStorage.setItem("fit",`${data[key].fit}`)
        localStorage.setItem("fabric",`${data[key].fabric}`)
        localStorage.setItem("color",`${data[key].color}`)
        localStorage.setItem("sizes",`${data[key].sizes}`)
        localStorage.setItem("desp",`${data[key].short_description}`)
        localStorage.setItem("category",`${data[key].category}`)
        localStorage.setItem("features",`${data[key].features}`)
        localStorage.setItem("price",`${data[key].price_inr}`)
        
    })
}
    renderCards();