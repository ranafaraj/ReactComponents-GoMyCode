import img from "./virgil-cayasa-uPyX17wsHtc-unsplash.jpg"
import "./style.css";

function App() {
  return (
    <div className="App">
      <div style={{border:"solid 1px black", maxWidth:"100vw", margin:30, padding: 30  }}>

           <h1 className="title red">Rana Faraj</h1>

            <br/>

            <img  calssName="imgs" src={img} alt="imgFromSrc"/ >

            <br/>

            <img calssName="imgs"  src="/thao-le-hoang-WRfgYQWezh8-unsplash.jpg" alt="imgFromPublic" />

      </div>

      <video width="320" height="240" controls>
        <source src="myVideo.mp4" type="video/mp4" />
      </video>
      
    </div>
  );
}

export default App;
