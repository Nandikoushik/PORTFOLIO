import "./index.css";
import qa from "./data.json";
import { useCallback, useEffect, useRef, useState } from "react";


const skills = [
  { label: "Backend", items: "Node.js, Python, SQL" },
  { label: "Agentic", items: "Claude Code, Codex, Cursor" },
  { label: "Tools", items: "Git, Jira,  n8n, Figma , Jenkins " },
  { label: "Languages", items: "TypeScript, JavaScript, Python , PHP" },
  { label: "Web", items: "Next.js, React js, React Native, full-stack web dev" },
];

const projects = [
  { name: "clkclk", description: "Multi Tenant Cloud Kiosk", stars: 380 },
  { name: "CRM", description: "Customer Relationship Management ", stars: 170 },
  { name: "WP CRM", description: "a customer relationship management system that integrates with WhatsApp", stars: 113 }
];

const contacts = [
  { label: "website ", value: "nandilabs", href: "https://nandilabs.vercel.app" },
  { label: "github  ", value: "Nandikoushik", href: "https://github.com/Nandikoushik/wa" },
  { label: "linkedin", value: "@koushik-nandi", href: "https://www.linkedin.com/in/koushik-nandi-05-06-/" },
  { label: "email   ", value: "careerkoushik2023@gmail.com", href: "mailto:careerkoushik2023@gmail.com" },
];

const bioTokens = [
  { text: "Full Stack Developer specializing in " },
  { text: "React", cls: "text-accent" },
  { text: " and " },
  { text: "Node.js", cls: "text-accent" },
  { text: " workflows. He builds " },
  { text: "intelligent applications", cls: "text-accent" },
  { text: " that go beyond chat — they think, plan, and ship code autonomously, using tools like " },
  { text: "Cursor", cls: "text-accent" },
  { text: ", " },
  { text: "Gemini", cls: "text-accent" },
  { text: ", and " },
  { text: "Claude Code", cls: "text-accent" },
];

const sectionDefs = [
  { id: "who", prompt: "who is koushik nandi?", tools: ["Reading profile.md", "Loading avatar.jpeg", "Resolving location"], bodyKind: "hero", bodySteps: 5 },
  { id: "bg", prompt: "tell me more about his background", tools: ["Reading bio.md", "Compiling highlights"], bodyKind: "bio", bodySteps: bioTokens.length },
  { id: "skills", prompt: "cat skills.txt", tools: ["Reading skills.json", "Parsing skills.json", "Sorting by relevance"], bodyKind: "skills", bodySteps: skills.length },
  { id: "projects", prompt: "ls projects/", tools: ["Fetching projects from GitHub…", "Loading metadata", "Sorting by stars"], bodyKind: "projects", bodySteps: projects.length },
  { id: "contact", prompt: "cat contact.txt", tools: ["Reading contact.txt", "Validating links"], bodyKind: "contact", bodySteps: contacts.length },
];


const STORAGE_KEY = "koushik-portfolio-chat-seen";


const FALLBACK_ANSWER =
  "I don't have a canned answer for that one. Try asking about my background, tech stack, projects, availability, rates, location, or how to get in touch. For anything else, email koushik.nandi@gmail.com.";

function tokenize(text) {
  return text.match(/\S+\s*/g) ?? [text];
}

function findAnswer(question) {
  for (const entry of qa) {
    for (const pattern of entry.patterns) {
      try {
        if (new RegExp(pattern, "i").test(question)) return entry.answer;
      } catch {
        // skip invalid regex silently
      }
    }
  }
  return FALLBACK_ANSWER;
}

function ChatPrompt({ children }) {
  return (
    <span style={{ color: 'var(--accent)' }}>
      $ ask&gt; <span style={{ color: 'var(--foreground)' }}>{children}</span>
    </span>
  );
}

