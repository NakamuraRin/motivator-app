import { Link } from 'react-router-dom';

import Header from '../components/Header';

function Settings() {
  return (
    <div>
      <Header />
      <div>設定画面</div>
      <Link to="/">Home</Link>
    </div>
  );
}

export default Settings;
