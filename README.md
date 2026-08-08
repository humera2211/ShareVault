# ShareVault

A secure cloud-based file sharing platform that allows users to upload, store, and share files using short links, password protection, email sharing, and QR codes.


**Live Demo:** [https://share-vault-lilac.vercel.app/](https://share-vault-lilac.vercel.app/)

---

## Project Highlights


**Full-Stack Development**
- Next.js 13 with App Router
- Server-side rendering and API routes
- Client-side state management

**Cloud Services Integration**
- Clerk for authentication
- Cloudinary for file storage
- Firebase Firestore for database

**File Management**
- Secure file upload and storage
- Temporary sharing links
- Metadata management

**Advanced Features**
- Password-protected resources
- Email automation with templates
- QR code generation
- Link expiration

---

## Tech Stack

### Frontend
- **Next.js 13** - React framework
- **React 18** - UI library
- **Tailwind CSS** - Styling
- **Lucide React** - Icons
- **Axios** - HTTP client

### Authentication & Security
- **Clerk** - User authentication & session management

### Database & Storage
- **Firebase Firestore** - File metadata storage
- **Cloudinary** - Cloud file storage & CDN

### Email & QR
- **Nodemailer** - Email sending
- **React Email** - Email templates
- **QRCode** - QR code generation

### Deployment
- **Vercel** - Hosting platform

---

## Architecture

ShareVault follows a cloud-based microservices architecture where different services handle specific responsibilities:

```
                    ShareVault
                        │
          ┌─────────────┴─────────────┐
          │                           │
      FRONTEND                    BACKEND
      (Client)                 (Server-side)
          │                           │
          ▼                           ▼
   React + Next.js             Next.js API Routes
   Tailwind CSS                /api/send
          │                           │
          │                    Nodemailer
          │                    QRCode generation
          │
          └──────────────┬────────────┘
                         │
              External Backend Services
                         │
             ┌───────────┼───────────┐
             ▼           ▼           ▼
          Clerk      Firestore   Cloudinary
       Authentication  Database   File Storage
```

---

## Application Flow

```
           ┌──────────────┐
           │     User     │
           └──────┬───────┘
                  │
           Register / Login
                  │
                  ▼
           ┌──────────────┐
           │    Clerk     │
           └──────┬───────┘
                  │
           Authenticated
                  │
                  ▼
           ┌──────────────┐
           │ Upload File  │
           └──────┬───────┘
                  │
                  ▼
           ┌──────────────┐
           │  Cloudinary  │
           └──────┬───────┘
                  │
              secure_url
                  │
                  ▼
           ┌──────────────┐
           │  Firestore   │
           │ File Metadata│
           └──────┬───────┘
                  │
           Generate File ID
                  │
                  ▼
           ┌──────────────┐
           │  Short URL   │
           └──────┬───────┘
                  │
         ┌────────┼─────────┐
         ▼        ▼         ▼
     Copy URL   Email     QR Code
         │        │         │
         └────────┼─────────┘
                  ▼
              Recipient
                  │
                  ▼
             /f/:fileId
                  │
                  ▼
           Check Expiration
                  │
            ┌─────┴─────┐
            │           │
          Valid       Expired
            │           │
            ▼           ▼
     Password Check  Link Expired
            │
            ▼
         Download
            │
            ▼
       Cloudinary
```

---

## User Journey

### 1. Registration
```
User → /sign-up → Clerk → Account Created → Authenticated Session → ShareVault
```

### 2. File Upload
```
User → Select File → Cloudinary Upload → secure_url → Firestore Metadata → File Saved
```
---

### 3. File Sharing
After upload, users can:
- **Copy Link** - Copy the short URL to clipboard
- **Email** - Send to recipient via email
- **QR Code** - Generate and share QR code

### 4. Password Protection (Optional)
```
User → Enable Password? → Set Password → Share Link → Recipient Enters Password → Access Granted
```

### 5. Link Expiration
```
Recipient Opens Link → Check expiresAt Timestamp → If Valid: Access File → If Expired: Show "Link Expired"
```

## Email Sharing Flow

When a user shares a file via email:

```
User → Enter Recipient Email → /api/send → Email Template → Nodemailer → Gmail SMTP → Recipient

Email Contents:
├── File Name
├── File Size
├── Download Button
├── Shareable URL
├── QR Code
└── URL Fallback
```

---

## Project Structure

```
share-vault/
│
├── app/
│   ├── _components/
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── FileInfo.jsx
│   │   └── ...
│   │
│   ├── _utils/
│   │   ├── GlobalApi.js
│   │   └── GenerateRandomString.js
│   │
│   ├── api/
│   │   └── send/
│   │       └── route.js
│   │
│   ├── upload/
│   │   └── page.jsx
│   │
│   ├── files/
│   │   └── page.jsx
│   │
│   ├── file-preview/
│   │   └── [fileId]/
│   │
│   ├── f/
│   │   └── [fileId]/
│   │
│   ├── sign-in/
│   │   └── page.jsx
│   │
│   ├── sign-up/
│   │   └── page.jsx
│   │
│   ├── layout.jsx
│   └── page.jsx
│
├── public/
│   ├── logo.svg
│   └── ...
│
├── firebaseConfig.js
├── middleware.js
├── next.config.js
├── package.json
└── README.md
```

---

## Database Design

ShareVault uses **Firebase Firestore** to store file metadata.

### Collection: `uploadedFiles`

```json
{
  "id": "Oq7fmN",
  "fileName": "example.pdf",
  "fileSize": 2858,
  "fileType": "application/pdf",
  "fileUrl": "https://res.cloudinary.com/...",
  "userEmail": "user@example.com",
  "userName": "Humera Khan",
  "password": "",
  "shortUrl": "https://share-vault-lilac.vercel.app/f/Oq7fmN",
  "expiresAt": "Firestore Timestamp",
  "uploadedAt": "Firestore Timestamp"
}
```

**TTL (Time To Live):** The `expiresAt` field can be configured with Firestore TTL to automatically delete expired file metadata after 24 hours.

---

## Cloudinary Integration

Cloudinary handles file storage and delivery:

```
User → Next.js → Cloudinary → File Stored → Secure URL → Firestore
```

- **File Storage**: Actual files are stored on Cloudinary's CDN
- **Metadata Storage**: URLs are stored in Firestore (not actual file contents)
- **Benefits**: Scalable storage, fast CDN delivery, automatic optimization

---

## Authentication Architecture

Clerk handles all authentication separately from application data:

```
User → Clerk → Authentication Check → Authenticated Session → ShareVault App
```

- **User Registration**: Managed by Clerk
- **Login/Logout**: Managed by Clerk
- **Session Management**: Clerk handles session tokens
- **Protected Routes**: Middleware checks Clerk authentication

---

## Key Features Explained

### How Short URLs Work
Every file gets a unique 6-character ID that generates a short URL:
```
File ID: Oq7fmN
Short URL: https://share-vault-lilac.vercel.app/f/Oq7fmN
```

### Link Expiration Process
1. File uploaded with `expiresAt` timestamp (current time + 24 hours)
2. Recipient opens shared link
3. System checks if current time < expiresAt
4. If valid → Show file preview
5. If expired → Show "Link Expired" message

### Password Protection Flow
1. User enables password during upload
2. Password stored with file metadata
3. Recipient opens link → Sees password prompt
4. System verifies password match
5. If correct → Access granted
6. If incorrect → Access denied

---

