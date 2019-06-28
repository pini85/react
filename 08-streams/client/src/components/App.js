import React from 'react';
// import { BrowserRouter, Route} from 'react-router-dom'; commented out Browserrouter because we need to create our own router please see history.js for more info
import { Router, Route} from 'react-router-dom';
import StreamCreate from './streams/StreamCreate';
import StreamDelete from './streams/StreamDelete';
import StreamEdit from './streams/StreamEdit';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';
import Header from './Header';
import history from '../history';


const App = () => {
    return (
        
        <div className="ui container">
            {/* <BrowserRouter> */} 
            <Router history={history}>
                <div>
                    <Header />
                    <Route path="/" exact component={StreamList} />
                    <Route path="/streams/new" exact component={StreamCreate} />
                    <Route path="/streams/edit" exact component={StreamEdit} />
                    <Route path="/streams/delete" exact component={StreamDelete} />
                    <Route path="/streams/show" exact component={StreamShow} />
                </div>
            {/* </BrowserRouter> */}
            </Router>
        </div>
    );
};

export default App;



/**
 * 
 * const Page1 = () => {
    
//     return (
//         <div>Page 1
//             <Link to="/pagetwo">Page 2</Link>
//         </div>
//     ) 
// }

// const Page2 = () => {
  
//     return (
//         <div>Page 2
//             <Link to="/">Page 1</Link>
//         </div>
//     ) 
// }

// const App = () => {
//     return (
//         <div>
//         <BrowserRouter> 
//           <div>
//             <Route path="/" exact component={Page1} />
//             <Route path="/pagetwo"  component={Page2} />
//           </div>
//         </BrowserRouter>
//         </div>
//     )
// }
BrowserRouter And Route are components

We created an instance of the BrowserRouter.
TheBrowserRouter creates an object internally called histroy.
histroy object keeps track of the address bar in your browser. And it is going to extract just that part of the url that the BrowserRouter cares which is after the domain name or local host
1) So the histroy object will communicate the path to the BrowserRouter.
2) Browswer Router will communicate that url path to the Route components
3) The Route components will decide to either show themselves or hide themselves.



How react router looks for paths:
Starts with /
extractedPath.contains(path)
Basically asks this question does the string '/' which is from the extracted path contain in the url?
path='/', path='/page2' both true '/' path is a path in '/page2' so this is why we put exact. exact prop is essentially saying exact={true} which essentially changes
extracted path = from our string path='/'
path = from the url e.g. '/'
extractedPath.contains(path)
to 
extractedPath === path

a href

We do not use a href with react router. Because essentially what the browser does is this:
1) Browser makes a request to www.myapp/pagetwo
2) This is going to make a request to our react development server. And each time it will respond with a new index.html file.
3) Browser recieves index.htlm file, dumps old HTML file it was showing (including all of our react/redux/js state data)
4) Index.html file lists our JS files in script tags - browser downloads and executes these scripts.

What we want is to show the same index.html file on the screen so all our data will still be intact.
This is where Link tag shows up.

1) React router prevents the browser from navigating to the new page and fetching a new html.undex file
2) The url still changes but the Histroy sees the updated URL, takes URL and sends it to the BrowserRouter.
The BrowserRouter communicates the URL to Route components. And thus, all our components will still be there. And we will use the same index.html file
3) The components will rerender themselves who ever contains that url

So when we click on a link tag we are not dumping all of our react and js data.

SINGLE PAGE APPLICATION

This is where it comes from.We are not making an additional request for a seperate html document when we click on a link. we are only loading a single html document.


 */