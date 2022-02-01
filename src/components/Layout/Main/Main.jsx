import './Main.css';

export const Main = (props) => {
  const { title, background, children } = props;

  const renderMain = () => {
    let cssClass = 'main-container';
    if (background) {
      cssClass = 'main-background';
    }

    return (
      <main className={cssClass}>
        <div className="container-fluid">
          <h1 className="main-title">{title}</h1>
          {children}
        </div>
      </main>
    );
  };

  return <>{renderMain()}</>;
};
