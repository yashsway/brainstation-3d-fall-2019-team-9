import React from 'react';
import './puzzle.scss'

class Puzzle extends React.Component {

    render() {
        return (
            <>

            <h1>TITLE</h1>
                <section className="puzzle">
            
                    <div className="puzzle-blockA">

                        <div className="puzzle-blockA__1">
                        
                        </div>
                        <div className="puzzle-blockA__2">
                            <div className="puzzle-blockA__2-a">
                                1
                            </div>

                            <div className="puzzle-blockA__2-b">
                                2
                            </div>
                        </div>
                    </div>

                    <div className="puzzle-blockB">

                        <div className="puzzle-blockAB__1">
                        
                        </div>
                    </div>

                    <div classname="text-box">
                        <p className="text-box__content">text text text text text</p>
                    </div>
           
                </section>
            </>
        )
    }
}
export default Puzzle;

