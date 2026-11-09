import { useState } from "react";
import { profile, profileImage } from "../../data/portfolio";
import { Button } from "../shared/Button";
import { Icon } from "../shared/Icon";
import { SocialLinks } from "../shared/SocialLinks";

const API_ENDPOINTS = [
  {
    method: "POST",
    path: "/api/Enrollments",
    role: "Role: Student | Admin",
    sqlTime: "6.4ms",
    status: "201 Created",
    sql: `SELECT [c].[CourseId], [c].[Code], [c].[Status], [c].[Title]
FROM [Courses] AS [c] WHERE [c].[CourseId] = @__dto_CourseId_0;
INSERT INTO [Enrollments] ([CourseId], [StudentId], [Status], [EnrolledAt])
VALUES (@p0, @p1, N'Active', GETUTCDATE());`,
    response: `{
  "enrollmentId": 104,
  "studentId": 12,
  "courseCode": "CS-402",
  "courseTitle": "ASP.NET Core Web APIs & EF Core",
  "status": "Active",
  "uowCommitted": true
}`,
  },
  {
    method: "GET",
    path: "/api/Courses?level=Advanced",
    role: "Public / JWT Bearer",
    sqlTime: "4.1ms",
    status: "200 OK",
    sql: `SELECT [c].[CourseId], [c].[Code], [c].[Title], [c].[DurationHours],
       [i].[FullName] AS [InstructorName]
FROM [Courses] AS [c]
INNER JOIN [Instructors] AS [i] ON [c].[InstructorId] = [i].[InstructorId]
WHERE [c].[Status] = N'Published' ORDER BY [c].[PublishedAt] DESC;`,
    response: `{
  "totalCount": 2,
  "items": [
    { "code": "NET-301", "title": "Clean Architecture & SOLID in C#", "hours": 36 },
    { "code": "SQL-205", "title": "T-SQL & Relational Schema Design", "hours": 28 }
  ]
}`,
  },
  {
    method: "POST",
    path: "/api/Account/login",
    role: "Auth Controller",
    sqlTime: "8.2ms",
    status: "200 OK",
    sql: `SELECT TOP(1) [u].[UserId], [u].[Email], [u].[Role], [u].[PasswordHash]
FROM [Users] AS [u]
WHERE [u].[Email] = @__request_UsernameOrEmail_0 AND [u].[IsActive] = 1;
UPDATE [Users] SET [RefreshTokenExpiresAt] = @p0, [RefreshTokenHash] = @p1
WHERE [UserId] = @p2;`,
    response: `{
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJtb2hhbWVk...",
  "refreshToken": "bQUVjacciFBiBcoHq1yWq/NXjatWNqONmTifIS5nZy0xWSp+s6Q9...",
  "role": "Admin",
  "expiresIn": 3600
}`,
  },
];

const CSHARP_PIPELINE = `// Program.cs — ASP.NET Core Web API Architecture
var builder = WebApplication.CreateBuilder(args);

builder.Services.AddDbContext<TrainingCenterDbContext>(opt =>
    opt.UseSqlServer(builder.Configuration.GetConnectionString("Default")));

builder.Services.AddScoped<IUnitOfWork, UnitOfWork>();
builder.Services.AddAutoMapper(typeof(MappingProfile).Assembly);

builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddJwtBearer(options => options.TokenValidationParameters = jwtParams);

builder.Services.AddAuthorization();
var app = builder.Build();

app.UseMiddleware<GlobalExceptionMiddleware>();
app.UseMiddleware<SecurityAuditLoggingMiddleware>();
app.UseAuthentication();
app.UseAuthorization();
app.MapControllers();
app.Run();`;

