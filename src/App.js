// Import dependencies
import React from 'react';

// Import componets
import Start from './components/Start/Start';

// Import characters object
import CARDS_IMAGES from './assets/images/images';

/**
 * Renders the App component.
 */
const App = () => (
  <Start images={CARDS_IMAGES} />
);

// Export
export default App;