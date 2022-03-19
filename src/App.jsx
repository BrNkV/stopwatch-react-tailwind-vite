import { useState } from 'react'
import DisplayComponent from './components/DisplayComponent';
import DispCompBtn from './components/DispCompBtn';
import Draggable from 'react-draggable';

function App() {
  const [time, setTime] = useState({ ms: 0, s: 0, m: 0, h: 0 });
  const [interv, setInterv] = useState();

  /**
   * not starter = 0
   * started = 1
   * stop = 2
   */
  const [status, setSatus] = useState(0);

  const start = () => {
    run();
    setSatus(1);
    setInterv(setInterval(run, 10));
  };

  let updatedMs = time.ms, updatedS = time.s, updatedM = time.m, updatedH = time.h;

  const run = () => {
    if (updatedM === 60) {
      updatedH++;
      updatedM = 0;
    }
    if (updatedS === 60) {
      updatedM++;
      updatedS = 0;
    }
    if (updatedMs === 100) {
      updatedS++;
      updatedMs = 0;
    }
    updatedMs++;
    return setTime({ ms: updatedMs, s: updatedS, m: updatedM, h: updatedH });
  }

  const stop = () => {
    clearInterval(interv);
    setSatus(2);
  }

  const reset = () => {
    clearInterval(interv);
    setSatus(0);
    setTime({ ms: 0, s: 0, m: 0, h: 0 });
  }

  const resume = () => start();

  return (
    <div className="App bg-gray-800 min-h-screen py-10 flex items-center justify-center">
      <div className="clock-holder bg-slate-500 rounded-xl w-2/3">
        <div className="stop-watch h-96 w-full text-center flex flex-col justify-center">
          <DisplayComponent time={time} />
          <DispCompBtn start={start} status={status} stop={stop} reset={reset} resume={resume}/>
        </div>
      </div>
    </div>
  )
}

export default App
