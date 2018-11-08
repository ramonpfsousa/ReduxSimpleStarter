import React, { Component } from 'react';


export default class VideoListItem extends Component {

    constructor(props) {
        super(props);

        this.video = props.video;
    }

    render() {
        const videoUrl = this.video.snippet.thumbnails.default.url;
        const videoTitle = this.video.snippet.title;
        return (
            <li className="list-group-item">
                <div className="video-list media">
                    <div className="media-left">
                        <img src={videoUrl} className="media-object" />
                    </div>

                    <div className="media-body">
                        <div className="media-heading">
                            {videoTitle}
                        </div>
                    </div>
                </div>
            </li>
        );
    }
}