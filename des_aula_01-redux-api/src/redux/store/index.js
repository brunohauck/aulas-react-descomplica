import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = {
  form: {
    name: '',
    email: '',
    phone: ''
  }
};


const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    updateForm: (state, action) => {
      return { ...state, ...action.payload };
    }
  }
});

export const { updateForm } = formSlice.actions;

const store = configureStore({
  reducer: formSlice.reducer
});

export default store;
