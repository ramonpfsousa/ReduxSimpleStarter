import React, {Component} from 'react';

export default class SearchBar extends Component {

    constructor(props) {
        super(props);

        this.state = {term: ''};
    }

    render() {
        return (
            <div>
                <input onChange={event => this.setState({term: event.target.value})} />
                Valor: {this.state.term}
            </div>
        );
        //return <input onChange={this.onInputChange} />;
    }

    onInputChange(event) {
        this.setState({ term: event.target.value});
        console.log(this.state.term);
    }
}