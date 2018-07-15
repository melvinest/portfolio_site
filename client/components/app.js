import React, {Component} from 'react';
import NavItem from './nav_item';
import Icon from './icon';
import AboutMe from './about_me';
import Skills from './skills';
import Projects from './projects';
import ContactMe from './contact_me';
import { aboutMe } from './contents/data';

class App extends Component {
  constructor(props) {
    super(props);
    this.aboutMe = null;
    this.skills = null;
    this.projects = null;
    this.contactMe = null;
    this.banner = null;
    this.state = {
      bannerHeight: 150,
      isScrolled: false,
    };
  }

  componentDidMount() {
    this.navNodes = {
     'About Me': this.aboutMe,
     'Skills': this.skills,
     'Projects': this.projects,
     'Contact Me': this.contactMe,
    }
    document.addEventListener('scroll', () => this.handleScroll());
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', () => this.handleScroll());
  }

  handleNavItemClick(label) {
        console.log(this.navNodes[label])
    if(this.navNodes[label]) {
      this.navNodes[label].scrollIntoView();
      if (label !== 'Contact Me') window.scrollBy(0, -200);
    }
  }

  handleScroll() {
    const bannerHeight = Math.max(150 - document.querySelector('html').scrollTop, 0);
    const isScrolled = bannerHeight !== 150;
    this.setState({ bannerHeight, isScrolled });
  }

  render() {
    let navItems = ['About Me', 'Resume', 'Skills', 'Projects', 'Contact Me'];
    let navLinks = [null,'./Melvin_Estrada_Resume.pdf', null, null, null];
    let icons = ['fab fa-github-square', 'fab fa-linkedin', 'fas fa-envelope'];
    let details = ['https://github.com/melvinest', 'https://www.linkedin.com/in/melvin-estrada/', 'mailto:melvinlouie.estrada@gmail.com'];
    return (
      <div>
        <div className="header">
          <div ref={(node) => { this.banner = node }} className="banner" style={{ height: this.state.bannerHeight }}>
            {this.state.isScrolled ? null : (
              <div className="banner-container">
                <div className="name">
                  Melvin Estrada
                  <div className="description">Software Engineer</div>
                </div>
                <div className="icon-container">
                  {icons.map((name, i) => (<Icon key={name} name={name} detail={details[i]} />))}
                </div>
              </div>
            )}
          </div>
          <div className="nav-bar">
            <NavItem label="Melvin Estrada" addStyle="nav-name"/>
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
          <div ref={(node) => { this.aboutMe = node }}>
            <AboutMe {...aboutMe} />
          </div>
          <div ref={(node) => { this.skills = node }} >
            <Skills />
          </div>
          <div ref={(node) => { this.projects = node }} >
            <Projects />
          </div>
          <div ref={(node) => { this.contactMe = node }} >
            <ContactMe />
          </div>
        </div>
      </div>
    );
  }
}

export default App;