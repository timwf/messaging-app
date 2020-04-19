import { createStore } from 'redux'
import { messageReducer } from './redux/messages/messagesReducer'

const store = createStore(messageReducer)

export default store
