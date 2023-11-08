import { Router } from './router.js'


const router = new Router();

router.add('/', '/pages/home.html');
router.add('/about', '/pages/about.html');
router.add('/contact', '/pages/contact.html');
router.add(404, '/pages/404.html');

router.handle();
//usado para quando o usuário clicar nos botões de navegção (<- voltar,  ir ->)
//ele dispara a função handle para verificar no historico a rota se mudou e colocar ela em execução
window.onpopstate = () => router.handle(); 

window.route = () => router.route();


