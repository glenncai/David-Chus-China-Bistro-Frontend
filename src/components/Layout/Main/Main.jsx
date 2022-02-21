import './Main.css';

export const Main = (props) => {
  const { title, background, children } = props;

  const renderMain = () => {
    let backgroundClass = 'main-container';
    let titleClass = 'main-title';
    if (background) {
      backgroundClass = 'main-background';
      titleClass = 'custom-title';
    }

    return (
      <main className={backgroundClass}>
        <div className="container-fluid">
          <h2 className={titleClass}>{title}</h2>
          {children}
        </div>
      </main>
    );
  };

  return <>{renderMain()}</>;
};
