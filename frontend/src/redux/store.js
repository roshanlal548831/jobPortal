import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice"
import jobSlice from "./job/jobSlice"


import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist';
  import storage from 'redux-persist/lib/storage'
//   import { PersistGate } from 'redux-persist/integration/react'

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
  };
  
  const rootReducer = combineReducers({
    auth:authSlice,
     job:jobSlice
  });

  const persistedReducer = persistReducer(persistConfig, rootReducer)


   const store = configureStore({
     reducer: persistedReducer,
      middleware: (getDefaultMiddleware) =>
       getDefaultMiddleware({
         serializableCheck: {
           ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
         },
       }),
    // reducer:{
    //    auth:authSlice,
    //    job:jobSlice
    // }
})

export default store