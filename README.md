# Super Easy FTP Static Blog

A minimal blog in Markdown. Push your code → Website builds automatically and deploys via FTP. No Node.js required on the server.

## Quick Start (5 Min)

### 1. Fork/clone this repo and develop locally

```bash
pnpm install
pnpm dev  # http://localhost:3000
```

### 2. Configure GitHub Secrets

See [AUTO_DEPLOYMENT.md](./AUTO_DEPLOYMENT.md) for detailed guide.

Quick: Add 3 secrets to `https://github.com/YOUR_USER/YOUR_REPO/settings/secrets/actions`:
- `FTP_SERVER` → `ftp.your-hosting.com`
- `FTP_USERNAME` → your-username
- `FTP_PASSWORD` → your-password

### 3. Done! 🚀

From now on:
```bash
# Create a new post
echo "---
title: 'My Post'
date: '2026-02-16'
---

# Hello!" > content/posts/my-post.md

# Push to git
git add .
git commit -m "New post"
git push
# → Builds & deploys automatically!
```

---

## Creating Blog Posts

Create a Markdown file in `content/posts/`:

```markdown
---
title: "My Post Title"
date: "2026-02-16"
---

# Heading

Your content here...

- Markdown works
- **bold**, *italic*, `code` etc.
```

**Important:**
- Filename becomes URL: `my-post.md` → `/blog/my-post`
- Date format: `YYYY-MM-DD`
- Title and date in frontmatter required

---

## Local Development

```bash
# Install dependencies
pnpm install

# Start dev server
pnpm dev

# Open http://localhost:3000
```

---

## Production Build

```bash
pnpm build
# Creates static files in /out/
```

---

## Project Structure

```
content/posts/          ← Your posts (Markdown)
app/page.tsx            ← Home (post listing)
app/blog/[slug]/        ← Blog detail pages
lib/posts.ts            ← Post logic
.github/workflows/      ← GitHub Actions (auto-deploy)
```

---

## Options

### Manual Deployment (without GitHub Actions)

```bash
pnpm build
# Upload /out/ content via FTP
```

### Deploy only from specific branch

Edit `.github/workflows/deploy.yml`:
```yaml
on:
  push:
    branches:
      - main  # only main
```

### Apache .htaccess (pretty URLs)

Copy `.htaccess.example` to `.htaccess` on your server.

---

## FAQ

**Q: Can I use HTML/React in posts?**  
A: No, Markdown only. Use Tailwind classes in `app/` components for custom styling.

**Q: How many posts can I have?**  
A: Unlimited. All built at build-time.

**Q: Do I need Node.js on my server?**  
A: No, everything is static. Just a regular web server (Apache, Nginx, etc.).

**Q: Can I customize the styles?**  
A: Yes, edit Tailwind classes in `app/page.tsx` and `app/blog/[slug]/page.tsx`.

---

## Tech Stack

- **Next.js 16** - Framework
- **Markdown** - Posts (gray-matter + remark)
- **Tailwind CSS** - Styling
- **GitHub Actions** - Auto-deploy via FTP

---

## License

MIT

