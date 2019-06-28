// import createHistroy from 'history/createBrowserHistory';
// export default createHistroy();
import { createBrowserHistory } from 'history'; 
export default createBrowserHistory();

/*
We are creating our own history object because each time normally when a path ( .e.g Route path= bla bla) directs to a component e.g. exact component={StreamCreate} what happens is the browserRouter takes that history object and gives it to the component to check if to render itself or not.
But in the case of programmatically redirecting to a path via an action creator, we no longer have hold of that history object because the action creator is not a component anymore.
So this is why we are creating our own history object and not relying on browser-router's history which is created automatically.
history is a dependecy of browser router so it was created automatically in its own file. So we just take that history object and create it.
Now we have full control of the histroy object. And we can refrence it to a action reactor.
But because of this we need to modify our root browserRouter to a custom router.
 */