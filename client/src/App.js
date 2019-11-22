import React from 'react';
import { Helmet } from 'react-helmet';


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Helmet>
          <title>Your App Title Here</title>
        </Helmet>
        <p>testing</p>
      </div>
    );
  }
}

export default App;
