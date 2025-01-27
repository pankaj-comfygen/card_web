const testimonials = [
  {
    name: "أحمد سعيد",
    title: "عميل لشركة الراحة",
    feedback:
      "خدمة الخصومات من شركة الراحة غيّرت حياتي حقاً. بفضل الخصومات السخية والعروض المقدمة، تمكنت من توفير المال وتحقيق احتياجاتي. أشعر بالفخر كوني جزءاً من هذا المجتمع الذي يقدرني اقتصادياً. شكراً كثيراً!",
    image:
      "https://cdn.openart.ai/published/hZgAbyInEiazMhZuVjSS/obF0DA49_wCTU_1024.webp",
  },
  {
    name: "أحمد سعيد",
    title: "عميل لشركة الراحة",
    feedback:
      "شكراً كثيراً لشركة الراحة على الخصومات الرائعة المقدمة، وجعلتم جانبي أفضل بتوفير المال على مستلزماتي اليومية بشكل لا يصدق! شكراً لكم!",
    image:
      "https://cdn.openart.ai/published/hZgAbyInEiazMhZuVjSS/obF0DA49_wCTU_1024.webp",
  },
  {
    name: "أحمد سعيد",
    title: "عميل لشركة الراحة",
    feedback:
      "لقد كنت أبحث عن أفضل الحلول الاقتصادية لتوفير حاجاتي اليومية، ووجدت شركة الراحة تقدم كل ذلك وأكثر! شكراً كثيراً لكم!",
    image:
      "https://cdn.openart.ai/published/hZgAbyInEiazMhZuVjSS/obF0DA49_wCTU_1024.webp",
  },
  {
    name: "أحمد سعيد",
    title: "عميل لشركة الراحة",
    feedback:
      "لقد كنت أبحث عن أفضل الحلول الاقتصادية لتوفير حاجاتي اليومية، ووجدت شركة الراحة تقدم كل ذلك وأكثر! شكراً كثيراً لكم!",
    image:
      "https://cdn.openart.ai/published/hZgAbyInEiazMhZuVjSS/obF0DA49_wCTU_1024.webp",
  },
  {
    name: "أحمد سعيد",
    title: "عميل لشركة الراحة",
    feedback:
      "لقد كنت أبحث عن أفضل الحلول الاقتصادية لتوفير حاجاتي اليومية، ووجدت شركة الراحة تقدم كل ذلك وأكثر! شكراً كثيراً لكم!",
    image:
      "https://cdn.openart.ai/published/hZgAbyInEiazMhZuVjSS/obF0DA49_wCTU_1024.webp",
  },
  {
    name: "أحمد سعيد",
    title: "عميل لشركة الراحة",
    feedback:
      "لقد كنت أبحث عن أفضل الحلول الاقتصادية لتوفير حاجاتي اليومية، ووجدت شركة الراحة تقدم كل ذلك وأكثر! شكراً كثيراً لكم!",
    image:
      "https://cdn.openart.ai/published/hZgAbyInEiazMhZuVjSS/obF0DA49_wCTU_1024.webp",
  },
];

const carouselData = [
  {
    title: "البركة",
    desc: "Photography Expert",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIPKCoCDf6fhfN0s_cpotoldgZhVg6rV7QKw&s",
  },
  {
    title: "البركة",
    desc: "UI-UX Design Expert",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIPKCoCDf6fhfN0s_cpotoldgZhVg6rV7QKw&s",
  },
  {
    title: "البركة",
    desc: "Social Media Expert",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIPKCoCDf6fhfN0s_cpotoldgZhVg6rV7QKw&s",
  },
  {
    title: "البركة",
    desc: "Business Idea Expert",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIPKCoCDf6fhfN0s_cpotoldgZhVg6rV7QKw&s",
  },
  {
    title: "البركة",
    desc: "Business Idea Expert",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIPKCoCDf6fhfN0s_cpotoldgZhVg6rV7QKw&s",
  },
  {
    title: "البركة",
    desc: "Business Idea Expert",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIPKCoCDf6fhfN0s_cpotoldgZhVg6rV7QKw&s",
  },
  {
    title: "البركة",
    desc: "Business Idea Expert",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIPKCoCDf6fhfN0s_cpotoldgZhVg6rV7QKw&s",
  },
];

const logos = [
  {
    name: "Netflix",
    img: "https://upload.wikimedia.org/wikipedia/commons/6/69/Netflix_logo.svg",
  },
  {
    name: "Prime Video",
    img: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Prime_Video.png",
  },
  {
    name: "Hulu",
    img: "https://upload.wikimedia.org/wikipedia/commons/e/e4/Hulu_Logo.svg",
  },
  {
    name: "Disney+",
    img: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Disney%2B_logo.svg",
  },
  {
    name: "HBO Max",
    img: "https://upload.wikimedia.org/wikipedia/commons/1/17/HBO_Max_Logo.svg",
  },
];

