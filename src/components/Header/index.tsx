import { useContext, useEffect, useState } from 'react';
import { MyContext } from '../../hooks/context';
import { useLocation } from 'react-router-dom';

export function Header() {
  const context = useContext(MyContext);

  if (!context) {
    throw new Error('Header must be used within a GlobalStateProvider');
  }

  const { darkMode, setDarkMode } = context;
  const [showNavBar, setShowNavBar] = useState(false);
  const location = useLocation().pathname;

  // Será executado toda vez que a página for carregada e quando a variável darkMode sofrer alguma alteração
  useEffect(() => {
    const html = document.querySelector('html') as HTMLElement;
    if (darkMode) {
      html.className = '';
      html.classList.add('bg-dark');
    } else {
      html.className = '';
      html.classList.add('bg-light');
    }
  }, [darkMode]);

  const links = [
    { id: '1', href: `${location === '/' ? '#inicio' : '/'}`, text: 'Inicio' },
    { id: '2', href: `${location === '/' ? '#sobre' : '/'}`, text: 'Sobre' },
    {
      id: '3',
      href: `${location === '/' ? '#tecnologias' : '/'}`,
      text: 'Tecnologias',
    },
    {
      id: '4',
      href: `${location === '/' ? '#projetos' : '/'}`,
      text: 'Projetos',
    },
    {
      id: '5',
      href: `${location === '/' ? '#mensagem' : '/'}`,
      text: 'Mensagem',
    },
  ];

  return (
    <header
      className={`flex justify-between items-center p-section py-2 ${darkMode ? 'bg-dark2 text-white ' : 'bg-light2 text-black'} fixed top-0 left-0 right-0 z-10`}
    >
      <p className="font-bold text-2xl">JC</p>

      <nav
        className={`${showNavBar ? 'block' : 'hidden'} absolute top-full left-0 right-0 ${darkMode ? 'bg-dark2 ' : 'bg-light2'} lg:!block lg:relative`}
      >
        <ul className="flex flex-col lg:flex-row lg:gap-4">
          {links.map((link) => {
            return (
              <li
                key={link.id}
                className="text-center border-b border-black last:border-none lg:border-none"
              >
                <a
                  href={link.href}
                  className={`inline-block w-full py-3 transition-colors duration-500 ${darkMode ? 'hover:bg-mainColorDark hover:text-black' : 'hover:bg-mainColorLight hover:text-white'} lg:px-4 lg:rounded`}
                >
                  {link.text}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      {darkMode ? (
        <button
          aria-label="Mudar para tema claro"
          onClick={() => setDarkMode(false)}
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 384 512"
            className="p-3 rounded-full fill-mainColorDark shadow-[0_0_8px_0_#29d3ff] transition-shadow duration-500 hover:shadow-[0_0_8px_4px_#29d3ff]"
            height="3em"
            width="3em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"></path>
          </svg>
        </button>
      ) : (
        <button
          aria-label="Mudar para tema escuro"
          onClick={() => setDarkMode(true)}
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 512 512"
            className="p-3 rounded-full fill-[#EB2F00] shadow-[0_0_8px_0_#EB2F00] transition-shadow duration-500 hover:shadow-[0_0_8px_4px_#EB2F00]"
            height="3em"
            width="3em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z"></path>
          </svg>
        </button>
      )}

      {showNavBar ? (
        <button
          aria-label="Fechar barra de navegação"
          className="lg:hidden"
          onClick={() => setShowNavBar(false)}
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 384 512"
            className={`p-2 transition-colors duration-500 ${darkMode ? 'hover:fill-mainColorDark' : 'hover:fill-mainColorLight'}`}
            height="3em"
            width="3em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"></path>
          </svg>
        </button>
      ) : (
        <button
          aria-label="Abrir barra de navegação"
          className="lg:hidden"
          onClick={() => setShowNavBar(true)}
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 448 512"
            className={`p-2  ${darkMode ? 'hover:fill-mainColorDark hover:transition-colors hover:duration-500' : 'hover:fill-mainColorLight hover:transition-colors hover:duration-500'}`}
            height="3em"
            width="3em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"></path>
          </svg>
        </button>
      )}
    </header>
  );
}
