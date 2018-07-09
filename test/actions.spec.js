import { types, getActionCreator } from './utils/defaults';
import createStore from './utils/createStore';

let store;

beforeEach(() => { store = createStore(); });

describe('When action does not have an async payload', () => {
  test('Invokes store#next', () => {
    const { dispatch, lastSpy } = store;

    const dispatched = getActionCreator(types.DEFAULT)();
    const expected = getActionCreator(types.DEFAULT)();

    dispatch(dispatched);

    expect(lastSpy.mock.calls[0]).toEqual([expected]);
    expect(lastSpy.mock.calls.length).toEqual(1);
  });
});
