import { getWeatherData } from "./index";

const search = document.querySelector("#location");
const button = document.querySelector("button");

button.addEventListener("click", () => {
  getWeatherData(search.value);
});
