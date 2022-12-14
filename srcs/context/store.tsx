import {configureStore} from '@reduxjs/toolkit';
import {hospitalReducer} from './hospitalSlice';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';

const store = configureStore({
  reducer: {hospital: hospitalReducer},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Use throughout your app instead of plain `useDispatch` and `useSelector`
const useAppDispatch: () => AppDispatch = useDispatch;
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export {store, useAppDispatch, useAppSelector};
