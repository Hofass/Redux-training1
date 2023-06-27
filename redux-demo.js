const redux = require("redux");

const counterReduser = (state = { counter: 0 }, action) => {
	if (action.type === "increment") {
		return {
			counter: state.counter + 1,
		};
	} 
  return state
};
const store = redux.createStore(counterReduser);

const counterSubscriber = () => {
	const latestState = store.getState();
	console.log(latestState);
};

store.subscribe(counterSubscriber);
store.dispatch({ type: "increment" });
