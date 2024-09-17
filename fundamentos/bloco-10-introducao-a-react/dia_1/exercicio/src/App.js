// import logo from './logo.svg';
import './App.css';
import About from './About.js';

const Task = (value) => {
  return (
    <li key={value}>{value}</li>
  );
}

const tarefas = ['Acordar', 'Tomar café', 'Escovar os dentes', 'Ir trabalhar'];

function App() {
  return (
    <div>
      <About/>
      <ul>{tarefas.map((element) => Task(element))}</ul>
    </div>
  );
}

export default App;
