import React, { Component } from 'react';

class SectionContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
        message: "Default Content"
    }
  }

  updateContent = () => {
      this.setState({ message: "Updated Content!"});
  }

  update2 = () => {
      this.setState({ message: "New Content!"});
  }

  render() {
    return (
      <div>
        <div className="content-image">
          { this.state.message }
        </div>
        <div className="content-buttons">
          <button onClick={this.updateContent}>
            boton 1
          </button>
          <button onClick={this.update2}>
            boton 2
          </button>
        </div>
      </div>
    );
  }
}

export default SectionContent;