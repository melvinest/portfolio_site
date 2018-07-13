import React, {Component} from 'react';
import NavItem from './nav_item';


class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let navItems = ['About Me', 'Skills', 'Projects', 'Links', 'Contact Me'];
    return (
      <div>
        <div className="banner">
          <div className="name">
            Melvin Estrada
          </div>
          <div className="description">Software Engineer</div>
        </div>
        <div className="nav-bar">
          {navItems.map((label) => (<NavItem key={label} label={label} />))}
        </div>
      </div>
    );
  }
}

export default App;