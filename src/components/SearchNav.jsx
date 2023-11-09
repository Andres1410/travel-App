
import React from 'react';
import PropTypes from 'prop-types';

class SearchNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <>
            <div id="home">
            <div class="">
                <div class="">
                    <img src="./img/paisaje.jpg" alt="" />
                </div>
                <div className="">
                    <input className="outline-black" type="search" name="" id="" />
                    <button className="bg-red-200">
                        Explore
                    </button>
                        </div>
                    </div>
            </div>
            </>
        );
    }
}

SearchNav.propTypes = {};

export default SearchNav;
