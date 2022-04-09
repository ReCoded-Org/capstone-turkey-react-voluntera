import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';

import Navbar from './Navbar/Navbar';

test('render the Navbar', () => {
  const tree = renderer
    .create(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
