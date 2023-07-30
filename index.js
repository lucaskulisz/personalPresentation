document
  .querySelector("button.button-menu-toggle")
  .addEventListener("click", function () {
    document
      .querySelector(".nav-links")
      .classList.toggle("nav-links-responsive");
  });
document.addEventListener("DOMContentLoaded", function () {
  const images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg"];
  let currentImageIndex = 0;

  const sliderContainer = document.getElementById("slider-container");
  const imageSlider = document.querySelector(".image-slider");
  const prevButton = document.getElementById("prev-button");
  const nextButton = document.getElementById("next-button");
  const toggleViewButton = document.getElementById("toggle-view-button");
  const galleryContainer = document.getElementById("gallery-container");

  // Función para actualizar la imagen actual en el slider
  function updateCurrentImage() {
    const currentImage = images[currentImageIndex];
    const imgElement = document.querySelector(".img");
    imgElement.src = currentImage;
  }

  // Función para mostrar el slider y ocultar la galería
  function showSlider() {
    sliderContainer.style.display = "block";
    galleryContainer.style.display = "none";
    toggleViewButton.textContent = "Ver vista galería de imágenes";
  }

  // Función para mostrar la galería y ocultar el slider
  function showGallery() {
    sliderContainer.style.display = "none";
    galleryContainer.style.display = "block";
    toggleViewButton.textContent = "Ver vista deslizador de imágenes";
  }

  // Función para mostrar la imagen anterior en el slider
  function showPreviousImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    updateCurrentImage();
  }

  // Función para mostrar la siguiente imagen en el slider
  function showNextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    updateCurrentImage();
  }

  // Manejador de evento para el botón anterior
  prevButton.addEventListener("click", showPreviousImage);

  // Manejador de evento para el botón siguiente
  nextButton.addEventListener("click", showNextImage);

  // Manejador de evento para el botón de cambio de vista
  toggleViewButton.addEventListener("click", function () {
    if (sliderContainer.style.display === "none") {
      showSlider();
    } else {
      showGallery();
    }
  });

  // Mostrar la primera imagen al cargar la página
  updateCurrentImage();
});
