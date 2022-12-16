import { createAsyncThunk } from '@reduxjs/toolkit';

// API

const baseApi = 'http://127.0.0.1:3000//api/v1/greetings';


const initialState = 'hello basit';

const GET_MESSAGE = 'hello-rails-react/message/GET_MESSAGE'

export const fetchGreetings = createAsyncThunk(GET_MESSAGE, async () => {
    const response = await fetch(baseApi);
    console.log(response)
    const greetingList = await response.json();
    
    return greetingList;
  });
  

  const greetingReducer = (state = initialState, action = {}) => {
    switch (action.type) {
      case `${GET_MESSAGE}/fulfilled`:
        return action.payload.message;
      default:
        return state;
    }
  };
  export default greetingReducer;
