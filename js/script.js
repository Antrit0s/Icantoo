document.addEventListener('DOMContentLoaded', function () {
    const translateButton = document.getElementById('translateButton');
    const gestureInputLeft = document.getElementById('gestureInputLeft');
    const gestureInputRight = document.getElementById('gestureInputRight');
    const historyTextarea = document.getElementById('historyTextarea');
    const historySection = document.getElementById('historySection');
    const favoriteButton = document.getElementById('favoriteNav');
    const favoriteSection = document.getElementById('favoriteSection');
    const loginContainer = document.getElementById('login');
    const registerContainer = document.getElementById('register');
    const MAX_HISTORY_LENGTH = 10;

    gestureInputLeft.addEventListener('input', function () {
        const gestureText = gestureInputLeft.value;
        const translatedText = translateGestureToText(gestureText);
        gestureInputRight.value = translatedText;
    });

    translateButton.addEventListener('click', function () {
        const gestureText = gestureInputLeft.value;
        const translatedText = translateGestureToText(gestureText);
        gestureInputRight.value = translatedText;

        if (translatedText.trim() !== '') {
            storeTranslationInLocalStorage(translatedText);
        }

        displayLastTenTranslationsInHistory();
    });

    function translateGestureToText(gesture) {
        // Logic to translate the gesture to text goes here
        // Replace this with your actual translation algorithm or API call
        return gesture;
    }

    function storeTranslationInLocalStorage(translatedText) {
        let history = JSON.parse(localStorage.getItem('translationHistory')) || [];
        history.push(translatedText);
        if (history.length > MAX_HISTORY_LENGTH) {
            history.shift();
        }
        localStorage.setItem('translationHistory', JSON.stringify(history));
    }

    function displayLastTenTranslationsInHistory() {
        let history = JSON.parse(localStorage.getItem('translationHistory')) || [];
        const listItems = history.slice(-MAX_HISTORY_LENGTH).reverse().map(item => `<li>${item}</li>`).join('');
        historyTextarea.innerHTML = `<ul>${listItems}</ul>`;

        // Add event listeners to each word in the history list
        const historyListItems = historyTextarea.querySelectorAll('li');
        historyListItems.forEach(item => {
            item.addEventListener('click', function () {
                const clickedWord = item.textContent;
                gestureInputLeft.value = clickedWord;
                gestureInputRight.value = translateGestureToText(clickedWord);
            });
        });
    }

    document.getElementById("favorite").addEventListener("click", function () {
        const gestureInputLeftValue = gestureInputLeft.value;
        if (gestureInputLeftValue.trim() !== '') {
            const newListItem = document.createElement("li");
            newListItem.textContent = gestureInputLeftValue;
            favoriteSection.querySelector('.history-textarea ul').appendChild(newListItem);

            newListItem.addEventListener('click', function (event) {
                event.preventDefault();

                gestureInputLeft.value = newListItem.textContent;
                gestureInputRight.value = translateGestureToText(newListItem.textContent);
                storeTranslationInLocalStorage(newListItem.textContent);
                displayLastTenTranslationsInHistory();
            });
        }
    });

    document.getElementById("history").addEventListener("click", function () {
        toggleHistoryVisibility();
    });

    function toggleHistoryVisibility() {
        historySection.classList.toggle('visible');
    }

    favoriteButton.addEventListener('click', function (event) {
        event.preventDefault();
        toggleFavoriteVisibility();
    });

    function toggleFavoriteVisibility() {
        favoriteSection.classList.toggle('visible');
    }

    window.addEventListener('load', function () {
        displayLastTenTranslationsInHistory();
        const favoriteList = document.createElement('ul');
        favoriteSection.querySelector('.history-textarea').appendChild(favoriteList);
    });

  
});
function myMenuFunction() {
    var i = document.getElementById("navMenu");

    if(i.className === "nav-menu") {
        i.className += " responsive";
    } else {
        i.className = "nav-menu";
    }
   }
   var a = document.getElementById("loginBtn");
   var b = document.getElementById("registerBtn");
   var x = document.getElementById("login");
   var y = document.getElementById("register");

   function login() {
       x.style.left = "4px";
       y.style.right = "-520px";
       a.className += " white-btn";
       b.className = "btn";
       x.style.opacity = 1;
       y.style.opacity = 0;
   }

   function register() {
       x.style.left = "-510px";
       y.style.right = "5px";
       a.className = "btn";
       b.className += " white-btn";
       x.style.opacity = 0;
       y.style.opacity = 1;
   }