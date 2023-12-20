import "./App.css";
import Button from "./components/Button";
import Alert from "./components/Alert";

function App() {
  return (
    <>
      <div className="App">
        <div className="button-components-section">
          {/* Render ตัว Button 2 แบบ */}
          <h1>Buttons</h1>
          <Button type="primary" text="Large" />
          <Button type="secondary" text="Large" />
        </div>
        <hr />
        <div className="alert-components-section">
          {/* Render ตัว Alert 4 แบบ */}
          <h1>Alert Component</h1>
          <Alert type="alert1" text="This is error alert box" />
          <Alert type="alert2" text="This is warning alert box" />
          <Alert type="alert3" text="This is info alert box" />
          <Alert type="alert4" text="This is success alert box" />
        </div>
      </div>
    </>
  );
}

export default App;
