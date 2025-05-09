const images = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];




//----------РОЗМІТКА ГАЛЕРЕЇ------------- //


function photoTemplate(photo) {
  return `
    <li class="gallery-item">
  <a class="gallery-link" href="${photo.original}">
    <img
      class="gallery-image"
      src="${photo.preview}"
      data-source="${photo.original}"
      alt="${photo.description}"
    />
  </a>
</li>
  `;
}

function photosTemplate (photos){
	return photos.map(photoTemplate).join('')
}


const galleryContainer = document.querySelector('.gallery');
const markup = photosTemplate(images);
galleryContainer.insertAdjacentHTML('beforeend', markup)

//-------скинути можливість завантаження зображення-----------//

const imageLinks = document.querySelectorAll('.gallery-link');

imageLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
  });
});

//----прослуховування кліка------   //
let instance;

galleryContainer.addEventListener('click', onGalleryClick);

function onGalleryClick (e) {
  e.preventDefault(); 

  const clickedElem = e.target;

  if (clickedElem.nodeName !== 'IMG' || !clickedElem.classList.contains('gallery-image')) {
    return;
  }

  const largeImageURL = clickedElem.dataset.source;
  const altText = clickedElem.alt;
  
  openModal({ original: largeImageURL, description: altText }); 
}

//--------------МОДАЛЬНЕ ВІКНО-----------//


function openModal({ original, description } ) {
  instance = basicLightbox.create(
    `
        <img src="${original}" alt="${description}" width="1112" />
  `,
    {
      onShow: () => {
        window.addEventListener('keydown', handleCloseModal);
      },
      onClose: () => {
        window.removeEventListener('keydown', handleCloseModal);
      },
    },
  );

  instance.show();
}

function closeModal() {
  instance.close();
}

function handleCloseModal(e) {
  if (e.code === 'Escape') {
    closeModal();
  }
}