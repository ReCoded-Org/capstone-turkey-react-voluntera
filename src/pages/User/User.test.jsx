import renderer from 'react-test-renderer';

import User from './User';

test('render the Userprofile page', () => {
  const tree = renderer.create(<User />).toJSON();
  expect(tree).toMatchSnapshot();
});
