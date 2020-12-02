import logo from './logo.svg';
import './App.css';

import { DataStore } from '@aws-amplify/datastore';
import { Blog } from './models';

function App() {
  const addNewBlog = async () => {
    await DataStore.save(
      new Blog({
        "name": "Lorem ipsum dolor sit amet",
        "posts": []
      })
    );
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={() => addNewBlog()}>Add Blog</button>
      </header>
    </div>
  );
}

export default App;
