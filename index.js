const hiddenContent = document.querySelector(".hidden-content");
const floatingButton = document.querySelector(".floating-contact-button");
let hiddenContentShown = false;


const toggleFloatingButton = () => {
  if(hiddenContentShown) {
    hiddenContent.style.display = 'none';
    floatingButton.classList.remove('floating-contact-button-translate');
    hiddenContentShown = false;
  } else {
    hiddenContent.style.display = 'flex';
    floatingButton.classList.add('floating-contact-button-translate');
    hiddenContentShown = true;
  }
}

floatingButton.addEventListener("click", () => toggleFloatingButton());

