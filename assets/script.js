document.querySelectorAll(".faq-item").forEach((item) => {
  item.addEventListener("click", () => {
    // Закрываем все остальные элементы
    document.querySelectorAll(".faq-item").forEach((i) => {
      if (i !== item) {
        i.classList.remove("open");
        i.querySelector(".toggle-icon").textContent = "▶";
      }
    });

    // Переключаем текущий элемент
    item.classList.toggle("open");
    const icon = item.querySelector(".toggle-icon");
    icon.textContent = item.classList.contains("open") ? "▼" : "▶";
  });
});

const block = document.getElementById("colorBlock");

window.addEventListener("scroll", () => {
  // Проверяем, достиг ли блок верхней части экрана
  if (window.scrollY > 50) {
    // Порог скролла
    block.classList.add("scrolled");
  } else {
    block.classList.remove("scrolled");
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger"); // Иконка "hamburger"
  const closeMenu = document.querySelector(".close-menu"); // Иконка закрытия меню
  const navigation = document.querySelector(".navigation"); // Навигация
  const body = document.body; // Тег body

  // Открытие меню при клике на "hamburger"
  hamburger.addEventListener("click", () => {
    navigation.classList.add("open");
    body.style.overflow = "hidden"; // Отключение прокрутки
  });

  // Закрытие меню при клике на "close-menu"
  closeMenu.addEventListener("click", () => {
    navigation.classList.remove("open");
    body.style.overflow = ""; // Возвращение прокрутки
  });
});
