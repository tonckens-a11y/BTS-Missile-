import { useEffect, useMemo, useState } from "react";

/* ---------- Types & Constants ---------- */
type Tab = "Home" | "Signals" | "Algo" | "Results" | "About" | "Contact" | "Algo Coming Soon";
const TABS = ["Home", "Signals", "Algo", "Results", "About", "Contact", "Algo Coming Soon"] as const;

/* ---------- UI Bits ---------- */
type NavLinkProps = { id: string; label: string; active: boolean; onClick: () => void };
const NavLink = ({ id, label, active, onClick }: NavLinkProps) => (
  <button
    id={id}
    role="tab"
    aria-selected={active}
    aria-current={active ? "page" : undefined}
    onClick={onClick}
    className={`px-4 py-2 rounded-2xl font-medium transition shadow-sm outline-none
      ${active ? "bg-green-500 text-black" : "bg-gray-800 hover:bg-gray-700 text-white"}
      focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black`}
  >
    {label}
  </button>
);

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section className="px-6 md:px-20 py-12" aria-labelledby={title.replace(/\s+/g, "-").toLowerCase()}>
    <h2 id={title.replace(/\s+/g, "-").toLowerCase()} className="text-3xl font-bold mb-4">{title}</h2>
    <div className="text-gray-300 leading-relaxed">{children}</div>
  </section>
);

/* ---------- Pages ---------- */
function HomePage({ onNavigate }: { onNavigate: (tab: Tab) => void }) {
  return (
    <div>
      <section className="text-center py-20 bg-gradient-to-b from-black to-gray-900">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">XAU Missile 🚀</h1>
        <p className="text-lg md:text-2xl mb-6">Precision Strike Trading for XAUUSD</p>
        <p className="text-md text-gray-300 mb-8 max-w-3xl mx-auto">
          The only gold trading system with a{" "}
          <span className="text-green-400 font-semibold">95%+ TP1 hit rate</span> and built-in
          <span className="text-red-400 font-semibold"> News Guard</span> to keep prop accounts safe.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={() => onNavigate("Algo Coming Soon")}
            className="bg-green-500 hover:bg-green-600 text-black px-6 py-3 rounded-2xl font-semibold shadow-lg"
          >
            📈 Join VIP Signals
          </button>
          <button
            onClick={() => onNavigate("Algo Coming Soon")}
            className="bg-orange-500 hover:bg-orange-600 text-black px-6 py-3 rounded-2xl font-semibold shadow-lg"
          >
            🤖 Get the Algo
          </button>
        </div>
      </section>

      <Section title="Why XAU Missile?">
        <ul className="grid md:grid-cols-3 gap-4">
          <li className="bg-gray-900 p-5 rounded-2xl">TP1 designed for 95%+ hit probability before SL is touched.</li>
          <li className="bg-gray-900 p-5 rounded-2xl">Full 3-chart alignment (M1/M5/M15) for precise entries.</li>
          <li className="bg-gray-900 p-5 rounded-2xl">News Guard blocks risky trades around CPI / FOMC / NFP.</li>
        </ul>
      </Section>
    </div>
  );
}

function SignalsPage() {
  return (
    <div id="signals">
      <Section title="VIP Signals – XAUUSD in Real Time">
        <p>
          Get high-precision XAUUSD alerts via Telegram. Every signal includes Entry, SL, <strong>TP1 (95% hit)</strong>, TP2,
          risk guidance, and a News Guard note.
        </p>

        <div className="bg-gray-900 p-6 rounded-2xl shadow-lg mt-6">
          <p className="text-sm text-gray-400 mb-6">⚠️ Examples only — previews to show the real signal format.</p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-black p-4 rounded-xl">
              <div className="text-center text-lg font-bold mb-2">
                <span className="text-red-500">🔴 SHORT</span>
              </div>
              <div className="text-center text-md mb-3 font-semibold">🚀 XAU Missile Signal</div>
              <pre className="text-sm overflow-x-auto whitespace-pre-wrap">{`🏆 Pair: XAUUSD
🎯 Entry: 3374.50
🛑 SL: 3380.50
🥇 TP1: 3372.50  (95% hit probability)
🥈 TP2: 3368.00
⚖️ Risk: 0.5% max
📰 News Guard: Safe (no red flag events in the next 30 minutes)`}</pre>
            </div>

            <div className="bg-black p-4 rounded-xl">
              <div className="text-center text-lg font-bold mb-2">
                <span className="text-green-500">🟢 LONG</span>
              </div>
              <div className="text-center text-md mb-3 font-semibold">🚀 XAU Missile Signal</div>
              <pre className="text-sm overflow-x-auto whitespace-pre-wrap">{`🏆 Pair: XAUUSD
🎯 Entry: 3355.00
🛑 SL: 3350.00
🥇 TP1: 3360.00  (95% hit probability)
🥈 TP2: 3365.00
⚖️ Risk: 0.5% max
📰 News Guard: Safe (no red flag events in the next 30 minutes)`}</pre>
            </div>
          </div>

          <div className="mt-6 text-sm text-gray-400">
            <p className="font-semibold mb-2">📖 Legend:</p>
            <ul className="space-y-1">
              <li>🏆 <strong>Pair</strong> → The instrument (XAUUSD = Gold vs USD)</li>
              <li>🎯 <strong>Entry</strong> → Price level where trade opens</li>
              <li>🛑 <strong>SL</strong> → Stop Loss</li>
              <li>🥇 <strong>TP1</strong> → First Take Profit (ultra-safe)</li>
              <li>🥈 <strong>TP2</strong> → Secondary Take Profit</li>
              <li>⚖️ <strong>Risk</strong> → Suggested max risk</li>
              <li>📰 <strong>News Guard</strong> → Red-flag timing filter</li>
            </ul>
          </div>
        </div>
      </Section>
    </div>
  );
}

