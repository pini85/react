import React from 'react';

class Component extends React.Component {
    constructor(props) {
        super(props);
        this.reference = React.createRef();
       
    }
    componentDidMount() {
        console.log(this.reference)
    }
    render() {
        return (
            <div ref ={this.reference} />
        )
    }
}

export default Component;