import React from 'react';
import './App.scss';

// COMPONENTS
import MainComponent from '../src/Components/MainComponent/mainComponent';


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <MainComponent />
        
      </div>
    );
    }
}
export default App;
