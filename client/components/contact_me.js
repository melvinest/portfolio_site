import React from 'react';
import { contactMe } from './contents/data';

const ContactMe = () => {
  return (
    <div className="contacts-container">
      <h1 className="title">Contact Me</h1>
      <div className="contacts-detail-container">
        {contactMe.map(({ icon, info, label }) => {
          return (
            <div key={info} className="contact-container">
              <div className="contact-header">
                <i className={`${icon} contact-icon`} />
                <div className="contact-label">{label}</div>
              </div>
              <div>{info}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ContactMe;