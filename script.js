


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


/// testimonial---->>>>>>>>>
// const slider = document.getElementById("testimonial-slider");
// const prevBtn = document.getElementById("prev-btn");
// const nextBtn = document.getElementById("next-btn");







function toggleDirection() {
  const html = document.documentElement;
  html.dir = html.dir === "ltr" ? "rtl" : "ltr";
}





function toggleVisibility() {
  const sidebar = document.getElementById("content");
  sidebar.classList.toggle("hidden");
  sidebar.classList.toggle("translate-x-full"); // Toggle translate-x-full to slide it in
}







