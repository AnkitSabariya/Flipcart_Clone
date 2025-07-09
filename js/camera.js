// let data;
const cardBox = document.querySelector(".cardbox");


  function loadProducts() {
    fetch('./json/camera.json')
    .then(res => res.json())
    .then((data)=> {
        data.products.forEach((product, index) => {
    const {
      title,
      brand,
      category,
      description,
      price,
      discountPercentage,
      stock,
      images,
      rating
    } = product;

    const originalPrice = (price / (1 - discountPercentage / 100)).toFixed(0);
    let currentImg = 0;

    const card = document.createElement("div");
    card.className =
      "bg-white w-full sm:h-[300px] h-auto flex flex-col sm:flex-row p-4 border border-gray-200 rounded-lg shadow-sm hover:shadow-lg cursor-pointer transition";

    card.innerHTML = `
      <!-- Left: Image Slider -->
      <div class="relative w-[250px] flex items-center justify-center">
        <button class="absolute left-1 top-1/2 -translate-y-1/2 text-gray-600 text-sm z-10 bg-white rounded-full px-1.5" data-prev="${index}">&#8592;</button>
        <img src="${images[0]}" id="img-${index}" class="object-contain h-[200px] w-full rounded-lg">
        <button class="absolute right-1 top-1/2 -translate-y-1/2 text-gray-600 text-sm z-10 bg-white rounded-full px-1.5" data-next="${index}">&#8594;</button>
      </div>

      <!-- Center: Product Details -->
      <div class="flex-1 px-4">
        <h2 class="text-lg font-bold text-gray-800 mb-1">${title}</h2>
        <p class="text-xs text-gray-600 mb-1">${category} • ${brand}</p>
        <div class="flex items-center text-sm mb-2">
          <span class="bg-green-600 text-white text-xs font-bold px-1.5 py-0.5 rounded-sm mr-2">${rating.toFixed(1)} ★</span>
          <span class="text-gray-500">${Math.floor(rating * 10)} Ratings & ${(rating * 2).toFixed(0)} Reviews</span>
        </div>
        <ul class="list-disc list-inside text-sm text-gray-700 space-y-0.5">
          <li>${description.slice(0, 80)}...</li>
          <li><strong>Stock:</strong> ${stock} units available</li>
          <li><strong>Discount:</strong> ${discountPercentage}%</li>
        </ul>
      </div>

      <!-- Right: Pricing -->
      <div class="text-right min-w-[140px] flex flex-col justify-between">
        <div>
          <div class="text-xl font-bold text-gray-800">₹${price}</div>
          <div class="text-sm line-through text-gray-400">₹${originalPrice}</div>
          <div class="text-green-600 text-sm font-medium">${Math.round(discountPercentage)}% off</div>
        </div>
        
      </div>
    `;

    cardBox.appendChild(card);

    // Image slider logic
    const imgEl = card.querySelector(`#img-${index}`);
    card.querySelector(`[data-prev="${index}"]`).addEventListener("click", () => {
      currentImg = (currentImg - 1 + images.length) % images.length;
      imgEl.src = images[currentImg];
    });
    card.querySelector(`[data-next="${index}"]`).addEventListener("click", () => {
      currentImg = (currentImg + 1) % images.length;
      imgEl.src = images[currentImg];
    });
  });
        
    });
    
    
}
  
  loadProducts();

async function ready(){
  let search = document.getElementById("search").value
  let search1 = document.getElementById("search")
  cardBox.innerHTML = '';
  if(search == "mobiles" || search == "phones" || search == "mobile" || search == "Mobile" || search == "Mobiles"){
      const res = await fetch(`https://dummyjson.com/products/category/smartphones`);
      data = await res.json();
    }else if(search == "laptop" || search == "laptops" || search == "Lap" || search == "lap" || search == "Laptops"){
      const res = await fetch(`https://dummyjson.com/products/category/laptops`);
      data = await res.json();
    }else if(search == "tab" || search == "Tab" || search == "Tablets" || search == "tablet" || search == "Tablets" || search == "Tablet"){
      const res = await fetch(`https://dummyjson.com/products/category/tablets`);
      data = await res.json();
    }

}
