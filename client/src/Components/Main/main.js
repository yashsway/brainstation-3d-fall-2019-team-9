import React from 'react';
import './main.scss';
import Topics from '../Topics/Topics';

import Puzzle from '../Puzzle/puzzle';
import Videos from '../Videos/videos'

class Main extends React.Component {

    render() {
        return (
            <div>
                {/* <Puzzle /> */}
                <Videos />                
            </div>
        )
    }
}
export default Main;
