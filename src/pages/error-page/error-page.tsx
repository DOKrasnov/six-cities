import {ReactElement} from 'react';
import Header from '../../components/header/header.tsx';


function ErrorPage(): ReactElement {
  return (
    <div className="page">
      <Header/>
      <main className="page__main">
        404 Страница не найдена!
      </main>
    </div>
  );
}

export default ErrorPage;
