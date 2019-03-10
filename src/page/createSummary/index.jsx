import React from "react";
import CreateSummaryParent from "../../ui/organisms/CreateSummaryParent";
import styles from "./index.css";

class createSummary extends React.Component {
  render() {
    const { match } = this.props;
    return (
      <div className={styles.body}>
        <h1 className={styles.bodyh1}>Создание резюме</h1>
        <CreateSummaryParent match={match} />
      </div>
    );
  }
}

export default createSummary;
