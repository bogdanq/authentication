import React, { Component } from "react";
import * as R from "ramda";
import Loader from "../ui/atoms/Loader";

function withForm(BaseComponent) {
  return class withForm extends Component {
    state = {
      title: "",
      description: "",
      phone: "",
      tags: "",
      history: [
        {
          companyName: "",
          title: "",
          description: "",
          startDate: new Date(),
          endDate: new Date()
        }
      ],
      education: [{ institution: "", year: "" }],
      language: [{ title: "", description: "" }],
      load: false,
      list: []
    };

    componentWillReceiveProps(nextProps) {
      if (nextProps.userSummary !== this.props.userSummary) {
        this.updateState(nextProps.userSummary);
      }
    }

    componentDidMount() {
      const { match } = this.props;
      if (match.path === "/update/:id") {
        this.setState({
          load: true
        });
      }
    }

    render() {
      const { load } = this.state;

      return load ? (
        <Loader />
      ) : (
        <BaseComponent
          summary={this.state}
          updateFields={this.updateFields}
          addInput={this.addInput}
          deleteInput={this.deleteInput}
          {...this.props}
        />
      );
    }

    updateFields = (path, value) => {
      this.setState(prev => ({
        ...prev,
        ...R.assocPath(path, value, prev)
      }));
    };

    addInput = name => {
      let obj = {};
      this.setState({
        [name]: [...this.state[name], obj]
      });
    };

    deleteInput = name => {
      this.setState(prev => ({
        [name]: [...prev[name].slice(0, -1)]
      }));
    };

    updateState = list => {
      this.setState(prev => ({
        ...prev.state,
        title: list[0].title,
        description: list[0].description,
        phone: list[0].phone,
        tags: list[0].tags,
        history: list[0].history,
        education: list[0].education,
        language: list[0].language,
        load: false
      }));
    };
  };
}

export default withForm;
