import Dashboard from 'renderer/components/Dashboard';
import ShiftTable from './components/ShiftTable';
import { ChartLine } from './components/Chart';
import Earnings from './components/Earnings';
import styles from './styles.modules.css';

export default function HomePage() {
  return (
    <Dashboard>
      <section className={styles.wrapper}>
        <Earnings />
        <ShiftTable />
        <ChartLine />
      </section>
    </Dashboard>
  );
}
