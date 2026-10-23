# Uneeb Ahmed: Portfolio

A portfolio site for Uneeb Ahmed, Supply Chain Analyst, with four pages: Home, Experience, Skills & Education and Projects. It's built with Next.js 16 (App Router), React 19 and Tailwind CSS 4, and styled after a clean Google Sites layout: a photo hero, blue section titles, justified text and a blue contact band. The contact form sends email through [Resend](https://resend.com).

## Run it locally

You need Node.js 20.9 or newer.

```bash
npm install
cp .env.example .env.local   # then fill in RESEND_API_KEY
npm run dev                  # http://localhost:3000
```

`npm run build && npm start` runs the production build.

## Editing content

All text on the site comes from **`data/profile.js`**: headline, about, biography, key results, experience, skills, projects, education, certifications and contact details. Edit that file and the pages update. No component changes are needed.

**Hero photo:** the hero and page banners use `public/images/hero-port.jpg`, an original container-port illustration. To use a photo of Uneeb instead, add it to `public/images/` and change `heroImage` in `data/profile.js`. A landscape image of at least 2000px wide works best.

The downloadable CV is **`public/resume.pdf`**. Replace the file to update it.

## Contact form

`app/api/contact/route.js` validates the message, escapes it and sends it with Resend. Replies go straight to the visitor because the email sets `replyTo`. Spam protection comes from a honeypot field plus a light per-IP rate limit.

| Variable | Purpose |
| --- | --- |
| `RESEND_API_KEY` | Required. Without it the form shows a friendly "email directly" message. |
| `CONTACT_TO_EMAIL` | Inbox that receives messages. Defaults to `uneebahm@gmail.com`. |
| `CONTACT_FROM_EMAIL` | Sender address. Must be on a domain verified in Resend. |
| `NEXT_PUBLIC_SITE_URL` | Deployed URL, used for share previews and canonical links. |

> **Important:** Resend's test sender `onboarding@resend.dev` only delivers to the email that owns the Resend account. To deliver to any inbox, verify a domain in Resend and set `CONTACT_FROM_EMAIL` to an address on that domain.

## Deploying (Vercel)

1. Import the GitHub repo in Vercel. The framework is detected automatically.
2. Add the environment variables above.
3. Deploy. The old `/about` and `/contact` URLs redirect to the matching sections of the home page.

## Structure

```
app/
  layout.js              fonts, metadata, header and footer
  page.js                Home (hero, about, biography, key results, profiles, contact form)
  experience/page.js     Experience
  skills/page.js         Skills & Education
  projects/page.js       Projects
  api/contact/route.js   contact-form email endpoint
  opengraph-image.js     generated social-share image
  icon.png, apple-icon.png
  fonts/                 Comfortaa + Open Sans (SIL Open Font License)
components/              header, hero, banners and page sections
data/profile.js          all site content
public/images/hero-port.jpg  hero / banner image
public/resume.pdf        downloadable CV
```
