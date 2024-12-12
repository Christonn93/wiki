#!/bin/bash

# Remove the default Vite src folder
echo "Removing default Vite 'src' folder..."
rm -rf src

# Create the folder structure for the Wiki project
echo "Creating folder structure..."

mkdir -p src/components
mkdir -p src/pages
mkdir -p src/styles
mkdir -p src/utils
mkdir -p src/api
mkdir -p src/assets
mkdir -p src/hooks
mkdir -p src/types

# Create the initial files
echo "Creating initial files..."

# App entry point
cat > src/main.tsx <<EOL
import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
EOL

# App component
cat > src/App.tsx <<EOL
import React from 'react';
import './styles/App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
};

export default App;
EOL

# HomePage component
cat > src/pages/HomePage.tsx <<EOL
import React from 'react';

const HomePage: React.FC = () => {
  return (
    <div>
      <h1>Welcome to My Wiki</h1>
      <p>Start managing your documents here!</p>
    </div>
  );
};

export default HomePage;
EOL

# Basic index CSS
cat > src/styles/index.css <<EOL
/* Reset CSS */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Basic styling */
body {
  font-family: Arial, sans-serif;
  background-color: #f0f0f0;
  color: #333;
}
EOL

# Basic App CSS
cat > src/styles/App.css <<EOL
/* App styling */
h1 {
  color: #333;
}

p {
  font-size: 1.2em;
  color: #555;
}
EOL

# Create a README file for initial setup
cat > README.md <<EOL
# Wiki Project

This project is a personal wiki built using React, TypeScript, and Vite. The wiki allows users to create, edit, and delete markdown files stored in a GitHub repository. The goal is to manage personal notes, guides, and documents directly from the browser without using a CMS.

## Features

- **Create new files**: Users can create new markdown files directly within the wiki.
- **Edit files**: Users can edit existing markdown files, and changes will be saved to the GitHub repository.
- **Delete files**: Users can delete files directly from the wiki.

## Tech Stack

- **Frontend**: React, TypeScript
- **Bundler**: Vite
- **API Interaction**: Axios for GitHub API calls
- **Markdown Rendering**: React Markdown

## Setup Instructions

1. Clone the repository:
   \`\`\`bash
   git clone https://github.com/Christonn93/wiki.git
   \`\`\`

2. Navigate into the project folder:
   \`\`\`bash
   cd wiki
   \`\`\`

3. Install dependencies:
   \`\`\`bash
   npm install
   \`\`\`

4. Run the development server:
   \`\`\`bash
   npm run dev
   \`\`\`

5. Open your browser and navigate to \`http://localhost:5173/\` to view the app.

## GitHub API Integration

The project uses the GitHub API to manage markdown files. It supports:

- **Creating new files**: Files are created in the GitHub repository via the API.
- **Editing files**: Existing files can be retrieved, edited, and updated in the repository.
- **Deleting files**: Users can delete files directly from the repository.

### Authentication

Authentication with GitHub is required to interact with the repository. You can use either OAuth or personal access tokens to authenticate requests.

## Contributing

Feel free to fork this project and submit pull requests. If you encounter any issues or have suggestions for improvements, please open an issue.

## License

This project is open source and available under the [MIT License](LICENSE).
EOL

echo "Setup complete!"
