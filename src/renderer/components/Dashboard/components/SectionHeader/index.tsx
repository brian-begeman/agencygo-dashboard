import classes from './styles.module.css';

interface Props {
  title: string;
  openModal: React.Dispatch<React.SetStateAction<boolean>>;
}
function SectionHeader(props: Props) {
  const { title,openModal } = props;
  return (
    <header className={classes.header}>
      <h1 className={classes.headerText}>{title}</h1>
      <button onClick={()=>openModal(true)}>add shift</button>
    </header>
  );
}

export default SectionHeader;
