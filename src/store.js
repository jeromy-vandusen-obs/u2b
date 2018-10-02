import { createStore } from 'redux';

import initialState from './state/initialState';
import rootReducer from './reducers/rootReducer';

export default function configureStore() {
    return createStore(
        rootReducer,
        initialState
    );
};
