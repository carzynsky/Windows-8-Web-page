// Utworzenie stałej tablicy ze znanymi cytatami
const arr = ["\"The greatest glory in living lies not in never falling, but in rising every time we fall.\" - Nelson Mandela",
"\"The way to get started is to quit talking and begin doing.\" - Walt Disney",
"\"Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.\" - Steve Jobs",
"\"If life were predictable it would cease to be life, and be without flavor.\" - Eleanor Roosevelt",
"\"If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.\" - Oprah Winfrey",
"\"If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.\" -  James Cameron",
"\"Life is what happens when you're busy making other plans.\" - John Lennon",
"\"Spread love everywhere you go. Let no one ever come to you without leaving happier.\" -Mother Teresa",
"\"When you reach the end of your rope, tie a knot in it and hang on.\" -Franklin D. Roosevelt",
"\"Always remember that you are absolutely unique. Just like everyone else.\" -Margaret Mead",
"\"Don't judge each day by the harvest you reap but by the seeds that you plant.\" -Robert Louis Stevenson",
"\"The future belongs to those who believe in the beauty of their dreams.\" -Eleanor Roosevelt",
"\"Tell me and I forget. Teach me and I remember. Involve me and I learn.\" -Benjamin Franklin",
"\"The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.\" -Helen Keller",
"\"It is during our darkest moments that we must focus to see the light.\" -Aristotle",
"\"Whoever is happy will make others happy too.\" -Anne Frank",
"\"Do not go where the path may lead, go instead where there is no path and leave a trail.\" -Ralph Waldo Emerson"];

// Funkcja wyświetlająca na dzień i miesiąc na kafelek oraz godzinę w odpowiednim pasku
function loadOnScreen()
{
    var today = new Date();
    var dayNumber = today.getDate();

    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November'];
    var month = today.getMonth();

    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var dayName = days[today.getDay()];
    
    var hour = today.getHours();
    if(hour<10) hour = "0"+ hour;
    var minutes = today.getMinutes();
    if(minutes<10) minutes = "0"+ minutes;

    document.getElementsByClassName('tile2')[0].innerHTML = dayNumber + " " + months[month] + "<br />" + dayName;
    document.getElementById('clock').innerHTML = hour + ":" + minutes;
    setTimeout("loadOnScreen()",1000);
}

// Funkcja ładująca losowy cytat co 30 sekund na kafelek
function loadQuote()
{
    document.getElementsByClassName('tileQuote')[0].textContent = arr[Math.floor(Math.random()*arr.length)]; 
    setTimeout("loadQuote()",30000);
}




