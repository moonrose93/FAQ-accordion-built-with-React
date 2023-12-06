// Mobile.js

import React, { useState } from 'react';
import iconplus from '../src/icon-plus.svg';
import iconminus from '../src/icon-minus.svg';
import iconstar from '../src/icon-star.svg';
import styles from '../src/iconHeadingstyle.module.css';
import './index.css';

function Mobile() {
  // State variables for each paragraph to determine whether it's open or closed
  const [opened1, setOpened1] = useState(false);
  const [opened2, setOpened2] = useState(false);
  const [opened3, setOpened3] = useState(false);
  const [opened4, setOpened4] = useState(false);

  // Function to handle click on the icon and toggle the corresponding paragraph's state
  const handleToggle = (paragraphNumber) => {
    switch (paragraphNumber) {
      case 1:
        setOpened1(!opened1);
        break;
      case 2:
        setOpened2(!opened2);
        break;
      case 3:
        setOpened3(!opened3);
        break;
      case 4:
        setOpened4(!opened4);
        break;
      default:
        break;
    }
  };

  return (
    <div className="container-mobile" >
      {/* Heading section with flex layout and styling */}
      <div className="heading-mobile" style={{ display: 'flex', fontFamily: 'WorkSans-Bold', fontSize: '1rem' }}>
        <img style={{ marginRight: '10px' }} src={iconstar} alt="Icon Star" />
        <h1>FAQs</h1>
      </div>

      {/* Container for paragraphs */}
      <div className="paragraph-container-mobile">
        {/* First paragraph with its heading and icon */}
        <div className={styles.firstmobile}>
          <h2>What is Frontend Mentor,<br/>and how will it help me?</h2>
          {/* Plus icon */}
          <img
            onClick={() => handleToggle(1)}
            className={styles.iconplusmobile}
            src={iconplus}
            alt="Icon Plus"
            style={{ display: opened1 ? 'none' : 'block' }}
          />
          {/* Minus icon */}
          <img
            onClick={() => handleToggle(1)}
            className={styles.iconminusmobile}
            src={iconminus}
            alt="Icon Minus"
            style={{ display: opened1 ? 'block' : 'none' }}
          />
        </div>
        {/* First paragraph content with conditional display based on the state */}
        <p className="paragraphs-mobile" style={{ display: opened1 ? 'block' : 'none', textAlign: 'left', fontFamily: 'WorkSans' }}>
          Frontend Mentor offers realistic coding challenges to help developers improve their
          frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for
          all levels and ideal for portfolio building.
        </p>

        {/* Second paragraph with its heading and icon */}
        <div className={styles.firstmobile}>
          <h2>Is Frontend Mentor free?</h2>
          <img
            onClick={() => handleToggle(2)}
            className={styles.iconplusmobile}
            src={iconplus}
            alt="Icon Plus"
            style={{ display: opened2 ? 'none' : 'block' }}
          />
          <img
            onClick={() => handleToggle(2)}
            className={styles.iconminusmobile}
            src={iconminus}
            alt="Icon Minus"
            style={{ display: opened2 ? 'block' : 'none' }}
          />
        </div>
        {/* Second paragraph content with conditional display based on the state */}
        <p className="paragraphs-mobile" style={{ display: opened2 ? 'block' : 'none', textAlign: 'left', fontFamily: 'WorkSans' }}>
          Yes, Frontend Mentor offers both free and premium coding challenges, with the free
          option providing access to a range of projects suitable for all skill levels.
        </p>

        {/* Third paragraph with its heading and icon */}
        <div className={styles.firstmobile}>
          <h2>Can I use Frontend Mentor<br/> projects in my portfolio?</h2>
          <img
            onClick={() => handleToggle(3)}
            className={styles.iconplusmobile}
            src={iconplus}
            alt="Icon Plus"
            style={{ display: opened3 ? 'none' : 'block' }}
          />
          <img
            onClick={() => handleToggle(3)}
            className={styles.iconminusmobile}
            src={iconminus}
            alt="Icon Minus"
            style={{ display: opened3 ? 'block' : 'none' }}
          />
        </div>
        {/* Third paragraph content with conditional display based on the state */}
        <p className="paragraphs-mobile" style={{ display: opened3 ? 'block' : 'none', textAlign: 'left', fontFamily: 'WorkSans' }}>
          Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent
          way to showcase your skills to potential employers!
        </p>

        {/* Fourth paragraph with its heading and icons */}
        <div className={styles.firstmobile}>
          <h2>How can I get help if I'm<br/> stuck on a challenge?</h2>
          <img
            onClick={() => handleToggle(4)}
            className={styles.iconplusmobile}
            src={iconplus}
            alt="Icon Plus"
            style={{ display: opened4 ? 'none' : 'block' }}
          />
          <img
            onClick={() => handleToggle(4)}
            className={styles.iconminusmobile}
            src={iconminus}
            alt="Icon Minus"
            style={{ display: opened4 ? 'block' : 'none' }}
          />
        </div>
        {/* Fourth paragraph content with conditional display based on the state */}
        <p className="paragraphs-mobile" style={{ display: opened4 ? 'block' : 'none', textAlign: 'left', fontFamily: 'WorkSans' }}>
          The best place to get help is inside Frontend Mentor's Discord community. There's a help
          channel where you can ask questions and seek support from other community members.
        </p>
      </div>
    </div>
  );
}

export default Mobile;
