import * as React from 'react';

/* tslint:disable-next-line */
const md = require('../../../README.md');

const Readme = () => {
    return <article dangerouslySetInnerHTML={{__html: md}}></article>;
};

export default Readme;
