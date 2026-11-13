import type { Metadata } from "next";
import Link from "next/link";

const sections = [
  { id: "who", title: "Who we are" },
  { id: "collect", title: "Information we collect" },
  { id: "use", title: "How we use your information" },
  { id: "sensitive", title: "Sensitive information and roommate matching" },
  { id: "share", title: "Who we share it with" },
  { id: "payments", title: "Payments and your wallet" },
  { id: "transfers", title: "Transfers outside Nigeria" },
  { id: "retention", title: "How long we keep it" },
  { id: "rights", title: "Your rights" },
  { id: "security", title: "Security" },
  { id: "cookies", title: "Cookies and similar technologies" },
  { id: "assistant", title: "Our AI assistant" },
  { id: "age", title: "Age requirement" },
  { id: "changes", title: "Changes to this policy" },
  { id: "contact", title: "Contact and complaints" },
];

const uses = [
  ["Create and run your account", "Sign-up, log-in, showing listings and roommates at your university only", "Contract"],
  ["Verify users and listings", "Identity checks, academic checks, in-person property inspections", "Contract, legitimate interests (preventing fraud), consent where required"],
  ["Process payments and escrow", "Rent payments, wallet savings, refunds, releasing funds to landlords after move-in is confirmed", "Contract, legal obligation"],
  ["Roommate matching", "Showing your profile to students at your university and letting them message you", "Consent"],
  ["Keep the platform safe", "Detecting fake listings, scams, off-platform payment requests and abuse", "Legitimate interests, legal obligation"],
  ["Support and communication", "Answering questions, sending booking updates and service notices", "Contract, legitimate interests"],
  ["Improve our service", "Fixing bugs, understanding which features help students", "Legitimate interests"],
  ["Marketing", "Updates about new universities or features", "Consent. You can opt out at any time."],
  ["Meet legal duties", "Tax and accounting records, responding to lawful requests from authorities", "Legal obligation"],
];

