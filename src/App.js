import logo from './logo.svg';
import './App.css';
import Axios_Get from './Components/Axios_Get';
import Axios_Post from './Components/Axios_Post';
import Axios_Interceptor from './Components/Axios_Interceptor';

function App() {
  return (
    <div className="App">
      <Axios_Get></Axios_Get>

      {/* <Axios_Post></Axios_Post>cc */}
      {/* <Axios_Interceptor></Axios_Interceptor> */}
    </div>
  );
}

export default App;
