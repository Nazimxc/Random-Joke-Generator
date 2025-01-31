const jokeContainer = document.getElementById("joke");
const btn = document.getElementById("btn");
const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

//USING PROMICE CHAIN
/* 
let getJoke = () => {
    jokeContainer.classList.remove("fade");
    fetch(url)
    .then(data => data.json())
    .then(item =>{
        jokeContainer.textContent = `${item.joke}`;
        jokeContainer.classList.add("fade");
    });
}
btn.addEventListener("click",getJoke);
getJoke(); */

//USING ASYNC/AWAIT

let getJoke = async () => {
    jokeContainer.classList.remove("fade");
    try {
        let response = await fetch(url);
        let item = await response.json();
        jokeContainer.textContent = item.joke;
        jokeContainer.classList.add("fade");
    } catch (error) {
        console.error("Error fetching joke:", error);
    }
};

btn.addEventListener("click", getJoke);
getJoke();
