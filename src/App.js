import './App.scss';
import Header from './components/Header';
import TodoList from './components/TodoList';
import TodoModal from './components/TodoModal';

function App() {
  return (
    <section className="container">
        <Header />
        <TodoList />
        <TodoModal />
      </section>
  );
}

export default App;