export default function Hero() {
  const [activeTab, setActiveTab] = useState("api");
  const [selectedEndpointIdx, setSelectedEndpointIdx] = useState(0);
  const [isExecuting, setIsExecuting] = useState(false);
  const [runCount, setRunCount] = useState(1);
  const [emailCopied, setEmailCopied] = useState(false);
  const [codeCopied, setCodeCopied] = useState(false);

  const currentEndpoint = API_ENDPOINTS[selectedEndpointIdx];

  function handleRunEndpoint() {
    setIsExecuting(true);
    setTimeout(() => {
      setIsExecuting(false);
      setRunCount((c) => c + 1);
    }, 260);
  }

  function handleCopyEmail() {
    navigator.clipboard?.writeText(profile.email);
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2200);
  }

  function handleCopyCode() {
    navigator.clipboard?.writeText(CSHARP_PIPELINE);
    setCodeCopied(true);
    setTimeout(() => setCodeCopied(false), 2000);
  }

  return (
    <section
      id="hero"
      className="relative pb-space-xl pt-space-xl md:pb-space-2xl md:pt-space-2xl"
    >
      <div className="grid grid-cols-1 items-start gap-space-xl lg:grid-cols-12 lg:gap-8">
        {/* Left Column — Editorial Pitch & Identity */}
        <div className="flex flex-col items-start gap-space-md lg:col-span-7">
          {/* Architectural Index Header */}
          <div className="hero-animate flex flex-wrap items-center gap-3 [--hero-delay:60ms]">
            <span className="font-mono text-label-sm font-semibold uppercase tracking-[0.16em] text-primary">
              SYS.01 // .NET BACKEND &amp; FULL-STACK ENGINEER
            </span>
            <span className="hidden h-3.5 w-[1px] bg-surface-container-high sm:inline-block" />
            <span className="inline-flex items-center gap-1.5 font-mono text-label-sm text-on-surface-variant">
              <span className="h-2 w-2 rounded-full bg-tertiary" />
              {profile.location} • Open to Opportunities
            </span>
          </div>

          {/* Primary Headline */}
          <div className="hero-animate flex flex-col gap-3 [--hero-delay:140ms]">
            <p className="font-mono text-body-sm font-medium text-on-surface-variant">
              Hello, I&apos;m{" "}
              <strong className="font-semibold text-on-surface">
                {profile.name}
              </strong>{" "}
              —
            </p>
            <h1 className="font-headline text-display-hero-mobile tracking-tight text-on-surface md:text-display-hero">
              Architecting reliable{" "}
              <span className="underline decoration-primary/40 decoration-2 underline-offset-8">
                .NET backends
              </span>{" "}
              &amp; data-driven systems.
            </h1>
          </div>

          {/* Narrative Summary */}
          <p className="hero-animate max-w-2xl font-body text-body-lg leading-relaxed text-on-surface-variant [--hero-delay:220ms]">
            {profile.summary} {profile.extendedSummary}
          </p>

          {/* Core Engineering Stack Strip */}
          <div className="hero-animate flex flex-wrap items-center gap-2 pt-1 [--hero-delay:280ms]">
            {[
              ["C# / .NET", "terminal"],
              ["ASP.NET Core Web API", "api"],
              ["Entity Framework Core", "account_tree"],
              ["SQL Server & T-SQL", "database"],
              ["SOLID & 3-Tier", "architecture"],
              ["React.js", "devices"],
            ].map(([label, icon]) => (
              <span
                key={label}
                className="inline-flex items-center gap-1.5 rounded-lg border border-surface-container-highest bg-surface-container-lowest px-3 py-1.5 font-mono text-[12px] font-medium text-on-surface shadow-sm"
              >
                <Icon className="text-[15px] text-primary">{icon}</Icon>
                {label}
              </span>
            ))}
          </div>

          {/* Call To Action Group */}
          <div className="hero-animate flex flex-wrap items-center gap-3 pt-2 [--hero-delay:340ms]">
            <Button
              id="hero-cta-projects"
              href="#featured-projects"
              icon="arrow_downward"
            >
              Explore Case Studies
            </Button>
            <Button
              id="hero-cta-contact"
              href="#contact"
              icon="mail"
              secondary
            >
              Start a Conversation
            </Button>
            <button
              id="hero-copy-email-btn"
              type="button"
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-2 rounded-xl border border-surface-container-highest bg-surface-container-low px-4 py-3 font-mono text-[12px] font-medium text-on-surface-variant transition-all hover:border-primary/40 hover:text-on-surface"
              title="Copy email address"
            >
              <Icon className="text-[16px] text-primary">
                {emailCopied ? "check" : "content_copy"}
              </Icon>
              <span>{emailCopied ? "Email Copied!" : profile.email}</span>
            </button>
          </div>

          {/* Socials & Direct Telemetry */}
          <div className="hero-animate mt-1 flex flex-wrap items-center gap-3 border-t border-surface-container-highest pt-4 [--hero-delay:400ms]">
            <span className="font-mono text-label-sm uppercase tracking-wider text-outline">
              Connect //
            </span>
            <SocialLinks />
          </div>
        </div>

        {/* Right Column — Interactive .NET Engineering Studio & Portrait Card */}
        <div className="hero-animate w-full [--hero-delay:200ms] lg:col-span-5">
          <div className="card border-surface-container-highest bg-surface-container-lowest shadow-[var(--shadow-hero)]">
            {/* Developer Identity Header inside Studio Card */}
            <div className="flex items-center justify-between gap-3 border-b border-surface-container-highest bg-surface-container-low/70 p-4">
              <div className="flex items-center gap-3">
                <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-xl border border-surface-container-highest bg-surface-container p-0.5 shadow-sm">
                  <img
                    src={profileImage}
                    alt={`${profile.name} — ${profile.title}`}
                    className="h-full w-full rounded-[10px] object-cover"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <h2 className="font-headline text-body-md font-bold text-on-surface">
                      {profile.name}
                    </h2>
                    <Icon className="text-[16px] text-primary">verified</Icon>
                  </div>
                  <p className="font-mono text-[11.5px] text-on-surface-variant">
                    {profile.title} • CS @ Fayoum Univ.
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() =>
                  setActiveTab(activeTab === "portrait" ? "api" : "portrait")
                }
                id="hero-toggle-portrait-btn"
                className="inline-flex items-center gap-1 rounded-lg border border-surface-container-highest bg-surface-container-lowest px-2.5 py-1.5 font-mono text-[11px] font-medium text-on-surface-variant transition-colors hover:border-primary/40 hover:text-primary"
                title="Switch between Live API Console and Developer Portrait"
              >
                <Icon className="text-[14px]">
                  {activeTab === "portrait" ? "terminal" : "badge"}
                </Icon>
                <span>{activeTab === "portrait" ? "Console" : "Profile"}</span>
              </button>
            </div>

            {/* Studio Mode Tabs */}
            <div
              className="flex items-center gap-1 border-b border-surface-container-highest bg-surface-container-low/40 px-3 py-2"
              role="tablist"
              aria-label="Engineering studio tabs"
            >
              {[
                ["api", "API Inspector", "api"],
                ["code", "Program.cs", "code"],
                ["portrait", "Developer Card", "person"],
              ].map(([key, label, icon]) => (
                <button
                  key={key}
                  id={`hero-studio-tab-${key}`}
                  type="button"
                  role="tab"
                  aria-selected={activeTab === key}
                  onClick={() => setActiveTab(key)}
                  className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 font-mono text-[11.5px] font-medium transition-all ${
                    activeTab === key
                      ? "bg-primary text-white shadow-sm"
                      : "text-on-surface-variant hover:bg-surface-container hover:text-on-surface"
                  }`}
                >
                  <Icon className="text-[14px]">{icon}</Icon>
                  <span>{label}</span>
                </button>
              ))}
            </div>

            {/* Tab 1: Interactive Live API & EF Core Inspector */}
            {activeTab === "api" && (
              <div className="flex flex-col gap-3 p-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-outline">
                    TrainingCenterWebAPI // Live Simulation
                  </span>
                  <span className="inline-flex items-center gap-1 rounded bg-tertiary/10 px-2 py-0.5 font-mono text-[11px] font-semibold text-tertiary">
                    ● {currentEndpoint.status} ({currentEndpoint.sqlTime})
                  </span>
                </div>

                {/* Endpoint Selector Buttons */}
                <div className="flex flex-col gap-1.5">
                  {API_ENDPOINTS.map((ep, idx) => {
                    const active = idx === selectedEndpointIdx;
                    return (
                      <button
                        key={ep.path}
                        id={`hero-endpoint-btn-${idx}`}
                        type="button"
                        onClick={() => setSelectedEndpointIdx(idx)}
                        className={`flex items-center justify-between gap-2 rounded-lg border px-3 py-2 text-left font-mono text-[11.5px] transition-all ${
                          active
                            ? "border-primary/50 bg-primary/10 text-on-surface"
                            : "border-surface-container-highest bg-surface-container-low/60 text-on-surface-variant hover:border-surface-container-high hover:text-on-surface"
                        }`}
                      >
                        <div className="flex min-w-0 items-center gap-2">
                          <span
                            className={` shrink-0 rounded px-1.5 py-0.5 text-[10px] font-bold ${
                              ep.method === "POST"
                                ? "bg-tertiary/20 text-tertiary"
                                : "bg-primary/20 text-primary"
                            }`}
                          >
                            {ep.method}
                          </span>
                          <span className="truncate font-semibold">
                            {ep.path}
                          </span>
                        </div>
                        <span className="hidden shrink-0 text-[10.5px] text-outline sm:inline">
                          {ep.role}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* EF Core Parameterized SQL Trace */}
                <div className="rounded-lg border border-surface-container-highest bg-[#0b0f17] p-3 text-slate-200">
                  <div className="mb-1.5 flex items-center justify-between border-b border-white/10 pb-1.5 font-mono text-[10.5px] text-slate-400">
                    <span>EF Core DbCommand // SQL Server</span>
                    <button
                      id="hero-execute-api-btn"
                      type="button"
                      onClick={handleRunEndpoint}
                      className="inline-flex items-center gap-1 rounded bg-primary px-2 py-0.5 font-mono text-[10.5px] font-semibold text-white transition hover:bg-primary-container"
                    >
                      <Icon className="text-[12px]">play_arrow</Icon>
                      <span>{isExecuting ? "Executing..." : "Execute"}</span>
                    </button>
                  </div>
                  <pre className="overflow-x-auto font-mono text-[11px] leading-relaxed text-sky-300">
                    <code>{currentEndpoint.sql}</code>
                  </pre>
                </div>

                {/* JSON Response Output */}
                <div className="rounded-lg border border-surface-container-highest bg-[#0b0f17] p-3 text-slate-200">
                  <div className="mb-1.5 flex items-center justify-between font-mono text-[10.5px] text-slate-400">
                    <span>Response Payload (JSON)</span>
                    <span className="text-emerald-400">
                      Run #{runCount} • Kestrel
                    </span>
                  </div>
                  <pre
                    className={`overflow-x-auto font-mono text-[11px] leading-relaxed text-emerald-300 transition-opacity duration-200 ${
                      isExecuting ? "opacity-40" : "opacity-100"
                    }`}
                  >
                    <code>{currentEndpoint.response}</code>
                  </pre>
                </div>
              </div>
            )}

            {/* Tab 2: Program.cs Architecture Code */}
            {activeTab === "code" && (
              <div className="flex flex-col gap-3 p-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[11px] text-on-surface-variant">
                    TrainingCenterWebAPI / Program.cs
                  </span>
                  <button
                    id="hero-copy-code-btn"
                    type="button"
                    onClick={handleCopyCode}
                    className="inline-flex items-center gap-1 rounded border border-surface-container-highest bg-surface-container-low px-2.5 py-1 font-mono text-[11px] text-on-surface-variant hover:text-primary"
                  >
                    <Icon className="text-[13px]">
                      {codeCopied ? "check" : "content_copy"}
                    </Icon>
                    <span>{codeCopied ? "Copied" : "Copy C#"}</span>
                  </button>
                </div>
                <div className="rounded-lg border border-surface-container-highest bg-[#0b0f17] p-3.5">
                  <pre className="overflow-x-auto font-mono text-[11.5px] leading-relaxed text-slate-200">
                    <code>{CSHARP_PIPELINE}</code>
                  </pre>
                </div>
                <div className="flex items-center justify-between rounded-lg bg-surface-container-low px-3 py-2 font-mono text-[11px] text-on-surface-variant">
                  <span>Architecture: Repository + Unit of Work</span>
                  <span className="text-primary">SOLID Compliant</span>
                </div>
              </div>
            )}

            {/* Tab 3: Portrait & Engineering Identity */}
            {activeTab === "portrait" && (
              <div className="flex flex-col gap-4 p-4">
                <div className="relative mx-auto aspect-square w-full max-w-[290px] overflow-hidden rounded-2xl border border-surface-container-highest bg-surface-container-low p-1.5 shadow-inner">
                  <img
                    src={profileImage}
                    alt={`${profile.name} - ${profile.title}`}
                    className="h-full w-full rounded-xl object-cover"
                  />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between rounded-xl border border-white/15 bg-slate-950/85 px-3.5 py-2 text-white backdrop-blur-md">
                    <span className="font-mono text-[11.5px] font-semibold">
                      C# • ASP.NET Core • SQL Server
                    </span>
                    <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2 text-left">
                  <div className="rounded-lg border border-surface-container-highest bg-surface-container-low/60 p-2.5">
                    <span className="block font-mono text-[10.5px] uppercase text-outline">
                      Current Track
                    </span>
                    <strong className="font-body text-body-sm text-on-surface">
                      DEPI Full-Stack .NET
                    </strong>
                  </div>
                  <div className="rounded-lg border border-surface-container-highest bg-surface-container-low/60 p-2.5">
                    <span className="block font-mono text-[10.5px] uppercase text-outline">
                      University
                    </span>
                    <strong className="font-body text-body-sm text-on-surface">
                      FCAI Fayoum Univ.
                    </strong>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