function AlgoComingSoonPage() {
  return (
    <div id="algo-coming-soon">
      <Section title="🚀 Algo Bot Launch – Coming Soon">
        <div className="space-y-4">
          <p>
            Our fully automated <strong>BTS Missile 🚀 Algo Bot</strong> is in advanced development and fine-tuning,
            with launch scheduled later this year.
          </p>
          <p>
            Until release, all trading opportunities are delivered exclusively as <strong>VIP Signals</strong>, ensuring
            precise, high-probability setups without interruption.
          </p>
          <div className="bg-black/60 border border-gray-800 rounded-2xl p-5">
            <h3 className="text-xl font-bold mb-2">💎 Exclusive Founders’ Offer</h3>
            <p>
              The <strong>first 200 subscribers</strong> will receive <strong>lifetime access to the Algo Bot free of
              charge</strong> upon release. This one-time opportunity will not be repeated.
            </p>
          </div>
          <p>
            Join early, benefit from <strong>VIP Signals today</strong>, and secure your <strong>free lifetime Algo Bot
            access</strong> for tomorrow.
          </p>
        </div>
      </Section>
    </div>
  );
}

function AlgoPage() {
  return (
    <div id="algo">
      <Section title="XAU Missile 🤖 Algo – Automate Your Edge">
        <ul className="list-disc ml-6 space-y-2">
          <li>✅ M1/M5/M15 alignment filter (only trade when all agree)</li>
          <li>🥇 TP1 auto-take with 95% hit probability</li>
          <li>🥈 Turbo early-exit after TP1 if momentum stalls</li>
          <li>📰 News Guard: automatic block around CPI / FOMC / NFP</li>
          <li>⚖️ Prop-safe: risk capped at 0.5%/trade, max 3 trades/day</li>
        </ul>
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <div className="bg-gray-900 p-6 rounded-2xl text-center">
            <h3 className="text-xl font-bold mb-2">Monthly License</h3>
            <p className="text-green-400 text-2xl font-bold">$149</p>
            <a
              href="https://buy.stripe.com/test_algo_monthly"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 px-4 py-2 rounded-2xl bg-green-600 hover:bg-green-700 text-black font-semibold inline-block"
            >
              Get Monthly
            </a>
          </div>
          <div className="bg-gray-900 p-6 rounded-2xl text-center">
            <h3 className="text-xl font-bold mb-2">Lifetime License</h3>
            <p className="text-green-400 text-2xl font-bold">$999</p>
            <a
              href="https://buy.stripe.com/test_algo_lifetime"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 px-4 py-2 rounded-2xl bg-green-600 hover:bg-green-700 text-black font-semibold inline-block"
            >
              Get Lifetime
            </a>
          </div>
        </div>
      </Section>
    </div>
  );
}

function ResultsPage() {
  return (
    <Section title="Verified Results">
      <p>
        We publish real performance via MyFXBook/FXBlue and weekly TP1/TP2 summaries. Embed widgets
        or screenshots here to provide transparent proof of consistency.
      </p>
      <div className="grid md:grid-cols-3 gap-4 mt-6">
        <div className="bg-gray-900 h-40 rounded-2xl flex items-center justify-center text-gray-500">FXBlue Widget</div>
        <div className="bg-gray-900 h-40 rounded-2xl flex items-center justify-center text-gray-500">MyFXBook Equity</div>
        <div className="bg-gray-900 h-40 rounded-2xl flex items-center justify-center text-gray-500">Weekly Recap</div>
      </div>
    </Section>
  );
}

