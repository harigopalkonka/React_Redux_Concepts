// Step1:- Create Store

import { createStore, applyMiddleware } from "redux";                   // Step 2: Imports 3 Modules
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import reducer from "./reducer";    // Step 13

const middleware = [thunk];        // step 5

const store = createStore(                          // Step 3: Create Store
  reducer,                                           // Step 4
  composeWithDevTools(applyMiddleware(...middleware))  // step 6
);

export default store;               // Step 7
