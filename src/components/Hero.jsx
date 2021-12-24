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
            <div className="container has-text-centered">
                <div className="columns is-vcentered">
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export const HeroImage = () => {
    HeroImage.propTypes = {}

    return (
        <div className="column is-5">
            <figure className="image is-4by3">
                <img src = "https://picsum.photos/800/600/?random"/>
            </figure>
        </div>
    )
}

export const HeroText = (props) => {
    HeroText.propTypes = {
        children: PropTypes.node,
    }

    return (
        <div className="column is-6 is-offset-1">
            {props.children}
        </div>
    )
}

export const HeroTitle = (props) => {
    HeroTitle.propTypes = {
        children: PropTypes.node,
    }

    return (
        <h1 className="title is-2">
            {props.children}
        </h1>
    )
}

export const HeroSubtitle = (props) => {
    HeroSubtitle.propTypes = {
        children: PropTypes.node,
    }

    return (
        <h2 className="subtitle is-4">
            {props.children}
        </h2>
    )
}
