import { connect } from 'react-redux';
import React from 'react';
// import { fetchPostsAndUsers }  from '../actions';

class UserHeader extends React.Component {
    // componentDidMount() {
    //     this.props.fetchPostsAndUsers();
    // }
    render() {
       
        const user = this.props.userComingFromHeader
      
        if(!user) {
            return null
        }
        return <div className="header">{user.name}</div>
    }
}

const mapStateToProps = (state, ownProps) => {
    console.log(state)
   
    return {
        userComingFromHeader: state.usersFromHeaderAction.find(user => user.id === ownProps.userIdComingFromPostList)
        //this state is coming from the fetchUser in the actions. We got all the ids we are interested in from the fetchPostsAndUsers. And now we compare them to the ids we get from the PostList so we can place them in the right post.
    }
}
//Always best to put logic into the mapStateToProps if the logic is coming from there and not in the copmonentDidMount!

export default connect(
    mapStateToProps
    // ,{ fetchPostsAndUsers }
)(UserHeader);

/*

We are getting the userId from the person who posted the post from PostList
With that we put that value to our action that we want to fetch this specific userId.
After every iteration PostList gives the Id then UserHeader component takes the id number as a prop then we give it to the fetchUser action.
Now the fetch users have all the UserIds from the PostList, we dont take all the users ids from the api only the ones we are interested in.
We only want to get the users that have the same id from our action response(user.id) and our props userId coming from PostList.
We put all this logic in our mapStateToProps function. For reusablilty purposes. So we can take this component anywhere and not rely on mapStateToProps. Sometimes it can be in a different file etc.
But we cannot get our UserHeader components props .userId because we are outisde the class.
But mapStateToProps has a 2nd argument that once componentDidMount happens it can get any props that are inside there.
We only render to each iteration only if the props.users will be the same as the prop id we get frpm PostList.
If it is the same we render our actions props user.nam

fetchPostAndUser we called in the PostList so our state has all the Ids from the fetchUser


SUMMARY:
1) Call fetchPostsAndUsers to get posts from fetch posts and ids from fetchUser into our state.
2) PostList renders posts and gives userIds to UserHeader.
3) UserHeader takes the fetchUser id and compares them with the posts ids.
4) Renders each userName in the appropiate post.
----------------
fetchPostsAndUsers gets the exact user.ids and then calls fetchUser so we need only once calling the fetchUser() so we dont need to call it every single time a post is rendered from the iteration.
 */