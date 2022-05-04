import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';

import store from '../../redux/store/store';
import User from './User';

test('render the Userprofile page', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <User />
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
