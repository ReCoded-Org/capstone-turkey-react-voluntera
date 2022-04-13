import renderer from 'react-test-renderer';

import Project from './Project';

test('render the project page', () => {
  const tree = renderer.create(<Project />).toJSON();
  expect(tree).toMatchSnapshot();
});
