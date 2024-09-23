import "antd/dist/antd.less";
import { BrowserRouter } from "react-router-dom";
import { RouterConfig } from "navigation/RouterConfig";
import "./App.css";
function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <RouterConfig />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