const sliderInfinite = document.querySelector(".sliderInfinite");
function renderLogos() {
  sliderInfinite.innerHTML = logos
    .map(
      (logo) => `
        <div class="min-w-[120px] flex-shrink-0 p-4 flex items-center justify-center">
          <img src="${logo.img}" alt="${logo.name}" class="h-12 object-contain">
        </div>
      `
    )
    .join("");

  sliderInfinite.innerHTML += sliderInfinite.innerHTML;
}

// Initialize the Slider
renderLogos();

const slider = document.getElementById("testimonial-slider");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

let currentIndex = 0;

function renderTestimonials() {
  slider.innerHTML = testimonials
    .map(
      (t) => `
          <div class="bg-white  p-6 rounded-lg  flex flex-col items-start text-start w-96 relative">
          <i class="fa-solid fa-quote-right absolute text-2xl top-3 left-4 text-[#B9A06A]"></i>
          <div class='flex justify-start item-center  gap-3'>
          <img
              src="${t?.image}"
              alt="${t.name}"
              class="w-14 h-14 rounded-full mb-4"
            />
            <div>
             <h3 class="text-lg font-bold m">${t.name}</h3>
            <p class="text-sm text-gray-400 ">${t.title}</p>
            </div>
           
            
          </div>
            <blockquote class="text-gray-700 text-sm">${t.feedback}</blockquote>
          </div>
        `
    )
    .join("");
}

function updateSlider() {
  const viewportWidth = window.innerWidth;
  const itemsToShow = viewportWidth >= 1024 ? 3 : 1;
  const sliderWidth = slider.scrollWidth / testimonials.length;
  slider.style.transform = `translateX(-${
    (currentIndex % testimonials.length) * sliderWidth
  }px)`;
}

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
  updateSlider();
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % testimonials.length;
  updateSlider();
});

window.addEventListener("resize", updateSlider);

renderTestimonials();
updateSlider();

function renderCarousel() {
  const carousel = document.querySelector(".carousel");
  carousel.innerHTML = carouselData
    .map(
      (item) => `
      <div class="min-w-[200px] bg-white rounded-2xl  flex flex-col items-center p-4">
        <img src="${item.img}" alt="${item.title}" class="mb-4 p-2 h-40 bg-black">
        <p class="text-lg font-bold">${item.title}</p>
        <p class="text-gray-500 text-sm mt-2">${item.desc}</p>
      </div>
    `
    )
    .join("");
}

function toggleDirection() {
  const html = document.documentElement;
  html.dir = html.dir === "ltr" ? "rtl" : "ltr";
}

const carouselTrack = document.querySelector('.carousel-track');
const carouselItems = document.querySelectorAll('.carousel-item');
const prevControl = document.querySelector('.carousel-control-prev');
const nextControl = document.querySelector('.carousel-control-next');
const indicatorsContainer = document.querySelector('.carousel-indicators');

const itemsPerView = 4;
let activeIndex = 0;
const totalSlides = carouselItems.length - itemsPerView + 1;

// Create indicators
for (let i = 0; i < totalSlides; i++) {
    const indicator = document.createElement('div');
    indicator.classList.add('carousel-indicator');
    indicator.addEventListener('click', () => navigateToSlide(i));
    indicatorsContainer.appendChild(indicator);
}

const indicators = document.querySelectorAll('.carousel-indicator');

function updateCarousel() {
    // Calculate the width each item takes including margins (25% of wrapper width)
    const itemWidth = 100 / itemsPerView;
    // Move by single item width
    const translateX = -(activeIndex * itemWidth);
    carouselTrack.style.transform = `translateX(${translateX}%)`;
    
    // Update indicators
    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('carousel-indicator-active', index === activeIndex);
    });

    // Update control states
    prevControl.disabled = activeIndex === 0;
    nextControl.disabled = activeIndex === totalSlides - 1;
}

function navigateToSlide(index) {
    activeIndex = index;
    updateCarousel();
}

prevControl.addEventListener('click', () => {
    if (activeIndex > 0) {
        activeIndex--;
        updateCarousel();
    }
});

nextControl.addEventListener('click', () => {
    if (activeIndex < totalSlides - 1) {
        activeIndex++;
        updateCarousel();
    }
});

// Initialize carousel
updateCarousel();


function toggleVisibility() {
 
  const sidebar = document.getElementById("content");
  sidebar.classList.toggle("hidden");
  sidebar.classList.toggle("-translate-x-full");
}