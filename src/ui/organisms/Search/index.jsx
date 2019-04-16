import React, { Component } from "react";
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import propTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

import styles from "./index.css";
import Input from '../../atoms/Input'
import * as actions from '../../../redux/summary/actions'

import onClickOutside from "react-onclickoutside";

class Search extends Component {
  state = {
    style: "",
    isVisible: false,
    value: ''
  };

  componentDidUpdate() {
    this.getStyle();
  }

  render() {
    const { style } = this.getStyle();
    const { isVisible, value } = this.state
    const { search } = this.props

    return (
      <div style={{ background: style }} className={styles.search}>
        <Input 
          typeInput="text" 
          placeholder="Search..." 
          onFocus={() => this.hendleVisible(true)} 
          className={styles.input} 
          updateField={this.updateFields}
          value={value}
        />
        <button className={styles.enter} onClick={this.getList}>Найти</button>
        {
          isVisible && value.length > 0 &&
          <div className = {styles.searchArea}>
            {
              search.map((item, id) =>
                <NavLink 
                  onClick={() => this.hendleVisible(false)} 
                  to={`/summary-user/${item._id}`} 
                  key={id}>{item.title}
                </NavLink>
              )
            }
          </div>
        }
      </div>
    );
  }

  handleClickOutside = () => {
    this.setState({ isVisible: false })
  };
  
  getList = () => {
    const { actions } = this.props
    this.hendleVisible(false)
    actions.addSearch()
  }

  updateFields = ({ target }) => {
    const { actions } = this.props
    this.setState({ value: target.value })
    actions.searchSummary(target.value)
  }

  hendleVisible = (bool) => {
    this.setState({ isVisible: bool })
  }
  
  getStyle = () => {
    const { pathname } = window.location;

    switch (true) {
      case pathname === "/":
        return {
          style: "#83b0b9"
        };

      case pathname === "/vacanci":
        return {
          style: "#d35657"
        };

      case pathname === "/signin":
        return {
          style: "#343943"
        };

      case pathname === "/signup":
        return {
          style: "#0A64A4"
        };

      case pathname === "/private":
        return {
          style: "#e4b162"
        };

      default:
        return {
          style: "red"
        };
    }
  };
}

Search.propTypes = {
  actions: propTypes.object.isRequired,
  search: propTypes.array
}

Search.defaultProps = {
  search: []
}

const mapStateToProps = state => ({
  search: state.summary.search
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(onClickOutside(Search));
