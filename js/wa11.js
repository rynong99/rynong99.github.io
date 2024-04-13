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
    const filmList = document.getElementById('Films')
    for (let i = 0 ; i < char.films.length ; i++){
      var listItem = document.createElement('li')
      listItem.textContent = char.films[i]
      filmList.appendChild(listItem)
    }
    const sfList = document.getElementById('sFilms')
    for (let i = 0 ; i < char.shortFilms.length ; i++){
      var listItem = document.createElement('li')
      listItem.textContent = char.shortFilms[i]
      sfList.appendChild(listItem)
    }
    const showsList = document.getElementById('tvShows')
    for (let i = 0 ; i < char.tvShows.length ; i++){
      var listItem = document.createElement('li')
      listItem.textContent = char.tvShows[i]
      showsList.appendChild(listItem)
    }
    const vgList = document.getElementById('vGames')
    for (let i = 0 ; i < char.videoGames.length ; i++){
      var listItem = document.createElement('li')
      listItem.textContent = char.videoGames[i]
      vgList.appendChild(listItem)
    }
    const btn = document.getElementById('js-new-quote');
    btn.addEventListener('click',()=>{
      filmList.innerHTML = "Films";
      sfList.innerHTML = "Short Films";
      showsList.innerHTML = "TV Shows";
      vgList.innerHTML = "Video Games";
    })
}
const btn = document.getElementById('js-new-quote');
btn.addEventListener('click',getQuote)
getQuote()