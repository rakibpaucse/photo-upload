import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import FilesUploadComponent from './Components/files-upload-component';

function App() {
  return (
    <div className="App">
      <h2>React File Upload Demo</h2>

      <FilesUploadComponent />
    </div>
  );
}
export default App;