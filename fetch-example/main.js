import './style.css'
 
document.querySelector('#app').innerHTML = `
  <div>
    <h1>Hello SF!</h1>  
    <h2>Your weather report...</h2> 
    <div class="weather-report" 
      x-data="{forecast: {
        properties: {
          periods: []
        }
      }}"
      x-init="forecast = await (await fetch('https://api.weather.gov/gridpoints/MTR/84,105/forecast')).json()"
    >
      <ul>
        <template x-for="period in forecast.properties.periods">
          <div>
            <h3 x-text="period.name + ' (' + period.startTime.slice(5,10) + ')'"></h3>
            <p x-text="period.detailedForecast"></p>
          </div>
        </template>
      </ul>
    </div>
  </div>
`