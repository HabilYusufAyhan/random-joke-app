
const button = document.querySelector('.create-joke') 
const section = document.querySelector('.joke-section');
import { JokeApi } from "./joke-api.js";
import { UnsplashApi } from "./unsplash-api.js";
import './css/deneme.css';
button.onmousedown = function () {
  button.style.scale = "0.9";
};
button.onmouseup = function () {
  button.style.scale = "1";
};
button.onclick= async function(){
  const randompicture = await new UnsplashApi().randomPic();
  const randomjokes = await new JokeApi().randomJoke();
  section.innerHTML = `
  <img src="${randompicture}" alt="" class="img">
  <div class="joke">
      <p class="joke-english">${randomjokes}</p>
  </div>
  `


}



