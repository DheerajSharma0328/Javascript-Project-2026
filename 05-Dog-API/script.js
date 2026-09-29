const img = document.querySelector('.imgtag');
const imagbutton = document.querySelector('.imgbutton')

imagbutton.addEventListener('click' , ()=>{
    fetch('https://dog.ceo/api/breeds/image/random')
  .then(response => response.json())
  .then((json)=>{
    img.src = json.message;
  })
})