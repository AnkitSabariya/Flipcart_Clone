const cardBox = document.querySelector(".cardbox");
let key = 0
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

      const card = document.createElement("a");
      card.className =
      "bg-white w-full sm:h-[320px] h-auto flex flex-col sm:flex-row p-4 border border-gray-200 cursor-pointer shadow-sm hover:shadow-md transition";
      // card.setAttribute("href","bhavdeep.html")
      card.setAttribute("onclick",`local(${key})`)
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
      key++   
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
  function local(key){
    fetch("./json/mobiles.json")
    .then((res)=> res.json())
    .then((data)=> {
      localStorage.clear()
      localStorage.setItem("brand", data[key].brand);
      localStorage.setItem("model", data[key].model);
      localStorage.setItem("desp", data[key].description);
      localStorage.setItem("price", data[key].price);
      localStorage.setItem("image", data[key].image[0]);
      localStorage.setItem("processor", data[key].specifications.processor);
      localStorage.setItem("ram", data[key].specifications.ram);
      localStorage.setItem("storage", data[key].specifications.storage);
      localStorage.setItem("display", data[key].specifications.display);
      localStorage.setItem("battery", data[key].specifications.battery);
      localStorage.setItem("rearcamera", data[key].specifications.rear_camera);
      localStorage.setItem("frontcamera", data[key].specifications.front_camera);
      localStorage.setItem("os", data[key].specifications.os);
      localStorage.setItem("connectivity", data[key].specifications.connectivity);

  }); 
} 
  loadProducts();

