// const element = React.createElement('h1', null, 'Hello React!');

function App() {
  return (
    <div className="App">
      <h1 >Hello React!</h1>
      <h2>Hello React again!</h2>
    </div>
  );
}

  ReactDOM.render(
    <App/>,
    document.getElementById('root')
  );