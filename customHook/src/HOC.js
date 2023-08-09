import React from "react";

export default function Hoc(HocComponent, data) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = { data: data };
    }
    render() {
      return (
        <div>
          <HocComponent data={this.state.data} {...this.props} />
        </div>
      );
    }
  };
}
