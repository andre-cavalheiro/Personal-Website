import React, { useRef } from 'react';
import { IoLogoWhatsapp } from 'react-icons/io';
import { MdOutlineEmail } from 'react-icons/md';

import './contact.css';

export const Contact = () => {
  return (
    <section id='contact'>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option contact__option-onDesktop'>
            <MdOutlineEmail className='contact__option-icon' />
              <h4>Email</h4>
              <h5>andre.cavalheiro13@gmail.com</h5>
          </article>
          <article className='contact__option'>
            <IoLogoWhatsapp className='contact__option-icon' />
              <h4>WhatsApp</h4>
              <h5>+351 932 157 434</h5>
          </article>
        </div>
      </div>
    </section>
  );
};