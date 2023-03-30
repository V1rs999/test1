var imgElement = document.querySelector('myImage');
var oldSrc = imgElement.src;

function changeImage() {
  if (imgElement.src === oldSrc) {
    imgElement.src = '/img/icons8-eye-64.svg';
    imgElement.alt = 'New Image';
  } else {
    imgElement.src = oldSrc;
    imgElement.alt = 'Old Image';
  }
}
