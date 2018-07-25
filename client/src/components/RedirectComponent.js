import React, { Component } from 'react'
import PropTypes from "prop-types"
import { createLocation } from 'history'
import { Prompt } from 'react-router'

class RedirectComponent extends Component {
  constructor(props, urlPrefix, paramOrder, parsers = {}, builders = {}) {
    super(props)
    this.urlPrefix = urlPrefix
    this.paramOrder = paramOrder
    this.parsers = parsers
    this.builders = builders
    this.urlParams = this.urlParams.bind(this)
    this._parseParam = this._parseParam.bind(this)
    this._buildParam = this._buildParam.bind(this)
    this._import = Prompt
  }

  _parseParam([key, param]) {
    const parser = this.parsers[key]
    return { [key]: parser ? parser(param) : param }
  }

  urlParams() {
    const entries = Object.entries(this.props.match.params).map(this._parseParam);
    return Object.assign(...entries)
  }

  _buildParam([key, param]) {
    const builder = this.builders[key]
    return { [key]: builder ? builder(param) : param }
  }

  redirect(unbuiltItems) {
    const builtItems = Object.entries(unbuiltItems).map(this._buildParam);
    const updatedItems = Object.assign(this.urlParams(), ...builtItems)
    const url = [this.urlPrefix].concat(this.paramOrder.map(key => updatedItems[key])).join('/')
    this.context.router.history.push(url);
  }
}

RedirectComponent.contextTypes = {
  router: PropTypes.shape({
    history: PropTypes.shape({
      push: PropTypes.func.isRequired,
      replace: PropTypes.func.isRequired
    }).isRequired,
    staticContext: PropTypes.object
  }).isRequired
};


export default RedirectComponent;
