# NexList 📝

A modern and elegant to-do list web application designed to help users organize tasks efficiently with category-based task management. NexList emphasizes **clean architecture**, **responsive design**, and **seamless user experience**.

---

## 🎯 About NexList

NexList is a lightweight productivity tool that allows users to:

- Create and manage to-do lists with custom categories
- Organize tasks by categories for better productivity
- Delete tasks and categories with visual confirmation popups
- Automatically persist data using browser's Local Storage
- Access their tasks across browser sessions

Whether you're managing personal projects, work tasks, or daily chores, NexList provides a simple yet powerful interface to keep you on track.

---

## 🚀 Tech Stack

| Technology            | Purpose                                  |
| --------------------- | ---------------------------------------- |
| **Vite**              | ⚡ Fast frontend build tool & dev server |
| **React 18**          | 🎨 Component-based UI library            |
| **JSX**               | 📄 Templating with JavaScript            |
| **Tailwind CSS**      | 🎭 Utility-first CSS framework           |
| **JavaScript (ES6+)** | 💻 Core application logic                |
| **Local Storage API** | 💾 Client-side data persistence          |

---

## ✨ Features

### Core Features

- ✅ **Add Tasks** – Create new to-do items with title and time range
- ✅ **Category Management** – Organize tasks by custom categories
- ✅ **Delete Tasks** – Remove individual tasks with confirmation
- ✅ **Delete Categories** – Remove categories (right-click) along with all nested tasks
- ✅ **Mark Complete** – Toggle task completion status
- ✅ **Task Filtering** – View tasks organized by category

### User Experience

- 🎨 **Custom Popups** – Beautiful confirmation dialogs for destructive actions
- 📱 **Responsive Design** – Optimized for mobile, tablet, and desktop devices
- 💾 **Data Persistence** – All tasks and categories saved in Local Storage
- ⚡ **Fast Performance** – Built with Vite for instant load times
- 🎯 **Intuitive UI** – Clean and easy-to-use interface

---

## 📁 Project Structure

```
NEXLIST
├── public/
│   ├── assets/
│   │   └── img/
│   │       └── profil.png
│   └── vite.svg
│
├── src/
│   ├── components/                    # Reusable React components
│   │   ├── addTodoPopup.jsx          # Modal for adding new tasks
│   │   ├── deleteConfirmPopup.jsx    # Confirmation modal for deletions
│   │   ├── footer.jsx                 # Application footer
│   │   ├── navbar.jsx                 # Navigation bar
│   │   └── todoList.jsx               # Todo list display component
│   │
│   ├── logic/                         # Business logic & utilities
│   │   ├── categoryLogic.js           # Category CRUD operations
│   │   ├── storage.js                 # Local Storage helper
│   │   └── todoLogic.js               # Todo CRUD operations
│   │
│   ├── pages/                         # Page components
│   │   ├── about.jsx                  # About page
│   │   └── home.jsx                   # Main dashboard/home page
│   │
│   ├── App.jsx                        # Root component
│   ├── main.jsx                       # Application entry point
│   └── index.css                      # Global styles
│
├── .gitignore                         # Git ignore rules
├── eslint.config.js                   # ESLint configuration
├── index.html                         # HTML template
├── package.json                       # Dependencies & scripts
├── package-lock.json                  # Dependency lock file
├── vite.config.js                     # Vite configuration
└── README.md                          # This file
```

---

## 📋 Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js** (v14.0.0 or higher) - [Download](https://nodejs.org/)
- **npm** (v6.0.0 or higher) - Usually included with Node.js

To check your versions:

```bash
node --version
npm --version
```

---

## 🎯 Getting Started

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/nexlist.git
cd nexlist
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Run Development Server

```bash
npm run dev
```

The application will automatically open in your browser at:

```
http://localhost:5173
```

---

## 🛠️ Available Scripts

### Development

```bash
npm run dev
```

Starts the Vite development server with hot module reloading (HMR).

### Production Build

```bash
npm run build
```

Creates an optimized production build in the `dist/` folder.

### Preview Build

```bash
npm run preview
```

Locally preview the production build before deployment.

### Linting

```bash
npm run lint
```

Run ESLint to check code quality and style.

---

## 💡 Usage Guide

### Create a Task

1. Click the **"+"** button in the CREATE LIST section
2. Enter task title, select/create a category
3. Set start and end times (optional)
4. Click **Save**

### Manage Categories

- **View Categories**: Categories appear as colored boxes in the CREATE LIST section
- **Delete Category**: Right-click on a category → Confirm deletion
  - ⚠️ Deleting a category also removes all tasks within it

### Manage Tasks

- **Mark Complete**: Click the checkbox next to a task to mark it as done
- **Delete Task**: Click the delete icon on the task
- **View by Category**: Tasks are automatically organized under their categories

---

## 📁 Data Storage

NexList uses **Browser Local Storage** to persist data:

- All tasks and categories are stored locally on your device
- Data persists across browser sessions
- Clearing browser cache will delete all stored data
- No data is sent to external servers

**Storage Keys:**

- `categories` – Stores all category objects
- `todos` – Stores all task objects

---

## 🎨 Customization

### Modify Theme Colors

Edit the color values in Tailwind classes located in component files:

- Primary color: `#F6F3C2` (yellow)
- Accent color: `#E37434` (orange)

### Adjust Styling

All styling uses Tailwind CSS utility classes. Modify classes directly in component JSX files.

---

## 🐛 Troubleshooting

### Application won't start

```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### Port 5173 already in use

```bash
# Vite will automatically use the next available port
npm run dev
```

### Data not persisting

- Check if Local Storage is enabled in your browser
- Verify browser privacy/incognito mode is not active
- Check browser console for storage quota errors

---

## 📦 Dependencies

Main dependencies used in this project:

```json
{
  "react": "^18.x.x",
  "react-dom": "^18.x.x"
}
```

Dev dependencies:

```json
{
  "@vitejs/plugin-react": "^4.x.x",
  "vite": "^5.x.x",
  "tailwindcss": "^3.x.x"
}
```

---

## 📄 License

This project is licensed under the **MIT License** – feel free to use this project for personal or commercial purposes.

---

## 👤 Author & Contribution

**Developed by:** Farell Dio

### Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/AmazingFeature`
3. Commit changes: `git commit -m 'Add AmazingFeature'`
4. Push to branch: `git push origin feature/AmazingFeature`
5. Open a Pull Request

---

## 🎓 Learning Resources

- [React Documentation](https://react.dev/)
- [Vite Guide](https://vitejs.dev/)
- [Tailwind CSS Docs](https://tailwindcss.com/)
- [JavaScript ES6+ Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/)

---

**⭐ If you found this project useful, please consider giving it a star!**

```

```
