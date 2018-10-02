import React from 'react';
import { connect } from 'react-redux';

import './App.css';

import NavBar from './components/presentational/NavBar';
import VideoPage from './components/functional/VideoPage';

const App = () => (
  <div className="container-fluid">
  <NavBar />
  <VideoPage />
</div>
);

export default connect()(App);