function AboutPage() {
  return (
    <Section title="About XAU Missile 🚀">
      <p>
        Built for prop traders who value capital protection and consistency. XAU Missile combines
        discretionary precision with quant-style filters and hard risk caps. The core idea: <strong>win early with TP1</strong>,
        let winners run to TP2 only when conditions remain aligned.
      </p>
      <ul className="list-disc ml-6 mt-4 space-y-2">
        <li>Ultra-conservative TP1 before SL is touched</li>
        <li>3-chart alignment (M1/M5/M15)</li>
        <li>News Guard filter</li>
        <li>Prop firm safe risk model</li>
      </ul>
      <div className="mt-6 space-y-3">
        <h3 className="text-xl font-bold">Precision Strike Trading for XAUUSD</h3>
        <p>
          XAU Missile is a professional gold trading system designed for <strong>prop firms and retail traders</strong>.
          It combines ultra-safe targets and strict risk controls for manual trading and (semi) automation/algo’s — 
          built for traders who value consistency with maximum capital protection.
        </p>
      </div>
    </Section>
  );
}

function ContactPage() {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: wire up real submit
    alert("Thanks! We’ll get back to you soon.");
  };
  return (
    <Section title="Contact & Support">
      <p>Questions or partnership inquiries? Reach us via:</p>
      <ul className="list-disc ml-6 mt-3 space-y-2">
        <li>Email: <a className="underline hover:no-underline" href="mailto:support@xaumissile.com">support@xaumissile.com</a></li>
        <li>Telegram: <a className="underline hover:no-underline" href="https://t.me/XAUmissileSupportBot" target="_blank" rel="noopener noreferrer">@XAUmissileSupportBot</a></li>
      </ul>
      <div className="bg-gray-900 rounded-2xl p-6 mt-6">
        <form className="grid gap-4" onSubmit={onSubmit} noValidate>
          <input className="bg-black rounded-xl p-3" placeholder="Your name" aria-label="Your name" />
          <input className="bg-black rounded-xl p-3" placeholder="Your email" aria-label="Your email" />
          <textarea className="bg-black rounded-xl p-3" placeholder="How can we help?" rows={4} aria-label="Your message" />
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-600 text-black px-6 py-3 rounded-2xl font-semibold w-max"
          >
            Send
          </button>
        </form>
      </div>
    </Section>
  );
}

/* ---------- App Shell ---------- */
export default function App() {
  const tabs = useMemo(() => TABS, []);

  const getInitialTab = (): Tab => {
    if (typeof window === "undefined") return "Home";
    const url = new URL(window.location.href);
    const q = url.searchParams.get("tab") as Tab | null;
    return (q && (tabs as readonly string[]).includes(q)) ? (q as Tab) : "Home";
  };

  const [page, setPage] = useState<Tab>(getInitialTab());

  useEffect(() => {
    if (typeof window === "undefined") return;
    const url = new URL(window.location.href);
    url.searchParams.set("tab", page);
    window.history.replaceState({}, "", url.toString());
  }, [page]);

  const renderMap: Record<Tab, JSX.Element> = {
    Home: <HomePage onNavigate={(tab) => setPage(tab)} />,
    Signals: <SignalsPage />,
    Algo: <AlgoPage />,
    Results: <ResultsPage />,
    About: <AboutPage />,
    Contact: <ContactPage />,
    "Algo Coming Soon": <AlgoComingSoonPage />,
  };

  return (
    <div className="font-sans bg-black text-white min-h-screen">
      <header className="sticky top-0 z-40 backdrop-blur bg-black/70 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-4">
          <a href="/" className="flex items-center gap-3 focus-visible:ring-2 focus-visible:ring-green-500 rounded-2xl">
            <div className="w-9 h-9 rounded-2xl bg-green-600 text-black font-bold flex items-center justify-center">🚀</div>
            <div className="font-bold">
              XAU Missile <span className="italic font-light text-sm text-gray-300">– by Precision Strike Trading</span>
            </div>
          </a>
          <nav className="flex flex-wrap gap-2" aria-label="Primary">
            {tabs.map((p) => (
              <NavLink
                key={p}
                id={`tab-${p.replace(/\s+/g, "-").toLowerCase()}`}
                label={p}
                active={page === p}
                onClick={() => setPage(p as Tab)}
              />
            ))}
          </nav>
        </div>
      </header>

      <main role="main" id="main" className="min-h-[60vh]">
        {renderMap[page]}
      </main>

      <footer className="bg-gray-900 text-center py-8 mt-10">
        <p className="text-sm">
          © 2025 <span className="text-green-500 font-bold">XAU Missile 🚀</span> – Precision Strike Trading
        </p>
      </footer>
    </div>
  );
}
