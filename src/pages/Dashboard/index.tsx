import LayoutHome from 'components/Layouts/LayoutHome';
import styles from './styles.module.scss';

export default function Dashboard() {
  return (
    <LayoutHome>
      <div className={styles.contentDashboard}>
        <h1>WelCome to Admin Page</h1>
      </div>
    </LayoutHome>
  );
}
