import React, { Component } from "react";

import { withStyles } from "@material-ui/core/styles";
import SwipeableViews from "react-swipeable-views";
import TabContainer from "../../ui/atoms/TabContainer";

import styles from "./index.css";

import Preview from "../../ui/organisms/Preview";
import PrivateList from "../../ui/organisms/PrivateList";
import PrivateFavorites from "../../ui/organisms/PrivateFavorites";
import Button from "../../ui/atoms/Button";

class Private extends Component {
  state = {
    value: 0
  };
  

  render() {
    const { theme } = this.props;
    const { value } = this.state;
    const text = "легко управляйте своими заявками и редактируйте их";
    const buttons = [
      {
        change: () => this.handleTab(0),
        text: 'Вакансии',
        style: value === 0 ? styles.active : styles.btn
      },
      {
        change: () => this.handleTab(1),
        text: 'Избранное',
        style: value === 1 ? styles.active : styles.btn
      }
    ]

    return (
      <div className={styles.private}>
        <Preview color="#e4b162" title="Личный кабинет" description={text} />

        {
          buttons.map((item, id) =>
            <Button 
              key={id}
              change={item.change} 
              text={item.text} 
              style={item.style}
            />  
          )
        }

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

  handleTab = id => {
    this.setState({ value: id });
  };
}

export default withStyles({}, { withTheme: true })(Private)