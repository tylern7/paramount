# Paramount Landscaping – one-page site (handover)

## Current host
paramountlandscaping.ca runs **WordPress (Divi theme + Divi Form Builder, WooCommerce)** on Apache with Endurance/Newfold caching (Bluehost/HostPapa-style shared hosting, cPanel).

## Upload steps
Option A (replace WordPress homepage with static site, recommended to keep WP as backup):
1. Back up the site in cPanel (Files > Backup) first.
2. In cPanel File Manager, create `public_html/new/` and upload `index.html`, `style.css`, `script.js` and the `img/` folder there to test at paramountlandscaping.ca/new/.
3. To go live: WordPress serves `index.php`. Apache's DirectoryIndex usually prefers `index.html` over `index.php`, so placing `index.html` in `public_html/` makes it the homepage while the existing WP subpages keep working. Do NOT overwrite or delete any existing file (.htaccess, index.php, wp-*).
4. Clear the Endurance / host cache (WP admin > Caching > Clear all, or cPanel), then check the homepage.
Option B: build the design into a Divi page (paste HTML into a Code module) and set it as the static front page.

No .htaccess changes are required (all paths are relative; existing WP URLs stay live). If they later retire WordPress, add 301 redirects from old service URLs to `/#services` in the EXISTING .htaccess (append, never overwrite).

## Forms – needs reconnecting
The original quote form is a Divi Form Builder form (posts to WordPress with nonce + reCAPTCHA v3), which can't receive posts from a static page.
Fields kept exactly: Full Name*, Email*, Address*, City*, Phone*, Service Type* (Lawn and Garden Maintenance / Property Maintenance / Landscape Construction / Snow Services), Property Type* (Residential / Multi-Residential / Commercial / Industrial / Multiple Types), Construction Budget* (shown only for Landscape Construction; $3000-$6000 … $250,000+), Company* (shown for non-residential types), Project Description*.
Currently the form opens a pre-filled email to doug@paramountlandscaping.ca (mailto fallback). To reconnect: point it at a form service (Formspree/Basin) or a WP endpoint (e.g. Contact Form 7 REST) – see the TODO in `script.js`.

## Link check (2026-10-15)
- tel:+19053322030, mailto:doug@paramountlandscaping.ca – OK
- https://paramountlandscaping.ca/design-build-calculator/ – 200
- Google Fonts – 200
- All in-page anchors (#services #work #about #reviews #areas #quote) – OK

## Content
All text, stats (35 experts, 50+ awards, 130+ years, 10,000+ clients), awards, testimonials, service list and service areas are taken from the current site. All photos are the client's own from paramountlandscaping.ca.
