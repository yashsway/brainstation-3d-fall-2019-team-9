import React from 'react';
import './videos.scss';

// IMAGES
import img1 from '../../assets/Archive/unnamed.jpg'


class Videos extends React.Component {

    render() {
        return (
<>
                <section className="videos1">

                    <div className="videos1-firstblock">
                        <img className="img-1" src={img1} alt=""></img>
                    </div>
                    <div className="videos1-secondblock">

                    </div>
                    <div className="videos1-thirdblock">

                    </div>
                    <div className="videos1-fourthblock">

                    </div>
                    <div className="videos1-fifthblock">

                    </div>
                  
                </section>

                <section className="videos2">

                    <div className="videos2-firstblock">

                    </div>
                    <div className="videos2-secondblock">

                    </div>
                    <div className="videos2-thirdblock">

                    </div>
                    <div className="videos2-fourthblock">

                    </div>
                    <div className="videos2-fifthblock">

                    </div>

                </section>

                </>

        )
    }
}
export default Videos;
