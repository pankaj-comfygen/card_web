const testimonials = [
    {
        name: "أحمد سعيد",
        title: "عميل لشركة الراحة",
        feedback:
            "خدمة الخصومات من شركة الراحة غيّرت حياتي حقاً. بفضل الخصومات السخية والعروض المقدمة، تمكنت من توفير المال وتحقيق احتياجاتي. أشعر بالفخر كوني جزءاً من هذا المجتمع الذي يقدرني اقتصادياً. شكراً كثيراً!",
        image: "https://cdn.openart.ai/published/hZgAbyInEiazMhZuVjSS/obF0DA49_wCTU_1024.webp",
    },
    {
        name: "أحمد سعيد",
        title: "عميل لشركة الراحة",
        feedback:
            "شكراً كثيراً لشركة الراحة على الخصومات الرائعة المقدمة، وجعلتم جانبي أفضل بتوفير المال على مستلزماتي اليومية بشكل لا يصدق! شكراً لكم!",
        image: "https://cdn.openart.ai/published/hZgAbyInEiazMhZuVjSS/obF0DA49_wCTU_1024.webp"
    },
    {
        name: "أحمد سعيد",
        title: "عميل لشركة الراحة",
        feedback:
            "لقد كنت أبحث عن أفضل الحلول الاقتصادية لتوفير حاجاتي اليومية، ووجدت شركة الراحة تقدم كل ذلك وأكثر! شكراً كثيراً لكم!",
        image: "https://cdn.openart.ai/published/hZgAbyInEiazMhZuVjSS/obF0DA49_wCTU_1024.webp"
    }
];

const carouselData = [
    {
      title: "البركة",
      desc: "Photography Expert",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIPKCoCDf6fhfN0s_cpotoldgZhVg6rV7QKw&s"
    },
    {
      title: "البركة",
      desc: "UI-UX Design Expert",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIPKCoCDf6fhfN0s_cpotoldgZhVg6rV7QKw&s"
    },
    {
      title: "البركة",
      desc: "Social Media Expert",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIPKCoCDf6fhfN0s_cpotoldgZhVg6rV7QKw&s"
    },
    {
      title: "البركة",
      desc: "Business Idea Expert",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIPKCoCDf6fhfN0s_cpotoldgZhVg6rV7QKw&s"
    }
    ,
    {
      title: "البركة",
      desc: "Business Idea Expert",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIPKCoCDf6fhfN0s_cpotoldgZhVg6rV7QKw&s"
    },
    {
      title: "البركة",
      desc: "Business Idea Expert",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIPKCoCDf6fhfN0s_cpotoldgZhVg6rV7QKw&s"
    },
    {
      title: "البركة",
      desc: "Business Idea Expert",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIPKCoCDf6fhfN0s_cpotoldgZhVg6rV7QKw&s"
    }
  ];


const slider = document.getElementById("testimonial-slider");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

let currentIndex = 0;

function renderTestimonials() {
    slider.innerHTML = testimonials
        .map(
            (t) => `
          <div class="bg-white  p-6 rounded-lg  flex flex-col items-start text-start w-96 relative">
          <i class="fa-solid fa-quote-right absolute top-3 left-4 text-[#B9A06A]"></i>
          <div class='flex justify-start item-center  gap-3'>
          <img
              src="${t.image}"
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
    const sliderWidth = slider.scrollWidth / testimonials.length;
    slider.style.transform = `translateX(-${currentIndex * sliderWidth}px)`;
}

prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
    updateSlider();
});

nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % testimonials.length;
    updateSlider();
});

renderTestimonials();
updateSlider();



function renderCarousel() {
    const carousel = document.querySelector('.carousel');
    carousel.innerHTML = carouselData.map(item => `
      <div class="min-w-[200px] bg-white rounded-2xl shadow-sm flex flex-col items-center p-4">
        <img src="${item.img}" alt="${item.title}" class="mb-4 p-2 h-40 bg-black">
        <p class="text-lg font-bold">${item.title}</p>
        <p class="text-gray-500 text-sm mt-2">${item.desc}</p>
      </div>
    `).join('');
  }

  // Toggle RTL/LTR
  function toggleDirection() {
    const html = document.documentElement;
    html.dir = html.dir === 'ltr' ? 'rtl' : 'ltr';
  }


  renderCarousel()
