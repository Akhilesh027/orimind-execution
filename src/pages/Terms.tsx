import { Reveal } from "@/components/shared/Reveal";

export default function Terms() {
  return (
    <section className="section-padding">
      <div className="container-narrow">
        <Reveal>
          <span className="text-xs text-muted-foreground mb-2 block">Last updated: February 1, 2026</span>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-12">Terms of Service</h1>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="space-y-8 text-sm text-muted-foreground leading-relaxed">
            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">1. Acceptance of Terms</h2>
              <p>By accessing or using OriMind's services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.</p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">2. Description of Service</h2>
              <p>OriMind provides an autonomous AI execution platform that enables users to create digital deliverables through natural language commands. The platform orchestrates multiple AI agents to produce outputs including but not limited to websites, content, and applications.</p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">3. User Accounts</h2>
              <p>You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use.</p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">4. Intellectual Property</h2>
              <p>Content generated through OriMind's platform is owned by you, the user. OriMind retains rights to the underlying technology, algorithms, and platform infrastructure. You may not reverse-engineer, decompile, or attempt to extract the source code of our services.</p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">5. Acceptable Use</h2>
              <p>You agree not to use OriMind's services to generate content that is illegal, harmful, threatening, abusive, defamatory, or otherwise objectionable. We reserve the right to suspend accounts that violate these guidelines.</p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">6. Limitation of Liability</h2>
              <p>OriMind shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the service. Our total liability shall not exceed the amount paid by you in the twelve months preceding the claim.</p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">7. Modifications</h2>
              <p>We reserve the right to modify these terms at any time. Continued use of the service after changes constitutes acceptance of the modified terms.</p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">8. Governing Law</h2>
              <p>These terms shall be governed by and construed in accordance with applicable laws. Any disputes shall be resolved through binding arbitration.</p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">9. Contact</h2>
              <p>For questions regarding these terms, contact us at legal@orimind.ai.</p>
            </section>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
