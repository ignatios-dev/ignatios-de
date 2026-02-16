# GitHub Actions Setup (Auto-Deploy)

Automatic deployment on every push to `main`.

## 3 Step Setup

### 1. Add GitHub Secrets

Go to: `https://github.com/YOUR_USER/YOUR_REPO/settings/secrets/actions`

Click **New repository secret** and add:

```
FTP_SERVER = ftp.your-hosting.com
FTP_USERNAME = your-username  
FTP_PASSWORD = your-password
```

### 2. Push code

```bash
git add .
git commit -m "Initial setup"
git push origin main
```

### 3. Test

Make a small change and push:

```bash
git add .
git commit -m "Test"
git push
```

Go to: `https://github.com/YOUR_USER/YOUR_REPO/actions`

**Green checkmark** = successful deploy ✅  
**Red X** = error (check log)

---

## How It Works

On every push to `main`:
1. GitHub Actions checks out the code
2. Installs dependencies (`pnpm install`)
3. Builds the blog (`pnpm build`)
4. Uploads `/out` content via FTP
5. Website is live!

---

## Troubleshooting

**"Connection refused"**
- Check FTP server and port (21)
- Verify credentials in secrets

**"Permission denied"**  
- Does the FTP user have write permissions?
- Contact your hosting provider

**"Build failed"**
- Check GitHub Actions log
- Test locally: `pnpm build`

---

## Security

✅ Secrets are encrypted  
✅ Not visible in code  
✅ Only GitHub can access them


