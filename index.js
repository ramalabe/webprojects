const btnEl = document.getElementById("button")
const jokeEl = document.getElementById("joke")

const apiKey = "4kqGcJx8uDXo3XIskcbzokAz7rN8nWJs3PL9Mcll"

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

const options = {
    method: "GET",
    headers: {
        "X-Api-Key": apiKey,
    }
}

async function getJoke(){
    try {
        jokeEl.innerText = "Updating..."
        btnEl.disabled = true;
        btnEl.innerText = "Loading..."
        const response = await fetch(apiURL, options);
        const data = await response.json(); 
        console.log(data[0].joke)
        jokeEl.innerText = data[0].joke
        btnEl.disabled = false;
        btnEl.innerText = "Tell me a Joke"
    } catch (error) {
        console.log(error)
    }
    
}

btnEl.addEventListener("click", getJoke)