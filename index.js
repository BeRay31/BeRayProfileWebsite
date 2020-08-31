const hiddenContent = document.querySelector(".hidden-content");
const floatingButton = document.querySelector(".floating-contact-button");
let hiddenContentShown = false;


const toggleFloatingButton = () => {
  if(hiddenContentShown) {
    floatingButton.classList.remove('floating-contact-button-translate');
    hiddenContent.classList.remove('show-content');
    hiddenContent.classList.add('hide-content');
    hiddenContentShown = false;
  } else {
    floatingButton.classList.add('floating-contact-button-translate');
    hiddenContent.classList.remove('hide-content');
    hiddenContent.classList.add('show-content');
    hiddenContentShown = true;
  }
}

floatingButton.addEventListener("click", () => toggleFloatingButton());

