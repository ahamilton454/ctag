import React from 'react';
import MediaLink from './shared/MediaLink.jsx';
import TextEntry from './shared/TextEntry.jsx';
import BottomModal from './shared/BottomModal.jsx';
import LoginView from './views/Auth/LoginView.jsx';
import SignUpView from './views/Auth/SignUpView.jsx';
import PreviewProfile from './views/Preview/PreviewProfile.jsx'
import Headerize from './shared/Headerize.jsx';
import Modalize from './shared/Modalize.jsx';


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
          <Routes>
            <Route path="/">
              <Route index element={<LoginView />} />
              <Route path="preview"
                element={<Headerize view={<PreviewProfile />}></Headerize>} />
              <Route path="login" element={<LoginView />} />
              <Route path="signup" element={<SignUpView />} />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>

    );
  }
}

export default App;