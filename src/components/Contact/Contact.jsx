import { useState } from "react";
import { profile } from "../../data/portfolio";
import { Icon } from "../shared/Icon";
import { SectionHeading } from "../shared/SectionHeading";
import { SocialLinks } from "../shared/SocialLinks";

const initialForm = {
  fullName: "",
  emailAddr: "",
  subjectLine: "",
  messageBody: "",
};

const QUICK_TOPICS = [
  "Back-End .NET Developer Role",
  "RESTful Web API Architecture",
  "Enterprise Desktop / POS System",
  "Technical Collaboration",
];

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState({ type: "idle", message: "" });
  const [copiedField, setCopiedField] = useState(null);

  function handleChange(event) {
    const { id, value } = event.target;
    setForm((currentForm) => ({ ...currentForm, [id]: value }));
    if (status.type !== "idle") {
      setStatus({ type: "idle", message: "" });
    }
  }

  function handleSelectTopic(topic) {
    setForm((currentForm) => ({ ...currentForm, subjectLine: topic }));
    if (status.type !== "idle") {
      setStatus({ type: "idle", message: "" });
    }
  }

  function handleCopy(text, key) {
    navigator.clipboard?.writeText(text);
    setCopiedField(key);
    setTimeout(() => setCopiedField(null), 2000);
  }

  function handleSubmit(event) {
    event.preventDefault();

    const values = Object.fromEntries(
      Object.entries(form).map(([key, value]) => [key, value.trim()]),
    );
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (Object.values(values).some((value) => !value)) {
      setStatus({
        type: "error",
        message: "Please complete all fields before sending your message.",
      });
      return;
    }

    if (!emailPattern.test(values.emailAddr)) {
      setStatus({
        type: "error",
        message: "Please enter a valid email address.",
      });
      return;
    }

    const subject = encodeURIComponent(values.subjectLine);
    const body = encodeURIComponent(
      `Name: ${values.fullName}\nEmail: ${values.emailAddr}\n\n${values.messageBody}`,
    );

    setForm(initialForm);
    setStatus({
      type: "success",
      message: "Your email app is opening with your message ready to send.",
    });
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  }

  return (
    <section id="contact" className="py-space-2xl md:py-space-3xl">
      <SectionHeading
        index="SYS.09"
        eyebrow="GET IN TOUCH"
        title="Let's Build Reliable Software Together."
        description="Open to connecting regarding Back-End .NET engineering roles, RESTful API architecture, and database-driven software opportunities."
      />

      <div className="grid grid-cols-1 gap-space-lg lg:grid-cols-12">
        {/* Left: Direct Contact Channels */}
        <div className="flex flex-col justify-between gap-space-md lg:col-span-5">
          <div className="card flex flex-col gap-space-md p-space-lg md:p-space-xl">
            <div className="flex items-center justify-between border-b border-surface-container-highest pb-3">
              <span className="font-mono text-label-sm font-semibold uppercase tracking-wider text-primary">
                DIRECT CHANNELS
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-md bg-tertiary/10 px-2.5 py-1 font-mono text-[11px] font-semibold text-tertiary">
                <span className="h-2 w-2 rounded-full bg-tertiary" />
                Available Now
              </span>
            </div>

            <div className="flex flex-col gap-3">
              <ContactDetail
                icon="mail"
                label="Direct Email"
                value={profile.email}
                href={`mailto:${profile.email}`}
                copied={copiedField === "email"}
                onCopy={() => handleCopy(profile.email, "email")}
              />
              <ContactDetail
                icon="phone"
                label="Phone / WhatsApp"
                value={profile.phone}
                href={`tel:${profile.phone}`}
                copied={copiedField === "phone"}
                onCopy={() => handleCopy(profile.phone, "phone")}
              />
              <ContactDetail
                icon="location_on"
                label="Base Location"
                value={`${profile.location} (Remote & On-Site)`}
              />
            </div>

            <div className="border-t border-surface-container-highest pt-space-md">
              <span className="mb-2.5 block font-mono text-[11px] uppercase tracking-wider text-outline">
                Engineering Profiles
              </span>
              <SocialLinks />
            </div>
          </div>
        </div>

        {/* Right: Interactive Message Form */}
        <div className="lg:col-span-7">
          <form
            className="card contact-card flex flex-col gap-space-md p-space-lg md:p-space-xl"
            onSubmit={handleSubmit}
            aria-label="Contact form"
            noValidate
          >
            <div className="flex flex-col gap-2 border-b border-surface-container-highest pb-3">
              <span className="font-mono text-[11px] uppercase tracking-wider text-outline">
                Quick Subject Presets
              </span>
              <div className="flex flex-wrap gap-1.5">
                {QUICK_TOPICS.map((topic) => {
                  const selected = form.subjectLine === topic;
                  return (
                    <button
                      key={topic}
                      type="button"
                      onClick={() => handleSelectTopic(topic)}
                      className={`rounded-lg border px-2.5 py-1 font-mono text-[11px] font-medium transition-all ${
                        selected
                          ? "border-primary bg-primary text-white"
                          : "border-surface-container-highest bg-surface-container-low text-on-surface-variant hover:border-primary/40 hover:text-on-surface"
                      }`}
                    >
                      {topic}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-space-md sm:grid-cols-2">
              <Field
                id="fullName"
                label="Full Name"
                placeholder="Jane Doe"
                value={form.fullName}
                onChange={handleChange}
              />
              <Field
                id="emailAddr"
                label="Email Address"
                placeholder="jane@company.com"
                type="email"
                value={form.emailAddr}
                onChange={handleChange}
              />
            </div>

            <Field
              id="subjectLine"
              label="Subject"
              placeholder="How can we connect?"
              value={form.subjectLine}
              onChange={handleChange}
            />

            <div className="flex flex-col gap-1.5">
              <label
                className="font-body text-label-sm font-semibold text-on-surface"
                htmlFor="messageBody"
              >
                Project Details &amp; Objectives *
              </label>
              <textarea
                className="field-control resize-none rounded-xl p-4 font-body text-body-md outline-none"
                id="messageBody"
                placeholder="Tell me about your architectural requirements, stack, timeline..."
                required
                rows="4"
                value={form.messageBody}
                onChange={handleChange}
              />
            </div>

            {status.message && (
              <div
                className={`flex items-center gap-2 rounded-xl border px-4 py-3 font-body text-body-sm font-medium ${
                  status.type === "success"
                    ? "border-tertiary/30 bg-tertiary/10 text-tertiary"
                    : "border-amber-500/30 bg-amber-500/10 text-amber-500"
                }`}
                role={status.type === "error" ? "alert" : "status"}
                aria-live="polite"
              >
                <Icon className="text-[18px]">
                  {status.type === "success" ? "check_circle" : "info"}
                </Icon>
                <span>{status.message}</span>
              </div>
            )}

            <button
              id="contact-submit-btn"
              className="primary-button mt-1 w-full font-bold disabled:cursor-not-allowed disabled:opacity-70"
              type="submit"
              disabled={status.type === "loading"}
            >
              <span>
                {status.type === "loading" ? "Sending..." : "Send Message"}
              </span>
              {status.type !== "loading" && (
                <Icon className="text-[18px]">send</Icon>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({ id, label, placeholder, type = "text", value, onChange }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        className="font-body text-label-sm font-semibold text-on-surface"
        htmlFor={id}
      >
        {label} *
      </label>
      <input
        className="field-control h-12 rounded-xl px-4 font-body text-body-md outline-none"
        id={id}
        placeholder={placeholder}
        required
        type={type}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

function ContactDetail({ icon, label, value, href, onCopy, copied }) {
  return (
    <div className="flex items-center justify-between gap-3 rounded-xl border border-surface-container-highest bg-surface-container-low/65 p-3.5">
      <div className="flex min-w-0 items-center gap-3">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-surface-container-highest bg-surface-container-lowest text-primary">
          <Icon className="text-[20px]">{icon}</Icon>
        </span>
        <div className="min-w-0">
          <span className="block font-mono text-[11px] uppercase tracking-wider text-outline">
            {label}
          </span>
          {href ? (
            <a
              href={href}
              className="block truncate font-body text-body-md font-semibold text-on-surface hover:text-primary"
            >
              {value}
            </a>
          ) : (
            <strong className="block truncate font-body text-body-md font-semibold text-on-surface">
              {value}
            </strong>
          )}
        </div>
      </div>

      {onCopy && (
        <button
          type="button"
          onClick={onCopy}
          className="inline-flex shrink-0 items-center gap-1 rounded-lg border border-surface-container-highest bg-surface-container-lowest px-2.5 py-1.5 font-mono text-[11px] font-medium text-on-surface-variant transition-colors hover:border-primary/40 hover:text-primary"
          title={`Copy ${label}`}
        >
          <Icon className="text-[14px]">
            {copied ? "check" : "content_copy"}
          </Icon>
          <span>{copied ? "Copied" : "Copy"}</span>
        </button>
      )}
    </div>
  );
}
