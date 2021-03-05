import React from 'react';
import styles from './Buttons.module.scss';

interface ButtonsProps {
  click: () => void;
  icon: string;
  alt: string;
  title: string;
}

export const GoogleButton: React.FC<ButtonsProps> = ({
  click,
  icon,
  alt,
  title,
}) => {
  return (
    <div className={styles.GoogleButton} onClick={click}>
      <img className={styles.IconMain} src={icon} alt={alt} />
      <span className={styles.TitleMain}>{title}</span>
    </div>
  );
};
