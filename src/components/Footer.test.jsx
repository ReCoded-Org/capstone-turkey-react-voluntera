import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';

import Footer from './Footer';

test('should render the footer', () => {
  const tree = renderer
    .create(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
