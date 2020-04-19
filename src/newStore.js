import { createStore, applyMiddleware } from 'redux'
import { messageReducer } from './redux/messages/messagesReducer'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';


const store = createStore(messageReducer, composeWithDevTools(applyMiddleware(thunk)))

export default store
