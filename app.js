   const API = 'https://api.giphy.com/v1/gifs/search?api_key='
   const KEY = 'sTdCJjIAUz2fNDMUob8nqHx6G50HnUzP'
   const limit = '&limit='
   const rest = '&q='

   const categories = [
      {
          name: 'batman',
          value: 'batman',
        
      },
      {
          name: 'spiderman',
          value: 'spiderman',
       
      },
      {
          name: 'Putin',
          value: 'Putin',
       
      },
      {
          name: 'ariana',
          value: 'ariana grande',
    
      },
      {
          name: 'pikachu',
          value: 'pikachu',

      }
  ];
   const txtInput = document.querySelector('.txtInput')
   const numInput = document.querySelector('.numInput')
   const searchButton = document.querySelector('.searchButton');
   const container = document.querySelector('.container');

   const output =document.querySelector('.output')
   const row =document.querySelector('.row')

   const getGiphyAsync = async (text, num = 5) => {
      const request = await fetch(`${API}${KEY}${limit}${num}${rest}${text}`)
      const response = await request.json()
      console.log(response);
      renderData(response.data);
     
   }
   getGiphyAsync()

const renderData = (data) => {
   row.innerHTML = ''

   data.forEach(el => {
   const gif =document.createElement('iframe')
   const col =document.createElement('div')
   const box =document.createElement('div')
   const title =document.createElement('p')
   
   title.textContent = el.title 
   gif.src = el.embed_url 
   col.className = 'col-3'
   box.className = 'box'

   box.append(gif,title)
   col.append(box)
   row.append(col)
   })
}

const renderCategory = () =>{
   categories.forEach(el =>{
         const button  =document.createElement('button')
        
         button.className = el.name
         button.textContent= el.value

         button.addEventListener('click' ,()=>{
            getGiphyAsync( el.value ,numInput.value ||5)
               console.log('rabotaet');
            })
            container.append(button,output)

      })
}
renderCategory()


txtInput.addEventListener('input', () => {
   const textValue = txtInput.value;
   getGiphyAsync(textValue);
});
const numValue = numInput.value;

searchButton.addEventListener('click', () => {
   const textValue = txtInput.value;
   const numValue = numInput.value;
   getGiphyAsync(textValue ,numValue);
});

