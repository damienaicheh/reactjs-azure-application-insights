import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import SampleComponent from './SampleComponent'
import SendManualMetricComponent from './SendManualMetricComponent'
import SampleTrackingComponent from './SampleTrackingComponent'
import viteLogo from '/vite.svg'
import './App.css'
import { useAppInsightsContext, useTrackEvent, useTrackMetric } from "@microsoft/applicationinsights-react-js";

function App() {
  const appInsights = useAppInsightsContext();
  const [count, setCount] = useState(0)

  const trackCounterEvent = useTrackEvent(appInsights, "Counter", count);

  useEffect(() => {
    trackCounterEvent({ "CountValue": count });
  }, [count, trackCounterEvent]);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <SampleTrackingComponent />
      <br />
      <SendManualMetricComponent />
      <br/>
      <SampleComponent />
      <div className="card">
        <button onClick={() => { throw new Error("Fake exception raised")}}>
          Generate a crash
        </button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
