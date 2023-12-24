import "./App.css";
import Button from "./components/Button";
import Alert from "./components/Alert";

function App() {
  return (
    <div className="App">
      <div className="button-components-section">
        {/* Render ตัว Button 2 แบบ */}
        <h1>Buttons</h1>
        <Button color="primary" text="primary" />
        <Button color="secondary" text="secondary" />
      </div>
      <hr />
      <div className="alert-components-section">
        {/* Render ตัว Alert 4 แบบ */}
        <h1>Alert Component</h1>

        <Alert pic="ErrorIcon" text="This is error alert box" />
        <Alert pic="WarningIcon" text="This is warning alert box" />
        <Alert pic="InfoIcon" text="This is an info alert box" />
        <Alert pic="SuccessIcon" text="This is success alert box" />
      </div>
    </div>
  );
}

export default App;
