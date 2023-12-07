### NEXTjs ecommerce app course 

https://www.youtube.com/watch?v=K4ziF0MhbLc 

1 h 15 mins

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
DATABASE_URL="mongodb://root:rootpassword@localhost:27017/local?authSource=admin"
```

add .env to .gitignore

```bash
npx prisma db pull 
```

```bash
npx prisma db push

npx prisma generate
```

IF you change the prisma database structure, need to recreate client with command:
```bash
npx prisma generate
``` 

https://github.com/prisma/prisma/discussions/18958 


Create local replica set
Create docker network for replicate set
docker network create mongoCluster

Create replica set
1.docker run -d -p 27017:27017 --name mongo1 --network mongoCluster mongo:4.4.13 mongod --replSet myReplicaSetName --bind_ip localhost,mongo1
2. docker run -d -p 27018:27017 --name mongo2 --network mongoCluster mongo:4.4.13 mongod --replSet myReplicaSetName --bind_ip localhost,mongo2
3. docker run -d -p 27019:27017 --name mongo3 --network mongoCluster mongo:4.4.13 mongod --replSet myReplicaSetName --bind_ip localhost,mongo3

Initiate replicate set
docker exec -it mongo1 mongosh --eval "rs.initiate({_id: \"myReplicaSetName\", members: [{_id: 0, host: \"mongo1\"}, {_id: 1, host: \"mongo2\"}, {_id: 2, host: \"mongo3\"}]})"

Update /etc/host to include links for mong1, mongo2, mongo3
Edit /etc/host and append the following:

127.0.0.1 mongo1
127.0.0.1 mongo2
127.0.0.1 mongo3
Check status
You can run 
```bash
docker exec -it mongo1 mongosh --eval "rs.status()
```
 and it should return something like the following:



Connect
Connect through one of the following:

```bash
mongodb://localhost:27017,localhost:27018,localhost:27019/?replicaSet=myReplicaSetName
mongodb://localhost:27017,localhost:27018,localhost:27019/my-database-name?replicaSet=myReplicaSetName 
```


FREE IMAGES
unslpash.com


### NextJs server actions
https://nextjs.org/docs/app/api-reference/functions/server-actions 





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
