import { configureStore } from "@reduxjs/toolkit";
import {getDefaultMiddleware} from "@reduxjs/toolkit"
import { persistStore, persistReducer, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import { FLUSH } from "redux-persist/es/constants";
import storage from "redux-persist/lib/storage";
import { rootReducers } from "./rootReducers";
const persistConfig = {
  key: "root",
  storage,
};


const persistedReducer = persistReducer(persistConfig, rootReducers)

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE,PAUSE,PERSIST,PURGE,REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
export default store;
