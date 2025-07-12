let navbar = document.getElementById("mynavbar")
navbar.setAttribute("class","bg-[#2874f0] text-white w-full flex flex-wrap items-center justify-between md:justify-center px-3 lg:px-6 py-2 lg:h-[56px]")

navbar.innerHTML = `
      <!-- Logo -->
      <div class="flex items-center gap-2">
        <a href="index.html" class="flex flex-col leading-[1.1] font-semibold text-[16px] lg:text-[18px] italic">
          <span class="text-white font-extrabold">Flipkart</span>
          <div class="text-[10px] lg:text-[11px] font-normal flex items-center text-white">
            Explore <span class="text-yellow-300 font-bold ml-1">Plus</span>
            <img src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png" class="h-2 lg:h-3 ml-1 mt-[1px]" alt="plus" />
          </div>
        </a>
      </div>

      <!-- Search Bar (hidden on mobile, shown on lg) -->
      <div class="hidden lg:flex items-center flex-grow max-w-[600px] bg-white mx-4">
        <input
          type="text"
          placeholder="Search for products, brands and more"
          id="search"
          class="w-full text-[14px] px-4 py-1.5 outline-none rounded-l-sm text-black placeholder-gray-500"
        />
        <button class="bg-white px-4 py-1.5 rounded-r-sm cursor-pointer" onclick="ready()">
          <i class="ri-search-line text-blue-600 text-lg"></i>
        </button>
      </div>

      <!-- Right Section (includes Search icon on mobile) -->
      <div class="flex items-center gap-2 lg:gap-6 text-xs lg:text-sm font-medium font-serif">
        <!-- Search icon only for small screens -->
        <button class="lg:hidden" onclick="toggleSearchMobile()">
          <i class="ri-search-line text-white text-xl"></i>
        </button>

        <button class="bg-white text-[#2874f0] px-3 py-1 w-[80px] lg:w-[120px] text-center text-xs lg:text-sm">Login</button>
        <span class="cursor-pointer hover:underline hidden lg:inline">Become a Seller</span>
        <span class="cursor-pointer md:flex items-center hover:underline hidden lg:flex">
          More <i class="ri-arrow-down-s-line ml-1"></i>
        </span>
        <span class="cursor-pointer flex items-center gap-1 hover:underline">
          <i class="ri-shopping-cart-2-fill text-base lg:text-lg"></i> <span class="hidden sm:inline">Cart</span>
        </span>
      </div>
`

let categorySection = document.getElementById("categorySection")
let mobilesearchbar = document.getElementById("mobileSearchBar")
let mobilesearchbtn = document.getElementById("mobileSearchbtn")
mobilesearchbar.setAttribute("class","lg:hidden w-full px-3 pt-2 hidden bg-white")

mobilesearchbar.innerHTML = `
<div class="flex items-center border border-gray-300 rounded">
        <input
          type="text"
          placeholder="Search for products, brands and more"
          class="w-full px-3 py-2 text-sm text-black outline-none"
        />
      </div>
`
mobilesearchbtn.setAttribute("class","lg:hidden bg-white shadow-sm")

