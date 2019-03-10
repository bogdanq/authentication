import React, { Component } from "react";
import Preview from "../../ui/organisms/Preview";

class Vacanci extends Component {
  render() {
    return (
      <div>
        <Preview
          color="#d35657"
          title="Поиск вакансий"
          description="Ищите вакансии на любой вкус по всей стране"
        />
      </div>
    );
  }
}

export default Vacanci;
