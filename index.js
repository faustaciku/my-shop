let removeItemButtons = document.getElementsByClassName("remove-buttons");
for (var i = 0; i < removeItemButtons.length; i++) {
  var button = removeItemButtons[i];
  button.addEventListener("click", function removeCartItem(event) {
    let buttonClicked = event.target;
    buttonClicked.parentElement.parentElement.remove();
  });
}
