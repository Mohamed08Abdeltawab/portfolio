import { profile, profileImage } from "../../data/portfolio";
import { Button } from "../shared/Button";
import { SocialLinks } from "../shared/SocialLinks";

export default function Hero() {
  return (
    <section id="hero" className="py-space-2xl md:py-space-3xl">
      <div className="grid grid-cols-1 items-center gap-space-xl lg:grid-cols-12 lg:gap-space-2xl">
        <div className="flex flex-col items-start gap-space-md lg:col-span-7">
          <div className="inline-flex items-center gap-2 rounded-full bg-surface-container-low px-3 py-1.5 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-tertiary-container opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-tertiary" />
            </span>
            <span className="font-body text-label-sm font-semibold tracking-wide text-on-surface-variant">
              {profile.title}
            </span>
          </div>
          <div className="flex flex-col gap-space-xs">
            <span className="font-headline text-headline-sm font-bold text-secondary">
              Hello, I'm {profile.name}
            </span>
            <h1 className="font-headline text-display-hero-mobile text-on-surface md:text-display-hero">
              Back-end <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-primary-container via-secondary-container to-tertiary-fixed bg-clip-text text-transparent">
                .NET Developer
              </span>
            </h1>
          </div>
          <p className="max-w-2xl font-body text-body-lg text-on-surface-variant">
            {profile.summary}
          </p>
          <div className="flex flex-wrap items-center gap-space-sm pt-space-xs">
            <Button href="#featured-projects" icon="arrow_forward">
              View Projects
            </Button>
            <Button href="#contact" icon="mail" secondary>
              Contact Me
            </Button>
          </div>
          <div className="flex flex-wrap items-center gap-space-xs pt-space-xs">
            <span className="mr-2 font-body text-label-sm uppercase tracking-wider text-outline">
              Profiles //
            </span>
            <SocialLinks />
          </div>
        </div>
        <div className="flex justify-center lg:col-span-5 lg:justify-end">
          <div className="group relative">
            <div className="absolute -inset-2 rounded-[2.5rem] bg-gradient-to-tr from-primary-container via-secondary-container to-tertiary-fixed opacity-30 blur-2xl transition duration-500 group-hover:opacity-50" />
            <div className="relative rounded-[2.2rem] bg-gradient-to-br from-primary-container via-secondary-container to-tertiary-fixed p-1 shadow-xl">
              <div className="overflow-hidden rounded-[2rem] bg-surface-container-lowest p-2">
                <img
                  className="aspect-square w-72 rounded-[1.8rem] object-cover sm:w-80 md:w-96"
                  src={profileImage}
                  alt={`${profile.name} - ${profile.title}`}
                />
              </div>
            </div>
            <div className="absolute -bottom-4 left-1/2 flex w-max -translate-x-1/2 items-center gap-2 rounded-full bg-surface-container-lowest/95 px-4 py-2 shadow-[var(--shadow-hero)] backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-primary-container" />
              <span className="font-body text-label-sm font-semibold text-on-surface">
                C# • ASP.NET Core • SQL Server
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
