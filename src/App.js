import ReactGA from 'react-ga';
import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import $ from 'jquery';
import Header from './Components/Header';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      foo: 'bar',
      resumeData: {}
    };
    
    ReactGA.initialize('UA-110570651-1');
    ReactGA.pageview(window.location.pathname);
  }

  getResumeData(){
    $.ajax({
      url:'./resumeData.json',
      dataType:'json',
      cache: false,
      success: function(data){
        this.setState({resumeData: data});
      }.bind(this),
      error: function(xhr, status, err){
        console.error(err);
        alert(err);
      }
    })
  }

  //render resume data ketika pertama kali component dirender
  componentDidMount(){
    this.getResumeData();
  }

  render(){
    return (
      <div className="App">
        <Header data={this.state.resumeData.main}/>
      </div>
    );
  }

}

export default App;
