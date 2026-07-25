# Grace Fire Deliverance Healing Global World Ministry — Website

A modern, mobile-friendly, installable (PWA) website for the church, built with
plain HTML, CSS and JavaScript — **no build tools, no coding experience needed
to launch it.**

This guide assumes you have never used GitHub before. Follow it top to bottom.

---

## What's inside

```
church-site/
├── index.html          Home page (hero slider, countdown, services, testimonies)
├── about.html           About the ministry & Pastor Ifeanyi Ude
├── events.html          Upcoming events + 9th Anniversary countdown
├── sermons.html         Sermon video + archive
├── gallery.html         Photo gallery with click-to-enlarge
├── contact.html         Prayer request form, contact form, Google Map
├── partnership.html     Giving / bank account details
├── css/style.css        All styling
├── js/main.js           Menu, slider, animations, forms, PWA
├── js/countdown.js      Anniversary countdown — EDIT THE DATE HERE
├── manifest.json        Makes the site installable as an app
├── sw.js                Offline support
├── assets/img/          Your photos & logo
├── assets/icons/        App icons (generated from your logo)
├── robots.txt / sitemap.xml   SEO files (add your real domain)
```

---

## Part 1 — Put the site on GitHub

1. Go to [github.com](https://github.com) and create a free account if you
   don't have one.
2. Click the **+** icon (top right) → **New repository**.
3. Name it exactly: `church-website` (or any name — just remember it).
4. Set it to **Public**, don't tick any extra boxes, then click **Create repository**.
5. On the next page, click **uploading an existing file**.
6. Drag the **entire contents** of this `church-site` folder into the browser
   window (all files and folders, not the outer folder itself).
7. Scroll down, click **Commit changes**.

Your code is now on GitHub. 🎉

---

## Part 2 — Publish free with GitHub Pages

1. In your repository, click **Settings** (top menu).
2. In the left sidebar, click **Pages**.
3. Under "Build and deployment" → **Source**, choose **Deploy from a branch**.
4. Under **Branch**, choose `main` and folder `/ (root)`, then **Save**.
5. Wait 1–2 minutes, refresh the page. You'll see a green box with your live
   link, like:
   `https://your-username.github.io/church-website/`

That's your church website, live on the internet.

> **Important for GitHub Pages sub-folder links:** because your site lives at
> `.../church-website/` (not the very root of the domain), all links in this
> project use **relative paths** (`about.html`, not `/about.html`) so
> everything works correctly. Don't add a leading `/` to any link or image path.

---

## Part 3 — (Optional but recommended) Deploy to Cloudflare Pages instead

Cloudflare Pages is free, faster, and gives you a cleaner setup for a custom
domain.

1. Go to [pages.cloudflare.com](https://pages.cloudflare.com) and sign up / log in.
2. Click **Create a project** → **Connect to Git** → choose GitHub → authorize
   Cloudflare → select your `church-website` repository.
3. Build settings: leave **Build command** empty and **Output directory** as `/`
   (this is a plain HTML site — nothing to "build").
4. Click **Save and Deploy**. In about a minute you'll get a link like
   `https://church-website.pages.dev`.

You can use GitHub Pages, Cloudflare Pages, or both — they both read from the
same GitHub repository, so editing files in GitHub updates both automatically.

---

## Part 4 — Connect your own domain name (optional)

If you buy a domain (e.g. `gracefireministry.org`):

- **Cloudflare Pages:** In your Pages project → **Custom domains** → **Set up
  a domain** → follow the steps.
- **GitHub Pages:** Repository → **Settings → Pages → Custom domain** → enter
  your domain → follow GitHub's DNS instructions.

Afterwards, open `robots.txt` and `sitemap.xml` and replace
`YOUR-DOMAIN-HERE` with your real domain.

---

## Part 5 — Connect the Prayer Request & Contact forms

The forms are built to submit through **[Formspree](https://formspree.io)**
(free for up to 50 messages/month), so submissions land straight in your email.

1. Go to [formspree.io](https://formspree.io) → sign up free.
2. Click **New Form**, name it "Grace Fire Website", enter the email address
   that should receive messages.
3. Copy the **Form ID** Formspree gives you (looks like `xzbqjklm`).
4. In `contact.html`, find these two lines and replace `YOUR_FORM_ID`:
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST" data-ajax-form>
   ```
   There are two forms on that page (Prayer Request and General Enquiry) —
   update both (you can use the same Form ID for both, or create two separate
   Formspree forms).
5. Save the file, upload it back to GitHub (see Part 6 below on editing files).
6. Test it — submit the form on your live site and check your email.

---

## Part 6 — Editing content (day-to-day, no coding knowledge needed)

To edit any page's text or images later:

1. Open your repository on GitHub.
2. Click the file you want to change (e.g. `events.html`).
3. Click the **pencil (✏️) icon** top-right to edit.
4. Change the text between the HTML tags (leave the `<...>` tags alone).
5. Scroll down, click **Commit changes**. Your live site updates automatically
   within a minute or two.

### Things you'll likely want to update first:

**1. The Anniversary countdown date** — open `js/countdown.js` and change:
```js
const ANNIVERSARY_DATE = '2026-11-08T09:00:00';
```
to your real date and time, e.g. `2026-12-14T09:00:00` for 14 Dec 2026, 9am.
This single line drives the countdown on both the Home and Events pages.

**2. Adding a new photo to the Gallery** — in GitHub, open the `assets/img`
folder → **Add file → Upload files** → upload your photo. Then open
`gallery.html`, copy one block that looks like this:
```html
<a href="assets/img/hero1.jpg"><img src="assets/img/hero1.jpg" alt="Description"></a>
```
and change `hero1.jpg` (in both places) to your new file's name.

**3. Adding a new Event or Sermon** — in `events.html` or `sermons.html`, find
a `<div class="card reveal">...</div>` block and copy/paste it, then edit the
image, title and description inside.

**4. Embedding a sermon video** — in `sermons.html`, find `YOUTUBE_VIDEO_ID`
inside the `<iframe>` and replace it with the ID from your YouTube video link
(the part after `watch?v=`).

**5. Updating testimonies** — edit the text inside the `.quote-card` blocks on
`index.html`.

---

## Part 7 — Already set up for you

- ✅ **WhatsApp number** (0805 430 2247) is linked as the floating WhatsApp
  button on every page, in the footer, and on the Contact page.
- ✅ **Phone number** is a tap-to-call link.
- ✅ **Address** (Jelli Olubori Street, beside Cow Slaughter Ground, Isheri
  Osun, Lagos) is shown on the Contact page with an embedded Google Map — no
  API key required.
- ✅ **Bank account details** (FCMB, 6815119020) are on the Partnership page
  with tap-to-copy buttons.
- ✅ **PWA** — visitors on mobile can tap "Add to Home Screen" and the site
  opens like an app, with your logo as the icon, and works even with a poor
  connection thanks to the built-in offline cache.
- ✅ **SEO basics** — page titles, meta descriptions, `robots.txt` and
  `sitemap.xml` are in place (just add your real domain once you have one).
- ✅ **Mobile responsive** — the whole site adapts down to small phone screens.

---

## Troubleshooting

- **Site looks unstyled/broken after upload:** make sure you uploaded the
  `css`, `js` and `assets` *folders* along with the `.html` files, not just
  the HTML files alone.
- **Images not showing:** file names are case-sensitive on GitHub Pages —
  `Hero1.jpg` and `hero1.jpg` are different files.
- **Countdown shows 00:00:00:00 immediately:** the date in
  `js/countdown.js` has already passed — update it to a future date.
- **Forms don't send:** you haven't replaced `YOUR_FORM_ID` yet (Part 5).

---

Built for **Grace Fire Deliverance Healing Global World Ministry** —
Pastor Ifeanyi Ude. Hebrews 12:2.
