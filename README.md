Here's a simple `README.md` file for your Wiki project:

```markdown
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
   ```bash
   git clone https://github.com/Christonn93/wiki.git
   ```

2. Navigate into the project folder:

   ```bash
   cd wiki
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Run the development server:

   ```bash
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:5173/` to view the app.

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
