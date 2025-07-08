
  let data ;
  const cardBox = document.querySelector(".cardbox");
  function database(){
    data.products.forEach((product, index) => {
      const {
        title,
        brand,
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
        "bg-white w-full h-[300px] flex flex-row p-4 border border-gray-200 cursor-pointer ";
  
      card.innerHTML = `
        <!-- Left: Image -->
        <div class=" flex items-center justify-center relative">
          <button class="absolute left-1 top-1/2 -translate-y-1/2 text-gray-600 text-sm z-10" data-prev="${index}">&#8592;</button>
          <img src="${images[0]}" id="img-${index}" class="object-contain h-full max-h-full">
          <button class="absolute right-1 top-1/2 -translate-y-1/2 text-gray-600 text-sm z-10" data-next="${index}">&#8594;</button>
        </div>
  
        <!-- Center: Details -->
        <div class="flex-1 px-4">
          <h2 class="text-base font-semibold text-gray-800">${title}</h2>
          <div class="flex items-center text-sm mt-1">
            <span class="bg-green-600 text-white text-xs font-bold px-1.5 py-0.5 rounded-sm mr-2">${rating.toFixed(1)} ★</span>
            <span class="text-gray-500">${Math.floor(rating * 10)} Ratings & ${(rating * 2).toFixed(0)} Reviews</span>
          </div>
          <ul class="list-disc list-inside text-sm text-gray-700 mt-2 space-y-0.5">
            <li>${description.slice(0, 45)}...</li>
            <li>Brand: ${brand}</li>
            <li>Stock: ${stock}</li>
            <li>Discount: ${discountPercentage}%</li>
          </ul>
        </div>
  
        <!-- Right: Price -->
        <div class="text-right min-w-[120px]">
          <div class="text-xl font-bold text-gray-800">₹${price}</div>
          <div class="text-sm line-through text-gray-400">₹${originalPrice}</div>
          <div class="text-green-600 text-sm font-medium">${Math.round(discountPercentage)}% off</div>
          <div class="text-blue-600 text-sm mt-1 cursor-pointer hover:underline">Bank Offer</div>
        </div>
      `;
  
      cardBox.appendChild(card);
  
      // Add slider logic per card
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
  }
  async function loadProducts() {
    const res = await fetch(`https://dummyjson.com/products/category/laptops`);
    data = await res.json();
    
    database();
    
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

    database();
}

