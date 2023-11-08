export class Router {
  routes = {}

  add(routeName, page){
    this.routes[routeName] = page;
  }
  
  route(event){
    event = event || window.event;
    //removendo o efeito de recarregar a pagina 
    event.preventDefault();
    // como tirou o efeito ele se perde na pagina por isso devemos colocar
    // a pagina que vamos ir no historico, pegando o alvo do evento do click, e pegando o href dele.
    window.history.pushState({}, "", event.target.href);
    //na função acima estamos passando para o histórico o alvo do evendo, no caso o href do alvo do evento;
    this.handle();
  }

  handle(){
    //location contem todas as informações da pagina e o pathname, nome do caminho.
    const pathName = window.location.pathname;
    //se caso ele não achar a rota ele vai atribuir a pagina 404
    const route = this.routes[pathName] || this.routes[404]
    
    //buscando a rota e atribuindo o html dentro da div #app
    fetch(route) // mandando ele buscar o arquivo.
    .then(data => data.text()) // trazendo as informações de texto da pagina
    .then(html => {   // inserindo ela dentro da div app
      document.querySelector('#app').innerHTML = html;
    });
  
  }
}