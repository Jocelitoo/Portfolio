import { useContext, useEffect, useState } from 'react';
import { MyContext } from '../../hooks/context';
import { useNavigate } from 'react-router-dom';

export function Page404() {
  const context = useContext(MyContext);

  if (!context) {
    throw new Error('Header must be used within a GlobalStateProvider');
  }

  const { darkMode } = context;

  const [timer, setTimer] = useState(10);
  const navigate = useNavigate();

  useEffect(() => {
    const redirectTimer = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer > 0) {
          return prevTimer - 1;
        } else {
          clearInterval(redirectTimer);
          navigate('/');
          return prevTimer;
        }
      });
    }, 1000);

    return () => clearInterval(redirectTimer); // Limpa o intervalo quando o componente desmonta
  }, [navigate]);

  return (
    <section
      className={`${darkMode ? 'bg-dark text-white' : 'bg-light text-black'} mt-16 flex flex-col gap-4 justify-center items-center flex-grow`}
    >
      <h1 className="font-bold text-5xl">Essa página não existe</h1>
      <p>Redirecionado para Home em: {timer}</p>
    </section>
  );
}
