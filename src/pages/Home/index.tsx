import { Container } from './styles';
import img from '../../assets/img.jpeg';

export function Home() {
  return (
    <Container>
      <p>Chá de Panela</p>
      <h1>Paula e Danyel</h1>
      <img src={img} alt="Paula e Danyel" />

      <h2>Lista de presentes</h2>
      <div>
        <a href="https://chat.bemol.com.br/pauladanyel" target="_blank" rel="noreferrer">Bemol</a>
        <a href="https://minhahavan.com/lista-de-presentes/627789?idFilial=&barcode=LIS2534796631" target="_blank" rel="noreferrer">Havan</a>
      </div>
    </Container>
  )
};
