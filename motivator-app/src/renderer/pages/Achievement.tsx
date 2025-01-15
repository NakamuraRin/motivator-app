import { Link } from 'react-router-dom';

import Header from '../components/Header';
import BackToHome from '../components/BackToHome';

function Achievement() {
  return (
    <div>
      <Header />
      <BackToHome />
      <div>アチーブメント画面</div>
      <Link to="/">Home</Link>
    </div>
  );
}

export default Achievement;
