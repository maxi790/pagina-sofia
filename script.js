// script.js

// Función para mostrar y ocultar el menú de navegación
const toggleNav = () => {
    const nav = document.querySelector('nav');
    nav.classList.toggle('show');
  };
  
  // Función para agregar evento de click al botón de menú
  document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.querySelector('.menu-button');
    menuButton.addEventListener('click', toggleNav);
  });
  
  // Función para mostrar y ocultar la información adicional de cada servicio
  const toggleServiceInfo = (event) => {
    const serviceInfo = event.target.nextElementSibling;
    serviceInfo.classList.toggle('show');
  };
  
  // Función para agregar evento de click a cada servicio
  document.addEventListener('DOMContentLoaded', () => {
    const services = document.querySelectorAll('.service');
    services.forEach((service) => {
      service.addEventListener('click', toggleServiceInfo);
    });
  });
  
  // Función para enviar el formulario de contacto
  const sendContactForm = (event) => {
    event.preventDefault();
    const form = document.querySelector('#contact-form');
    const { name, email, message } = Object.fromEntries(new FormData(form));
    fetch('/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, message }),
    })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
  };
  
  // Función para agregar evento de submit al formulario de contacto
  document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.querySelector('#contact-form');
    contactForm.addEventListener('submit', sendContactForm);
  });