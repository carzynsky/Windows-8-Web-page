//Funkcja pobierająca informację o lokalizacji przy użyciu geolokacji html5 api
function getLocation() {
  if (navigator.geolocation) {
    var myLocation = navigator.geolocation.getCurrentPosition(function(position){
      // pobranie szerokości geograficznej
      var myLatitude = parseFloat(position.coords.latitude);
      // Pobranie długości geograficznej
      var myLongitude = parseFloat(position.coords.longitude);
      // Wywołanie funcki pobierającej i wyświetlającej odpowiednie dane o pogodzie
      getWeather(myLatitude, myLongitude);
    });
  }
  else {
    alert("Gelocation is not supported by this browser.")
  }
}
// Wywołanie funkcji, która pobiera informację o lokalizacji
getLocation();

// Pobranie informacji o pogodzie przy użyciu API od FreeCodeCamp
function getWeather(latitude, longitude){
  var myUrl = "https://fcc-weather-api.glitch.me/api/current?lat=" + latitude + "&lon=" +longitude;
  // ustawienie połączenia i funkcja zwrotna
  $.ajax({
    method: "GET",
    url: myUrl,
    cache: false,
    dataType: "json",
  }).done(function(data){
      $("#location").html(data.name);
      $("#celsius").html(Math.floor(data.main.temp) + "&#176;C");
  });
}

// Funkcja zwracająca losowy kolor w postaci rgb
function randomColor()
{
  let red = Math.floor(Math.random()*256);
  let green = Math.floor(Math.random()*256);
  let blue = Math.floor(Math.random()*256);

  return `rgb(${red},${green}, ${blue})`;
}

// Funkcja odpowiedzialna za zmianę koloru widgetu z pogodą
function changeColor()
{
  document.getElementById('location').style.color = document.getElementById('content').style.borderColor = 
  document.getElementById('celsius').style.color = randomColor();
}

// Wywoływanie funkcji zmieniającej kolory widgetu co sekundę
setInterval(changeColor,1000);