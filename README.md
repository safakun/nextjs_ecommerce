### NEXTjs ecommerce app course 

https://www.youtube.com/watch?v=K4ziF0MhbLc 

39 mins

install app
```bash
npx create-bext-app@latest
```

Use Typescript, EsLint, Tailwind CSS, Router
Don't use aliases 

install additional packages
```bash
npm i daisyui prisma @prisma/client next-auth @auth/prisma-adapter prettier eslint-config-prettier prettier-plugin-tailwindcss 

npm i zod
```

Install Prettier code formatter extension for VSCode or VSCodium 

open File -> Preferences -> Settings
then input default formatter 
and change to Prettier - Code Formatter 

change file eslintrc.json:
```json
{
  "extends": ["next/core-web-vitals", "prettier"]
}
```

Also install ESLint and Prisma extensions for VSCode

Install tailwind CSS IntelliSense extension for VSCode or VSCodium 

in VSCode or Codium 
open File -> Preferences -> Settings 
Then input Files associations and add
*.css     tailwindcss 

change Editor quick suggestions 
strings from off to on 


configue daisyui in tailwind.config.js 

Launch MongoDB via docker compose
```bash
sudo docker compose up
```

Initiate Prisma:
```bash
npx prisma init 
```

add to .env file 
```javascript
DATABASE_URL="mongodb://root:rootpassword@localhost:27017/?authMechanism=DEFAULT&directConnection=true"
```

add .env to .gitignore

```bash
npx prisma db pull 
```

```bash
npx prisma db push

npx prisma generate
```

ошибка

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
