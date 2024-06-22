import { FormEvent, useContext, useState } from 'react';
import { MyContext } from '../../../hooks/context';
import mailboxDark from '../../../assets/svgs/mailboxDark.svg';
import mailboxLight from '../../../assets/svgs/mailboxLight.svg';
import { labelCSS } from './style/label-css';
import { inputCSS } from './style/input-css';
import isEmail from 'validator/lib/isEmail';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { buttonCSS } from '../../../globalStyle/button-css';

export function Mensagem() {
  const context = useContext(MyContext);

  if (!context) {
    throw new Error('Header must be used within a GlobalStateProvider');
  }

  const { darkMode } = context;
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const submit = (event: FormEvent) => {
    if (!validateForm()) {
      event.preventDefault();
      return;
    }
  };

  const validateForm = () => {
    const errorList = [];

    if (name.length < 2) errorList.push('Nome precisa ter no mínimo 2 letras');
    if (!isEmail(email)) errorList.push('Email inválido');
    if (message.length < 10)
      errorList.push('Mensagem precisa ter no mínimo 10 letras');

    if (errorList.length > 0) {
      errorList.map((error) => {
        toast.error(error);
      });

      return false;
    }

    return true;
  };

  return (
    <section
      id="mensagem"
      onSubmit={(event) => submit(event)}
      className={`p-section ${darkMode ? 'text-white' : 'text-black'} flex flex-col gap-4 items-center lg:flex-row py-4`}
    >
      <div className={`min-w-60 max-w-sm w-full lg:max-w-none`}>
        {darkMode ? (
          <img
            src={mailboxDark}
            alt="Desenho de um carteiro do lado da caixa de correios"
          />
        ) : (
          <img
            src={mailboxLight}
            alt="Desenho de um carteiro do lado da caixa de correios"
          />
        )}
      </div>

      <form
        action="https://formspree.io/f/xyyqkrjp"
        method="post"
        className={`${darkMode ? 'bg-dark2' : 'bg-light2'} p-4 flex flex-col items-center gap-4 w-full max-w-lg rounded lg:max-w-none`}
      >
        <h2 className="font-bold text-2xl text-center">Mensagem</h2>

        <label
          htmlFor="name"
          className={`${labelCSS} ${darkMode ? 'focus-within:text-mainColorDark' : 'focus-within:text-mainColorLight'}`}
        >
          Nome:
          <input
            type="text"
            name="name"
            id="name"
            required
            value={name}
            onChange={(event) => setName(event.target.value)}
            className={`${inputCSS}`}
          />
        </label>

        <label
          htmlFor="email"
          className={`${labelCSS} ${darkMode ? 'focus-within:text-mainColorDark' : 'focus-within:text-mainColorLight'}`}
        >
          Email:
          <input
            type="email"
            name="email"
            id="email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className={inputCSS}
          />
        </label>

        <label
          htmlFor="mensagem"
          className={`${labelCSS} ${darkMode ? 'focus-within:text-mainColorDark' : 'focus-within:text-mainColorLight'}`}
        >
          Mensagem:
          <textarea
            name="mensagem"
            id="mensagem"
            cols={30}
            rows={10}
            required
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            className={inputCSS}
          ></textarea>
        </label>

        <button type="submit" className={`${buttonCSS(darkMode)}`}>
          Enviar mensagem
        </button>
      </form>
    </section>
  );
}
