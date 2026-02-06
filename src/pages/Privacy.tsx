import { Reveal } from "@/components/shared/Reveal";

export default function Privacy() {
  return (
    <section className="section-padding">
      <div className="container-narrow">
        <Reveal>
          <span className="text-xs text-muted-foreground mb-2 block">Last updated: February 1, 2026</span>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-12">Privacy Policy</h1>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="space-y-8 text-sm text-muted-foreground leading-relaxed">
            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">1. Information We Collect</h2>
              <p>We collect information you provide directly—such as your name, email address, and company information when you join our waitlist or contact us. We also collect usage data including pages visited, features used, and interaction patterns to improve our platform.</p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">2. How We Use Your Information</h2>
              <p>We use your information to provide and improve our services, communicate with you about updates and features, process waitlist applications, and ensure the security of our platform. We do not sell your personal information to third parties.</p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">3. Data Storage and Security</h2>
              <p>Your data is encrypted in transit and at rest using industry-standard encryption protocols. We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, or destruction.</p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">4. Data Retention</h2>
              <p>We retain your personal information only for as long as necessary to fulfill the purposes outlined in this policy. You may request deletion of your data at any time by contacting us.</p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">5. Your Rights</h2>
              <p>You have the right to access, correct, or delete your personal information. You may also object to or restrict certain processing activities. To exercise these rights, please contact us at privacy@orimind.ai.</p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">6. Cookies</h2>
              <p>We use essential cookies to ensure basic functionality and analytics cookies to understand how visitors interact with our website. You can control cookie preferences through your browser settings.</p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">7. Changes to This Policy</h2>
              <p>We may update this privacy policy from time to time. We will notify you of any material changes by posting the updated policy on this page with a revised "last updated" date.</p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">8. Contact</h2>
              <p>For questions about this privacy policy, contact us at privacy@orimind.ai.</p>
            </section>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
