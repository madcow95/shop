import './App.css';
import compUtil from "./util/component";
import { Routes, Route, useNavigate } from "react-router-dom";

const App = () => {
  
  const navigate = useNavigate();
  
  return (
    <div className="App">
      <compUtil.GetHeader NavigateState={ navigate }/>
      
      <Routes>
        <Route path="/" element={ <compUtil.GetMainPage NavigateState={ navigate } /> } />
        <Route path="/detail/:id" element={ <compUtil.GetProductDetail /> } />
        <Route path="/login" element={ <compUtil.GetLoginPage /> } />
        <Route path="/join" element={ <compUtil.GetJoinPage /> } />
        <Route path="/cart" element={ <compUtil.GetCartPage /> } />
        <Route path="/*" element={ <div>잘못 들어오신거 같은데요?</div> } />
      </Routes>
    </div>
  );
}
export default App;
