import React, { Component } from 'react';
import ResourceLinksPage from './ResourceLinksPage';


export default () => (<ResourceLinksPage select={/housing/} skip={/^legal-.+/} title='Housing Resources' />)