import { useState } from "react";
import { profile } from "../../data/portfolio";
import { Icon } from "../shared/Icon";

const initialForm = {
  fullName: "",
  emailAddr: "",
  subjectLine: "",
  messageBody: "",
};

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState({ type: "idle", message: "" });

  function handleChange(event) {
    const { id, value } = event.target;
    setForm((currentForm) => ({ ...currentForm, [id]: value }));
    if (status.type !== "idle") {
      setStatus({ type: "idle", message: "" });
    }
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
      <div className="grid grid-cols-1 gap-space-xl lg:grid-cols-12">
        <div className="flex flex-col justify-between gap-space-lg lg:col-span-5">
          <div className="flex flex-col gap-space-sm">
            <span className="section-kicker">// GET IN TOUCH</span>
            <h2 className="font-headline text-headline-lg leading-tight">
              Let&apos;s connect.
            </h2>
            <p className="font-body text-body-lg text-on-surface-variant">
              I am open to connecting about back-end .NET development, RESTful
              APIs, and database-driven applications.
            </p>
            <div className="flex flex-col gap-space-sm pt-space-md">
              <ContactDetail icon="mail" label="Direct Email">
                <a
                  href={`mailto:${profile.email}`}
                  className="hover:text-primary"
                >
                  {profile.email}
                </a>
              </ContactDetail>
              <ContactDetail icon="phone" label="Phone">
                <a href={`tel:${profile.phone}`} className="hover:text-primary">
                  {profile.phone}
                </a>
              </ContactDetail>
              <ContactDetail icon="location_on" label="Location">
                {profile.location}
              </ContactDetail>
            </div>
          </div>
        </div>
        <div className="lg:col-span-7">
          <form
            className="card contact-card flex flex-col gap-space-md rounded-2xl p-space-lg md:p-space-xl"
            onSubmit={handleSubmit}
            aria-label="Contact form"
          >
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
                className="font-body text-label-sm font-semibold"
                htmlFor="messageBody"
              >
                Project Details &amp; Objectives *
              </label>
              <textarea
                className="field-control resize-none rounded-lg bg-surface-container-low p-4 font-body text-body-md outline-none focus:ring-2 focus:ring-primary-container"
                id="messageBody"
                placeholder="Tell me about your architectural requirements, stack, timeline..."
                required
                rows="4"
                value={form.messageBody}
                onChange={handleChange}
              />
            </div>
            {status.message && (
              <p
                className={`font-body text-body-sm ${
                  status.type === "success" ? "text-tertiary" : "text-primary"
                }`}
                role={status.type === "error" ? "alert" : "status"}
                aria-live="polite"
              >
                {status.message}
              </p>
            )}
            <button
              className="gradient-button mt-space-xs w-full font-bold disabled:cursor-not-allowed disabled:opacity-70"
              type="submit"
              disabled={status.type === "loading"}
            >
              {status.type === "loading" ? "Sending..." : "Send Message"}{" "}
              {status.type !== "loading" && (
                <Icon className="text-body-md">send</Icon>
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
      <label className="font-body text-label-sm font-semibold" htmlFor={id}>
        {label} *
      </label>
      <input
        className="field-control h-12 rounded-lg bg-surface-container-low px-4 font-body text-body-md outline-none focus:ring-2 focus:ring-primary-container"
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
function ContactDetail({ icon, label, children }) {
  return (
    <div className="flex items-center gap-space-sm">
      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-fixed text-on-primary-fixed">
        <Icon>{icon}</Icon>
      </span>
      <div>
        <span className="block font-body text-label-sm text-outline">
          {label}
        </span>
        <strong className="font-body text-body-md">{children}</strong>
      </div>
    </div>
  );
}
