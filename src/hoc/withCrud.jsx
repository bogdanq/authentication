import React, { Component } from 'react'

function withCrud(BaseComponent, urL) {
    class withCrud extends Component {
        state = {
            data: 'hello'
        }

        componentDidMount() {
            this.get()
        }

        get = () => {
            // console.log(this.state.data)
            // console.log('urL', urL)
        }

        remove = () => {
            this.setState({data: 'remove'})
            console.log(this.state.data) 
            // console.log('urL', urL)           
        }

        update = () => {
            this.setState({data: 'update'})
            console.log(this.state.data)   
            // console.log('urL', urL)         
        }

        render() {
            return (
                <BaseComponent 
                    remove = { this.remove }
                    update = { this.update }
                    data = { this.state.data }
                    { ...this.props }
                />
            )
        }
    }

    return withCrud
}

export default withCrud