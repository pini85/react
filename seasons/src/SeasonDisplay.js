import './seasonDisplay.css';
import React from 'react';

const seasonConfig = {
    summer: {
        text: "It's so freaking hot!",
        iconName: 'sun'
    },
    winter: {
        text: "Burrrrr, it's chilly",
        iconName: 'snowflake'
    }
};


const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? "summer" : "winter";
    } else {
        return lat > 0 ? "winter" : "summer"
    }
};

const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth());
 
    // const text = season === "winter" ? "Burrrr, it's chilly" : "Its so freaking hot";
    // const icon = season === "winter" ? "snowflake" : "sun";

    // const text = seasonConfig[season].text
    // const iconName = seasonConfig[season].iconName

    const {text, iconName} = seasonConfig[season]
    //es5 object destructuring
    //var o = {p: 42, q: true};
    // var {p, q} = o;

    return (
        <div className={`season-display ${season}`}>
            <i className={`left massive ${iconName} icon`} />
            <h1>{text}</h1>
            <i className={`right massive ${iconName} icon`} />
        </div>
    );
}

export default SeasonDisplay;