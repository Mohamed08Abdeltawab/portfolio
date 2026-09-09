import { useState } from "react";
import { profile } from "../../data/portfolio";
import { Icon } from "../shared/Icon";
export default function Contact() {
  const [sent, setSent] = useState(false);
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
            onSubmit={(event) => {
              event.preventDefault();
              setSent(true);
            }}
            aria-label="Contact form"
          >
            <div className="grid grid-cols-1 gap-space-md sm:grid-cols-2">
              <Field id="fullName" label="Full Name" placeholder="Jane Doe" />
              <Field
                id="emailAddr"
                label="Email Address"
                placeholder="jane@company.com"
                type="email"
              />
            </div>
            <Field
              id="subjectLine"
              label="Subject"
              placeholder="How can we connect?"
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
              />
            </div>
            <button
              className="gradient-button mt-space-xs w-full font-bold"
              type="submit"
            >
              {sent ? "Message Sent Successfully!" : "Send Message"}{" "}
              {!sent && <Icon className="text-body-md">send</Icon>}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
function Field({ id, label, placeholder, type = "text" }) {
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
