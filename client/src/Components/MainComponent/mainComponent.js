import React from 'react';
import './mainComponent.scss';

// COMPONENTS   
import Header from '../Header/header';
import Hero from '../Hero/hero';
import Main from '../Main/main';
import Footer from '../Footer/footer';

class MainComponent extends React.Component {

    render() {
        return (

                <div>
                    <Header />
                        
                    <Hero />

                    <Main /> 

                    <Footer />

                </div>
        )
    }
}
export default MainComponent;