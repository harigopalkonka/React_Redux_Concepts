// Step 8 Create Reducer file

const count = 5;        // Step 9

export default function reducer(state = count, action) {        // step 10

  const { type, payload } = action;  // step 11

  switch (type) {                   // Step 12

    case "INCREMENT":
      return state + payload;

    case "DECREMENT":
      return state - 1;

    default:
      return state;

  }
  
}
