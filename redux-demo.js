const redux = require('redux');

const counterReduser = (state={counter:0},action)=>{
return {
  counter:state.counter +1 ,

};
};
const store = redux.createStore(counterReduser);

const counterSubscriber = ()=>{
  const latestState = store.getState();
  console.log(latestState);
};

store.subscribe(counterSubscriber);
store.dispatch({type:'increment'});