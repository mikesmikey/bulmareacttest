import React, { Component } from 'react';

class Image extends Component {

    render() {
        return (
            <figure className="image is-3by5">
                <img src={this.props.src} alt="iphoneX" />
            </figure>
        );
    }
};

export default Image;