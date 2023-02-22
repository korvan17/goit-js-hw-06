const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

function createLi({ url, alt }) {
  return `
        <li class="itemImg" style="list-style-type: none">
        <img
          src="${url}"
          alt="${alt}"
          class="gallery_img"
          width="320"
          style="box-shadow: 10px 10px 5px black"
        />
      </li>
      `;
}

function addGallery(list = document.querySelector('.gallery')) {
  const liItems = images.map(val => createLi(val));
  list.style.display = 'flex';
  list.style.flexDirection = 'column';
  list.style.gap = '10px';
  list.insertAdjacentHTML('afterbegin', liItems.join(''));
}

addGallery();
