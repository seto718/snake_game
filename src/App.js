import React from 'react';
import Navigation from './conponents/Navigation';
import Field from './conponents/Field';
import Button from './conponents/Button';
import ManipulationPanel from './conponents/ManipulationPanel';
import useSnakeGame from './hooks/useSnakeGame';


function App() {

  const {
    body,
    difficulty,
    fields,
    start,
    stop,
    reload,
    status,
    updateDirection,
    updateDifficulty,
  } = useSnakeGame()

  return (
    <div className="App">
      <header className="header">
        <div className="title-container">
          <h1 className="title">Snake Game</h1>
        </div>
        <Navigation
        length={body.length}
        difficulty={difficulty}
        onChangeDifficulty={updateDifficulty}
        />
      </header>
      <main className="main">
        <Field fields={fields} />
      </main>
      <footer className="footer">
        <Button
          status={status}
          onStop={stop}
          onStart={start}
          onRestart={reload}
         />
        <ManipulationPanel onChange={updateDirection} />
      </footer>
    </div>
  );
}

export default App;
