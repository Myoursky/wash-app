import { createStore, applyMiddleware, compose } from 'redux'
import reducer from '../redux/reducer';
import customMiddleWare from '../redux/middleware/clientMiddleware';
import ApiClient from '../utils/ApiClient';

const client = new ApiClient()
const enhancer = compose(
  applyMiddleware(
    customMiddleWare(client)
  )
);

export default function configStore () {
  const store = createStore(reducer, enhancer)
  return store
}
