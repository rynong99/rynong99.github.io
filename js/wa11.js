function getQuote(){
    console.log('You pressed a button.')
    fetch(link)
    .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    return response.json();
  })
  .then((json) => displayQuote(json.data))
  .catch((err) => console.error(`Fetch problem: ${err.message}`));
}
function displayQuote(json){
    const char = json[(Math.floor(Math.random() * json.length))]
    charName = char.name
    console.log('Name: ' + charName)  
    console.log('The site responds!')
    const name = document.getElementById('js-name')
    const pic = document.getElementById('js-pic')
    const desc = document.getElementById('js-desc')
    pic.src = char.imageUrl
    pic.alt = char.name
    name.textContent = charName
    desc.textContent = char.films
}
const link = 'https://api.disneyapi.dev/character/'
const btn = document.getElementById('js-new-quote');
btn.addEventListener('click',getQuote)
getQuote()