import React from 'react';
import './puzzle.scss'

class Puzzle extends React.Component {

    render() {
        return (
            <>
                <section className="puzzle">
                    {/* done   */}
                    <div className="puzzle-blockA">
                        <img src=""></img>

                        <div className="puzzle-blockA__1">
                        
                        </div>
                        <div className="puzzle-blockA__2">
                            <img src=""></img>
                        </div>
                    </div>

                    {/* done */}
                    <div className="puzzle-blockB">

                        <div className="puzzle-blockAB__1">

                            <div className="puzzle-blockAB__2-A">

                                <div className="1a">
                                    <div className="1a2"></div>
                                    <div className="1a3"></div>
                                </div>

                                <div className="2b"></div>
                            </div>

                            <div className="B">
                            
                            </div>
                        </div>

                        <div className="puzzle-blockAB__2">
                        
                            <div className="puzzle-blockAB__2-A"></div>
                            <div className="puzzle-blockAB__2-B"></div>
                        </div>
                    </div>
           
                </section>
            </>
        )
    }
}
export default Puzzle;

