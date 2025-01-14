import { Link } from 'react-router-dom';

import Header from '../components/Header';
import AnimationArea from '../components/AnimationArea';

function Home() {
  return (
    <div>
      <Header />
      <div className="home__container">
        <div className="home__container--left">
          <AnimationArea />
        </div>
        <div className="home__container--right">
          <Link to="/todo">Todo</Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
