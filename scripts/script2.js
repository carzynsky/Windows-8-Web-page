// Funkcja zwracająca losowy kolor w postaci rgb
function randomColor()
{
    let red = Math.floor(Math.random()*256);
    let green = Math.floor(Math.random()*256);
    let blue = Math.floor(Math.random()*256);
    return `rgb(${red}, ${green}, ${blue})`;
}
// Uchwyt kafelka odpowiedzialnego za losowy motyw
var tmp = document.querySelectorAll('.tileTheme');

// Dodanie słuchacza zdarzeń obsługującego naciśnięcie na kafelek zmieniający losowo motyw
for(let i=0; i<tmp.length; i++)
{
   tmp[0].addEventListener('click', function(e)
    {
        document.body.style.backgroundColor = randomColor();
        document.getElementsByClassName('tileFb')[0].style.backgroundColor = randomColor();
        document.getElementsByClassName('tileTwitter')[0].style.backgroundColor = randomColor();
        document.getElementsByClassName('tileYt')[0].style.backgroundColor = randomColor();
        document.getElementsByClassName('tileGuessRGB')[0].style.backgroundColor = randomColor(); 
        document.getElementsByClassName('tileQuote')[0].style.backgroundColor = randomColor();
        document.getElementsByClassName('tile2')[0].style.backgroundColor = randomColor();
        document.getElementsByClassName('tileTimer')[0].style.backgroundColor = randomColor();
        document.getElementsByClassName('tileTheme')[0].style.backgroundColor = randomColor();
        document.getElementsByClassName('tileWeather')[0].style.backgroundColor = randomColor();     

    });

}