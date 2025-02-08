import { useContext } from 'react';
import foto from '../../../assets/images/foto.jpg';
import { MyContext } from '../../../hooks/context';
import { h2CSS } from '../../../globalStyle/h2-css';
import { h2SpanCSS } from '../../../globalStyle/h2-span-css';

export function Sobre() {
  const context = useContext(MyContext);

  if (!context) {
    throw new Error('Header must be used within a GlobalStateProvider');
  }

  const { darkMode } = context;

  return (
    <section
      id="sobre"
      className={`flex flex-col items-center gap-4 p-section py-8 ${darkMode ? 'bg-dark2 text-white ' : 'bg-light2 text-black'} lg:flex-row`}
    >
      <div
        className={`rounded overflow-hidden border-4 ${darkMode ? 'border-[#29D3FF]' : 'border-[#013AFF]'} w-3/4 max-w-80 lg:w-full lg:min-w-52`}
      >
        <img
          src={foto}
          alt="Foto"
          className="w-full"
          width={400}
          height={400}
        />
      </div>

      <div className="flex flex-col items-center gap-2 text-center lg:text-start lg:items-start">
        <h2 className={h2CSS}>
          Sobre mim <span className={`${h2SpanCSS(darkMode)}`}></span>
        </h2>

        <p className="brightness-75">Fortaleza, Ceará.</p>

        <p className="brightness-75">
          Olá, me chamo Jocelito Climeres. Sou um jovem de 22 anos que em Julho
          de 2022 conheceu o mundo da programação e se apaixonou, desde então
          estudo diariamente para desenvolver cada vez mais minhas habilidades e
          conseguir ingressar no mercado de trabalho como um Desenvolvedor
          Front-end. Para impulsionar ainda mais meus estudos, comecei a cursar
          Analise e Desenvolvimento de Sistemas na{' '}
          <a
            href="https://www.unifor.br/"
            target="_blank"
            rel="noopener noreferrer"
            aria-labelledby="Unifor"
            className={`${darkMode ? 'text-mainColorDark' : 'text-mainColorLight'}`}
          >
            Unifor
          </a>{' '}
          e também comecei a ter contato com a parte de Back-end, pois sei que
          meus objetivos profissionais como Desenvolvedor só poderão ser
          alcançados com muito estudo e disciplina.
        </p>
      </div>
    </section>
  );
}