mobilesearchbtn.innerHTML = `
<button id="mobileMenuBtn" class="w-full p-3 text-left flex items-center justify-between">
            <span class="font-medium">Categories</span>
            <i class="ri-menu-line text-xl"></i>
        </button>
`
categorySection.setAttribute("class","section relative min-h-[40px] text-black w-full shadow-sm hidden lg:block")
categorySection.innerHTML = `
<div class="bg-white shadow-2xl">
        <div class="flex items-center max-w-[1248px] justify-between h-[40px] m-auto relative text-[14px] font-semibold">
                <!-- Dropdown Item -->
          <div class="group relative h-full flex items-center justify-center grow cursor-pointer">
            <span class="flex items-center h-full">Electronics <i class="ri-arrow-down-s-line ml-1"></i></span>
            <!-- Dropdown Menu -->
            <div class="absolute top-full left-0 hidden group-hover:block bg-white shadow-md z-20 w-[220px] py-2">
              <ul class="text-sm text-gray-800">
                <a href="mobile.html" id="mobiles"><li class="px-4 py-2 hover:bg-gray-100 cursor-pointer">Mobiles</li></a>
                <a href="laptop.html" id="laptops"><li class="px-4 py-2 hover:bg-gray-100 cursor-pointer">Laptops</li></a>
                <a href="camera.html" id="cameras"><li class="px-4 py-2 hover:bg-gray-100 cursor-pointer">Cameras</li></a>
                <a href="tablet.html" id="tablets"><li class="px-4 py-2 hover:bg-gray-100 cursor-pointer">Tablets</li></a>
                <a href="powerbank.html" id="pbanks"><li class="px-4 py-2 hover:bg-gray-100 cursor-pointer">Power Banks</li></a>
              </ul>
            </div>
          </div>
          <!-- TVs & Appliances -->
          <div class="group relative h-full flex items-center justify-center grow cursor-pointer">
            <span class="flex items-center h-full">TVs & Appliances <i class="ri-arrow-down-s-line ml-1"></i></span>
            <div class="absolute top-full left-0 hidden group-hover:block bg-white shadow-md z-20 w-[220px] py-2">
              <ul class="text-sm text-gray-800">
                <a href=""><li class="px-4 py-2 hover:bg-gray-100 cursor-pointer">Televisions</li></a>
                <a href=""><li class="px-4 py-2 hover:bg-gray-100 cursor-pointer">Washing Machines</li></a>
                 <a href=""><li class="px-4 py-2 hover:bg-gray-100 cursor-pointer">Refrigerators</li></a>
                <a href=""><li class="px-4 py-2 hover:bg-gray-100 cursor-pointer">Air Conditioners</li></a>
               </ul>
            </div>
          </div>
          <!-- Men -->
          <div class="group relative h-full flex items-center justify-center grow cursor-pointer">
           <a href="shirt.html"><span class="flex items-center h-full">Men <i class="ri-arrow-down-s-line ml-1"></i></span></a>
             <div class="absolute top-full left-0 hidden group-hover:block bg-white shadow-md z-20 w-[220px] py-2">
              <ul class="text-sm text-gray-800">
                <a href=""><li class="px-4 py-2 hover:bg-gray-100 cursor-pointer">T-Shirts</li></a>
                <a href="shirt.html"><li class="px-4 py-2 hover:bg-gray-100 cursor-pointer">Shirts</li></a>
                <a href=""><li class="px-4 py-2 hover:bg-gray-100 cursor-pointer">Jeans</li></a>
                <a href=""><li class="px-4 py-2 hover:bg-gray-100 cursor-pointer">Watches</li></a>
              </ul>
            </div>
          </div>
          <!-- Women -->
          <div class="group relative h-full flex items-center justify-center grow cursor-pointer">
            <span class="flex items-center h-full">Women <i class="ri-arrow-down-s-line ml-1"></i></span>
            <div class="absolute top-full left-0 hidden group-hover:block bg-white shadow-md z-20 w-[220px] py-2">
              <ul class="text-sm text-gray-800">
                <a href=""><li class="px-4 py-2 hover:bg-gray-100 cursor-pointer">Kurtas</li></a>
                <a href=""><li class="px-4 py-2 hover:bg-gray-100 cursor-pointer">Sarees</li></a>
                <a href=""><li class="px-4 py-2 hover:bg-gray-100 cursor-pointer">Jeans</li></a>
                <a href=""><li class="px-4 py-2 hover:bg-gray-100 cursor-pointer">Handbags</li></a>
              </ul>
            </div>
          </div>
          <!-- Baby & Kids -->
          <div class="group relative h-full flex items-center justify-center grow cursor-pointer">
            <span class="flex items-center h-full">Baby & Kids <i class="ri-arrow-down-s-line ml-1"></i></span>
            <div class="absolute top-full left-0 hidden group-hover:block bg-white shadow-md z-20 w-[220px] py-2">
              <ul class="text-sm text-gray-800">
                <a href=""><li class="px-4 py-2 hover:bg-gray-100 cursor-pointer">Toys</li></a>
                <a href=""><li class="px-4 py-2 hover:bg-gray-100 cursor-pointer">Baby Clothes</li></a>
                 <a href=""><li class="px-4 py-2 hover:bg-gray-100 cursor-pointer">School Supplies</li></a>
               </ul>
            </div>
          </div>
          <!-- Home & Furniture -->
          <div class="group relative h-full flex items-center justify-center grow cursor-pointer">
            <span class="flex items-center h-full">Home & Furniture <i class="ri-arrow-down-s-line ml-1"></i></span>
            <div class="absolute top-full left-0 hidden group-hover:block bg-white shadow-md z-20 w-[220px] py-2">
              <ul class="text-sm text-gray-800">
                <a href=""><li class="px-4 py-2 hover:bg-gray-100 cursor-pointer">Bedsheets</li></a>
                <a href=""><li class="px-4 py-2 hover:bg-gray-100 cursor-pointer">Curtains</li></a>
                <a href=""><li class="px-4 py-2 hover:bg-gray-100 cursor-pointer">Furniture</li></a>
              </ul>
            </div>
          </div>
          <!-- Sports, Books & More -->
          <div class="group relative h-full flex items-center justify-center grow cursor-pointer">
            <span class="flex items-center h-full">Sports, Books & More <i class="ri-arrow-down-s-line ml-1"></i></span>
            <div class="absolute top-full left-0 hidden group-hover:block bg-white shadow-md z-20 w-[220px] py-2">
              <ul class="text-sm text-gray-800">
                <a href=""><li class="px-4 py-2 hover:bg-gray-100 cursor-pointer">Books</li></a>
                <a href=""><li class="px-4 py-2 hover:bg-gray-100 cursor-pointer">Stationery</li></a>
                <a href=""><li class="px-4 py-2 hover:bg-gray-100 cursor-pointer">Exercise & Fitness</li></a>
              </ul>
            </div>
          </div>
        </div>
      </div>
`
let mobileMenu = document.getElementById("mobileMenu")
mobileMenu.setAttribute("class","lg:hidden bg-white shadow-lg hidden")
mobileMenu.innerHTML = `
 <div class="p-4 space-y-3">
            <div class="border-b pb-2">
                <span class="font-medium text-gray-800">Electronics</span>
                <div class="ml-4 mt-2 space-y-1 text-sm text-gray-600">
                    <div><a href="mobile.html">Mobiles</a></div>
                    <div><a href="laptop.html">Laptops</a></div>
                    <div><a href="camera.html">Cameras</a></div>
                    <div><a href="tablet.html">Tablets</a></div>
                </div>
            </div>
            <div class="border-b pb-2">
                <span class="font-medium text-gray-800">TVs & Appliances</span>
                <div class="ml-4 mt-2 space-y-1 text-sm text-gray-600">
                    <div>Televisions</div>
                    <div>Washing Machines</div>
                    <div>Refrigerators</div>
                </div>
            </div>
            <div class="border-b pb-2">
                <span class="font-medium text-gray-800">Men</span>
                <div class="ml-4 mt-2 space-y-1 text-sm text-gray-600">
                    <div>T-Shirts</div>
                    <div><a href="shirt.html">Shirts</a></div>
                    <div>Jeans</div>
                </div>
            </div>
            <div class="border-b pb-2">
                <span class="font-medium text-gray-800">Women</span>
                <div class="ml-4 mt-2 space-y-1 text-sm text-gray-600">
                    <div>Kurtas</div>
                    <div>Sarees</div>
                    <div>Jeans</div>
                </div>
            </div>
        </div>
`

        mobileMenuBtn.addEventListener("click", () => {
        mobileMenu.classList.toggle("hidden");
      });

      // Mobile filter toggle
      filterBtn.addEventListener("click", () => {
        sidebar.classList.toggle("hidden");
        sidebar.classList.toggle("block");

        if (!sidebar.classList.contains("hidden")) {
          sidebar.classList.add(
            "fixed",
            "top-0",
            "left-0",
            "h-[90vh]",
            "z-50",
            "overflow-y-auto",
            "bg-white",
            "shadow-lg",
            "rounded-md"
          );
          sidebar.classList.remove("w-full"); // Optional: restrict width
          sidebar.classList.add("w-[90vw]", "max-w-[320px]");
        } else {
          sidebar.classList.remove(
            "fixed",
            "top-0",
            "left-0",
            "h-[90vh]",
            "z-50",
            "overflow-y-auto",
            "bg-white",
            "shadow-lg",
            "rounded-md",
            "w-[90vw]",
            "max-w-[320px]"
          );
          sidebar.classList.add("w-full");
        }
      });

      document.addEventListener("click", (e) => {
        if (
          window.innerWidth < 1024 &&
          !sidebar.contains(e.target) &&
          !filterBtn.contains(e.target) &&
          !sidebar.classList.contains("hidden")
        ) {
          sidebar.classList.add("hidden");
          sidebar.classList.remove(
            "fixed",
            "top-0",
            "left-0",
            "h-[90vh]",
            "z-50",
            "overflow-y-auto",
            "bg-white",
            "shadow-lg",
            "rounded-md",
            "w-[90vw]",
            "max-w-[320px]"
          );
        }
      });
      function toggleSearchMobile() {
        const searchBar = document.getElementById("mobileSearchBar");
        searchBar.classList.toggle("hidden");
      }
