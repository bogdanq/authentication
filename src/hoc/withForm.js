import React, { Component } from "react";
import * as R from "ramda";
import Loader from "../ui/atoms/Loader";

function withForm(BaseComponent) {
  return class withForm extends Component {
    state = {
      title: "",
      description: "",
      phone: "",
      tags: [],
      history: [
        {
          companyName: "",
          title: "",
          description: "",
          startDate: '',
          endDate: ''
        }
      ],
      education: [{ institution: "", year: ''}],
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
          updateTags={this.updateTags}
          deleteTags={this.deleteTags}
          {...this.props}
        />
      );
    }

    updateTags = (item) => {
      this.setState({
        tags: [...this.state.tags, item]
      });
    }

    deleteTags = (value) => {
      this.setState({
        tags: [...this.state.tags.filter(item => item !== value)],
      })
    }

    updateFields = (path, value) => {
      this.setState(prev => ({
        ...prev,
        ...R.assocPath(path, value, prev)
      }));
    };

    addInput = name => {
      this.setState({
        [name]: [...this.state[name], {}]
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
        title: list.title,
        description: list.description,
        phone: list.phone,
        tags: list.tags,
        history: list.history,
        education: list.education,
        language: list.language,
        load: false
      }));
    };
  };
}

export default withForm;
