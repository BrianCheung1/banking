<div align="center">
 
  
  <div>
    <img src="https://img.shields.io/badge/-Next_JS-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=000000" alt="nextdotjs" />
    <img src="https://img.shields.io/badge/-TypeScript-black?style=for-the-badge&logoColor=white&logo=typescript&color=3178C6" alt="typescript" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
    <img src="https://img.shields.io/badge/-Appwrite-black?style=for-the-badge&logoColor=white&logo=appwrite&color=FD366E" alt="appwrite" />
  </div>

  <h3 align="center">Simple Banking Application</h3>
</div>

## 📋 <a name="table">Table of Contents</a>

1. [Tech Stack](#tech-stack)
2. [Features](#features)
3. [Quick Start](#quick-start)

## <a name="tech-stack">⚙️ Tech Stack</a>

- Next.js
- TypeScript
- Appwrite
- Plaid
- Dwolla
- TailwindCSS
- Chart.js
- ShadCN

## <a name="features">🔋 Features</a>

👉 **Authentication**: Secure authentication with proper validations and authorization

👉 **Connect Banks**: Connect to multiple banks using Plaid API

👉 **My Banks**: List of all banks with balances

👉 **Transaction History**: Detailed and modern description of transactions from each bank account

👉 **Funds Transfer**: Simple payment transfer form allowing users to transfer funds from one account to another



## <a name="quick-start">🤸 Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```bash
git clone https://github.com/BrianCheung1/banking.git
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Set Up Environment Variables**

Create a new file named `.env` in the root of your project and add the following content:

```env
#NEXT
NEXT_PUBLIC_SITE_URL=

#APPWRITE
NEXT_PUBLIC_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
NEXT_PUBLIC_APPWRITE_PROJECT=
APPWRITE_DATABASE_ID=
APPWRITE_USER_COLLECTION_ID=
APPWRITE_BANK_COLLECTION_ID=
APPWRITE_TRANSACTION_COLLECTION_ID=
APPWRITE_SECRET=

#PLAID
PLAID_CLIENT_ID=
PLAID_SECRET=
PLAID_ENV=
PLAID_PRODUCTS=
PLAID_COUNTRY_CODES=

#DWOLLA
DWOLLA_KEY=
DWOLLA_SECRET=
DWOLLA_BASE_URL=https://api-sandbox.dwolla.com
DWOLLA_ENV=sandbox

```

You can obtain these keys by signing up with
[Appwrite](https://appwrite.io/?utm_source=youtube&utm_content=reactnative&ref=JSmastery)
[Plaid](https://plaid.com/)
[Dwolla](https://www.dwolla.com/)

**Running the Project**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.
