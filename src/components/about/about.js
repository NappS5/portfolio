import React from 'react'
import './about.css'

function About() {
    return (
        <>
            <div className='about-container'>
                <div className='about-group'>
                    <div className='about_me'>
                        <h1 className='title'>Sobre mim</h1>
                        <p className='description'>Comecei na programação em si não faz muito tempo,
                            me interessei pelo desenvolvimento WEB e hoje sou um desenvolvedor Fullstack. Desde cedo me identifico com a área
                            de tecnologia e a curiosidade e amor pelos desafios proporcionados por ela, só intensificaram ainda mais meu desejo de trabalhar
                            na área. Sei que posso ser de muito valor para aqueles que trabalham junto de mim, pois sei me adaptar bem diante das adversidades e me considero um eterno aprendiz, aprendendo todos os dias com tudo e todos.  </p>
                    </div>

                    <div className='about_me'>
                        <h1 className='title'>Objetivo</h1>
                        <p className='description'>Meu objetivo pessoal é somar aos outros da melhor forma que eu puder sempre, atuando e
                            aprendendo com todas as oportunidades. É poder ter, nem que seja um pouco de minha contribuição, no máximo de projetos possíveis,
                            é fazer o meu nome junto das empresas as quais estarei trabalhando. Darei meu melhor para atingir aquilo que almejo e estou disposto a fazer de tudo pelo
                            meu objetivo, sendo assim de grande adição para uma equipe.</p>
                    </div>
                    <div className='about_me'>
                        <h1 className='title'>Habilidades</h1>
                        <p className='description'>Além das minhas habilidades em Javascript, HTML, CSS, React.js e Node.js, tenho também um espírito de
                            liderança, podendo trabalhar junto de grandes equipes em busca de um mesmo objetivo. Dispondo de humor alegre e cooperativo, procuro ser assertivo na comunicação, atencioso e paciente com aqueles que estão ao meu redor.
                            Por possuir conhecimento na língua Inglesa, posso me comunicar facilmente em conversas e reuniões internacionais.</p>
                    </div>
                </div>

            </div>


        </>
    )
}

export default About