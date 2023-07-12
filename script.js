const champions = document.querySelectorAll('.champions');
champions.forEach(champion => {
  champion.addEventListener('mouseenter', () =>{
    if (window.innerWidth > 450){
      window.scrollTo({top: 30, behavior: 'smooth'});
    }
    const championselecionado = document.querySelector('.selecionado');

    championselecionado.classList.remove('selecionado');
    champion.classList.add('selecionado');

    const imgcard = document.querySelector('.champgrande');
    const idchamp = champion.attributes.id.value;

    imgcard.src = `src/image/${idchamp}2.png`;

    const nomechamp = document.getElementById('nome_champ');
    nomechamp.innerHTML = `${idchamp}`;

    descchamp = document.getElementById('desc_champ');
    descchamp.innerText = champion.getAttribute('data-description');
  } )
})
