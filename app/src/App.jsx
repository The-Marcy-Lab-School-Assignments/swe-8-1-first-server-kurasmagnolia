/** @format */

import { useState } from 'react';
import './App.css';

function App() {
  return (
    <>
      <main>
        <h1>King's First API</h1>
        <p>
          Welcome to my first API! This is a simple API that returns a random
          joke, can roll dice for you, and can provide you with an awesome
          picture of my favorite TV show, Teen Wolf (you should watch it 😉).
          Enjoy!
        </p>
        <ul>
          <li>
            Visit <a href="/api/joke">/api/joke</a> for a funny joke
          </li>
          <li>
            Visit <a href="/api/picture">/api/picture</a> to see an awesome Teen
            Wolf picture
          </li>
          <li>
            Visit <a href="/api/rollDie">/api/rollDie</a> to roll a die. (Try{' '}
            <a href="/api/rollDie?quantity=3">/api/rollDie?quantity=3</a> to
            roll multiple dice!)
          </li>
          <li>
            Also, check these other ones out:{' '}
            <a href="/api/rollDie">/api/rollDie</a> to roll a die. |{' '}
            <a href="/api/rollDie?quantity=2">/api/rollDie?quantity=2</a> |{' '}
            <a href="/api/rollDie?quantity=4">/api/rollDie?quantity=4</a> |{' '}
            <a href="/api/rollDie?quantity=5">/api/rollDie?quantity=5</a> |{' '}
            <a href="/api/rollDie?quantity=6">/api/rollDie?quantity=6</a>{' '}
          </li>
        </ul>
      </main>
    </>
  );
}

export default App;
