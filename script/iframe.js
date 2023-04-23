window.onload = function () {
  const contatoLink = document.querySelector(
    "a[href='../projetobootstrap/pages/contato.html']"
  );
  const article = document.getElementById('principalBody');
  const section = document.createElement('section');
  const link = contatoLink.href;

  contatoLink.addEventListener('click', (event) => {
    event.preventDefault();

    // Oculta as sections da página e abre apenas o iframe
    document.getElementById('recipeContentTitle').style.display = 'none';
    document.getElementById('recipeContentBody').style.display = 'none';

    // criar um elemento <section> e definir seus atributos
    section.setAttribute('id', 'iframeContainer');
    section.setAttribute('class', 'iframeOpen');

    // criar um elemento <div> e definir seus atributos
    const div = document.createElement('div');
    div.setAttribute('id', 'content');
    div.setAttribute('class', 'p-4 p-md-5 pt-5');

    // criar o elemento <iframe> e definir seus atributos
    const iframe = document.createElement('iframe');
    iframe.setAttribute('id', 'openPages');
    iframe.setAttribute('name', 'iframe');
    iframe.setAttribute('scrolling', 'no');
    iframe.setAttribute('src', link);

    // anexar o elemento <iframe> ao elemento <div>
    div.appendChild(iframe);

    // anexar o elemento <div> ao elemento <section>
    section.appendChild(div);

    // anexar o elemento <section> ao elemento <article>
    article.appendChild(section);
  });
};
