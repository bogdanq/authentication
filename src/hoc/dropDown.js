import React, { Component } from "react";


function dropDown(BaseComponent) {

  return class dropDown extends Component {
    state = {
      value: ''
    }
    render() {
      return (
        <BaseComponent 
          changeOptions={this.changeOptions}
          onPressKey={this.onPressKey}
          onChange={this.onChange}
          value={this.state.value}
          {...this.props}
        />  
      )
    }
    
    changeOptions = (name, e) => {
      const { updateTags } = this.props
      this.setState({ [name]: '' })
      updateTags(e.target.innerText)  
    }

    onPressKey = (e) => {
      const { updateTags } = this.props
      const { value } = this.state

      if(e.key === 'Enter') {
        this.setState({
          value: ''
        })
        updateTags(value)  
      }
    }

    onChange = (e) => {
      this.setState({ value: e.target.value })
    }
  }
}

export default dropDown;