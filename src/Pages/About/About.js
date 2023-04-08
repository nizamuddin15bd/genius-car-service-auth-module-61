import React from 'react';
import { Helmet } from 'react-helmet-async';
import PageTitle from '../Shared/PageTitle/PageTitle';

const About = () => {
    return (
        <div>
            <PageTitle title='About'></PageTitle>
            <h2>This is About us</h2>
        </div>
    );
};

export default About;