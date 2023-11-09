
import React from 'react';
// import PropTypes from 'prop-types';
// import "../Search/Search.css"

class SearchNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <>
              <div class="grid md:hidden text-center content-around h-full relative md:flex md:items-center  bg-[url('../public/img/paisaje.jpg')] md:bg-[url('../public/img/paisaje.jpg')] bg-cover h-screen md:h-[90vh]">
                <form action="">
                    <input class="shadow-lg rounded-full py-4 w-3/4 outline-none text-center" placeholder='dubai' type="search" name="" id="" />
                </form>
                <button class="text-red text-lg font-semibold rounded-full shadow-lg bg-white hover:bg-red hover:text-white p-4 w-1/2 mx-auto">
                    Explore More
                </button>
            </div>
            </>
        );
    }
}

SearchNav.propTypes = {};

export default SearchNav;
