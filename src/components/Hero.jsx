import React from "react";
import PropTypes from 'prop-types';

export const HeroStart = (props) => {
    HeroStart.propTypes = {
        children: PropTypes.node,
    }

    return (
        <section className="hero is-small">
            {props.children}
        </section>
    )
};

export const HeroBody = (props) => {
    HeroBody.propTypes = {
        children: PropTypes.node,
    }

    return (
        <div className="hero-body">
            <div className="container is-vcentered">
                {props.children}
            </div>
        </div>
    )
}
