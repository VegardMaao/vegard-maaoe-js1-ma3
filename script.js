//Question 1:
//Convert the following to an arrow function:
// function getRemainder(a,b) {
//     return a % b;
//     };   

const getRemainder = (a, b) => a % b;

//Question 2: 

const resultContainer = document.querySelector(".results");

const apiKey = "f7c9560db2974722a771452c4bb3604f";
const url = `https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=${apiKey}`;

async function makeHTMLfromURL() {
    try {
        const response = await fetch(url);
        const finishedResponse = await response.json();
        // console.log(finishedResponse.results);
        const data = finishedResponse.results;
        // console.log(data);
        for (let i = 0; i < data.length; i++) {
            if (i === 8){
                break;
            }
            resultContainer.innerHTML += `
            <div class = "infobox">
            <p>Name: ${data[i].name}<p>
            <p>Rating: ${data[i].rating}</p>
            <p>Number of tags: ${data[i].tags.length}</p>
            </div>
            `;
       }
        resultContainer.classList.remove("results");
    } catch (error) {
        console.log(error);
        resultContainer.classList.remove("results");
        resultContainer.innerHTML = `
            <div class = "errormessage">
            <p>Cannot load API. Error is <span class=highlightText>${error}</span></p>
            </div>`;
    };
};

makeHTMLfromURL();