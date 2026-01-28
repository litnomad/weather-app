import "./dom";

export function getWeatherData(location) {
  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=us&elements=remove%3Acloudcover%2Cremove%3Adew%2Cremove%3Afeelslikemax%2Cremove%3Afeelslikemin%2Cremove%3Aprecipcover%2Cremove%3Apreciptype%2Cremove%3Apressure%2Cremove%3Asolarenergy%2Cremove%3Asolarradiation%2Cremove%3Avisibility&key=EXQLEW6XYD2UMM9HFYJLMLEH6&contentType=json`;
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("HTTP error!", response.status);
      }
      const result = response.json();
      console.log(result);
      return result;
    })
    .then((result) => {
      // current condition, temperature, feels like, hi and lo
      console.log(
        result.currentConditions.conditions,
        result.currentConditions.temp,
        result.currentConditions.feelslike,
        result.days[0].tempmax,
        result.days[0].tempmin,
      );
      // 7 days forecast (temperature)
      console.log(result.days);
    })
    .catch((error) => {
      console.error("Fail to fetch data", error);
    });
}
