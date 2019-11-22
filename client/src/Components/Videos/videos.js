import React from 'react';
import './videos.scss';

// IMAGES1
import img1 from '../../assets/Archive/unnamed.jpg';
import img2 from '../../assets/Archive/unnamed1.jpg';
import img3 from '../../assets/Archive/unnamed2.jpg';
import img4 from '../../assets/Archive/unnamed3.jpg';
import img5 from '../../assets/Archive/unnamed4.jpg';

// IMAGES2
import img6 from '../../assets/Archive/unnamed5.jpg';
import img7 from '../../assets/Archive/unnamed6.jpg';
import img8 from '../../assets/Archive/unnamed7.jpg';
import img9 from '../../assets/Archive/unnamed8.jpg';
import img10 from '../../assets/Archive/unnamed9.jpg';



class Videos extends React.Component {

    render() {
        return (
<>
                <section className="videos1">

                    <div className="videos1-firstblock">
                        <img className="img-1" src={img1} alt=""></img>
                    </div>
                    <div className="videos1-secondblock">
                        <img className="img-2" src={img2} alt=""></img>
                    </div>
                    <div className="videos1-thirdblock">
                        <img className="img-3" src={img3} alt=""></img>
                    </div>
                    <div className="videos1-fourthblock">
                        <img className="img-4" src={img4} alt=""></img>
                    </div>
                    <div className="videos1-fifthblock">
                        <img className="img-5" src={img5} alt=""></img>
                    </div>
                  
                </section>

                <section className="videos2">

                    <div className="videos2-firstblock">
                        <img className="img-6" src={img6} alt=""></img>
                    </div>
                    <div className="videos2-secondblock">
                        <img className="img-7" src={img7} alt=""></img>
                    </div>
                    <div className="videos2-thirdblock">
                        <img className="img-8" src={img8} alt=""></img>
                    </div>
                    <div className="videos2-fourthblock">
                        <img className="img-9" src={img9} alt=""></img>
                    </div>
                    <div className="videos2-fifthblock">
                        <img className="img-10" src={img10} alt=""></img>
                    </div>

                </section>

                </>

        )
    }
}
export default Videos;
