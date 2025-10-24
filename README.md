# Personal Landing Page

A minimal, dark-themed personal landing page / digital résumé built with pure HTML, CSS, and JavaScript. Inspired by the clean, monochrome aesthetic of Palantir and Anduril.

## Features

- **Pure Static Site** - No build process or dependencies required
- **Dark Monochrome Theme** - Professional, minimal design with sparring accent colours
- **Fully Responsive** - Mobile-first design that works on all devices
- **Accessible** - Semantic HTML, ARIA labels, and keyboard navigation support
- **Performance Optimised** - Minimal assets, fast load times
- **Motion Respectful** - Respects `prefers-reduced-motion` for accessibility
- **British English** - All copy uses British spelling conventions

## Project Structure

```
personal_website/
├── index.html          # Main HTML file
├── css/
│   └── style.css       # All styles (dark theme, responsive)
├── js/
│   └── main.js         # Minimal JavaScript for interactions
├── assets/
│   ├── favicon.svg     # Site favicon
│   └── avatar.svg      # Placeholder profile image (replace with your own)
└── README.md           # This file
```

## Customisation

### 1. Update Personal Information

Edit `index.html` and replace the following placeholders:

- **Line 7**: `Your Name` (in meta author)
- **Line 8**: Page title
- **Line 29**: Your name in hero section
- **Line 30**: Your professional title
- **Line 31**: Your tagline
- **Line 38-45**: About section content
- **Lines 54-100**: Experience timeline (add/remove items as needed)
- **Lines 110-137**: Skills (customise to your expertise)
- **Lines 148-195**: Projects (showcase your work)
- **Lines 209-223**: Contact links (email, GitHub, LinkedIn, etc.)

### 2. Replace Profile Image

Replace `assets/avatar.svg` with your own photo:

```bash
# Option 1: Use a JPG/PNG (recommended 240x240px minimum)
# Update index.html line 27 to point to your image:
<img src="assets/avatar.jpg" alt="Profile photo" class="avatar" width="120" height="120">

# Option 2: Keep the SVG placeholder and customise it
# Edit assets/avatar.svg to match your branding
```

### 3. Customise Colours

Edit `css/style.css` custom properties (lines 6-11):

```css
:root {
    --colour-accent: #00d9ff;        /* Change accent colour */
    --colour-accent-dim: #008fa8;    /* Dimmed accent */
    /* Other colour variables... */
}
```

### 4. Modify Layout

All sections are modular. To remove a section, simply delete its corresponding HTML block in `index.html`. For example, to remove the Skills section, delete lines 103-140.

## Local Development

Simply open `index.html` in your browser:

```bash
# Option 1: Direct file access
open index.html

# Option 2: Use a local server (recommended)
python3 -m http.server 8000
# Then visit http://localhost:8000

# Option 3: Use Node.js http-server
npx http-server -p 8000
```

## Deployment

This site is a flat static site and can be deployed to any static hosting service.

### GitHub Pages

1. Create a new repository on GitHub
2. Push your code:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/yourrepo.git
   git push -u origin main
   ```
3. Go to repository Settings → Pages
4. Select `main` branch as source
5. Your site will be live at `https://yourusername.github.io/yourrepo/`

### Netlify

1. Create a [Netlify](https://netlify.com) account
2. Drag and drop the entire folder into Netlify's web interface
3. Or connect your GitHub repository for automatic deployments
4. Your site will be live at a Netlify subdomain (customisable)

### Cloudflare Pages

1. Create a [Cloudflare Pages](https://pages.cloudflare.com) account
2. Connect your GitHub repository
3. Build settings:
   - **Build command**: (leave empty)
   - **Build output directory**: `/`
4. Deploy and your site will be live

### Vercel

1. Create a [Vercel](https://vercel.com) account
2. Import your GitHub repository
3. Build settings:
   - **Framework Preset**: Other
   - **Build Command**: (leave empty)
   - **Output Directory**: `./`
4. Deploy

### Amazon S3 + CloudFront

1. Create an S3 bucket with static website hosting enabled
2. Upload all files to the bucket
3. Configure bucket policy for public access:
   ```json
   {
     "Version": "2012-10-17",
     "Statement": [{
       "Sid": "PublicReadGetObject",
       "Effect": "Allow",
       "Principal": "*",
       "Action": "s3:GetObject",
       "Resource": "arn:aws:s3:::your-bucket-name/*"
     }]
   }
   ```
4. (Optional) Create a CloudFront distribution for CDN and HTTPS
5. Point your domain to the S3 bucket or CloudFront distribution

### Bare Nginx Server

1. Copy files to your web server:
   ```bash
   scp -r * user@yourserver:/var/www/html/
   ```

2. Configure Nginx (optional, for SPA-like behaviour):
   ```nginx
   server {
       listen 80;
       server_name yourdomain.com;
       root /var/www/html;
       index index.html;

       location / {
           try_files $uri $uri/ /index.html;
       }

       # Optional: Enable gzip compression
       gzip on;
       gzip_types text/plain text/css application/javascript;

       # Optional: Security headers
       add_header X-Frame-Options "SAMEORIGIN" always;
       add_header X-Content-Type-Options "nosniff" always;
       add_header Referrer-Policy "no-referrer-when-downgrade" always;
   }
   ```

3. Restart Nginx:
   ```bash
   sudo systemctl restart nginx
   ```

## Browser Support

- Chrome/Edge (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Mobile browsers (iOS Safari, Chrome Android)

## Accessibility

This site follows WCAG 2.1 Level AA guidelines:

- Semantic HTML5 elements
- Proper heading hierarchy
- ARIA labels where appropriate
- Keyboard navigation support
- Focus indicators
- Respects `prefers-reduced-motion`
- Respects `prefers-contrast`
- Colour contrast ratios meet AA standards

## Performance

- No external dependencies or frameworks
- Minimal JavaScript (~2KB)
- CSS custom properties for efficient styling
- Optimised SVG assets
- Lazy loading where appropriate

## Licence

This template is free to use for personal projects. Attribution is appreciated but not required.

## Support

For issues or questions about deployment, please refer to your hosting provider's documentation:

- [GitHub Pages Docs](https://docs.github.com/en/pages)
- [Netlify Docs](https://docs.netlify.com/)
- [Cloudflare Pages Docs](https://developers.cloudflare.com/pages/)
- [Vercel Docs](https://vercel.com/docs)

---

Built with HTML, CSS, and JavaScript. No frameworks, no fuss.
