function getQuote(){
    var num = (Math.floor(Math.random() * 7438))
    const link = 'https://api.disneyapi.dev/character/'+num
    console.log('You pressed a button.')
    fetch(link)
    .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    return response.json();
  })
  .then((json) => displayQuote(json))
  .catch((err) => console.error(`Fetch problem: ${err.message}`));
}
function displayQuote(json){
    const char = json.data
    console.log(char)
    charName = char.name
    console.log('Name: ' + charName)  
    console.log('The site responds!')
    const name = document.getElementById('js-name')
    const pic = document.getElementById('js-pic')
    const desc = document.getElementById('js-desc')
    pic.src = char.imageUrl
    pic.alt = char.name
    name.textContent = charName
    const newList = document.createElement('ul')
    desc.appendChild(newList)
    for (let i = 0 ; i < char.films.length ; i++){
      var listItem = document.createElement('li')
      listItem.textContent = char.films[i] + ' (Film)'
      newList.appendChild(listItem)
    }
    for (let i = 0 ; i < char.shortFilms.length ; i++){
      var listItem = document.createElement('li')
      listItem.textContent = char.shortFilms[i]+ ' (Short Film)'
      newList.appendChild(listItem)
    }
    for (let i = 0 ; i < char.tvShows.length ; i++){
      var listItem = document.createElement('li')
      listItem.textContent = char.tvShows[i] + ' (TV Show)'
      newList.appendChild(listItem)
    }
    for (let i = 0 ; i < char.videoGames.length ; i++){
      var listItem = document.createElement('li')
      listItem.textContent = char.videoGames[i] + ' (Video Game)'
      newList.appendChild(listItem)
    }
    const btn = document.getElementById('js-new-quote');
    btn.addEventListener('click',()=>{desc.removeChild(newList)})
}
const btn = document.getElementById('js-new-quote');
btn.addEventListener('click',getQuote)
getQuote()