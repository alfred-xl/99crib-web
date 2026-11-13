# 99 Crib website

## Local development

Install dependencies and start Next.js:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The contact form needs PHP hosting to send mail, so local Next.js development can show the form but cannot deliver a message.

## cPanel deployment and contact form

This project uses Next.js static export. Run `npm run build` locally; the deployable site is generated in `out/`. The contact form posts to `/api/contact.php`, copied from `public/api/contact.php` into `out/api/contact.php` during the build. The browser cannot execute PHP in `next dev`; test sending on a PHP-enabled host.

To show the site at `https://your-domain/` instead of `https://your-domain/out/`, either set the domain's document root to the deployed `out` directory in cPanel **Domains → Manage**, or copy the **contents** of `out/` (including `.htaccess` and `api/`) into the domain's existing document root, usually `public_html/`. cPanel normally does not let you change the primary domain's document root in that screen, so copying the contents is the practical option for a primary domain. Do not place an `out` folder inside the document root unless you want `/out/` in the URL. Rebuild and upload the contents again after each frontend change.

The SMTP password and Composer packages must stay outside the public document root. If the live endpoint is `/home/USER/public_html/api/contact.php`, create `/home/USER/99crib-mail/`. The endpoint calculates this sibling directory from its own location, so the same rule applies if you use a custom document root.

1. In cPanel Terminal, create the private directory and install PHPMailer: `mkdir -p /home/USER/99crib-mail && cd /home/USER/99crib-mail && composer require phpmailer/phpmailer`.
2. Create its rate-limit directory: `mkdir -p /home/USER/99crib-mail/rate-limits`. The PHP user must be able to write there.
3. Copy `server/mail-config.example.php` to `/home/USER/99crib-mail/config.php` and fill in your SMTP host, port, encryption, username, password, sender and recipient. Never upload this config into the web root or commit it to Git.
4. Build and upload the site. Confirm `https://your-domain/api/contact.php` returns a JSON `405 Method not allowed` response when opened in a browser; then submit the contact form and check the recipient inbox and spam folder.

PHP and Composer are required on the hosting account for this contact endpoint. A Node.js runtime is not required to serve the exported site or run PHPMailer.
