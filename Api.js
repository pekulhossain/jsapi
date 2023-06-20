fetch('https://restcountries.com/v3.1/all')
.then(res => res.json())
.then(res => printCountries(res));



function printCountries(countries){
const root =document.querySelector('#root');
let htmlCode='';
countries.forEach(country => {
htmlCode += makeHTML(country)
});
root.innerHTML = htmlCode;
}



function makeHTML(country){
    
    const {name,flags} = country;
   /*  console.log()  // for checking object*/
    const html = `
    <div>
    <img src="${flags.png}" alt="">
    <h3> Country: ${name.common}</h3>
</div>
    `;
    return html;
}

const form = document.getElementById('form');
form.addEventListener('submit', (e)=>{
e.preventDefault();
const text = e.target.searchBox.value;
const searchText = text.toLowerCase();
fetch(`https://restcountries.com/v3.1/name/${searchText}`)
.then(res=> res.json())
.then(res => printCountries(res))

});