import {ReactElement} from 'react';
import Header from '../../components/header/header.tsx';
import {Link} from 'react-router-dom';


function ErrorPage(): ReactElement {
  return (
    <div className="page">
      <Header/>
      <main className="page__main">
        404 Страница не найдена!
        <Link to="/">Go to main page</Link>
      </main>
    </div>
  );
}

export default ErrorPage;
