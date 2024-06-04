async function fetchAirQuality() {
      const lat = document.getElementById('latitude').value;
      const lon = document.getElementById('longitude').value;
      const apiKey = 'YOUR_GOOGLE_API_KEY'; // Replace with your actual API key

      if (!lat || !lon) {
        alert('Please enter both latitude and longitude');
        return;
      }

      const endpoint = `https://maps.googleapis.com/maps/api/airquality/v1/lookup?lat=${lat}&lon=${lon}&key=${apiKey}`;

      try {
        const response = await fetch(endpoint);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        displayAirQuality(data);
      } catch (error) {
        console.error('Error fetching air quality data:', error);
        document.getElementById('airQualityInfo').innerText = 'Error fetching air quality data. Please try again.';
      }
    }

    function displayAirQuality(data) {
      const airQualityInfo = document.getElementById('airQualityInfo');
      if (data.results && data.results.length > 0) {
        const result = data.results[0];
        airQualityInfo.innerHTML = `
          <h2>Air Quality Information</h2>
          <p>Location: ${result.station.name}</p>
          <p>AQI: ${result.aqi}</p>
          <p>PM2.5: ${result.pm25} µg/m³</p>
          <p>PM10: ${result.pm10} µg/m³</p>
          <p>O3: ${result.o3} ppb</p>
          <p>NO2: ${result.no2} ppb</p>
          <p>SO2: ${result.so2} ppb</p>
          <p>CO: ${result.co} ppm</p>
        `;
      } else {
        airQualityInfo.innerText = 'No air quality data available for this location.';
      }
    }