import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header";
import Footer from './components/footer';
import Slide from './components/Slide';
import React from 'react';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state= {apiResponse:""}
  }
  callAPI(){
    fetch("localhost:9000/login")
     .then(res => res.text())
     .then(res => this.setState({apiResponse: res}))
  }
  componentWilMount(){
    this.callAPI();
  }

render() {
  return (
    <div className="App"> 
      <Header title= "Sephora Website" Home= "Home" /> 
      
      <Slide  />
      <p>{this.state.apiResponse}</p>
      <Footer /> 

    </div>
  );
}
}

export default App;
