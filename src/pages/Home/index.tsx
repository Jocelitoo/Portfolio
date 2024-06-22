import { Banner } from '../../components/homeSections/Banner';
import { Mensagem } from '../../components/homeSections/Mensagem';
import { Projetos } from '../../components/homeSections/Projetos';
import { Sobre } from '../../components/homeSections/Sobre';
import { Tecnologias } from '../../components/homeSections/Tecnologias';

export function Home() {
  return (
    <main className="mt-16 flex flex-col gap-4">
      <Banner />
      <Sobre />
      <Tecnologias />
      <Projetos />
      <Mensagem />
    </main>
  );
}
