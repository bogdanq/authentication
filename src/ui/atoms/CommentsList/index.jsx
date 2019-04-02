import React, { Component } from "react";
import propTypes from "prop-types";
import styles from './index.css'

class CommentsList extends Component {
  render() {
    const { item, email, actions, id, status } = this.props

    return(
     <div className={styles.comments}>
        <div className={email === item.userEmail ? styles.yorComments : styles.peopleComment}>
          <a href="йцвйцв">{item.userName}</a>
          <span>20 марта 2018</span>
          <p>{item.description}</p>
          {email === item.userEmail && 
            <div onClick={() => actions.deleteComment( item._id, id)} className={status === item._id ? styles.deleteLoad : styles.delete}>
            X
          </div> }
        </div>          
     </div>
    )
  }
};

CommentsList.propTypes = {
  item: propTypes.object,
  email: propTypes.string
};
CommentsList.defaultProps = {
  item: {},
  email: ''
};

export default CommentsList;