const description =
  "How 99 Crib collects, uses, shares and protects your personal data under the Nigeria Data Protection Act 2023, and the choices and rights you have.";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description,
  alternates: { canonical: "https://99crib.com/privacy" },
  openGraph: {
    type: "website",
    title: "Privacy Policy | 99 Crib",
    description,
    url: "https://99crib.com/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <div>
      <section className="bg-linear-to-br from-brand to-[#1a35d4] px-5 py-20 text-white">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-sm font-medium">
            Legal
          </div>
          <h1 className="mb-5 text-4xl leading-tight font-bold lg:text-5xl">Privacy Policy</h1>
          <p className="text-lg leading-relaxed text-white/75">
            What we collect, why we collect it, who sees it, and how you stay in control. Written in plain language.
          </p>
        </div>
      </section>

      <div className="legal-wrap">
        <aside className="legal-toc" aria-label="Contents">
          <details className="legal-toc-details" open>
            <summary className="legal-toc-title">On this page</summary>
            <ol>
              {sections.map((section) => (
                <li key={section.id}>
                  <a href={"#" + section.id}>{section.title}</a>
                </li>
              ))}
            </ol>
          </details>
        </aside>

        <article className="legal">
          <p className="legal-meta">Last updated: 9 November 2026</p>

          <div className="legal-summary">
            <h2>The short version</h2>
            <ul>
              <li>We collect only what we need to verify users, show you listings at your university, process payments and keep everyone safe.</li>
              <li>We never sell your personal data.</li>
              <li>Card and bank details are handled by our licensed payment partner, Rubies Payment. We do not store full card numbers.</li>
              <li>Roommate details such as religion or ethnicity are optional, and you decide whether to share them.</li>
              <li>You can ask to see, correct or delete your data at any time by emailing <a href="mailto:support@99crib.com">support@99crib.com</a>.</li>
            </ul>
          </div>

          <h2 id="who">1. Who we are</h2>
          <p>99 Crib Properties Ltd. (&quot;99 Crib&quot;, &quot;we&quot;, &quot;us&quot;) runs the 99 Crib website and mobile app, a student accommodation platform in Nigeria. For the personal data described in this policy, we are the data controller under the Nigeria Data Protection Act 2023 (the &quot;NDPA&quot;).</p>
          <p>This policy covers our website at 99crib.com, our iOS and Android apps, our in-app messaging, our AI assistant and any support channels we run. It applies to students, landlords and agents, and visitors.</p>

          <h2 id="collect">2. Information we collect</h2>
          <h3>Information you give us</h3>
          <ul>
            <li><strong>Account details:</strong> your name, email address, phone number, password (stored in protected form), role (student or landlord/agent), university, campus, and for students, department and level.</li>
            <li><strong>Verification details:</strong> identity and academic checks, for example a National Identification Number (NIN) check carried out through an authorised identity verification provider, and for landlords and agents, business name and the documents needed to confirm that you may list a property.</li>
            <li><strong>Listing content:</strong> property address, rent, room type, description, photos and videos (including reels), and amenities.</li>
            <li><strong>Roommate profile:</strong> the preferences and profile fields you choose to add so that other students at your university can find you.</li>
            <li><strong>Requests and messages:</strong> accommodation requests, inspection bookings, in-app messages, reviews, support tickets and messages you send through our contact form.</li>
          </ul>
          <h3>Information created when you use 99 Crib</h3>
          <ul>
            <li><strong>Booking and payment records:</strong> what you booked, amounts, dates, payment and escrow status, wallet balance and wallet history, refunds and payouts.</li>
            <li><strong>Device and usage data:</strong> IP address, device model, operating system, app version, language, crash reports and how you move through the app.</li>
            <li><strong>Location:</strong> only if you allow it, for example to show distance to campus. You can turn this off in your device settings.</li>
          </ul>
          <h3>Information from others</h3>
          <ul>
            <li>Results from identity verification providers.</li>
            <li>Confirmation of payments, wallet activity and refunds from Rubies Payment.</li>
            <li>Information about a property from the landlord or agent, and the findings of our verification team after an inspection.</li>
          </ul>

          <h2 id="use">3. How we use your information</h2>
          <p>We use personal data only when we have a lawful basis under the NDPA. The table shows what we do and why.</p>
          <div className="legal-table-wrap">
            <table>
              <thead>
                <tr><th>Purpose</th><th>Examples</th><th>Lawful basis</th></tr>
              </thead>
              <tbody>
                {uses.map(([purpose, examples, basis]) => (
                  <tr key={purpose}><td>{purpose}</td><td>{examples}</td><td>{basis}</td></tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 id="sensitive">4. Sensitive information and roommate matching</h2>
          <p>The NDPA treats some information as sensitive, including details about religious belief and ethnic origin. Roommate matching may let you add or filter by details such as religion or ethnicity.</p>
          <ul>
            <li>These fields are <strong>optional</strong>. You can use roommate matching without filling them in.</li>
            <li>We ask for your <strong>explicit consent</strong> before you add them, and you can remove them at any time in your profile.</li>
            <li>We never use them to decide whether you can list, book or pay, and we never show them to landlords or agents.</li>
            <li>We do not ask you to type this kind of information into our AI assistant or contact form.</li>
          </ul>

          <h2 id="share">5. Who we share it with</h2>
          <p>We do not sell your personal data. We share it only as follows:</p>
          <ul>
            <li><strong>Landlords and agents:</strong> your name, university and booking details once you request an inspection or book, so they can complete the tenancy.</li>
            <li><strong>Other students:</strong> only the roommate profile fields you choose to make visible, and only to students at your own university.</li>
            <li><strong>Our verification team:</strong> the information needed to inspect a property and confirm move-in.</li>
            <li><strong>Rubies Payment:</strong> the details needed to process payments, wallet savings, refunds and payouts.</li>
            <li><strong>Identity verification providers:</strong> the details needed to carry out the checks you start.</li>
            <li><strong>Service providers:</strong> hosting, messaging and SMS, email, customer support and analytics tools that work under our instructions and under written data protection terms.</li>
            <li><strong>Authorities and advisers:</strong> where the law requires it, to protect people from harm or fraud, or to get legal or professional advice.</li>
            <li><strong>A buyer or investor:</strong> if 99 Crib is involved in a merger, acquisition or similar deal. We will tell you and the same protections will continue to apply.</li>
          </ul>

          <h2 id="payments">6. Payments and your wallet</h2>
          <p>All rent payments and wallet savings are processed by our licensed payment partner, Rubies Payment. Card numbers, bank account details and similar payment credentials are entered into and held by the payment partner. 99 Crib sees the transaction records we need to run your booking, such as the amount, date, status and reference. Rubies Payment handles your information under its own privacy notice, which we encourage you to read.</p>

          <h2 id="transfers">7. Transfers outside Nigeria</h2>
          <p>Some of our service providers store or process data outside Nigeria. When your data leaves the country, we make sure it is protected to the standard the NDPA requires, for example by using providers in countries with adequate protection or by putting approved contractual safeguards in place.</p>

          <h2 id="retention">8. How long we keep it</h2>
          <ul>
            <li><strong>Account data:</strong> for as long as your account is open, and for a short period afterwards so we can handle disputes and complaints.</li>
            <li><strong>Payment and booking records:</strong> for as long as tax, accounting and financial record-keeping laws require.</li>
            <li><strong>Listings that fail verification:</strong> removed from the platform. We keep a limited record to prevent repeat fraud.</li>
            <li><strong>Support messages and contact form enquiries:</strong> for as long as needed to resolve your request and handle follow-up questions.</li>
          </ul>
          <p>When we no longer need data, we delete it or make it anonymous.</p>

          <h2 id="rights">9. Your rights</h2>
          <p>Under the NDPA you have the right to:</p>
          <ul>
            <li>be told how your data is used (this policy does that);</li>
            <li>access the personal data we hold about you and get a copy;</li>
            <li>correct data that is wrong or incomplete;</li>
            <li>ask us to delete your data, where we no longer have a reason to keep it;</li>
            <li>restrict or object to certain uses, including direct marketing;</li>
            <li>receive your data in a portable format;</li>
            <li>withdraw your consent at any time, without affecting what we did before you withdrew it;</li>
            <li>not be subject to a decision based only on automated processing that has a significant effect on you.</li>
          </ul>
          <p>To use any of these rights, email <a href="mailto:support@99crib.com">support@99crib.com</a>. We may need to confirm your identity first. We aim to respond within one month. There is no charge unless a request is clearly unfounded or excessive.</p>

          <h2 id="security">10. Security</h2>
          <p>We protect personal data with encryption in transit, access controls limited to staff who need the data, secure storage and regular reviews. Payments are handled by a licensed payment partner. No system is completely secure, so please use a strong password, never share your one-time passcodes, and tell us at once if you think your account has been misused. If a breach is likely to put you at risk, we will notify the Nigeria Data Protection Commission and affected users within the time the NDPA requires.</p>

          <h2 id="cookies">11. Cookies and similar technologies</h2>
          <p>Our website uses a small number of cookies and similar technologies:</p>
          <ul>
            <li><strong>Essential:</strong> a session cookie that protects our contact form against forged submissions. It is deleted when you close your browser.</li>
            <li><strong>Chat assistant:</strong> on pages where the AI assistant appears, the chat widget may store a session identifier so your conversation continues as you browse.</li>
          </ul>
          <p>We do not currently use advertising cookies. If we add analytics or marketing cookies in future, we will ask for your consent first and update this section. You can block or delete cookies in your browser settings, but the contact form may then not work.</p>

          <h2 id="assistant">12. Our AI assistant</h2>
          <p>Our assistant answers questions about using 99 Crib. Conversations are processed by an AI system and may be reviewed, with personal details masked where possible, to improve answers and to help our support team. Please do not share passwords, one-time passcodes, card numbers or your NIN in the chat. The assistant cannot move money or change your account. For anything involving a payment, refund or complaint it will pass you to a member of our team.</p>

          <h2 id="age">13. Age requirement</h2>
          <p>99 Crib is for people aged 18 and over. We do not knowingly collect personal data from anyone under 18. If you believe a child has given us personal data, contact us and we will delete it.</p>

          <h2 id="changes">14. Changes to this policy</h2>
          <p>We may update this policy as our service or the law changes. We will change the &quot;last updated&quot; date above, and for important changes we will tell you in the app or by email before they take effect.</p>

          <h2 id="contact">15. Contact and complaints</h2>
          <div className="legal-contact">
            <p><strong>99 Crib Properties Ltd.</strong></p>
            <p>Privacy enquiries: <a href="mailto:support@99crib.com">support@99crib.com</a></p>
            <p>Phone: +234 (0) 906 091 5430</p>
            <p>Office: Lagos, Nigeria</p>
          </div>
          <p className="mt-5">If you are not happy with how we handled your data, please tell us first so we can put it right. You also have the right to complain to the Nigeria Data Protection Commission (NDPC) at <a href="https://ndpc.gov.ng" target="_blank" rel="noopener noreferrer">ndpc.gov.ng</a>.</p>
          <p>Read our <Link href="/terms">Terms of Use</Link> for the rules that apply when you use 99 Crib.</p>
        </article>
      </div>
    </div>
  );
}
