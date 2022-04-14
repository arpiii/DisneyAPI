//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){

  const randomPage = Math.floor(Math.random() * 148) + 1
  const url = `https://api.disneyapi.dev/characters?page=${randomPage}`
  

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        function random(obj){
          const keys = Object.keys(obj)
          return keys[Math.floor(Math.random() * keys.length)]
        }
        let randomNumber = random(data.data)
        document.querySelector('h2').innerText = data.data[randomNumber].name
        document.querySelector('img').src = data.data[randomNumber].imageUrl
      })
      .catch(err => {
          console.log(`error ${err}`)
      });

    
}

  // let resClick = await fetch(url)
  // let dataClick = await resClick.json()

  // function random(obj){
  //   const keys = Object.keys(obj)
  //   return keys[Math.floor(Math.random() * keys.length)]
  // }
  // let randomNumber = random(dataClick.data)


  // let resCharacter = await fetch(dataClick.data[randomNumber]._id)
  // let dataCharacter = await resCharacter.json()
  // console.log(dataCharacter)

// }