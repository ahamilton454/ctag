import React from 'react';
import MediaLink from './shared/MediaLink.jsx';
import PageHeader from './shared/PageHeader.jsx';
import TextEntry from './shared/TextEntry.jsx';
import BottomModal from './shared/BottomModal.jsx';
import LoginView from './views/Auth/LoginView.jsx';
import SignUpView from './views/Auth/SignUpView.jsx';
import PreviewProfile from './views/Preview/PreviewProfile.jsx'

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


class App extends React.Component {

  constructor() {
    super()

  }

  render() {
    return (
      <BrowserRouter>
        <div className='app'>
          <PreviewProfile />
        </div>
      </BrowserRouter>

    );
  }
}

export default App;