const GET_DATA = 'data/GET_DATA';
const GET_DATA_SUCCESS = 'data/GET_DATA_SUCCESS';
const GET_DATA_FAIL = 'data/GET_DATA_FAIL';

const initial = {
  data: [],
};

export default function reducer(state = initial, action = {}) {
  switch (action.type) {
    case GET_DATA_SUCCESS: {
      return {
        ...state,
        data: action.result,
      };
    }
    default:
      return state;
  }
}

/**
 * 获取数据信息
 */
export function getData(data) {
  return {
    types: [GET_DATA, GET_DATA_SUCCESS, GET_DATA_FAIL],
    promise: client => client.get('https://www.easy-mock.com/mock/5c25e32eb2138d188c46763a/example/data', {
      data,
    }),
  };
}


