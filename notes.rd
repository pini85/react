JSX
JSX is essentially javascript. Babel converts JSX to javascript so the browser understands it.

You must write after the return keyword the div or else it will return undefined

const App = () => {
        return <div>Hi there!</div>;
};


JSX is like HTML but with 3 differences

1)
If you have multi line JSX code then the convention is that you indent the div and in the return put (

const App = () => {

    return (
        <div>
            <label className="label" for="name">Enter name:</label>
            <input id="name" type="text"/>
            <button style={{backgroundColor: 'blue', color: 'white'}}></button>
        </div>
    );
};

Inline styles with JSX

button style={{backgroundColor:'red'}}

First {} indicates we want to reference a js variable inside our JSX.
Second {} means we want to indicate a js object.

class should be written className

