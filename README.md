# ✨ Full Stack Realtime Chat App ✨

![Demo App](https://chat-app-9wx4.onrender.com/)

📌 **Highlights:**

* 🌟 **Tech Stack:** MERN (MongoDB, Express.js, React.js, Node.js) + Socket.io + TailwindCSS + Daisy UI
* 🔐 **Authentication & Authorization:** JWT-based login/signup
* 💬 **Realtime Messaging:** Send text and images instantly with Socket.io
* 🟢 **Online User Status:** See who is online in real-time
* 🖼️ **Profile Management:** Update profile with image upload & client-side image compression
* 🏗️ **Global State Management:** Zustand for frontend state handling
* 🐞 **Error Handling:** Both frontend and backend
* 🚀 **Deployment Ready:** Works on Render

---

### Setup `.env` file

```env
MONGODB_URI=...
PORT=5001
JWT_SECRET=...

CLOUDINARY_CLOUD_NAME=...
CLOUDINARY_API_KEY=...
CLOUDINARY_API_SECRET=...

NODE_ENV=development
```

---

### Build & Start the App

```bash
npm run build
npm start
```

---

### Features

* 💬 **Real-time Chat:** Send text & compressed images
* 🟢 **Online Status:** Track active users
* 🔒 **Secure Authentication:** JWT-based auth
* 🖼️ **Profile Pictures:** Upload & update avatars
* 🖥️ **Responsive UI:** Works on desktop, tablet & mobile
* 📢 **Notifications:** Toast messages for actions

---

### Tech Stack Details

| Layer             | Technologies                                            |
| ----------------- | ------------------------------------------------------- |
| Frontend          | React, TailwindCSS, Daisy UI, Zustand, React Icons      |
| Backend           | Node.js, Express.js, MongoDB, Mongoose, Socket.io       |
| Backend Libraries | bcryptjs, jsonwebtoken (JWT), cookie-parser, cloudinary |
| Dev Tools         | Nodemon, dotenv, cross-env                              |
