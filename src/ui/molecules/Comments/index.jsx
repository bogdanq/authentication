import React, { Component } from "react";
import propTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import styles from './index.css'
import Input from '../../atoms/Input'
import Button from '../../atoms/Button'
import CommentsList from '../../atoms/CommentsList'

import * as actions from "../../../redux/summary/actions";

class Comments extends Component {
  state = {
    description: ''
  }

  render() {
    const { description } = this.state
    const { comments, user, id, actions, status } = this.props

    const data = {
      userName: user.firstName + user.lastName,
      userEmail: user.email,
      description
    }
    return(
     <div className={styles.comment}>
        <h1 className={styles.commentH1}>Комментарии</h1>
        <Input 
          className={styles.addInput} 
          typeInput='textarea'
          placeholder='Напишите ваш комментарий'
          value={description}
          updateField={this.updateField}
        />

        <Button text='отправить' style={styles.btn} change={() => actions.addComment(data, id)}/>

        {
          comments.map((item, key) =>
            <CommentsList status={status} id={id} actions={actions} key={key} email={user.email} item={item}/>  
          )
        }
     </div>
    )
  }

  updateField = ({ target }) => {
    this.setState({ description: target.value })
  }
};

Comments.propTypes = {
  actions: propTypes.object,
  user: propTypes.object,
  // status: propTypes.number
};
Comments.defaultProps = {
  actions: {},
  user: {},
  // status: null
};

const mapStateToProps = state => ({
  user: state.auth.user,
  status: state.summary.status
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Comments);
