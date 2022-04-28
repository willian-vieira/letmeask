import { ButtonHTMLAttributes } from "react" //importa todos os atributos de um botão HTML padrão

import '../styles/button.scss'

//Recebe a Tipagem das propriedades de 'ButtonHTMLAttributes'
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

//Função recebe as propriedades 'props' de 'ButtonProps'
export function Button(props: ButtonProps) {
    return (
        //Repassa todas as props recebida na função para o botão 'button'
        <button className="button" {...props} />
    )
}