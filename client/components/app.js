import React, {Component} from 'react';
import NavItem from './nav_item';
import Icon from './icon';
import AboutMe from './about_me';

class App extends Component {
  constructor(props) {
    super(props);
    this.aboutMe = null;
    this.skills = null;
  }

  componentDidMount() {
    this.navNodes = {
     'About Me': this.aboutMe,
    }
  }

  handleNavItemClick(label) {
    if(this.navNodes[label]) {
      this.navNodes[label].scrollIntoView();
      window.scrollBy(0, -200);
    }
  }

  render() {
    let navItems = ['About Me', 'Resume', 'Skills', 'Projects', 'Links', 'Contact Me'];
    let navLinks = [null,'./Melvin_Estrada_Resume.pdf','/','/','/','mailto:melvinlouie.estrada@gmail.com'];
    let icons = ['fab fa-github-square', 'fab fa-linkedin', 'fas fa-envelope'];
    let details = ['https://github.com/melvinest', 'https://www.linkedin.com/in/melvin-estrada/', 'mailto:melvinlouie.estrada@gmail.com']
    return (
      <div>
        <div className="header">
          <div className="banner">
            <div className="name">
              Melvin Estrada
              <div className="description">Software Engineer</div>
            </div>
            <div className="icon-container">
              {icons.map((name, i) => (<Icon key={name} name={name} detail={details[i]} />))}
            </div>
          </div>
          <div className="nav-bar">
            {navItems.map((label, i) => (
              <NavItem 
                key={label} 
                label={label} 
                link={navLinks[i]}
                handleClick={(label) => this.handleNavItemClick(label)}
              />
            ))}
          </div>
        </div>
        <div className="reel">
          <div ref={(node) => {this.aboutMe = node}}>
            <AboutMe />
            <AboutMe />
            <AboutMe />
            <AboutMe />
            <AboutMe />
            <AboutMe />
            <AboutMe />
          </div>
        </div>
      </div>
    );
  }
}

export default App;