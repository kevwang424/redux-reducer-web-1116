export function manageFriends(state, action){

  if (action.type === "ADD_FRIEND"){
    return Object.assign({}, state, {friends: [...state.friends, action.payload]})
  }
  else if (action.type === "REMOVE_FRIEND"){
    return Object.assign({}, state, {friends: state.friends.filter(function(friend){
      if(friend.id !== action.payload){
        return friend
      }
    })})
  }
  else {
    return state
  }

}
