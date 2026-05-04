# 🧩 Kanban Task Manager

A simple full-stack Kanban-style task manager built with:

* ⚛️ React (Vite)
* 🟢 Node.js + Express
* 🎨 Material UI

---

## 🚀 Features

* ✅ Create tasks
* 📋 View tasks (To Do / Done)
* 🔄 Move tasks between columns
* 🗑️ Delete tasks
* ⚡ Real-time UI updates

---

## 📁 Project Structure

```
kanban-task-manager/
│
├── backend/   # Node.js + Express API
└── frontend/  # React (Vite) app
```

---

## 🛠️ Setup Instructions

### 1️⃣ Clone the repository

```
git clone https://github.com/Melroysalins/kanban-task-manager.git
cd kanban-task-manager
```

---

## 🔧 Backend Setup

```
cd backend
npm install
npm run dev
```

📍 Backend runs on:

```
http://localhost:4000
```

---

## 🎨 Frontend Setup

Open a new terminal:

```
cd frontend
npm install
npm run dev
```

📍 Frontend runs on:

```
http://localhost:5173
```

---

## 🔗 API Endpoints

| Method | Endpoint   | Description        |
| ------ | ---------- | ------------------ |
| GET    | /tasks     | Get all tasks      |
| POST   | /tasks     | Create new task    |
| PUT    | /tasks/:id | Update task status |
| DELETE | /tasks/:id | Delete task        |

---

## ⚠️ Important Notes

* Backend uses **in-memory storage** (data resets on restart)
* Make sure backend is running before frontend
* CORS must be enabled in backend

---

## 🌐 Deployment

* Frontend → Vercel
* Backend → Render / Railway

---

## 📌 Future Improvements

* 🔄 Drag & Drop support
* ⏳ Loading states
* 🔔 Toast notifications
* 🗂️ Persistent database (MongoDB)

---

## 👨‍💻 Author

**Melroy Salins**
