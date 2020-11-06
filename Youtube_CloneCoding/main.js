const moreBtn = document.querySelector(".info .titleAndButton .moreBtn");
const title = document.querySelector(".info .titleAndButton .title");

function changeIcon(event){
  
  // if(moreBtn.classList.contains("clicked")) {
  //   moreBtn.classList.toggle("clicked");
  //   event.target.className = "fas fa-caret-down";
  // }
  // else {
  //   moreBtn.classList.toggle("clicked");
  //   event.target.className = "fas fa-caret-up";
  // }
  moreBtn.classList.toggle("clicked");
  title.classList.toggle("clamp");

}

moreBtn.addEventListener("click", changeIcon);