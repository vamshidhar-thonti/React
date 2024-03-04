import { compose, createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

// import { loggerMiddleware } from "./middleware/logger";
import logger from "redux-logger";
import { rootReducer } from "./root-reducer";

const persistConfig = {
  key: "root",
  storage,
  // Blacklist the reducers that doesn't need the local persistance
  // Here as the userReducer is anyways persisted with firebase/firestore,
  // we can blacklist that specific reducer
  blacklist: ["user"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// The shortcircuting logic helps in identifying the env type but it return only true or false,
// To get the actual logger object we use filter with Boolean type.
const middleWares = [process.env.NODE_ENV !== "production" && logger].filter(
  Boolean
);

const composeEnhancer =
  (process.env.NODE_ENV !== "production" &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));

export const store = createStore(
  persistedReducer,
  undefined,
  composedEnhancers
);

export const persister = persistStore(store);
