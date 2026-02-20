# Site Configuration

## Super simple!

There's only **one** file: `config/site.json`

## Change texts

Simply edit the file:

```bash
nano config/site.json
```

Then commit and push:

```bash
git add config/site.json
git commit -m "Update site texts"
git push
```

Done! Changes will be automatically deployed. ✅

## Available options

```json
{
  "site": {
    "title": "Browser tab title",
    "description": "Meta description for SEO"
  },
  "home": {
    "heading": "Main heading on homepage",
    "emptyMessage": "Text when no posts available"
  },
  "category": {
    "backToOverview": "Text for back link",
    "emptyMessage": "Text when category is empty",
    "postCountSingular": "e.g. 'Post'",
    "postCountPlural": "e.g. 'Posts'"
  },
  "blog": {
    "backButton": "Back button text"
  },
  "dateFormat": {
    "locale": "de-DE or en-US",
    "options": {
      "year": "numeric",
      "month": "long",
      "day": "numeric"
    }
  },
  "dateFormatShort": {
    "locale": "de-DE",
    "options": {
      "year": "numeric",
      "month": "short",
      "day": "numeric"
    }
  }
}
```

