"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Check,
  Clock,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
} from "lucide-react";

const WHATSAPP_NUMBER = "917302724292";
const EMAIL_ADDRESS = "shivshaktiwebservices@gmail.com";
const PHONE_NUMBERS = ["9105642658", "7302724292"];

const services = [
  "Web Development",
  "Digital Growth",
  "AI & Automation",
  "Custom Solutions",
  "Website Redesign",
  "Not Sure Yet",
];

const viewport = { once: true, margin: "-80px" };

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

const inputClass =
  "w-full rounded-xl border border-[var(--foreground)]/40 bg-[var(--background)] px-4 py-3.5 text-[13px] text-[var(--foreground)] outline-none placeholder:text-[var(--muted)] transition-all duration-300 hover:border-[var(--foreground)]/70 focus:border-[var(--foreground)] focus:ring-2 focus:ring-[var(--foreground)]/10";

const labelClass =
  "mb-2 block text-[11px] font-semibold text-[var(--foreground)]";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();



    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = String(formData.get("name") || "");
    const business = String(formData.get("business") || "");
    const email = String(formData.get("email") || "");
    const phone = String(formData.get("phone") || "");
    const service = String(formData.get("service") || "");
    const message = String(formData.get("message") || "");

    try {
      setIsSubmitting(true);
      setSubmissionStatus("idle");

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          business,
          email,
          phone,
          service,
          message,
        }),
      });

      if (!response.ok) {
        throw new Error("Unable to send enquiry.");
      }

      form.reset();
      setSubmissionStatus("success");
    } catch (error) {
      console.error("Submission error:", error);
      setSubmissionStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28"
    >
      <div className="pointer-events-none absolute left-1/2 top-[25%] h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-[var(--accent)] opacity-[0.04] blur-[140px]" />

      <div className="relative mx-auto max-w-[1180px]">
        {/* SECTION HEADING */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          variants={containerVariants}
          className="mb-10"
        >
          <motion.div
            variants={itemVariants}
            className="mb-5 flex items-center gap-3"
          >
            <span className="h-px w-8 bg-[var(--accent)]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[var(--accent)]">
              Let's Work Together
            </span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="max-w-[800px] text-[38px] font-extrabold leading-[1.05] tracking-[-0.055em] text-[var(--foreground)] sm:text-[50px] lg:text-[62px]"
          >
            Have an <span className="text-[var(--accent)]">idea?</span>
            <span className="block">
              Let's <span className="text-[var(--accent)]">build it.</span>
            </span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="mt-5 max-w-[570px] text-[14px] leading-7 text-[var(--muted)]"
          >
            Tell us about your business, your goals, and what you want to
            create. We'll help you find the right digital solution.
          </motion.p>
        </motion.div>

        {/* GLOWING CONTACT PANEL */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.75 }}
          className="group relative rounded-[28px] p-[1.5px] sm:rounded-[34px]"
        >
          <div className="pointer-events-none absolute -inset-[2px] rounded-[30px] bg-gradient-to-br from-[#ff4f81] via-[#ff8a3d] to-[#24a8ff] opacity-40 blur-[7px] transition-all duration-500 group-hover:opacity-70 sm:rounded-[36px]" />

          <div className="relative rounded-[28px] bg-gradient-to-br from-[#ff4f81] via-[#ff8a3d] to-[#24a8ff] p-[1.5px] sm:rounded-[34px]">
            <div className="relative overflow-hidden rounded-[26px] bg-[var(--background)] sm:rounded-[32px]">
              <div className="pointer-events-none absolute -right-32 -top-32 h-[380px] w-[380px] rounded-full bg-[var(--accent)] opacity-[0.045] blur-[120px]" />

              <div className="relative grid lg:grid-cols-[0.8fr_1.2fr]">
                {/* LEFT: CONTACT INFORMATION */}
                <div className="border-b border-[var(--foreground)]/15 p-6 sm:p-9 lg:border-b-0 lg:border-r lg:p-11 xl:p-12">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[var(--foreground)]/20 bg-[var(--surface)]">
                    <Send size={19} className="text-[var(--accent)]" />
                  </div>

                  <h3 className="mt-7 text-[29px] font-extrabold leading-[1.08] tracking-[-0.045em] text-[var(--foreground)] sm:text-[35px]">
                    Let's talk about
                    <span className="block text-[var(--accent)]">
                      your project.
                    </span>
                  </h3>

                  <p className="mt-5 max-w-[410px] text-[13px] leading-7 text-[var(--muted)]">
                    From business websites to AI-powered solutions, we're here
                    to turn your ideas into something useful, modern, and built
                    around your goals.
                  </p>

                  <div className="mt-8 space-y-4 border-y border-[var(--foreground)]/15 py-6">
                    <div className="flex items-start gap-3">
                      <MapPin size={17} className="mt-0.5 shrink-0 text-[var(--accent)]" />
                      <div>
                        <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--foreground)]">
                          Office Location
                        </p>
                        <address className="mt-1 not-italic text-[11px] font-bold leading-5 text-[var(--muted)]">
                          Near Mantra Apartment, Integrated Industrial Estate, Nehru Colony, BHEL Township, Salempur Mahdood, Haridwar, Uttarakhand 249403
                        </address>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Clock size={17} className="mt-0.5 shrink-0 text-[var(--accent)]" />
                      <div>
                        <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--foreground)]">
                          Office Hours
                        </p>
                        <p className="mt-1 text-[11px] leading-5 text-[var(--muted)]">10 AM – 6 PM</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-9 space-y-5">
                    {[
                      {
                        title: "Share your idea",
                        text: "Tell us what your business needs.",
                      },
                      {
                        title: "Discuss the solution",
                        text: "We'll explore the right approach together.",
                      },
                      {
                        title: "Start building",
                        text: "We move forward once the plan is clear.",
                      },
                    ].map((item) => (
                      <div key={item.title} className="flex items-start gap-3">
                        <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[var(--accent)]/30 bg-[var(--accent)]/10">
                          <Check size={13} className="text-[var(--accent)]" />
                        </span>

                        <div>
                          <p className="text-[12px] font-bold text-[var(--foreground)]">
                            {item.title}
                          </p>
                          <p className="mt-1 text-[11px] leading-5 text-[var(--muted)]">
                            {item.text}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-10 border-t border-[var(--foreground)]/15 pt-6">
                    <p className="text-[10px] font-bold uppercase tracking-[0.17em] text-[var(--muted)]">
                      Prefer to reach us directly?
                    </p>

                    <div className="mt-4 flex flex-col gap-3">
                      {PHONE_NUMBERS.map((phoneNumber) => (
                        <a
                          key={phoneNumber}
                          href={`tel:+91${phoneNumber}`}
                          className="inline-flex w-fit items-center gap-2 text-[13px] font-semibold text-[var(--foreground)] transition-colors duration-300 hover:text-[var(--accent)]"
                        >
                          <Phone size={14} />
                          +91 {phoneNumber}
                        </a>
                      ))}

                      <div className="flex flex-wrap gap-3">
                        <a
                          href={`mailto:${EMAIL_ADDRESS}`}
                          className="inline-flex items-center gap-2 rounded-full border border-[var(--foreground)]/35 bg-[var(--background)] px-4 py-3 text-[11px] font-semibold text-[var(--foreground)] transition-all duration-300 hover:border-[var(--foreground)] hover:bg-[var(--surface)]"
                        >
                          <Mail size={14} />
                          Email Us
                        </a>

                        <a
                          href={`https://wa.me/${WHATSAPP_NUMBER}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-full border border-[var(--foreground)]/35 bg-[var(--background)] px-4 py-3 text-[11px] font-semibold text-[var(--foreground)] transition-all duration-300 hover:border-[var(--foreground)] hover:bg-[var(--surface)]"
                        >
                          <MessageCircle size={14} />
                          WhatsApp
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* RIGHT: ENQUIRY FORM */}
                <div className="p-6 sm:p-9 lg:p-11 xl:p-12">
                  <div className="mb-7">
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--accent)]">
                      Project Enquiry
                    </p>

                    <h3 className="mt-2 text-[23px] font-extrabold tracking-[-0.04em] text-[var(--foreground)] sm:text-[27px]">
                      Tell us what you{" "}
                      <span className="text-[var(--accent)]">need.</span>
                    </h3>

                    <p className="mt-2 text-[12px] leading-6 text-[var(--muted)]">
                      Fill in the details below to start a conversation.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="contact-name"
                          className={labelClass}
                        >
                          Your Name{" "}
                          <span className="text-[var(--accent)]">*</span>
                        </label>

                        <input
                          id="contact-name"
                          name="name"
                          type="text"
                          autoComplete="name"
                          required
                          placeholder="Your full name"
                          className={inputClass}
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="contact-business"
                          className={labelClass}
                        >
                          Business / Company
                        </label>

                        <input
                          id="contact-business"
                          name="business"
                          type="text"
                          autoComplete="organization"
                          required
                          placeholder="Your business name"
                          className={inputClass}
                        />
                      </div>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="contact-email"
                          className={labelClass}
                        >
                          Email Address{" "}
                          <span className="text-[var(--accent)]">*</span>
                        </label>

                        <input
                          id="contact-email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          required
                          placeholder="you@example.com"
                          className={inputClass}
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="contact-phone"
                          className={labelClass}
                        >
                          Phone Number
                        </label>

                        <input
                          id="contact-phone"
                          name="phone"
                          type="tel"
                          autoComplete="tel"
                          required
                          placeholder="+91 98765 43210"
                          className={inputClass}
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="contact-service"
                        className={labelClass}
                      >
                        What Do You Need?{" "}
                        <span className="text-[var(--accent)]">*</span>
                      </label>

                      <select
                        id="contact-service"
                        name="service"
                        required
                        defaultValue=""
                        className={`${inputClass} cursor-pointer`}
                      >
                        <option value="" disabled>
                          Select a service
                        </option>

                        {services.map((service) => (
                          <option key={service} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="contact-message"
                        className={labelClass}
                      >
                        Tell Us About Your Project{" "}
                        <span className="text-[var(--accent)]">*</span>
                      </label>

                      <textarea
                        id="contact-message"
                        name="message"
                        required
                        rows={5}
                        placeholder="What would you like to build? Tell us about your idea, requirements, or goals..."
                        className={`${inputClass} resize-y leading-6`}
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group/submit flex w-full cursor-pointer items-center justify-center gap-3 rounded-xl bg-[var(--foreground)] px-5 py-4 text-[12px] font-bold text-[var(--background)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_35px_rgba(0,0,0,0.15)] disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {isSubmitting
                        ? "Submitting..."
                        : submissionStatus === "success"
                          ? "Sent Successfully"
                          : "Send Enquiry"}

                      <ArrowUpRight
                        size={16}
                        className="transition-transform duration-300 group-hover/submit:-translate-y-0.5 group-hover/submit:translate-x-0.5"
                      />
                    </button>

                    {submissionStatus === "success" && (
                      <p className="text-center text-[10px] font-semibold leading-5 text-green-600">
                        Your enquiry has been sent successfully. We&apos;ll get back to you soon.
                      </p>
                    )}

                    {submissionStatus === "error" && (
                      <p className="text-center text-[10px] font-semibold leading-5 text-red-600">
                        We couldn&apos;t send your enquiry. Please try again or contact us on WhatsApp.
                      </p>
                    )}

                    {submissionStatus === "idle" && (
                      <p className="text-center text-[10px] leading-5 text-[var(--muted)]">
                        Your enquiry will be sent to us by email.
                      </p>
                    )}

                    <p className="text-center text-[11px] font-semibold leading-5 text-[var(--accent)]">
                      Please fill this contact form to get the information very
                      fast.
                    </p>
                  </form>
                </div>
              </div>

              <div className="border-t border-[var(--foreground)]/15 p-6 sm:p-9 lg:p-11 xl:p-12">
                <div className="mb-5 flex items-center gap-3">
                  <MapPin size={18} className="text-[var(--accent)]" />
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--accent)]">Visit Our Office</p>
                    <p className="mt-1 text-[13px] font-semibold text-[var(--foreground)]">Shiv Shakti Multi Service, Haridwar</p>
                  </div>
                </div>

                <div className="overflow-hidden rounded-2xl border border-[var(--foreground)]/15">
                  <iframe
                    title="Shiv Shakti Multi Service office location"
                    src="https://www.google.com/maps?q=Shiv+Shakti+Multi+Service,+Plot+No.+1407,+Salempur+Mahdood,+Haridwar,+Uttarakhand+249403&output=embed"
                    className="h-[300px] w-full border-0 sm:h-[360px]"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
