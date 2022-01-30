import './Main.css';

const Main = () => {
  const renderMain = () => (
    <main className="main-container">
      <h1>Hello, this is main content.</h1>
    </main>
  );
  return <>{renderMain()}</>;
};

export default Main;
