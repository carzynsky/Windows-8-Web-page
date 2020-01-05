// Deklaracja zmiennych potrzebnych do stopera i inicjacja ich wartości na 0
var seconds = 0;
var minutes = 0;
var hours = 0;

// Zmienna przechowująca id interwału
var intervalId;

// Zmienna przechowująca informację czy stoper jest już uruchomiony
var isStarted = false;

// Funkcja wywoływana co sekundę ustawiająca odpowiednie zmienne czasu i wyświetlająca je
function timer()
{
    seconds++;
    if(seconds >= 60) 
    {
        seconds = 0;
        minutes++;
        if(minutes>=60)
        {
            minutes=0;
            hours++;
        }
    }
    document.getElementById('clock').textContent = 
    (hours ? (hours > 9 ? hours : "0" + hours) : "00") 
    + ":" + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + 
    ":" + (seconds > 9 ? seconds : "0" + seconds);
    document.body.style.color = randomColor();

}

// Funkcja odpowiedzialna za uruchomienie stopera
function startTimer()
{
    if(!isStarted)
    {
        intervalId = setInterval(timer, 1000);
        isStarted = true;
    }
}

// Funkcja odpowiedzialna za zatrzymanie stopera
function stopTimer()
{
    isStarted = false;
    clearInterval(intervalId);
}

// Funkcja resetująca stoper
function resetTimer()
{
    document.getElementById('clock').textContent = "00:00:00";
    seconds = 0;
    minutes = 0;
    hours = 0;
}

// Funkcja losująca kolor w postaci rgb
function randomColor()
{
    let red = Math.floor(Math.random()*256);
    let green = Math.floor(Math.random()*256);
    let blue = Math.floor(Math.random()*256);
    return `rgb(${red}, ${green}, ${blue})`;
}
