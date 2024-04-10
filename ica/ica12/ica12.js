function getQuote(){
    document.removeChild
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
    console.log('Question: ' +json.question)  
    console.log('The site responds!')
    const question = document.getElementById('js-quote-text')
    const answer = document.getElementById('js-answer-text')
    answer.textContent = ''
    question.textContent = json.question
    const ans = document.getElementById('js-tweet');
    ans.addEventListener('click',()=>{
        const answer = document.getElementById('js-answer-text')
        answer.textContent =json.answer
    })
    console.log('Answer: '+json.answer)
}
const link = 'https://trivia.cyberwisp.com/getrandomchristmasquestion'
const btn = document.getElementById('js-new-quote');
btn.addEventListener('click',getQuote)
getQuote()