# Millennium Plumbing

## Run locally

Prerequisite: Node.js 20.19+ or 22.12+.

```sh
npm install
npm run dev
```

Vite prints the local development URL when the server starts.

## Build and deploy

```sh
npm run build
```

Deploy the generated `dist/` directory to any static web host. Configure the host to serve `index.html` for routes that do not match a file so client-side navigation works. Netlify and Vercel fallback rules are included; other hosts can use their equivalent rewrite or fallback setting.

The service request forms currently do not send data to a business inbox or booking system. They display the entered details and direct visitors to call. Connect and test a form provider before relying on online submissions.

To check the production build locally:

```sh
npm run preview
```
