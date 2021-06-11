import React, { Component } from 'react';
import './SectionContent.css'

class SectionContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Default Content",
      subtitle: "Contenido sin editar"
    }
  }

  updateContent = () => {
      this.setState({ message: "Updated Content!"});
      this.setState({ subtitle: "Contenido editado 1"});
  }

  update2 = () => {
      this.setState({ message: "New Content!"});
      this.setState({ subtitle: "Contenido editado 2"});
  }

  render() {
    return (
      <div className="content-box">
        <div className="title">
          { this.state.message }
        </div>
        <div className="subtitle">
          { this.state.subtitle }
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