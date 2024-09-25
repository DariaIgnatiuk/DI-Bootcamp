import BuggyCounter from "./Components/BuggyCounter"
import ErrorBoundary from "./Components/ErrorBoundary"
import Color from "./Components/Color"
import Child from "./Components/Child"

function App() {

  return (
    <>
      {/* Exercise 1 : Car and components */}
      {/* <h4>Click on the numbers to increase the counters.</h4>
      <h4>The counter is programmed to throw error when it reaches 5. This simulates a JavaScript error in a component.</h4>
      <hr/>
      <ErrorBoundary>
        <p>These two counters are inside the same error boundary. If one crashes, the error boundary will replace both of them.</p>
        <BuggyCounter/>  <br/>
        <BuggyCounter/>  
      </ErrorBoundary>
      <hr/>
      <p>These two counters are each inside of their own error boundary. So if one crashes, the other is not affected.</p>
      <ErrorBoundary><BuggyCounter/></ErrorBoundary> <br/>
      <ErrorBoundary><BuggyCounter/></ErrorBoundary>
      <hr/>
      <p>This counter is not inside of boundary. So if crashes, all other components are deleted.</p>
      <BuggyCounter/> */}


        
      {/* Exercise 2 : Lifecycle */}
      {/* <Color/> */}

      {/* Exercise 3 : Lifecycle #2 */}
      <Color/>
      

    </>
  )
}

export default App
