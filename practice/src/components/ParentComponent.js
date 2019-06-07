import React from 'react';

const ParentComponent = (props) => {
    console.log(props.children.props)
    return <div>Parent Component</div>
}
export default ParentComponent;