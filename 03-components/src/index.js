import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';


const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <div>
                    <h4>WARNING</h4>
                    Are you sure you want to continue?
                </div>

            </ApprovalCard>
            
            <ApprovalCard>
                <CommentDetail 
                    author="Sam" 
                    timeAgo="Today at 16:30" 
                    comment="What a nice post!"
                    avatar={faker.image.avatar()}/>
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail
                    author="Pini" 
                    timeAgo="Today at 18:30" 
                    comment="thank you!" 
                    avatar={faker.image.avatar()}/>
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail author="George"
                    timeAgo="Today at 20:30"
                    comment="I hate this post!" 
                    avatar={faker.image.avatar()}/>
            </ApprovalCard>
           
        </div>

    );
};

ReactDOM.render(<App/>, document.querySelector('#root'));

/*
Creating a Resusable Configurable Component

1) Identify the JSX that appears dublicate
2)What is the purpose of that block of JSX? Meaningful name
3)Create a new file from that component. Same name. And paste it there.
4)Make the new component configurable by using React's 'props' system

When we want to show a componenet inside of another componenet were going to treat it as though it were a JSX tag not a jsx variable with {}

We have a single instance of the App component. And we have 3 instances CommentDetial. App is the parent componentand the CommentDetail are the cihld components.
Props are a system to pass data from the parent component to the child component. The goal is to customize it.

We place objects inside the CommentDetail. And we consume them in the CommentDetail.js. The argument props is the objects. So we can say props.author to get the value out of the property.

Once you incapsulate a prop into another prop, inside the outer prop is called the parent. And the inside its the children. So you can get the prop by using prop.children
 */