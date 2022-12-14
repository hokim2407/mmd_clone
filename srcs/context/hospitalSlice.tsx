import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from './store';
const initialState: {hospital: Hospital | undefined} = {hospital: undefined};

const hospitalSlice = createSlice({
  name: 'hospital',
  initialState: initialState,
  reducers: {
    setHospital: (state, action: PayloadAction<Hospital>) => {
      state.hospital = action.payload;
    },
  },
});

const {setHospital} = hospitalSlice.actions;
const hospitalReducer = hospitalSlice.reducer;
const hospital = (state: RootState) => state.hospital.hospital;

export {setHospital, hospitalReducer, hospital};
