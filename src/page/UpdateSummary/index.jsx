import React from "react";

import CreateSummaryParent from "../../ui/organisms/CreateSummaryParent";
import styles from "./index.css";

class UpdateSummary extends React.Component {
  render() {
    const { match } = this.props;
    return (
      <div className={styles.body}>
        <h1 className={styles.bodyh1}>Редактирование</h1>
        <CreateSummaryParent match={match} />
      </div>
    );
  }
}

export default UpdateSummary;
