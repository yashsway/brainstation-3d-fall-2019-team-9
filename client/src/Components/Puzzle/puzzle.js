import React from 'react';
import './puzzle.scss';
// IMAGES
import img11 from '../../assets/photos/1.png';
import img12 from '../../assets/photos/2.png';
import img13 from '../../assets/photos/3.png';
import img14 from '../../assets/photos/4.png';


const sampleData = {
    blockData: {
        blockOne: "Top Videos Related to Empathy: Empathy helps with management and collaboration by helping to understand the other person's perspective.",
        blockTwo: "Cultivating curiosity at all levels helps leaders and their employees adapt to uncertain market conditions and external pressures.",
        blockThree: "Cultivating curiosity at all levels helps leaders and their employees adapt to uncertain market conditions and external pressures.",
        blockFour: "Cultivating curiosity at all levels helps leaders and their employees adapt to uncertain market conditions and external pressures."
    }
}

class Puzzle extends React.Component {
    state = {
        data: sampleData.blockData.blockOne
    }

    textGenerator = () => {
        return <p className="text-box__content">{this.state.data}</p>
    }

    resetText1 = () => {
        this.setState({
            data: sampleData.blockData.blockOne
        })
    }

    resetText2 = () => {
        this.setState({
            data: sampleData.blockData.blockTwo
        })
    }

    resetText3 = () => {
        this.setState({
            data: sampleData.blockData.blockThree
        })
    }

    resetText4 = () => {
        this.setState({
            data: sampleData.blockData.blockFour
        })
    }

    render() {
        return (
            <section className="puzzle">
            <div className="puzzle-blockA">

                <div className="puzzle-blockA__1" onClick={() => { this.resetText1() }}>

                </div>
                <div className="puzzle-blockA__2" onClick={() => { this.resetText3() }}>
                    <div className="puzzle-blockA__2-a" onClick={() => { this.resetText2() }}>
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

                    <div className="puzzle-blockB" onClick={() => { this.resetText4() }}>

                        <div className="puzzle-blockB__1">
                            <img className="img-14" src={img14} alt=""></img>
                        </div>
                    </div>

                    <div classname="text-box">
                        {this.textGenerator()}
                    </div>
                </div>
            </div>
        </section>
        );
    }
}
export default Puzzle;

