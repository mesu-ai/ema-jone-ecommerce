import React from 'react';

const Feature = (props) => {
    
    const feature= props?.feature;

    const padding={
        paddingTop:'0px',
        paddingBottom:'0px',
        marginTop:'0px',
        marginBottom:'0px'
    }


    return (
        <div>
            
            <h4 style={padding}>{feature.description} {feature.value}</h4>
            
        </div>
    );
};

export default Feature;