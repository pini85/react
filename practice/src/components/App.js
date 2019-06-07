import React from 'react';
import ReactDOM from 'react-dom';
import Component from './Component'
import ParentComponent from './ParentComponent'
// const hi = 'hiiiiii';

// const App = () => {
    
//     return (
//         <div style={{fontSize: '20px'}}>
//             {hi}
//             <ParentComponent>
//                 <Component
//                 test= 'hi'
//                 test2= {hi} />
//             </ParentComponent>
             
//         </div>
//     )
// }
// ReactDOM.render(<App />, document.querySelector('#root'));

class App extends React.Component {
    state = {yo: ''}
    render() {
        return <div>I am a class component</div>

    }
}

ReactDOM.render(<App />, document.querySelector('#root'));
