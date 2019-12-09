import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Transition } from 'react-transition-group';
import './index.css';

const App = () => {
  const [inProp, setInProp] = useState(false);

  return (
    <div>
      <button onClick={() => setInProp(true)}>switch</button>
      <div
        style={{
          padding: 10,
        }}
      >
        <Transition
          in={inProp}
          timeout={200}
          // mountOnEnter
          unmountOnExit
        >
          {status => {
            // exited - initial
            // --- click
            // entering
            // entered
            // --- click
            // exiting
            // exited
            console.log(status);
            return (
              <React.Fragment>
                <div className={['hi', `hi-${status}`].join(' ')}>
                  <div>
                    <hi>aa</hi>
                  </div>
                </div>
              </React.Fragment>
            );
          }}
        </Transition>
      </div>
    </div>
  );
};

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);

