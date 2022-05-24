import logo from './logo.svg';
import './App.css';
import { OperatingSystem } from './component/Functional';



function App() {

  let OsObject = [{Os: "Mobile Operating System"},{name:"Android"},{name:"Blackberry"},{name:"Iphone"},{name: "WindowsPhone"}]
  let Company = [{Os:"Mobile Manufacturers"},{name:"Samsung"},{name:"HTC"},{name:"Micromax"},{name:"Apple"}]
  
  return (
    <div className="App">
      {OsObject.map((info)=>(
        <div>
          <OperatingSystem {...info} />
        </div>
      ))}
      {Company.map((info)=>(
        <div>
          <OperatingSystem {...info} />
        </div>
      ))}
    </div>
    
  );
}

export default App;
