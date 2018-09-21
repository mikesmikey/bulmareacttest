import React, { Component } from 'react';
import Image from './image';
import Bulma from 'bulma/css/bulma.css';
import Columns from './columns';

class MyApp extends Component {
  render() {
    return (
        <div>
            <section className="sections">
                <h1>Hello World</h1>
                <div className="columns">
                    <Columns class="column">
                        <Image src={require('./imgs/oppoF7.png')} alt="OPPOF7"/>
                    </Columns>
                    <Columns class="column">
                        <Image src={require('./imgs/iphoneX.png')} alt="IPhoneX"/>
                    </Columns>   
                    <Columns class="column">
                        <Image src={require('./imgs/appleXr.jpg')} alt="IPhoneXR"/>
                    </Columns> 
                </div>  
            </section>
        </div>
        );
    }  
};

export default MyApp;