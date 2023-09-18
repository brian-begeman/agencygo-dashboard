import { ReactNode } from 'react';
import styles from './styles.module.css';

interface $Props {
  children: ReactNode | ReactNode[];
}

function PageTopbar({ children }: $Props) {
  return <header className={styles.header}>{children}</header>;
}

function HeaderText({ children }: $Props) {
  return <h1 className={styles.headerText}>{children}</h1>;
}

PageTopbar.HeaderText = HeaderText;

export default PageTopbar;
