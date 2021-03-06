import React from "react";

export default class RenderThumbs extends React.Component {
    _isMounted = false;
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            error: null,
            limit: 10,
            tags: "",
            source: "safebooru",
            page: 1,
            data: [],
        };
    }

    componentDidMount() {
        this._isMounted = true;

        this.setState({
            limit: this.props.limit,
            tags: this.props.tags,
            source: this.props.source,
            page: this.props.page,
        }, this.apiGrab);
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    apiGrab() {
        let limit = this.props.limit;
        let tags = this.props.tags;
        let page = this.props.page;
        let source = this.props.source;

        const apiURL = `https://${source}.donmai.us/posts.json?tags=${tags}&limit=${limit}&page=${page}`;

        fetch(apiURL)
            .then((res) => res.json())
            .then(
                (result) => {
                    if (this._isMounted) {
                        let responseState = {};

                        if (result.message && !result.status) {
                            responseState = {
                                isLoaded: true,
                                error: result.message,
                            };
                        } else {
                            responseState = {
                                isLoaded: true,
                                data: result,
                            };
                        }

                        this.setState(responseState);
                    }                    
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error,
                    });
                }
            );
    }

    render() {
        const {error, isLoaded, data, tags, source} = this.state;

        if (error) {
            return (
                <div className="_errorHandle">
                    <b>{error}</b>
                </div>
            );
        } else if (!isLoaded) {
            return (
                <div className="_loadingHandle">
                    Loading thumbnails....
                </div>
            );
        }

        let status;
        if (tags.length === 0) {
            status = "Showing the most recent posts";
        } else {
            let tagGroup = tags.split(" ");
            let tagsWithLinks = tagGroup.map((item) => (
                <span key={item}>
                    <a 
                        href={`https://${source}.donmai.us/posts?tags=${item}`}
                        target="_new"
                    >{item}</a>&nbsp;
                </span>
            ));

        status = <span>images with <b>{tagsWithLinks}</b> tags</span>
        }

        return (
            <div className="imageGallery" >
                Loaded {data.length} {status} (page: {this.state.page})<br />
                <div>
                    {data.map((item) => (
                        <a
                            href={`https://${source}.donmai.us/posts/` + item.id} 
                            target="_new" 
                            key={"link"+item.id}
                        ><img 
                            src={item.preview_file_url} 
                            alt={item.id}
                            className="thumbnails"
                        /></a>
                        
                    ))}
                </div>
            </div>
        );
    }
}