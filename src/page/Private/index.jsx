import React, { Component } from "react";

import { withStyles } from "@material-ui/core/styles";
import SwipeableViews from "react-swipeable-views";
import TabContainer from "../../ui/atoms/TabContainer";

import styles from "./index.css";

import Preview from "../../ui/organisms/Preview";
import PrivateList from "../../ui/organisms/PrivateList";
import PrivateFavorites from "../../ui/organisms/PrivateFavorites";

class Private extends Component {
  state = {
    value: 0
  };

  render() {
    const { theme } = this.props;
    const { value } = this.state;
    const text = "легко управляйте своими заявками и редактируйте их";

    return (
      <div className={styles.private}>
        <Preview color="#e4b162" title="Личный кабинет" description={text} />

        <button onClick={() => this.hendleTab(0)}>Вакансии</button>
        <button onClick={() => this.hendleTab(1)}>Избранное</button>

        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={value}
          onChangeIndex={this.handleChangeIndex}
        >
          <TabContainer dir={theme.direction}>
            <PrivateList/>
          </TabContainer>

          <TabContainer dir={theme.direction}>
            <PrivateFavorites />
          </TabContainer>
        </SwipeableViews>
      </div>
    );
  }

  hendleTab = id => {
    this.setState({ value: id });
  };
}

export default withStyles({}, { withTheme: true })(Private)