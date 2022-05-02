import React from "react";
import './SearchBar.css';

export class SearchBar extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            input: ''
        }

        this.search = this.search.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    search(){
        this.props.onSearch(this.state.input);
    }

    handleInputChange(e){
        this.setState({input: e.target.value});
    }

    render() {
        return (
            <div className="SearchBar">
                <input onChange={this.handleInputChange} placeholder="Enter A Song, Album, or Artist" />
                <button className="SearchButton" onClick={this.search}>SEARCH</button>
            </div>
        )
    }
}

//export default SearchBar;