# ⚖️ Legal-Track

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![IPFS](https://img.shields.io/badge/IPFS-65C2CB?style=for-the-badge&logo=ipfs&logoColor=white)
![Status](https://img.shields.io/badge/Status-Deployed-brightgreen?style=for-the-badge)

> Full-stack Legal Track platform combining IPC section prediction and legal case management — built with Next.js, TypeScript, Node.js, and Express, using IPFS decentralized storage via Pinata for tamper-resistant document uploads and blockchain-inspired data integrity.

---

## 📌 Project Overview

**Legal-Track** is a full-stack web platform designed to assist legal professionals, law students, and citizens in managing and predicting legal cases efficiently. It combines **AI-powered IPC (Indian Penal Code) section prediction** with a comprehensive case management dashboard — all backed by decentralized, tamper-resistant document storage.

---

## ✨ Key Features

- 🔍 **IPC Section Prediction** — Input case facts and get predicted relevant IPC sections using an ML model
- 📁 **Legal Case Management** — Create, track, and manage legal cases in one place
- 🔒 **Decentralized Document Storage** — Upload case documents to IPFS via Pinata for tamper-proof, permanent storage
- 🌐 **RESTful API Backend** — Express + Node.js backend with clean, documented REST endpoints
- 🔐 **Blockchain-Inspired Integrity** — Document hashes ensure no silent tampering of uploaded legal records
- 📱 **Responsive UI** — Built with Tailwind CSS for a seamless experience across all devices

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| **Frontend** | Next.js 14, TypeScript, Tailwind CSS |
| **Backend** | Node.js, Express.js |
| **Storage** | IPFS via Pinata (decentralized) |
| **ML Model** | IPC Section Predictor |
| **API Style** | RESTful |
| **Auth** | Session-based authentication |

---

## 🏗️ Project Structure

```
📦 Legal-Track
 ┣ 📁 app/           # Next.js App Router pages & layouts
 ┣ 📁 backend/       # Node.js + Express REST API
 ┣ 📁 components/    # Reusable React UI components
 ┣ 📁 hooks/         # Custom React hooks
 ┣ 📁 lib/           # Utility functions and API clients
 ┣ 📁 public/        # Static assets
 ┣ 📁 scripts/       # Helper scripts
 ┣ 📁 styles/        # Global styles
 ┣ 📄 next.config.mjs
 ┣ 📄 tailwind.config.ts
 ┗ 📄 tsconfig.json
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js >= 18
- A Pinata account for IPFS storage (get API keys from [pinata.cloud](https://pinata.cloud))

### Installation

```bash
# Clone the repository
git clone https://github.com/Arnavs10/Legal-Track.git
cd Legal-Track

# Install dependencies
yarn install

# Set up environment variables
cp .env.example .env.local
# Add your Pinata API key and JWT in .env.local

# Run the development server
yarn dev
```

### Backend Setup

```bash
cd backend
npm install
npm run start
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

---

## 🔌 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/predict-ipc` | Predict IPC sections from case description |
| `GET` | `/api/cases` | Fetch all legal cases |
| `POST` | `/api/cases` | Create a new case |
| `POST` | `/api/upload` | Upload document to IPFS |
| `GET` | `/api/cases/:id` | Get case details by ID |

---

## 🔒 Why IPFS for Legal Documents?

Traditional centralized storage can be altered or deleted. IPFS (InterPlanetary File System) ensures:
- **Immutability** — Documents are content-addressed; any change creates a different hash
- **Permanence** — Files pinned via Pinata remain accessible indefinitely
- **Transparency** — Anyone with the CID can verify the document hasn't been tampered with

---

## 👥 Contributors

- **Arnav Shukla** ([@Arnavs10](https://github.com/Arnavs10))

---

## 🔮 Future Improvements

- [ ] Full authentication with JWT refresh tokens
- [ ] Case timeline & milestone tracking
- [ ] AI-powered legal brief summarization
- [ ] Multi-language IPC prediction support
- [ ] In-app notifications for case updates

---

> ⭐ Star this repo if you found it useful!
