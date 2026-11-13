import type { Metadata } from "next";
import Link from "next/link";

const sections = [
  { id: "about", title: "About these terms" },
  { id: "accounts", title: "Accounts and eligibility" },
  { id: "role", title: "What 99 Crib does and does not do" },
  { id: "listings", title: "Listings and verification" },
  { id: "boost", title: "Premium boost" },
  { id: "fees", title: "Fees and the Total Package" },
  { id: "escrow", title: "Payments and escrow" },
  { id: "refunds", title: "Cancellations and refunds" },
  { id: "wallet", title: 'Wallet and "pay small small"' },
  { id: "split", title: "Splitting a booking" },
  { id: "roommates", title: "Roommate matching and requests" },
  { id: "conduct", title: "Rules of conduct" },
  { id: "content", title: "Your content" },
  { id: "thirdparty", title: "Third-party services" },
  { id: "liability", title: "Disclaimers and liability" },
  { id: "suspension", title: "Suspension and ending your account" },
  { id: "changes", title: "Changes to these terms" },
  { id: "law", title: "Governing law and disputes" },
  { id: "general", title: "General" },
  { id: "contact", title: "Contact us" },
];

const description =
  "The rules for using 99 Crib: listings, verification, escrow payments, the wallet, refunds, roommate matching and your responsibilities as a student, landlord or agent.";

export const metadata: Metadata = {
  title: "Terms of Use",
  description,
  alternates: { canonical: "https://99crib.com/terms" },
  openGraph: {
    type: "website",
    title: "Terms of Use | 99 Crib",
    description,
    url: "https://99crib.com/terms",
  },
};

