# Orangee Store REST API

## Description

This is a the backend repository for the React application `Orangee Store`.

---

## Instructions

When cloning the project, change the <code>sample.env</code> file name for <code>.env</code>. The project will run on **PORT 8000**.

Then, run:

```bash
npm install
```

## Scripts

- To start the project run:

```bash
npm run start
```

- To start the project in development mode, run:

```bash
npm run dev
```

- To seed the database, run:

```bash
npm run seed
```

---

## Models

### User

Users in the database have the following properties:

```js
{
  email: {
    type: String,
    unique: true,
    required: true
  },
  hashedPassword: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user'
  }
},
  {
    timestamps: true
  }
```

### Products

Products in the database have the following properties:

```js
title: {
      type: String,
      required: [true, "Product must have a title"],
    },
    description: {
      type: String,
      required: [true, "Product must have a description"],
    },
    price: {
      type: Number,
      required: [true, "Product must have a price"],
    },
    color: {
      type: String,
      required: [true, "Product must have a color"],
    },
    newStock: {
      type: Boolean
    },
    images: {
      type: [String],
      required: [true, "Product must have at least  one Image"],
    },
    category: {
      type: String,
      enum: ["Mac", "iPhone", "iPad", "Apple Watch", "Apple TV", "Air Pods"],
    },
  {
    timestamps: true,
  };
```

---

## API endpoints and usage

| Action             | Method | Endpoint            | Req.body                      | Private/Public |
| ------------------ | ------ | ------------------- | ----------------------------- | -------------- |
| SIGN UP user       | POST   | /api/v1/auth/signup | { username, email, password } | Public         |
| LOG IN user        | POST   | /api/v1/auth/login  | { email, password }           | Public         |
| GET logged in user | GET    | /api/v1/auth/me     |                               | Private        |

---

## Useful links

- [Presentation slides](https://www.canva.com/design/DAFMet8b2DU/yAa40LmsJSJXSG_ZhM-CCw/edit?utm_content=DAFMet8b2DU&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton)
- [Frontend repository](https://github.com/WajahatFit/Apple-Clone-Front-End)
- [Frontend deploy]()
- [Deployed REST API]()
