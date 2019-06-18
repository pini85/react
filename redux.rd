Insurance company
Person makes a form with a type and a payload. Type being a claim,policy and removal. Payload being how much is the claim,policy and or removal name. 
The receiver gets the form and the insurance company has a centerailized data for claim history, policies and accounting(of all the money). 
The receiver gives each department their centrilized data. and its up to them to take it, see if it relevant to them, update the list and send it back to the centrilized data center. If it isnt relavant ot them they send it back unmodified.







Action Creator --> Person dropping off the form
A function that is going to create or return a plain js object

Action --> The form
We refer to this plain js object as an action. An action has a type property and a payload property.
The type property describes some change that we want to make inside our data.(create,delete,update for example)
The payload property describes some contexts around the change we want to make.(details of the data)
The purpose of an action is to describe some change that we want to make to the data inside of our application.

dispatch --> Form receiver
The purpose of the dispatch function is to take in the action and make copies of that object and then pass it off to a bunch of different places inside our application.

Reducers --> Departments
Reducers is a function that is responsible for taking an action and some exsisting amount of data and determine if it should update the data or not. It will look at the state for all the data for its section and then it will look at the action and based on that type decide how to update its data and it will spit it out

State --> Compiled department data
And gives it to the our State property.
The State is a central repository of all information that has been created by our reducers.
All the information gets consolidated inside the state object so that our react application can very easily reach in to our redux application the redux side of the app and get access to all of the data of our application.
So our react application doesnt have to go to each reducer and get the data from there.


//Action creators

const createPolicy = (name, amount) => {
    return { // Action
        type: 'CREATE_POLICY,
        payload: {
            name: name,
            amount: amount
        }
    };
};

const deletePolicy = (name) => {
    return {
        type: 'DELETE_POLICY,
        payload: {
            name: name
        }
    };
};

const createClaim = (name, amountOfmoneyToCollect) => {
    return {
        type: 'CREATE_CLAIM,
        payload: {
            name: name,
            amount: amountofMoneyToCollect
        }
    };
};

//Reducers (Departments)

const claimhistory =(oldListOfClaims = [], action) => {
    if (action.type === 'CREATE_CLAIM') {
        return [...oldListOfClaims, action.payload];
    }
    return oldListOfClaims
}
 


 We create a new array with the old data. We default the oldListOfClaims with an empty array because in the beggining when there is no data it will return undefined, so we want it to return an array.

 const accounting =(bagOfMoney = 100, action) => {
    if (action.type === 'CREATE_CLAIM') {
        return bagOfMoney action.payload.amount;
    } else if (action.type === 'CREATE_POLICY') {
        return bagOfMoney + action.payload.amount
    }
    return bagOfMoney
}

const policies =(listOfPolicies = [], action) => {
    if (action.type === 'CREATE_POLICY') {
        return [...listOfPolicies, action.payload.name];
    } else if (action.type === 'DELETE_POLICY') {
        return listOfPolicies.filter( el => el !== action.payload.name);
    }
    return listOfPolicies
}

//REDUX//

const { createStore, combineReducers } = Redux;

const ourDepartments = combineReducers( {
    accounting: accounting,
    claimHistory: claimsHistory,
    policiesL policies
} )

This object will combine all our reducers together

const store = createStore(ourDepartments);

creatStore method in Redux creates a centrailized data base for all our data.

store.dispatch(createPolicy('pini', 200))

This will update our listOfPolicies and also update our accounting

The dispatch will take our action and distrubute it to all our reducers and the reducers will update our State.

store.getState();
 
 Gives us our entire repository of data from our reducers.

 Each dispatch is essentially running an entire redux cycle
Calling an Action creator 
Getting an action
Feeding it into dispatch
That runs our reducers,
And gets into our State.


//Rules for Reducers//
/*

export default (state, action) => {
    return 123;
}

1) Must return any value besides 'undefined'

2) Produces 'state' or data to be used inside of your app using only previous state and the action 
When I application first runs it will go through our reducers and initialize it for the first time. It will pass first 2 arguments undefined and Action #1 and return a state.
This is why we always put a default value in our reducer (selectedSong = null) because if not it will return undefined. 
Then it will take our action and place it to the state. 
What happens the 2nd time the reducers are called 1st argument is the previous state and 2nd argument is the action # 2. It keeps on going like this.

3) Must not return reach 'out of itself' to decide what value to return (reducers are pure)
No returning anything else but the state and the aciton. No document.querySelector or axiois or anything like that.

4) Must not mutate its input 'state' argument
arrays
state.pop()
state.push()
objects
state.name
We definetly can mutate it but reading the source code from redux if we do. Then all our state will get rerendered not just the reducer in question.
In the source code it says if NextState =! previousState is true then we will rerender the next state. But if they are the same then we return state.
So what we can do is to return state at the reducers and then redux's function will return false
So what we do if we want to delete insert or update an array or object we use methods that create a new array or object. Please see the png.

Strings and numbers cannot be mutable. 
 */

componentDidMount for action creators
Redux to handle APIS

