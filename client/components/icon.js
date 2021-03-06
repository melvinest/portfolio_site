import React, { Component } from 'react';

class Icon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showToolTip: false,
    };
  }

  handleMouseEnter() {
    this.setState({
      showToolTip: true,
    });
  }

  handleMouseLeave() {
    this.setState({
      showToolTip: false,
    });
  }

  render() {
    return (
      <a 
        target={this.props.name === 'fas fa-envelope' ? null : "_blank"}
        href={this.props.detail} 
        onMouseEnter={() => this.handleMouseEnter()} 
        onMouseLeave={() => this.handleMouseLeave()}
        className="icon-cont"
      >
        <i className={`${this.props.name} icon`} />
        {this.state.showToolTip ? (<div className="tooltip">{this.props.detail}</div>) : null}
      </a>
    );
  }
}

export default Icon;