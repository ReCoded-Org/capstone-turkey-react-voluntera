import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';

import Project from './Project';
import store from '../../redux/store/store';

test('render the project page', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <Project />
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
