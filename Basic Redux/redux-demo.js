const redux = require("redux"); //import redux

//creating a reducer function
const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "increment") {
    return {
      //returning the updated State Object
      counter: state.counter + 1,
    };
  }
  else if(action.type === "decrement"){
    return {
        counter:state.counter - 1
    }
  }
  return state;
};
const store = redux.createStore(counterReducer); //Central Data Store for our project

const counterSubscriber = () => {
  //Subscriber Function
  const latestState = store.getState(); //Reading the latest State
  console.log(latestState);
};

store.subscribe(counterSubscriber); //telling node.js that counterSubscriber is a subscription function
store.dispatch({ type: "increment" });
store.dispatch({ type: "increment" });
store.dispatch({ type: "increment" });
store.dispatch({ type: "decrement" });
