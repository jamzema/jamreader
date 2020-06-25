import React from 'react';
import ReactDOM from 'react-dom';

const Hello = () => (
  <div>
    <p>jamreaders</p>
  </div>
)

const App = () => {
  return (
    <div>
      <Hello />
      <Hello />
    </div>
  )
}



ReactDOM.render(<App />, document.getElementById('root'))

