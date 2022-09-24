# Apple Store Clone REST API

## Description

This is a the backend repository for the React application `Apple Store Clone`.

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
{
    title: {
      type: String,
      unique: true,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    color: {
      type: String,
      required: true
    },
    newStock: {
        type: bool,
        required: true
    }
  },
    {
      timestamps: true
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

- [Presentation slides]()
- [Frontend repository](https://github.com/WajahatFit/Apple-Clone-Front-End)
- [Frontend deploy]()
- [Deployed REST API]()
