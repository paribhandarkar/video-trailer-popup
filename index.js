const watchNowEl = document.getElementsByClassName("btn")[0];
const trailerContainerEl =
  document.getElementsByClassName("trailer-container")[0];
const closeIconEl = document.getElementsByClassName("fa-times")[0];
const videoEl = document.querySelector("video");

watchNowEl.addEventListener("click", () => {
  trailerContainerEl.style.visibility = "visible";
});

closeIconEl.addEventListener("click", () => {
  trailerContainerEl.style.visibility = "hidden";
  videoEl.pause();
  videoEl.currentTime = 0;
});
