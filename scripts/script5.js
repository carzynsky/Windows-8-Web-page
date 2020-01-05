// Ustawienie odpowiednich uchwytów divów
const options = document.querySelectorAll('.option');
const colorLeaf = document.getElementById('colorLeaf');
const title = document.getElementById('title');
const pointsMessage = document.getElementById('points');

// Zmienna przechowująca informacjęczy gra jest aktywna
let isPlaying = true;
// Zmienna przechowująca id interwału
let countDown;
// Zmienna przechowująca wartość licznika
let timer = 3;
// Tablica wylosowanych kolorów
let colors = generateRandomColors();
// Indeksu, pod którym znajduje się zwycięski kolor
let winnerIndex = Math.floor(Math.random()*3);
// Zmienna przechowująca liczbę zdobytych punktów
let points = 0;

// Funkcja zwracająca losowy kolor w postaci rgb
function randomColor()
{
    let red = Math.floor(Math.random()*256);
    let green = Math.floor(Math.random()*256);
    let blue = Math.floor(Math.random()*256);

    return `rgb(${red}, ${green}, ${blue})`;
}

// Funkcja zwracająca tablicę wylosowanych kolorów
function generateRandomColors()
{
    let arr = [];
    for(let i=0; i<options.length; i++)
    {
        arr[i] = randomColor();
    }
    return arr;
}

// Umieszczenie punktacji na stronie
function setPoints()
{
    pointsMessage.textContent = `Points: ${points}`;
}

// Umieszczenie wylosowanych kolorów w postaci rgb na opcje
function setOptions()
{
    for(let i=0; i<options.length; i++)
    {
        options[i].textContent = colors[i];
    }
}

// Funkcja kolorująca liść na wylosowany zwycięski
function paintColorLeaf()
{
    colorLeaf.style.backgroundColor = colors[winnerIndex];
}

// Funkcja pozostawiająca na ekranie tylko prawidłową opcje
function showWinningOption()
{
    for(let i=0; i<options.length; i++)
    {
        if(i!=winnerIndex)
        options[i].style.opacity = '0';
    }
}

// Funkcja resetująca grę
function resetGame()
{
    clearInterval(countDown)
    timer = 3;
    colors = generateRandomColors();
    winnerIndex = Math.floor(Math.random()*3);
    
    setOptions();
    paintColorLeaf();

    // Przywrócenie startowych kolorów
    title.textContent = "What color is the leaf?";
    title.style.color = '#a56fdf';
    pointsMessage.style.color = '#a56fdf';

    // Przywrócenie nieprzezroczystości
    for(let i=0; i<options.length; i++)
    {
        options[i].style.opacity = '1';

    }
    isPlaying = true;
}

// Obsługa słuchacz zdarzeń dla przycisków
for(let i=0; i<options.length; i++)
{
    options[i].addEventListener('click', function(e)
    {
        if(isPlaying)
        {
            if(e.target.textContent == colorLeaf.style.backgroundColor)
            {
                showWinningOption();
                isPlaying = false;
                points++;
                pointsMessage.style.color = colors[winnerIndex];
                title.style.color = colorLeaf.style.backgroundColor;
                title.textContent = "Correct!";
                
                setTimeout(() => {
                    resetGame();
                },5000);
                countDown = setInterval(function(){
                    title.textContent = `Next round in ${timer}`;
                    timer--;
                },1000);
            }
            else
            {
                points--;
                title.textContent = "You're wrong...";
                options[i].style.opacity = '0';
            }
        }
        setPoints();
        
    });
}
// Wywołanie na start odpowiednich funkcji ustawiających
setPoints();
setOptions();
paintColorLeaf();

