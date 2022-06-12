import React from 'react';
import Main from '../welcome-picture/main/main'
import DeveloperBlock from '../working-with-get/developer-block/developer-block'
import PostBlock from '../working-with-post/post-block/post-block'
import './app.css'

function App() {
  return (
		<div className="container">
			<Main />
			<DeveloperBlock />
			<PostBlock/>
		</div>
  );
}

export default App;
