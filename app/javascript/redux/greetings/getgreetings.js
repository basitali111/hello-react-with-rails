import { createAsyncThunk } from '@reduxjs/toolkit';

// API

const baseApi = 'http://localhost:3000/api/v1/greetings';


const initialState = 'hello basit';

const GET_MESSAGE = 'hello-rails-react/message/GET_MESSAGE'

// export const fetchGreetings = createAsyncThunk(GET_MESSAGE, async () => {
//     const response = await fetch(baseApi);
//     console.log(response)
//     const greetingList = await response.json();
    
//     return greetingList;
//   });

// create action types
const addGreeting = (greeting) => ({type: GET_MESSAGE, payload: greeting});

// fetch api data
export const fetchGreetings = () => async (dispatch) => {
  const response = await fetch(baseApi);
    const data = await response.json();
    console.log(data.message)
    dispatch(addGreeting(data.message))
    return data;
};

  

  const greetingReducer = (state = initialState, action = {}) => {
    switch (action.type) {
      // case `${GET_MESSAGE}/fulfilled`:
      case GET_MESSAGE:
        return action.payload;
      default:
        return state;
    }
  };
  export default greetingReducer;
