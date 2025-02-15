  const firstimage=document.querySelector('img')
  const container=document.querySelector('.container')
  const h1=document.querySelector('h1')

  for(let i=2;i<=100;i++){
     const newimg=firstimage.cloneNode()
     newimg.src=`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`;
     container.append(newimg.cloneNode(true))
  }