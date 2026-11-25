import Board from "./components/Board/Board";

export default function App() {
  return (
    <main className="app">
      <div className="background-glow" aria-hidden="true" />
      <section className="game-shell">
        <p className="eyebrow">DESAFIO EM REACT</p>
        <h1>Jogo da Velha</h1>
        <p className="subtitle">Duas pessoas, uma partida e muita estratégia.</p>
        <Board />
        <footer>Desenvolvido com React · JavaScript · CSS</footer>
      </section>
    </main>
  );
}
