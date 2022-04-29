import { useNavigate } from 'react-router-dom';

import {auth, firebase } from '../services/firebase';

import ilustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import googleIconImg from '../assets/images/google-icon.svg';

import { Button } from '../components/Button';

import '../styles/auth.scss';

export function Home() {
    //variável navegate: Recebe o Hook 'useNavigate' responsável por fazer navegações de paginas/rotas
    let navegate = useNavigate();
    
    //1-função recebe no 'provider' método de autentificação padrão do Google
    //2-função recebe 'navegate' com parametro da sua rota atual
    //3-função realiza autentificação e navegação entre as paginas, pós autentificação com sucesso!
    function hadleCreateRoom() {
        const provider = new firebase.auth.GoogleAuthProvider();
        
        /*auth.signInWithPopup(provider).then(resolve => {
            console.log(resolve);
        })*/

        auth.signInWithPopup(provider).then(function(result) {
            console.log(result);
        })

       // firebase.auth().signInWithPopup(provider).then(function(result) {
        //    console.log(result);
        //});

        navegate('/rooms/new')
    }

    return (
        <div id="page-auth">
            <aside>
                <img src={ilustrationImg} alt="Ilustração simbolizando perguntas e respostas" />
                <strong>Crie salas de Q&amp;A ao-vivo</strong>
                <p>Tire as dúvidas da sua audiência em tempo-real</p>
            </aside>
            <main>
                <div className="main-content">
                    <img src={logoImg} alt="Letmeask" />

                    <button onClick={hadleCreateRoom} className="create-rom">
                        <img src={googleIconImg} alt="Logo do Google" />
                        Crie sua sala com o Google
                    </button>

                    <div className="separator">
                        ou entre em uma sala
                    </div>

                    <form>
                        <input type="text" placeholder="Digite o código da sala"/>
                        <Button type="submit">
                            Entrar na sala
                        </Button>
                    </form>
                </div>
            </main>
        </div>
    )
}