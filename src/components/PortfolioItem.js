import React from 'react';

const PortfolioItem = (props) => {
    console.log(props);
    return (
        <div>
            This is portfolio item number {props.match.params.id}
        </div>
    )
}

export {PortfolioItem as default};