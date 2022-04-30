import './App.css';
import { FaCreativeCommonsShare } from 'react-icons/fa';
import { useState } from 'react';
//282c34

function App() {

  let lowercaseLetters = 'abcdefghijklmnopqrstuvxyz';
  let uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVXYZ';
  let Numbers = '0123456789'
  let symbols = '~!@#$%^&*()_-+={}|:;"<,>.?/';

  let [password, setPassword] = useState("");
  let [sliderValue, setSliderValue] = useState(12);
  let [includeLowercase, setLowercase] = useState(false);
  let [includeUppercase, setUppercase] = useState(false);
  let [includeNumbers, setNumbers] = useState(false);
  let [includeSymbols, setSymbols] = useState(false);

  const passwordgenerate = ()=>{
    let passwordchar = "";
    if(includeLowercase ==false && includeUppercase ==false && includeNumbers ==false && includeSymbols ==false){
      alert("please select atleast one in the list");
    }

    if(includeLowercase){
      passwordchar += lowercaseLetters;
    }
    if(includeUppercase){
      passwordchar += uppercaseLetters;
    }
    if(includeNumbers){
      passwordchar += Numbers;
    }
    if(includeSymbols){
      passwordchar += symbols;
    }
    let characters = "";
    for(let i =0;i<sliderValue;i++){
      let randomindex = Math.round(Math.random()* passwordchar.length);
      characters += passwordchar.charAt(randomindex);
    }

    setPassword(characters);

  }

  function copy(text){
    navigator.clipboard.writeText(text);
  }
  return (
    <div className="App">
      
      <header className="App-header">
        <nav>
            <h3>Password Generator</h3>
        </nav>

        <div className='main-box'>
          <div className='password-box'><p id='passwordtext'>{password}</p></div>
          <button className="copy-button" onClick={copy(password)}><FaCreativeCommonsShare className='copy-icon'/></button>
        </div>
         
        <div className='second-div'>
          <div className='slider-div'>
            <div className='slider'>Password Length : {sliderValue}</div>
            <input type='range' className='slider' value={sliderValue} onChange={(e) => setSliderValue(e.target.value)} min='6' max ='30'></input>
          </div>
          <div className='checkboxs'>
            <div className='included'>
              <label htmlFor='lowercheckbox'> Lowercase Letters </label>
              <input type="checkbox" id='lowercheckbox' checked={includeLowercase} onChange={(e)=>{setLowercase(e.target.checked)}}/>
            </div>
            <div className='included'>
              <label htmlFor='uppercheckbox'> Uppercase letters </label>
              <input type="checkbox" id='uppercheckbox' checked={includeUppercase} onChange={(e)=>{setUppercase(e.target.checked)}}/>
            </div>
            <div className='included'>
              <label htmlFor='numbercheckbox'> Numbers </label>
              <input type="checkbox" id='numbercheckbox' checked={includeNumbers} onChange={(e) =>{setNumbers(e.target.checked)}}/>
            </div>
            <div className='included' >
              <label htmlFor='symbolcheckbox' > Symbols </label>
              <input type="checkbox" id='symbolcheckbox' checked={includeSymbols} onChange={(e) =>{setSymbols(e.target.checked)}}/>
            </div>
            
          </div>
          
          <button className='genarate-button' onClick={passwordgenerate}>Generate Password</button>
        </div>
            
      </header>
    </div>
  );
}

export default App;
