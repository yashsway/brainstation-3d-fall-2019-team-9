import React from 'react';
import './puzzle.scss'


// IMAGES
import img11 from '../../assets/photos/1.png';
import img12 from '../../assets/photos/2.png';
import img13 from '../../assets/photos/3.png';
import img14 from '../../assets/photos/4.png';


class Puzzle extends React.Component {

    render() {
        return (
            <>

            
                <section className="puzzle">
            
                    <div className="puzzle-blockA">

                        <div className="puzzle-blockA__1">
                            <img className="img-11" src={img11} alt=""></img>
                        </div>
                        <div className="puzzle-blockA__2">
                            <div className="puzzle-blockA__2-a">
                                <img className="img-12" src={img12} alt=""></img>
                            </div>

                            <div className="puzzle-blockA__2-b">
                                <img className="img-13" src={img13} alt=""></img>
                            </div>
                        </div>
                    </div>

                    <div className="puzzle-blockB">

                        <div className="puzzle-blockB__1">
                            <img className="img-14" src={img14} alt=""></img>
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

