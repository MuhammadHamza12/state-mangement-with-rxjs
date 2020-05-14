import { Subject } from 'rxjs';


const subject = new Subject();

const initialState = {
  data: [
    {
      email: 'muhammadhamzahaneef@gmail.com',
      message: 'Hello World'
    },
    {
      email: 'asadAkhtar@gmail.com',
      message: 'Hello World'
    }
  ],
  dataCount: 0
}

let state = initialState;

const chatStore = {
  init: () => {
    state = { ...state, dataCount: 0 }
    subject.next(state)
  },
  subscribe: setState => subject.subscribe(setState),
  sendMessage: message => {
    state = {
      ...state, data: [...state.data, message],
      dataCount: state.dataCount + 1
    };
    subject.next(state)
  },
  clearChat: () => {
    state = { ...state, data: [] };
    subject.next(state);
  },
  initialState
}
export default chatStore;