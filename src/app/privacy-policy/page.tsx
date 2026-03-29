import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — TakeHomeHub",
  description:
    "Privacy Policy for TakeHomeHub.com — how we collect, use, and protect your information.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="prose mx-auto py-12 px-4 max-w-4xl w-full">
      <h1>Privacy Policy</h1>

      <p>
        <strong>Effective Date:</strong> March 2026
        <br />
        <strong>Last Updated:</strong> March 2026
      </p>

      <p>
        TakeHomeHub (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;)
        operates the website takehomehub.com. This Privacy Policy explains how
        we collect, use, and protect information when you visit our site.
      </p>

      <h2>Information We Collect</h2>

      <h3>Automatically Collected Information</h3>
      <p>
        When you visit TakeHomeHub, certain information is collected
        automatically through cookies and analytics tools:
      </p>
      <ul>
        <li>Pages visited and time spent on each page</li>
        <li>Browser type and device information</li>
        <li>Approximate geographic location (country/region level)</li>
        <li>Referring website or search engine</li>
      </ul>
      <p>
        This information is collected through Google Analytics (GA4) and is used
        solely to understand how visitors use our site and to improve our
        content.
      </p>

      <h3>Information You Provide</h3>
      <p>
        TakeHomeHub does not require registration or login. We do not collect
        personal information such as names, email addresses, or payment details
        through the site. If you contact us via email, we will only use your
        email address to respond to your inquiry.
      </p>

      <h2>How We Use Information</h2>
      <p>We use automatically collected data to:</p>
      <ul>
        <li>Understand which pages and guides are most useful</li>
        <li>Improve site performance and content quality</li>
        <li>Analyze traffic patterns and user behavior</li>
      </ul>
      <p>
        We do not sell, trade, or share personal information with third parties
        for marketing purposes.
      </p>

      <h2>Cookies</h2>
      <p>TakeHomeHub uses cookies for the following purposes:</p>
      <p>
        <strong>Analytics Cookies:</strong> Google Analytics uses cookies to
        track page views and user behavior. These cookies do not identify you
        personally. You can opt out of Google Analytics by installing the Google
        Analytics Opt-out Browser Add-on.
      </p>
      <p>
        <strong>Advertising Cookies:</strong> If and when display advertising is
        enabled on this site (such as Google AdSense), third-party vendors
        including Google may use cookies to serve ads based on your prior visits
        to this or other websites. You can manage your ad personalization
        settings at adssettings.google.com.
      </p>
      <p>
        You can disable cookies through your browser settings at any time.
        Disabling cookies may affect some site functionality.
      </p>

      <h2>Third-Party Services</h2>
      <p>TakeHomeHub uses the following third-party services:</p>
      <ul>
        <li>
          <strong>Google Analytics (GA4):</strong> For website traffic analysis.
          Google&apos;s privacy policy applies to data collected through this
          service.
        </li>
        <li>
          <strong>Google AdSense:</strong> For display advertising (if enabled).
          Google&apos;s advertising privacy policy applies.
        </li>
        <li>
          <strong>Vercel:</strong> For website hosting. Vercel&apos;s privacy
          policy applies to server-level data.
        </li>
      </ul>

      <h2>Data Retention</h2>
      <p>
        Analytics data is retained according to Google Analytics default
        settings. We do not maintain separate databases of user information.
      </p>

      <h2>Your Rights</h2>
      <p>You have the right to:</p>
      <ul>
        <li>Disable cookies through your browser settings</li>
        <li>Opt out of Google Analytics tracking</li>
        <li>Manage ad personalization preferences</li>
        <li>
          Request information about data we hold (contact us via email)
        </li>
      </ul>

      <h2>Children&apos;s Privacy</h2>
      <p>
        TakeHomeHub is not directed at individuals under the age of 16. We do
        not knowingly collect information from children.
      </p>

      <h2>Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. Changes will be
        posted on this page with an updated effective date.
      </p>

      <h2>Contact</h2>
      <p>If you have questions about this Privacy Policy:</p>
      <p>
        <strong>Email:</strong> takehomehub@protonmail.com
      </p>
    </main>
  );
}