function ChatInterface() {
  const [history, setHistory] = useState([]);
  const [value, setValue] = useState("");
  const inputRef = useRef(null);
  const bottomRef = useRef(null);
  const streamRef = useRef({ cancelled: false });
  const idRef = useRef(0);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [history]);

  useEffect(() => {
    return () => {
      streamRef.current.cancelled = true;
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const q = value.trim();
    if (!q) return;
    setValue("");

    const answer = findAnswer(q);
    const words = tokenize(answer);
    const id = ++idRef.current;
    setHistory((prev) => [...prev, { id, q, words, shown: 0 }]);

    streamRef.current.cancelled = true;
    const token = { cancelled: false };
    streamRef.current = token;

    (async () => {
      const sleep = (ms) => new Promise((r) => window.setTimeout(r, ms));
      for (let s = 1; s <= words.length; s++) {
        if (token.cancelled) return;
        await sleep(45);
        setHistory((prev) => prev.map((h) => (h.id === id ? { ...h, shown: s } : h)));
      }
    })();
  };

  return (
    <div style={{ display: 'grid', gap: '1.5rem', paddingTop: '0.5rem' }}>
      {history.map((h) => (
        <div key={h.id} style={{ display: 'grid', gap: '0.5rem', fontSize: '1rem' }}>
          <div>
            <ChatPrompt>{h.q}</ChatPrompt>
          </div>
          <p style={{ paddingLeft: '1.5rem', color: 'var(--foreground)', lineHeight: '1.625', maxWidth: '48rem' }}>
            {h.words.slice(0, h.shown).join("")}
          </p>
        </div>
      ))}

      <form onSubmit={handleSubmit} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1rem' }}>
        <span style={{ color: 'var(--accent)', flexShrink: 0 }}>$ ask&gt;</span>
        <input
          ref={inputRef}
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          spellCheck={false}
          autoComplete="off"
          aria-label="Ask a question about Koushik"
          style={{
            flex: 1,
            backgroundColor: 'transparent',
            outline: 'none',
            border: 'none',
            color: 'var(--foreground)',
            caretColor: 'var(--accent)',
            fontSize: 'inherit',
            fontFamily: 'inherit'
          }}
          placeholder="ask me anything…"
        />
      </form>

      <div ref={bottomRef} />
    </div>
  );
}

export default function ChatWithMe() {
  const [allDone, setAllDone] = useState(false);
  const startedRef = useRef(false);
  const cancelRef = useRef({ cancelled: false });

  const startSequence = useCallback(() => {
    cancelRef.current.cancelled = true;
    const token = { cancelled: false };
    cancelRef.current = token;
    setAllDone(false);

    const sleep = (ms) => new Promise((r) => window.setTimeout(r, ms));

    (async () => {
      for (let i = 0; i < sectionDefs.length; i++) {
        if (token.cancelled) return;
        const def = sectionDefs[i];

        for (let c = 1; c <= def.prompt.length; c++) {
          if (token.cancelled) return;
          await sleep(18);
        }
        await sleep(140);

        for (let t = 1; t <= def.tools.length; t++) {
          if (token.cancelled) return;
          await sleep(260);
        }
        await sleep(180);
        if (token.cancelled) return;
        await sleep(120);

        const stepDelay = def.bodyKind === "bio" ? 45 : 60;
        for (let s = 1; s <= def.bodySteps; s++) {
          if (token.cancelled) return;
          await sleep(stepDelay);
        }
        await sleep(160);
      }
      if (token.cancelled) return;
      setAllDone(true);
      try {
        localStorage.setItem(STORAGE_KEY, "1");
      } catch {
        // ignore
      }
    })();
  }, []);

  useEffect(() => {
    if (startedRef.current) return;
    startedRef.current = true;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let played = false;
    try {
      played = localStorage.getItem(STORAGE_KEY) === "1";
    } catch {
      // localStorage may be unavailable (e.g. some private modes)
    }

    if (reduced || played) {
      setAllDone(true);
      return;
    }

    startSequence();

    return () => {
      cancelRef.current.cancelled = true;
    };
  }, [startSequence]);

  return (
    <article className="about  active" data-page="about">
      <main style={{ marginTop: '1rem', flex: 1, padding: '0.75rem', display: 'flex', flexDirection: 'column' }}>

        <div style={{ paddingLeft: '1.25rem', paddingRight: '1.25rem', paddingTop: '2.5rem', paddingBottom: '3.5rem', display: 'grid', gap: '3.5rem', maxHeight: '80vh', overflowY: 'auto', scrollBehavior: 'smooth', scrollbarWidth: 'thin' }}>

          {allDone && <ChatInterface />}
        </div>
      </main>
    </article>
  );
}