export default function TermsPage() {
  return (
    <div>
      <section className="bg-linear-to-br from-brand to-[#1a35d4] px-5 py-20 text-white">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-sm font-medium">
            Legal
          </div>
          <h1 className="mb-5 text-4xl leading-tight font-bold lg:text-5xl">Terms of Use</h1>
          <p className="text-lg leading-relaxed text-white/75">
            The rules for using 99 Crib as a student, landlord or agent, so everyone knows what to expect.
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
              <li>Listings are free. Every listing is verified in person before it goes live.</li>
              <li>Pay for rent only inside the app. Your payment is held in escrow until you and 99 Crib confirm move-in.</li>
              <li>Refunds are available before move-in, not after.</li>
              <li>Your wallet is a savings wallet, not a loan, and it does not reserve a room.</li>
              <li>Never pay a landlord or agent outside the app.</li>
            </ul>
          </div>

          <h2 id="about">1. About these terms</h2>
          <p>These Terms of Use (&quot;Terms&quot;) are an agreement between you and 99 Crib Properties Ltd. (&quot;99 Crib&quot;, &quot;we&quot;, &quot;us&quot;). They apply when you use the 99 Crib website, mobile app, in-app messaging, AI assistant and related services (together, the &quot;Services&quot;).</p>
          <p>By creating an account or using the Services, you agree to these Terms and to our <Link href="/privacy">Privacy Policy</Link>. If you do not agree, please do not use the Services.</p>
          <p>In these Terms, a <strong>Student</strong> is a person using 99 Crib to find or pay for accommodation. A <strong>Landlord</strong> is a landlord or agent who lists a space (the app treats both as the same role). A <strong>Listing</strong> is a space offered on 99 Crib. The <strong>Rent Fee</strong> is the yearly rent for a Listing. The <strong>Total Package</strong> is the full amount a Student pays, described in section 6.</p>

          <h2 id="accounts">2. Accounts and eligibility</h2>
          <ul>
            <li>You must be at least 18 years old and able to enter a binding agreement.</li>
            <li>You must give accurate information and keep it up to date. This includes your university, which decides which listings and roommates you see.</li>
            <li>You may have one account. Keep your password and one-time passcodes private. You are responsible for what happens under your account.</li>
            <li>We may ask you to verify your identity or student status, and Landlords to verify the business and the property. We may refuse or remove an account that cannot be verified.</li>
          </ul>

          <h2 id="role">3. What 99 Crib does and does not do</h2>
          <p>99 Crib is a platform that connects Students with Landlords, verifies Listings in person, and protects payments through escrow. We are not the landlord, the agent or the owner of any property, and we are not a party to the tenancy between a Student and a Landlord.</p>
          <p>We inspect each Listing before it goes live, but an inspection is a check of what is shown on the day. It is not a survey, a structural report or a check of legal title. Students should still read the tenancy terms and inspect the space themselves before paying.</p>

          <h2 id="listings">4. Listings and verification</h2>
          <ul>
            <li><strong>Listing is free.</strong> We do not charge to list a space.</li>
            <li><strong>Rent range:</strong> rent must be between ₦300,000 and ₦5,000,000 per year. We do not accept a Listing below ₦300,000 per year.</li>
            <li><strong>Full address:</strong> you must give the street address of the property, not just the university or area.</li>
            <li><strong>Accurate content:</strong> the room type, price, photos, videos and description must be true and current. You must have the right to let the property.</li>
            <li><strong>Verification:</strong> every Listing must pass an in-person verification by our team before it goes live. You agree to give our team access at a time arranged with you.</li>
            <li><strong>Failed verification:</strong> if a Listing fails verification, it is deleted from the platform. Any boost fee paid for that Listing is not refunded.</li>
            <li><strong>Room types:</strong> Self-Contain, Single Room, Shared Room, Hostel, Mini Flat and 2 Bed.</li>
          </ul>

          <h2 id="boost">5. Premium boost</h2>
          <p>A Landlord may pay to boost a Listing so that it appears in the Premium carousel on the home screen for students at the relevant university. A boost costs ₦5,000 for one week or ₦15,000 for one month, per Listing. Boosts are bought for each Listing separately. A boost improves visibility, but we do not promise a number of views, enquiries or bookings. Boost fees are not refundable once the boost has started, and are not refunded if the Listing fails verification.</p>

          <h2 id="fees">6. Fees and the Total Package</h2>
          <p><strong>Students.</strong> You see the Rent Fee and the Total Package. The Total Package is the Rent Fee plus the caution fee, the agreement fee and a 5% service fee. The Total Package is the amount you pay through the app, and it is shown before you confirm.</p>
          <p><strong>Landlords.</strong> We charge a commission of 10% of the rent on each rent paid through 99 Crib. The commission is taken from the amount released to you.</p>
          <p>All amounts are in Nigerian naira. If we change our fees, the change applies to new bookings and boosts, and does not change a booking that is already paid.</p>

          <h2 id="escrow">7. Payments and escrow</h2>
          <ul>
            <li><strong>Pay in the app only.</strong> All rent payments must be made through 99 Crib. Never pay a Landlord, agent or anyone else outside the app, by transfer, cash or any other way. If you do, we cannot protect you, and we may suspend the accounts involved.</li>
            <li><strong>Payment partner.</strong> Payments, wallet savings and escrow funds are processed through our licensed payment partner, Rubies Payment.</li>
            <li><strong>How escrow works.</strong> When a Student pays, the money is held and is not sent to the Landlord. The funds are released to the Landlord only after the Student and 99 Crib have both confirmed move-in. 99 Crib then authorises the release.</li>
            <li><strong>Timing.</strong> Release happens after both confirmations are received. Processing times depend on the payment partner and banks.</li>
            <li><strong>Move-in confirmation.</strong> Students should confirm move-in only when the space matches the Listing. Confirming move-in affects refunds, see section 8.</li>
          </ul>

          <h2 id="refunds">8. Cancellations and refunds</h2>
          <ul>
            <li>Refunds are available only <strong>before move-in</strong>. Once move-in is confirmed, payments are not refundable through the app.</li>
            <li>To ask for a refund, contact support with your booking reference. We will tell you what will be returned and how long it takes. The refund terms shown in the app at the time of booking apply.</li>
            <li>Refunds go back to the original payment method or to your wallet, and may take time because of the payment partner and banks.</li>
            <li>If something is seriously wrong on move-in day, such as the property not matching the Listing, tell us before you confirm move-in so we can investigate.</li>
          </ul>

          <h2 id="wallet">9. Wallet and &quot;pay small small&quot;</h2>
          <ul>
            <li>The wallet lets a Student save towards rent in small amounts, so you can pay when you are ready. It is a <strong>savings feature</strong>. It is not a loan or credit, it pays no interest, and you never owe 99 Crib money for using it.</li>
            <li>Saving in your wallet does <strong>not reserve</strong> a room. A space is secured only when a booking payment is completed.</li>
            <li>Wallet funds are held with our licensed payment partner, Rubies Payment. The wallet is not a bank account.</li>
            <li>If you withdraw wallet savings, you receive <strong>95%</strong> of the amount withdrawn.</li>
            <li>You can use your wallet balance towards the Total Package when you book.</li>
          </ul>

          <h2 id="split">10. Splitting a booking</h2>
          <p>For Self-Contain, Single Room, Mini Flat and 2 Bed Listings, two Students can split one booking equally. The first Student pays their half, and the space is held for 48 hours while the second Student pays theirs. If the second Student does not pay in time, the first Student&#x27;s payment is returned in full. A split booking is one booking with one escrow, and both Students are covered by these Terms.</p>

          <h2 id="roommates">11. Roommate matching and accommodation requests</h2>
          <ul>
            <li>Roommate matching is optional. You see other Students at your own university and can message them. You choose what appears on your profile.</li>
            <li>Details such as religion or ethnicity are optional and are handled as described in our <Link href="/privacy#sensitive">Privacy Policy</Link>. You must not use them to harass or discriminate against anyone.</li>
            <li>We do not vet roommates and we do not guarantee any match. Decide whom to live with carefully, and meet in safe, public places first.</li>
            <li>An accommodation request tells us your budget (₦300,000 to ₦5,000,000 per year), preferred area and room type so we can suggest matching Listings. It does not guarantee a Listing.</li>
          </ul>

          <h2 id="conduct">12. Rules of conduct</h2>
          <p>You must not:</p>
          <ul>
            <li>post a Listing that is fake, misleading, duplicated or that you have no right to let;</li>
            <li>ask for or make payment outside the app, or try to avoid our fees;</li>
            <li>use someone else&#x27;s identity, student status or documents;</li>
            <li>harass, threaten, abuse or discriminate against anyone;</li>
            <li>share another person&#x27;s personal data without permission, or collect data from the Services by automated means;</li>
            <li>upload malicious code, interfere with the Services, or try to access accounts or systems you are not allowed to access;</li>
            <li>use the AI assistant to get around these rules, or share passwords or one-time passcodes with it;</li>
            <li>break any Nigerian law.</li>
          </ul>

          <h2 id="content">13. Your content</h2>
          <p>You keep ownership of the photos, videos, reels, text and other content you upload (&quot;Your Content&quot;). You give 99 Crib a non-exclusive, worldwide, royalty-free licence to host, display, adapt for format and share Your Content as needed to run and promote the Services. You confirm that you have the rights to Your Content and that it does not infringe anyone&#x27;s rights. We may remove content that breaks these Terms.</p>

          <h2 id="thirdparty">14. Third-party services</h2>
          <p>The Services rely on third parties such as our payment partner, identity verification providers, app stores and messaging providers. Their own terms apply to their services. We are not responsible for outages or acts of third parties outside our reasonable control, but we will work with them to resolve problems affecting your payments.</p>

          <h2 id="liability">15. Disclaimers and liability</h2>
          <ul>
            <li>The Services are provided &quot;as is&quot; and &quot;as available&quot;. We work hard to keep them accurate and running, but we do not promise they will be uninterrupted or error-free.</li>
            <li>Landlords are responsible for their Listings and for the condition of their property. Students are responsible for the choices they make about where and with whom to live. We are not responsible for disputes between Students and Landlords, or between roommates, beyond the support and escrow protections described in these Terms.</li>
            <li>To the extent allowed by law, 99 Crib is not liable for indirect or consequential loss, such as lost opportunity or lost income. Our total liability to you for any claim connected with the Services is limited to the fees you paid to 99 Crib in the 12 months before the claim arose.</li>
            <li>Nothing in these Terms excludes or limits liability that cannot be excluded under Nigerian law, including liability for fraud, for death or personal injury caused by negligence, or your rights as a consumer.</li>
            <li>You agree to compensate 99 Crib for losses caused by your breach of these Terms or by content you post that you had no right to post.</li>
          </ul>

          <h2 id="suspension">16. Suspension and ending your account</h2>
          <p>You may close your account at any time. We may suspend or end an account, remove a Listing, or hold a payment if we reasonably believe these Terms have been broken, there is a risk of fraud or harm, or we are required to by law. Where we can, we will tell you why. Bookings already paid continue under these Terms and the escrow process until they are completed or refunded. Sections that by their nature should continue after your account ends will continue.</p>

          <h2 id="changes">17. Changes to these terms</h2>
          <p>We may update these Terms. We will change the &quot;last updated&quot; date above and, for important changes, notify you in the app or by email before they take effect. If you keep using the Services after the change, you accept the new Terms. If you do not agree, you can close your account.</p>

          <h2 id="law">18. Governing law and disputes</h2>
          <p>These Terms are governed by the laws of the Federal Republic of Nigeria. If you have a problem, please contact us first so we can try to resolve it. If we cannot resolve it within 30 days, either of us may refer the dispute to arbitration in Lagos under the Arbitration and Mediation Act 2023, before a single arbitrator. Either of us may ask the courts of Lagos State for urgent relief. Nothing in this section limits any right you have as a consumer under Nigerian law, including the right to complain to the relevant consumer protection authority.</p>

          <h2 id="general">19. General</h2>
          <ul>
            <li><strong>Whole agreement:</strong> these Terms and the Privacy Policy are the whole agreement between you and 99 Crib about the Services.</li>
            <li><strong>If part is invalid:</strong> if a part of these Terms cannot be enforced, the rest still applies.</li>
            <li><strong>No waiver:</strong> if we do not enforce a right straight away, we have not given it up.</li>
            <li><strong>Transfer:</strong> you may not transfer your account or rights to anyone else. We may transfer ours to a successor to our business.</li>
            <li><strong>Events beyond our control:</strong> neither of us is responsible for delay caused by events outside our reasonable control.</li>
            <li><strong>Notices:</strong> we may send notices to the email address or phone number on your account, or in the app.</li>
          </ul>

          <h2 id="contact">20. Contact us</h2>
          <div className="legal-contact">
            <p><strong>99 Crib Properties Ltd.</strong></p>
            <p>Email: <a href="mailto:support@99crib.com">support@99crib.com</a></p>
            <p>Phone: +234 (0) 906 091 5430</p>
            <p>Office: Lagos, Nigeria</p>
          </div>
          <p className="mt-5">You can also reach us through the <Link href="/contact">contact page</Link>.</p>
        </article>
      </div>
    </div>
  );
}
