import React, { Component } from 'react';

import SearchBar from './search_bar.js';
import VideoList from './video_list';
import YTSearch from 'youtube-api-search';

const API_KEY = "AIzaSyCCo8f4n4FXOYn-CCjmXCKYvG5zLk9E5Zo";



export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      videos: [],
    };

    YTSearch({key: API_KEY, term: 'surfboard'}, videos => {
      this.setState({ videos });
      console.log(this.state);
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}
