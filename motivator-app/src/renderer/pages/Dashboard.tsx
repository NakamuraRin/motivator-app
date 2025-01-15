import { Link } from 'react-router-dom';

import Header from '../components/Header';
import BackToHome from '../components/BackToHome';

function Dashboard() {
  return (
    <div>
      <Header />
      <BackToHome />
      <div>過去の作業履歴画面</div>
      <Link to="/">Home</Link>
    </div>
  );
}

export default Dashboard;
