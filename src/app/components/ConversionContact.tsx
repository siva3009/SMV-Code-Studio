import { useState, FormEvent } from 'react';
import { 
  Send, 
  MessageSquare, 
  Mail, 
  Phone, 
  CheckCircle2, 
  ArrowUpRight, 
  Sparkles 
} from 'lucide-react';

export function ConversionContact() {
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    category: 'Web Application',
    description: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.description.trim()) {
      setError('Please complete all required fields.');
      return;
    }

    setError('');
    setSubmitted(true);

    // Prepare direct email communication link
    const subject = encodeURIComponent(`TriCodeX Project Enquiry — ${formData.category} (${formData.name})`);
    const body = encodeURIComponent(
      `Hello TriCodeX Team,\n\nName: ${formData.name}\nOrganization: ${formData.organization || 'Independent'}\nEmail: ${formData.email}\nCategory: ${formData.category}\n\nProject Scope & Requirements:\n${formData.description}\n\nLooking forward to scheduling a technical consultation.`
    );
    
    // Trigger user's mail client directly
    window.location.href = `mailto:smvcreators43@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="relative py-32 px-6 bg-transparent overflow-hidden">
      <div className="relative max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#CCFF00] shadow-[0_0_10px_#CCFF00]"></span>
            <span className="text-xs font-mono tracking-widest text-[#CCFF00] uppercase">
              09 / COMMENCE COLLABORATION
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-[#F4F4F6] tracking-tight leading-tight mb-6">
            HAVE SOMETHING <br className="hidden sm:block" />
            <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-[#CCFF00]">
              WORTH BUILDING?
            </span>
          </h2>

          <p className="text-base sm:text-lg text-[#9CA3AF] font-light leading-relaxed">
            Let's turn your idea into a digital product that works, scales and stands out. Talk directly with our engineering founders.
          </p>
        </div>

        {/* Dual Column: Quick Channels & Enquiry Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Quick Channels Column (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-[#15151A] border border-white/[0.08] space-y-6">
              <span className="text-xs font-mono uppercase text-[#9CA3AF] tracking-wider block">
                Direct Communication Channels
              </span>

              {/* WhatsApp Card */}
              <a
                href="https://wa.me/917305794294"
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-[#CCFF00]/40 transition-colors flex items-center justify-between group block"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-[#9CA3AF] font-mono block">Direct WhatsApp</span>
                    <span className="text-sm font-semibold text-[#F4F4F6] group-hover:text-[#CCFF00] transition-colors font-mono">
                      +91 7305794294
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#9CA3AF] group-hover:text-[#CCFF00] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              {/* Email Card */}
              <a
                href="mailto:smvcreators43@gmail.com"
                className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-[#CCFF00]/40 transition-colors flex items-center justify-between group block"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-[#9CA3AF] font-mono block">Official Email</span>
                    <span className="text-sm font-semibold text-[#F4F4F6] group-hover:text-[#CCFF00] transition-colors font-mono">
                      smvcreators43@gmail.com
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#9CA3AF] group-hover:text-[#CCFF00] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              {/* Direct Telephone */}
              <a
                href="tel:7305794294"
                className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-[#CCFF00]/40 transition-colors flex items-center justify-between group block"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-[#9CA3AF] font-mono block">Direct Telephone</span>
                    <span className="text-sm font-semibold text-[#F4F4F6] group-hover:text-[#CCFF00] transition-colors font-mono">
                      +91 7305794294
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#9CA3AF] group-hover:text-[#CCFF00] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>

            {/* Response Time Guarantee */}
            <div className="p-6 rounded-3xl bg-[#0F0F12] border border-white/[0.06] flex items-center gap-4">
              <span className="w-2.5 h-2.5 rounded-full bg-[#CCFF00] animate-pulse shrink-0"></span>
              <p className="text-xs text-[#9CA3AF] font-mono leading-relaxed">
                Guaranteed response within 24 hours directly from our founding engineering team.
              </p>
            </div>
          </div>

          {/* Project Enquiry Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-[#15151A] border border-white/[0.08] shadow-2xl">
              <h3 className="text-2xl font-bold text-[#F4F4F6] mb-2 tracking-tight">
                Project Scope Inquiry
              </h3>
              <p className="text-xs font-mono text-[#9CA3AF] mb-8">
                Tell us about your requirements to initiate an architectural review.
              </p>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-[#09090B] border border-[#CCFF00]/40 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-[#CCFF00]/10 border border-[#CCFF00]/30 flex items-center justify-center text-[#CCFF00] mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-bold text-white">Inquiry Prepared</h4>
                  <p className="text-xs text-[#9CA3AF] font-mono leading-relaxed max-w-md mx-auto">
                    Your inquiry details were formatted and opened in your email client addressed to <strong className="text-white">smvcreators43@gmail.com</strong>.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-mono text-[#CCFF00] underline uppercase tracking-wider"
                  >
                    Submit another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {error && (
                    <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-mono">
                      {error}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-mono text-[#9CA3AF] mb-2 uppercase">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl bg-[#09090B] border border-white/[0.08] text-[#F4F4F6] placeholder-zinc-600 focus:outline-none focus:border-[#CCFF00] text-sm font-light transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-[#9CA3AF] mb-2 uppercase">
                        Business / Organization
                      </label>
                      <input
                        type="text"
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        placeholder="Company or Startup"
                        className="w-full px-4 py-3 rounded-xl bg-[#09090B] border border-white/[0.08] text-[#F4F4F6] placeholder-zinc-600 focus:outline-none focus:border-[#CCFF00] text-sm font-light transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-mono text-[#9CA3AF] mb-2 uppercase">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-[#09090B] border border-white/[0.08] text-[#F4F4F6] placeholder-zinc-600 focus:outline-none focus:border-[#CCFF00] text-sm font-light transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-[#9CA3AF] mb-2 uppercase">
                        Project Category
                      </label>
                      <select
                        value={formData.category}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#09090B] border border-white/[0.08] text-[#F4F4F6] focus:outline-none focus:border-[#CCFF00] text-sm font-light transition-colors"
                      >
                        <option value="Web Application">Web Application Development</option>
                        <option value="Custom Software / ERP">Custom Software / ERP</option>
                        <option value="E-Commerce Platform">E-Commerce Platform</option>
                        <option value="UI/UX Engineering">UI/UX Design System</option>
                        <option value="AI Integration & Vector Search">AI Integration & Automation</option>
                        <option value="Performance Optimization">Performance & Maintenance</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#9CA3AF] mb-2 uppercase">
                      Project Scope & Description *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      placeholder="Describe what you want to build, target timeline, or current technical challenges..."
                      className="w-full px-4 py-3 rounded-xl bg-[#09090B] border border-white/[0.08] text-[#F4F4F6] placeholder-zinc-600 focus:outline-none focus:border-[#CCFF00] text-sm font-light transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-[#CCFF00] text-[#09090B] font-bold text-xs tracking-wider uppercase font-mono hover:bg-[#D4FF3F] transition-colors flex items-center justify-center gap-2 shadow-lg shadow-[#CCFF00]/10"
                  >
                    <Send className="w-4 h-4" />
                    SEND INQUIRY TO FOUNDERS
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

