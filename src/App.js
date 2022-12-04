import logo from './logo.svg';
import './App.css';

function App() {
  let post = '코딩애플 강의'

  return (
    <div className="App">
      <div className= "black-nav"> 
        <h4>백종현 웹개발 도전</h4>
      </div>
      <h4 style ={{color : 'red', fontSize : '16px'}}>{post}</h4>
    </div>
  );
}

export default App;
