// import WidgetWrapper from "./Components/common/WidgetWrapper";

import ZmStockWidget from "./Components/ZmStockWidget";
import { ZmWeatherWidget } from "./Components/ZmWeatherWidget";

const App = () => {



  return  <div className="container">
        <h1>Zoma Widget System - Dashboard Demo</h1>
        <div className="dashboard">
          <ZmWeatherWidget/>
          <ZmStockWidget/>
        </div>
        </div>

}

export default App;