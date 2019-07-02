import React from 'react';
import LangaugeContext from '../contexts/LangaugeContext';

class Field extends React.Component {
    static contextType = LangaugeContext;
    render() {
        const text = this.context === 'english' ? 'Name' : 'Naam';
        return (
            <div className="ui field">
                <label>{text}</label>
                <input/>
            </div>

        );
    };
};

export default Field;