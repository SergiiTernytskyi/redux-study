import { createStore } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';
import { rootReducer } from './reducers';

const enchancer = devToolsEnhancer();

export const store = createStore(rootReducer, enchancer);
