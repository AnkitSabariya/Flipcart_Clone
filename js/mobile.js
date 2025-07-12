const cardBox = document.querySelector(".cardbox");
  function loadProducts() {
    fetch("./json/mobiles.json")
    .then((res)=> res.json())
    .then((data)=> {
      data.forEach((product, index) => {
    const {
      brand,
      model,
      description,
      price,
      image,
      specifications,
    } = product;

      let currentImg = 0;

      const card = document.createElement("div");
      card.className =
      "bg-white w-full sm:h-[320px] h-auto flex flex-col sm:flex-row p-4 border border-gray-200 cursor-pointer shadow-sm hover:shadow-md transition";

    card.innerHTML = `
      <!-- Image Slider -->
      <div class="relative w-full sm:w-[250px] flex items-center justify-center">
        <img src="${image[0]}" id="img-${index}" class="object-contain h-[200px] max-w-full transition-all duration-300">
      </div>

      <!-- Product Info -->
      <div class="flex-1 px-4 py-2">
        <h2 class="text-lg font-semibold text-gray-800">${brand} ${model}</h2>
        <p class="text-sm text-gray-600 mt-1">${description}</p>
        <ul class="list-disc list-inside text-sm text-gray-700 mt-3 space-y-0.5">
          <li><strong>Processor:</strong> ${specifications.processor}</li>
          <li><strong>RAM:</strong> ${specifications.ram}</li>
          <li><strong>Storage:</strong> ${specifications.storage}</li>
          <li><strong>Display:</strong> ${specifications.display}</li>
          <li><strong>Battery:</strong> ${specifications.battery}</li>
          <li><strong>Rear Camera:</strong> ${specifications.rear_camera}</li>
          <li><strong>Front Camera:</strong> ${specifications.front_camera}</li>
          <li><strong>OS:</strong> ${specifications.os}</li>
          <li><strong>Connectivity:</strong> ${specifications.connectivity}</li>
        </ul>
      </div>

      <!-- Pricing -->
      <div class="w-full sm:w-[150px] flex flex-col items-center justify-center mt-4 sm:mt-0">
        <div class="text-xl font-bold text-gray-800">₹${price.toLocaleString()}</div>
      </div>
    `;
      cardBox.appendChild(card);    
      const imgEl = card.querySelector(`#img-${index}`);

    // Hover to auto slide images
    let interval;
    card.addEventListener("mouseenter", () => {
      interval = setInterval(() => {
        currentImg = (currentImg + 1) % image.length;
        imgEl.src = image[currentImg];
      }, 1000);
    });

    card.addEventListener("mouseleave", () => {
      clearInterval(interval);
    });  
    });
    })   
}
  
  loadProducts();


document.getElementById("search").addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault(); // optional
    const search = document.getElementById("search").value.trim().toLowerCase();

    // Redirect to another HTML file (like category page)
    if (search == "mobiles" || search == "phones" || search == "mobile" || search == "Mobile" || search == "Mobiles") {
      window.location.href = "mobile.html";

    } else if (search == "laptop" || search == "laptops" || search == "Lap" || search == "lap" || search == "Laptops") {
      window.location.href = "laptop.html";
    } else if (search == "tab" || search == "Tab" || search == "Tablets" || search == "tablet" || search == "Tablets" || search == "Tablet") {
      window.location.href = "tablet.html";
    } else if (search == "bedsheet" || search == "bed"  || search == "Bed" || search == "Bedsheet") {
      window.location.href = "bedsheet.html";
    } else if (search == "bedsheet" || search == "bed" || search == "furniture" || search == "Furniture" || search == "FURNITURE") {
      window.location.href = "furniture.html";
    } else {
      alert("No category matched!");
    }
  }
});
