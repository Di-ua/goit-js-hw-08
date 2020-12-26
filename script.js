import galleryItems from "./gallery-items.js";

/*********Задание
Создай галерею с возможностью клика по ее элементам и просмотра полноразмерного изображения в модальном окне. Превью результата посмотри по ссылке.
Разбей задание на несколько подзадач:

Создание и рендер разметки по массиву данных и предоставленному шаблону.
Реализация делегирования на галерее ul.js-gallery и получение url большого изображения.
Открытие модального окна по клику на элементе галереи.
Подмена значения атрибута src элемента img.lightbox__image.
Закрытие модального окна по клику на кнопку button[data-action="close-lightbox"].
Очистка значения атрибута src элемента img.lightbox__image. Это необходимо для того, чтобы при следующем открытии модального окна, пока грузится изображение, мы не видели предыдущее.
............................................................
Разметка элемента галереи
Ссылка на оригинальное изображение должна храниться в data-атрибуте source на элементе img, и указываться в href ссылки (это необходимо для доступности).

<li class="gallery__item">
  <a
    class="gallery__link"
    href="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546_1280.jpg"
  >
    <img
      class="gallery__image"
      src="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546__340.jpg"
      data-source="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546_1280.jpg"
      alt="Tulips"
    />
  </a>
</li>
 */

const galleryListRef = document.querySelector("ul.js-gallery");
// const refs = {
//   gallery: document.querySelector("ul.js-gallery"),
//   largeImg: document.querySelector("img.lightbox__image"),
// };

// refs.gallery.addEventListener("click", onGalleryClick);
galleryListRef.addEventListener("click", onGalleryClick);

const createItem = (item, array) => {
  const itemRef = document.createElement("li");
  const linkRef = document.createElement("a");
  const imgRef = document.createElement("img");
  const { preview, original, description } = item;

  itemRef.classList.add("gallery__link");
  linkRef.classList.add("gallery__link");
  linkRef.href = original;
  imgRef.classList.add("gallery__image");
  imgRef.dataset.source = original;
  imgRef.src = preview;
  imgRef.alt = description;

  galleryListRef.append(itemRef);
  itemRef.append(linkRef);
  linkRef.append(imgRef);

  return itemRef;
};

const largeImgRef = document.querySelector(".lightbox__image");

const renderListItems = (array) => {
  const items = array.map((item) => createItem(item));
  galleryListRef.append(...items);
};

renderListItems(galleryItems);

const modalRef = document.querySelector(".js-lightbox");
const closeBtnRef = document.querySelector(
  'button[data-action="close-lightbox"]'
);
closeBtnRef.addEventListener("click", onCloseModal);
// const imageRef = event.target;

function onGalleryClick(event) {
  event.preventDefault();
  console.log(imageRef.nodeName);
  if (imageRef.nodeName !== "IMG") {
    return;
  }
  modalRef.classList.add("is-open");
  refs.largeImg.src = imageRef.dataset.source;
  console.log(imageRef.dataset.source);
}
function onCloseModal() {
  modalRef.classList.remove("is-open");
}
