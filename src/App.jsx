import { Route, Switch } from 'react-router-dom';
import List from './views/Characters/List';
import styles from './App.css';

export default function App() {
  return (
    <>
      <header>
        <h1>Characters of Rick & Morty</h1>
      </header>
      <main className={styles.container}>
        <Switch>
          <Route path='/'>
            <List />
          </Route>
        </Switch>
      </main>
      </>
  );
}
