import React from 'react';
import classes from './styles.module.css';

interface Props {
  title: string;
}
function SectionHeader(props: Props) {
  const { title } = props;
  return (
    <header className={classes.header}>
      <h1 className={classes.headerText}>{title}</h1>
    </header>
  );
}

export default SectionHeader;
