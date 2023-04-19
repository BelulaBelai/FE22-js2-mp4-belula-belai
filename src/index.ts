
// Hämtar elementet med id 'display' från DOM:en och lagrar det i variabeln 'display'
const display = document.getElementById('display') as HTMLElement;
 
// Hämtar alla element med klassen 'button' från DOM:en och lagrar dem i en array i variabeln 'buttons'
const buttons = Array.from(document.getElementsByClassName('button')) as HTMLElement[];

// Lägger till en eventlistener för varje knapp
buttons.forEach(button => {
    button.addEventListener('click', (e: Event) => {
        // Hämtar det element som triggade händelsen och lagrar det i variabeln 'target'
        const target = e.target as HTMLElement;

        const innerText = target.innerText;

        // Använd en switch-sats för att hantera de olika knapptryckningarna
        switch (innerText) {
            case 'C':
                // Om knappen är 'C', rensa texten i displayen
                display.innerText = '';
                break;
            case '=':
                // Om knappen är '=',
                //  evaluera uttrycket i displayen med 'eval' och sätt resultatet som text i displayen
                // Om det blir ett fel, sätt texten till 'Error'
                try {
                    display.innerText = eval(display.innerText);
                } catch {
                    display.innerText = 'Error';
                }
                break;
            case '←':
                // Om knappen är '←', ta bort det sista tecknet i texten i displayen
                if (display.innerText) {
                    display.innerText = display.innerText.slice(0, -1);
                }
                break;
            default:
                // Annars, lägg till texten från knappen i slutet av texten i displayen
                display.innerText += innerText;
        }
    });
});

//Bakgrundsbild
const imgUrl = new URL('./images/numbers.jpg', import.meta.url);
const img: HTMLImageElement = new Image();
img.src = imgUrl.href;

const imgDiv: HTMLDivElement = document.createElement('div');
imgDiv.id = 'img';
imgDiv.append(img);
document.body.append(imgDiv);











