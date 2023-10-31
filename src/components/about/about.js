import React from 'react'
import './about.css'

function About() {
    return (
        <>
            <div className='about-container'>
                <div className='about_me'>
                    <h1 className='title'>Sobre mim</h1>
                    <p className='description'>Meu nome é Felipe Sander Dhein e tenho 20 anos. Comecei na programção em sí não faz muito tempo,
                        me interessei pelo desenvolvimento WEB e hoje estou em busca de ser um desenvolvedor Fullstack, desde cedo sempre gostei da área
                        de técnologia, e a curiosidade e amor pelos desafios proporcionados por essa área só intensificaram mais ainda meu desejo de trabalhar
                        na área. Sei que posso ser de muito valor para aqueles que trabalham junto de mim, pois aprendo muito rápido, tendo também um forte
                        espírito de liderança. Sei me virar muito bem diante das adversidades e me considero um eterno aprendiz, aprendendo todos os dias, com tudo e todos.  </p>
                </div>

                <div className='about_me'>
                    <h1 className='title'>Objetivo</h1>
                    <p className='description'>Meu objetivo pessoal é somar aos outros da melhor forma que eu puder sempre, atuando e 
                    aprendendo com todas as oportunidades, é poder ter, nem que seja um pouco da minha ajuda, no máximo de projetos possíveis,
                    é fazer o meu nome junto das empresas as quais estarei trabalhando. Sou muito ambicioso e estou disposto a fazer de tudo pelo
                    meu objetivo, sendo assim de grande adição para a empresa na qual estarei trabalhando, pois darei o meu melhor para atingir aquilo que almejo.</p>
                </div>
                <div className='about_me'>
                    <h1 className='title'>Habilidades</h1>
                    <p className='description'>Além das minhas habilidades em Javascript, HTML, CSS, React.js, Node.js, também tenho muita facilidade em
                    liderança, podendo trabalhar junto de grandes equipes em busca de um mesmo objetivo, tenho facilidade na comunicação com aqueles que estão tanto acima,
                    quanto "abaixo" de mim. Sou muito atencioso e paciente com colegas e clientes, tendo humor alegre e cooperativo.</p>
                </div>
            </div>

        </>
    )
}

export default About