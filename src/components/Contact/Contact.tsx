import React, { useState, forwardRef, useImperativeHandle } from 'react';
import { Mail, Github, Linkedin, MapPin, Copy, Check, Send, AlertCircle, Info, ExternalLink } from 'lucide-react';
import confetti from 'canvas-confetti';
import { SITE_CONFIG } from '../../data/config';
import { ContactFormData } from '../../types';

export interface ContactRef {
  setEnquiryAndScroll: (enquiryType: string) => void;
}

export const Contact = forwardRef<ContactRef>((_, ref) => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    companyName: '',
    country: '',
    enquiryType: 'Freelance Project',
    projectBudget: 'Discuss the budget',
    projectTimeline: 'Flexible',
    referenceUrl: '',
    message: '',
  });

  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error' | 'pending-keys'>('idle');
  const [statusMessage, setStatusMessage] = useState('');
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  useImperativeHandle(ref, () => ({
    setEnquiryAndScroll: (enquiryType: string) => {
      setFormData(prev => ({ ...prev, enquiryType }));
      const section = document.getElementById('contact');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    },
  }));

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(SITE_CONFIG.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
      setCopied(false);
    }
  };

  const validate = (): boolean => {
    const errors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      errors.fullName = 'Full name is required.';
    }

    if (!formData.email.trim()) {
      errors.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please provide a valid email address.';
    }

    if (!formData.message.trim()) {
      errors.message = 'Please provide a brief project message or inquiry details.';
    } else if (formData.message.trim().length < 10) {
      errors.message = 'Message must be at least 10 characters.';
    }

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('loading');
    setStatusMessage('Transmitting message...');

    // Check if real backend endpoint or email service is configured
    const apiUrl = SITE_CONFIG.contactService.apiUrl;
    const emailJsKey = SITE_CONFIG.contactService.emailJsPublicKey;

    if (!apiUrl && !emailJsKey) {
      // As explicitly requested in prompt:
      // "If credentials are unavailable, clearly identify the integration as pending. Do not simulate successful delivery."
      setStatus('pending-keys');
      setStatusMessage(
        'Backend service credentials are pending configuration in .env (VITE_CONTACT_API_URL or VITE_EMAILJS_PUBLIC_KEY). Please use the direct "Email Me" button or copy arjuntaneja204@gmail.com directly.'
      );
      return;
    }

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          recipient: SITE_CONFIG.email,
          timestamp: new Date().toISOString(),
        }),
      });

      if (!response.ok) {
        throw new Error(`Server returned ${response.status}: Failed to deliver message`);
      }

      setStatus('success');
      setStatusMessage('Thank you! Your message has been sent successfully. Arjun will respond within 24–48 hours.');
      confetti({ particleCount: 80, spread: 60, origin: { y: 0.8 } });
      setFormData({
        fullName: '',
        email: '',
        companyName: '',
        country: '',
        enquiryType: 'Freelance Project',
        projectBudget: 'Discuss the budget',
        projectTimeline: 'Flexible',
        referenceUrl: '',
        message: '',
      });
    } catch (err: unknown) {
      setStatus('error');
      setStatusMessage(
        err instanceof Error ? err.message : 'Failed to send message. Please reach out directly to arjuntaneja204@gmail.com.'
      );
    }
  };

  return (
    <section id="contact" className="py-28 px-6 sm:px-8 bg-midnight relative border-t border-slateNavy/80">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col mb-16">
          <div className="telemetry-tag mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-electricBlue" />
            <span>09 // CONNECT & ENQUIRIES</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-iceWhite tracking-tight mb-4">
            LET'S CONNECT. <br className="hidden sm:inline" />
            LET'S BUILD SOMETHING GREAT.
          </h2>
          <p className="text-steelBlue max-w-2xl text-base sm:text-lg font-light leading-relaxed">
            "Whether you have a freelance project, a job opportunity, a collaboration idea or simply want to connect, I'd love to hear from you."
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Coordinates & Status */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="glass-panel rounded-2xl p-8 border border-steelBlue/20 shadow-electric-card">
              <h3 className="font-display text-2xl font-bold text-iceWhite mb-2">
                Direct Contact Points
              </h3>
              <p className="text-xs text-mutedGrey leading-relaxed mb-6 font-light">
                Feel free to email directly or submit your project requirements through the interactive client enquiry terminal.
              </p>

              {/* Status Badge */}
              {SITE_CONFIG.freelance.available && (
                <div className="mb-6 p-3 rounded-xl bg-slateNavy border border-electricBlue/30 flex items-center gap-3">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-electricBlue opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-electricBlue dot-glow" />
                  </span>
                  <span className="font-mono text-xs text-iceWhite">
                    {SITE_CONFIG.freelance.statusText}
                  </span>
                </div>
              )}

              {/* Coordinate Items */}
              <div className="space-y-4 font-mono text-xs">
                <div className="p-3.5 rounded-xl bg-midnight/80 border border-steelBlue/15 flex items-center justify-between">
                  <div className="flex items-center gap-3 text-steelBlue">
                    <Mail className="w-4 h-4 text-electricBlue" />
                    <span className="text-iceWhite select-all">{SITE_CONFIG.email}</span>
                  </div>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="p-1.5 rounded-lg bg-slateNavy hover:bg-slateNavy-light text-iceWhite transition-colors"
                    title="Copy Email Address"
                    aria-label="Copy email address to clipboard"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>

                <div className="p-3.5 rounded-xl bg-midnight/80 border border-steelBlue/15 flex items-center gap-3 text-steelBlue">
                  <MapPin className="w-4 h-4 text-electricBlue" />
                  <span className="text-iceWhite">{SITE_CONFIG.location}</span>
                </div>

                <a
                  href={SITE_CONFIG.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-midnight/80 border border-steelBlue/15 flex items-center justify-between text-steelBlue hover:border-electricBlue transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <Github className="w-4 h-4 text-electricBlue" />
                    <span className="text-iceWhite group-hover:text-electricBlue">github.com/arjunn-git</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-mutedGrey" />
                </a>

                {SITE_CONFIG.social.linkedin && (
                  <a
                    href={SITE_CONFIG.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3.5 rounded-xl bg-midnight/80 border border-steelBlue/15 flex items-center justify-between text-steelBlue hover:border-electricBlue transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <Linkedin className="w-4 h-4 text-electricBlue" />
                      <span className="text-iceWhite group-hover:text-electricBlue">LinkedIn Profile</span>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-mutedGrey" />
                  </a>
                )}
              </div>

              {/* Action Buttons */}
              <div className="mt-8 pt-6 border-t border-slateNavy/80 flex flex-wrap gap-3">
                <a
                  href={`mailto:${SITE_CONFIG.email}?subject=Project%20Enquiry%20from%20Portfolio`}
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-semibold tracking-wider bg-electricBlue hover:bg-electricBlue-hover text-white shadow-electric-glow transition-all"
                >
                  <Mail className="w-4 h-4" />
                  <span>EMAIL ME DIRECTLY</span>
                </a>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-mono bg-slateNavy hover:bg-slateNavy-light border border-steelBlue/20 text-iceWhite transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-green-400" />
                      <span className="text-green-400">COPIED!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-electricBlue" />
                      <span>COPY EMAIL</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: High-Converting Client Enquiry Terminal */}
          <div className="lg:col-span-7">
            <div className="glass-panel rounded-2xl p-8 sm:p-10 border border-steelBlue/20 shadow-electric-card">
              <div className="mb-6">
                <h3 className="font-display text-2xl font-bold text-iceWhite mb-1">
                  Client Project Enquiry Form
                </h3>
                <p className="text-xs text-steelBlue font-light">
                  Fill in your project requirements for an estimate and architectural consultation.
                </p>
              </div>

              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                {/* Full Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="fullName" className="text-xs font-mono text-steelBlue flex items-center justify-between">
                      <span>FULL NAME <span className="text-electricBlue">*</span></span>
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="Jane Doe"
                      aria-invalid={!!fieldErrors.fullName}
                      aria-describedby={fieldErrors.fullName ? 'fullName-error' : undefined}
                      required
                      className={`w-full px-4 py-3 rounded-xl bg-midnight border font-sans text-sm text-iceWhite placeholder-mutedGrey/50 focus:border-electricBlue focus:ring-1 focus:ring-electricBlue transition-all ${
                        fieldErrors.fullName ? 'border-red-500' : 'border-steelBlue/25'
                      }`}
                    />
                    {fieldErrors.fullName && (
                      <span id="fullName-error" className="text-[11px] text-red-400 font-mono">
                        {fieldErrors.fullName}
                      </span>
                    )}
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="text-xs font-mono text-steelBlue flex items-center justify-between">
                      <span>EMAIL ADDRESS <span className="text-electricBlue">*</span></span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="jane@company.com"
                      aria-invalid={!!fieldErrors.email}
                      aria-describedby={fieldErrors.email ? 'email-error' : undefined}
                      required
                      className={`w-full px-4 py-3 rounded-xl bg-midnight border font-sans text-sm text-iceWhite placeholder-mutedGrey/50 focus:border-electricBlue focus:ring-1 focus:ring-electricBlue transition-all ${
                        fieldErrors.email ? 'border-red-500' : 'border-steelBlue/25'
                      }`}
                    />
                    {fieldErrors.email && (
                      <span id="email-error" className="text-[11px] text-red-400 font-mono">
                        {fieldErrors.email}
                      </span>
                    )}
                  </div>
                </div>

                {/* Company Name & Country */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="companyName" className="text-xs font-mono text-steelBlue">
                      COMPANY / BRAND (OPTIONAL)
                    </label>
                    <input
                      type="text"
                      id="companyName"
                      name="companyName"
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      placeholder="Acme Studios"
                      className="w-full px-4 py-3 rounded-xl bg-midnight border border-steelBlue/25 font-sans text-sm text-iceWhite placeholder-mutedGrey/50 focus:border-electricBlue focus:ring-1 focus:ring-electricBlue transition-all"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="country" className="text-xs font-mono text-steelBlue">
                      COUNTRY / REGION (OPTIONAL)
                    </label>
                    <input
                      type="text"
                      id="country"
                      name="country"
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      placeholder="United States / India / UK"
                      className="w-full px-4 py-3 rounded-xl bg-midnight border border-steelBlue/25 font-sans text-sm text-iceWhite placeholder-mutedGrey/50 focus:border-electricBlue focus:ring-1 focus:ring-electricBlue transition-all"
                    />
                  </div>
                </div>

                {/* Enquiry Type & Budget */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="enquiryType" className="text-xs font-mono text-steelBlue">
                      ENQUIRY TYPE <span className="text-electricBlue">*</span>
                    </label>
                    <select
                      id="enquiryType"
                      name="enquiryType"
                      value={formData.enquiryType}
                      onChange={(e) => setFormData({ ...formData, enquiryType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-midnight border border-steelBlue/25 font-sans text-sm text-iceWhite focus:border-electricBlue focus:ring-1 focus:ring-electricBlue transition-all"
                    >
                      <option value="Freelance Project">Freelance Project</option>
                      <option value="Website Design">Website Design</option>
                      <option value="Frontend Development">Frontend Development</option>
                      <option value="React Development">React Development</option>
                      <option value="WordPress Development">WordPress Development</option>
                      <option value="E-commerce Development">E-commerce Development</option>
                      <option value="SaaS / Web Application">SaaS / Web Application</option>
                      <option value="Website Maintenance">Website Maintenance</option>
                      <option value="Job Opportunity">Job Opportunity</option>
                      <option value="Collaboration">Collaboration</option>
                      <option value="General Enquiry">General Enquiry</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="projectBudget" className="text-xs font-mono text-steelBlue">
                      ESTIMATED BUDGET
                    </label>
                    <select
                      id="projectBudget"
                      name="projectBudget"
                      value={formData.projectBudget}
                      onChange={(e) => setFormData({ ...formData, projectBudget: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-midnight border border-steelBlue/25 font-sans text-sm text-iceWhite focus:border-electricBlue focus:ring-1 focus:ring-electricBlue transition-all"
                    >
                      <option value="Under $100">Under $100</option>
                      <option value="$100–$300">$100–$300</option>
                      <option value="$300–$500">$300–$500</option>
                      <option value="$500–$1,000">$500–$1,000</option>
                      <option value="$1,000+">$1,000+</option>
                      <option value="Discuss the budget">Discuss the budget</option>
                    </select>
                  </div>
                </div>

                {/* Timeline & Reference URL */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="projectTimeline" className="text-xs font-mono text-steelBlue">
                      PROJECT TIMELINE
                    </label>
                    <select
                      id="projectTimeline"
                      name="projectTimeline"
                      value={formData.projectTimeline}
                      onChange={(e) => setFormData({ ...formData, projectTimeline: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-midnight border border-steelBlue/25 font-sans text-sm text-iceWhite focus:border-electricBlue focus:ring-1 focus:ring-electricBlue transition-all"
                    >
                      <option value="ASAP">ASAP</option>
                      <option value="Within 1–2 weeks">Within 1–2 weeks</option>
                      <option value="Within one month">Within one month</option>
                      <option value="Flexible">Flexible</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="referenceUrl" className="text-xs font-mono text-steelBlue">
                      REFERENCE URL / FIGMA (OPTIONAL)
                    </label>
                    <input
                      type="url"
                      id="referenceUrl"
                      name="referenceUrl"
                      value={formData.referenceUrl}
                      onChange={(e) => setFormData({ ...formData, referenceUrl: e.target.value })}
                      placeholder="https://example.com or Figma link"
                      className="w-full px-4 py-3 rounded-xl bg-midnight border border-steelBlue/25 font-sans text-sm text-iceWhite placeholder-mutedGrey/50 focus:border-electricBlue focus:ring-1 focus:ring-electricBlue transition-all"
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-xs font-mono text-steelBlue flex items-center justify-between">
                    <span>PROJECT DETAILS / MESSAGE <span className="text-electricBlue">*</span></span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your project goals, scope, audience, or questions..."
                    aria-invalid={!!fieldErrors.message}
                    aria-describedby={fieldErrors.message ? 'message-error' : undefined}
                    required
                    className={`w-full px-4 py-3 rounded-xl bg-midnight border font-sans text-sm text-iceWhite placeholder-mutedGrey/50 focus:border-electricBlue focus:ring-1 focus:ring-electricBlue transition-all resize-y ${
                      fieldErrors.message ? 'border-red-500' : 'border-steelBlue/25'
                    }`}
                  />
                  {fieldErrors.message && (
                    <span id="message-error" className="text-[11px] text-red-400 font-mono">
                      {fieldErrors.message}
                    </span>
                  )}
                </div>

                {/* Status Notice Banner */}
                {status === 'pending-keys' && (
                  <div className="p-4 rounded-xl bg-yellow-500/10 border border-yellow-500/30 flex items-start gap-3 text-xs text-yellow-200">
                    <Info className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold">Backend Integration Pending: </span>
                      <span>{statusMessage}</span>
                    </div>
                  </div>
                )}

                {status === 'success' && (
                  <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/30 flex items-start gap-3 text-xs text-green-300">
                    <Check className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                    <span>{statusMessage}</span>
                  </div>
                )}

                {status === 'error' && (
                  <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 flex items-start gap-3 text-xs text-red-300">
                    <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                    <span>{statusMessage}</span>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full inline-flex items-center justify-center gap-2.5 py-4 px-8 rounded-xl font-mono text-xs font-bold tracking-widest uppercase text-white bg-electricBlue hover:bg-electricBlue-hover disabled:opacity-50 transition-all duration-300 shadow-electric-glow"
                >
                  {status === 'loading' ? (
                    <span>TRANSMITTING...</span>
                  ) : (
                    <>
                      <span>SEND MESSAGE</span>
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

Contact.displayName = 'Contact';
