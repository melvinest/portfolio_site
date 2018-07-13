import React, {Component} from 'react';
import NavItem from './nav_item';
import Icon from './icon';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let navItems = ['About Me', 'Resume', 'Skills', 'Projects', 'Links', 'Contact Me'];
    let navLinks = ['/','./Melvin_Estrada_Resume.pdf','/','/','/','mailto:melvinlouie.estrada@gmail.com'];
    let icons = ['fab fa-github-square', 'fab fa-linkedin', 'fas fa-envelope'];
    let details = ['https://github.com/melvinest', 'https://www.linkedin.com/in/melvin-estrada/', 'mailto:melvinlouie.estrada@gmail.com']
    return (
      <div>
        <div className="banner">
          <div className="name">
            Melvin Estrada
            <div className="description">Software Engineer</div>
          </div>
          <div className="icon-container">{icons.map((name, i) => (<Icon key={name} name={name} detail={details[i]} />))}</div>
        </div>
        <div className="nav-bar">
          {navItems.map((label, i) => (<NavItem key={label} label={label} link={navLinks[i]}/>))}
        </div>
      </div>
    );
  }
}

export default App;