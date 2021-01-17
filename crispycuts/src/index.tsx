import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

const Body= ()=>{
  return(
    <div id="body">
      <Header />
      <Card 
        className='section'
        img='./Capture1.PNG'
        title='About the Company'
        description='Lorem ipsum dolor sit amet...'
      
      />
    </div>
  )
}

const Header = () =>{
  return(
    <div className='header'>
      <span className='header-title'>
        Company
      </span>
      <br/>
      <span className='header-text'>
        We specialize in something...
      </span>
    </div>
  )
}

const Card = (props) => {
  return(
    <div className={props.className} >
      <div className="small-div">
        <i className={props.className}></i>
        <img src={props.img} alt=''/>
      </div>

      <div className="big-div">
        <span className='div-title'>
          {props.title}
        </span>
        <br />
        <span>
          {props.description}
        </span>
      </div>
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <Body />
  </React.StrictMode>,
  document.getElementById('root')
);