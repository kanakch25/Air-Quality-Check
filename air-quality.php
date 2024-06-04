<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Air Quality Checker</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 20px;
    }
    #airQualityInfo {
      margin-top: 20px;
    }
  </style>
</head>
<body>
  <h1>Check Air Quality</h1>
  <label for="latitude">Latitude:</label>
  <input type="text" id="latitude" placeholder="Enter latitude">
  <br>
  <label for="longitude">Longitude:</label>
  <input type="text" id="longitude" placeholder="Enter longitude">
  <br>
  <button onclick="fetchAirQuality()">Check Air Quality</button>

  <div id="airQualityInfo"></div>

  <script src="script.js"></script>
</body>
</html>