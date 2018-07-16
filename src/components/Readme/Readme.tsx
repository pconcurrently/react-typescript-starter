import * as React from 'react';

const md = require('../../../README.md');

const Readme = () => {
    return <article dangerouslySetInnerHTML={{__html: md}}></article>;
}

export default Readme;
