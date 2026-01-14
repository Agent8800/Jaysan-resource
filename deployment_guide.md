# Free Deployment Guide: Jaysan Resource

This guide explains how to host your detached application for free, covering the Frontend, Backend, and security configurations.

## 1. Hosting Platforms (Free Tier)
We recommend the following stack for a zero-cost setup:
- **Frontend (Next.js)**: [Vercel](https://vercel.com/) (Best for Next.js)
- **Backend (Express)**: [Render](https://render.com/) or [Railway](https://railway.app/)
- **DNS/Security**: [Cloudflare](https://www.cloudflare.com/)

---

## 2. Preparing the Backend
### Where to get the JWT Secret?
The **JWT Secret** is a private string used to sign your authentication tokens. You don't "get" it from anywhere; you **create** it.
- **How to create**: Use a random string. For better security, generate one in your terminal:
  ```bash
  node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"
  ```
- **Where to put it**: In your Render environment variables as `JWT_SECRET`.

### Which Port to use?
On free hosting platforms like Render:
- **DO NOT** hardcode a port like `5000`.
- The platform will assign a port dynamically.
- Your code already handles this: `const PORT = process.env.PORT || 5000;`.
- Render will automatically detect this.

---

## 3. Deployment Steps

### Step 1: Push to GitHub
1. Create a GitHub repository.
2. Push your entire project folder.
   - *Note: Ensure `.env` files are in `.gitignore` so your secrets aren't public!*

### Step 2: Deploy Backend (Render)
1. Log in to [Render](https://render.com/).
2. Create a **New Web Service** and connect your GitHub repo.
3. Set **Root Directory** to `backend`.
4. Set **Build Command**: `npm install`.
5. Set **Start Command**: `node index.js`.
6. Go to **Environment** and add:
   - `JWT_SECRET`: (The string you generated)
   - `RAZORPAY_KEY_ID`: (Your test key)
   - `RAZORPAY_KEY_SECRET`: (Your test secret)

### Step 3: Deploy Frontend (Vercel)
1. Log in to [Vercel](https://vercel.com/).
2. Import your GitHub repo.
3. Select the root directory (it will auto-detect Next.js).
4. Set **Environment Variables**:
   - `NEXT_PUBLIC_API_URL`: `https://your-backend-url.onrender.com/api`
5. Click **Deploy**.

---

## 4. Using Cloudflare
**Yes, you can and should use Cloudflare!**

### How to set it up:
1. **DNS Management**: Point your custom domain to Cloudflare.
2. **Add Records**:
   - Add a CNAME record for your domain pointing to the Vercel app (e.g., `your-app.vercel.app`).
   - (Optional) Use a subdomain like `api.yourdomain.com` for the Render backend.
3. **SSL/TLS**: Set to "Full" or "Full (Strict)" in Cloudflare to ensure encrypted traffic.
4. **WAF**: Enable the Free Web Application Firewall to block common attacks.

> [!WARNING]
> On the Render Free Tier, the backend will "sleep" after 15 minutes of inactivity. The first request after a sleep period might take 30-50 seconds to respond. For production, consider a paid plan to keep the instance "warm".
