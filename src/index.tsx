import React from 'react';
import { render } from 'react-dom';

import GuestBook from './components/GuestBook';
import * as serviceWorker from './serviceWorker';

render(<GuestBook />, document.getElementById('root'));
serviceWorker.unregister();
