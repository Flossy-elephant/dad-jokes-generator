async function generate() {
   try{
        const response = await fetch('https://icanhazdadjoke.com/',
            {
                headers:{
                    'Accept':'application/json'
                }
            }
        )
        const data = await response.json()

        const jokeHolder = document.getElementById('joke')
        jokeHolder.textContent = data.joke
       
    }
    catch (err){
        console.log(`something went wrong: ${err}`)
    }
}

const button = document.getElementById('button')

button.addEventListener('click',generate)
