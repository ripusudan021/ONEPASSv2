# ONEPASS (MongoDB Version)

A simple password manager built using **React**, **Tailwind CSS**, and a **Node.js + MongoDB backend**.

---

## 🔗 Live Demo

[https://ripusudan021.github.io/ONEPASSv1/](https://ripusudan021.github.io/ONEPASSv1/)

---

## 🚀 Features

* Add / Edit / Delete saved passwords
* Backend storage using **MongoDB**
* Copy username/password
* Show/Hide passwords
* Clean UI with Tailwind CSS

---

## 📁 Project Structure

```
PROJECT_ONEPASS/
│
├─ backend/
│   ├─ server.js        # Express API
│   ├─ .env             # MongoDB URI
│   ├─ package.json
│
├─ src/
│   ├─ assets/          # icons & images
│   ├─ components/      # Navbar, Manager, Footer
│   ├─ App.jsx
│   ├─ main.jsx
│
├─ public/
├─ README.md
└─ vite.config.js
```

---

## ⚙️ How It Works

1. Frontend sends API requests to backend (Node.js + Express).
2. Backend stores entries in **MongoDB**.
3. Manager component loads all passwords via GET request.
4. CRUD operations happen through backend routes.

---

## ▶️ Run Locally

### Backend

```
cd backend
npm install
npm start
```

Create `.env`:

```
MONGO_URI=your_mongodb_connection_string
```

### Frontend

```
npm install
npm run dev
```

---

## 🛡️ Security

* Use strong MongoDB password & environment variables
* Recommended: encrypt password fields before saving

---

## 👨‍💻 Author

**Ripusudan Mishra**

---

Simple. Clean. Fast. ONEPASS.
