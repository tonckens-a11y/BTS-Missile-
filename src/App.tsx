import { useState } from "react";

const NavLink = ({
  label,
  active,
  onClick
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 rounded-2xl font-medium transition shadow-sm ${
      active ? "bg-yellow-500 text-black" : "bg-gray-800 hover:bg-gray-700 text-white"
    }`}
  >
    {label}
  </button>
);

const Section = ({ title, children }: { title: string; children: any }) => (
  <section className="px-6 md:px-20 py-12">
    <h2 className="text-3xl font-bold mb-4">{title}</h2>
    <div className="text-gray-300 leading-relaxed">{children}</div>
  </section>
);

function HomePage() {
  return (
    <div>
      <section className="text-center py-20 bg-gradient-to-b from-black to-gray-900">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">BTS Missile 🚀</h1>
        <p className="text-lg md:text-2xl mb-6">Precision Strike Trading for XAUUSD</p>
        <p className="text-md text-gray-300 mb-8 max-w-3xl mx-auto">
          The only gold trading system with a{" "}
          <span className="text-yellow-400 font-semibold">95%+ TP1 hit rate</span> and built-in
          <span className="text-red-400 font-semibold"> News Guard</span> to keep prop accounts safe.
        </p>
        <div className="space-x-3">
          <a
            href="https://t.me/YourSignalChannel"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-yellow-500 text-black px-6 py-3 rounded-2xl font-semibold shadow-lg inline-block"
          >
            📈 Join VIP Signals
          </a>
          <a
            href="#algo"
            className="bg-red-500 text-white px-6 py-3 rounded-2xl font-semibold shadow-lg inline-block"
          >
            🤖 Get the Algo
          </a>
        </div>
      </section>

      <Section title="Why BTS Missile?">
        <ul className="grid md:grid-cols-3 gap-4">
          <li className="bg-gray-900 p-5 rounded-2xl">
            TP1 designed for 95%+ hit probability before SL is touched.
          </li>
          <li className="bg-gray-900 p-5 rounded-2xl">
            Full 3-chart alignment (M1/M5/M15) for precise entries.
          </li>
          <li className="bg-gray-900 p-5 rounded-2xl">
            News Guard blocks risky trades around CPI / FOMC / NFP.
          </li>
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
          Get high-precision XAUUSD alerts via Telegram. Every signal includes Entry, SL,{" "}
          <strong>TP1 (95% hit)</strong>, TP2, risk guidance, and a News Guard note.
        </p>
        <div className="bg-gray-900 p-6 rounded-2xl shadow-lg mt-6">
          <pre className="text-sm bg-black p-4 rounded-xl overflow-x-auto">
{`🚀 BTS Missile SHORT
Pair: XAUUSD
Entry: 3374.50
SL: 3380.50
TP1: 3372.50 ✅ (95% hit)
TP2: 3368.00
Risk: 0.5% max
News Guard: Safe (no red events in next 30m)`}
          </pre>
        </div>
        <div className="grid md:grid-cols-3 gap-6 mt-10">
          <div className="bg-black p-6 rounded-2xl shadow-lg text-center">
            <h3 className="text-xl font-bold mb-2">Monthly</h3>
            <p className="text-yellow-400 text-2xl font-bold">$75</p>
            <a
              href="https://buy.stripe.com/test_monthly_subscription"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 px-4 py-2 rounded-2xl bg-yellow-500 text-black font-semibold inline-block"
            >
              Subscribe
            </a>
          </div>
          <div className="bg-black p-6 rounded-2xl shadow-lg text-center ring-2 ring-yellow-500">
            <h3 className="text-xl font-bold mb-2">Quarterly</h3>
            <p className="text-yellow-400 text-2xl font-bold">$199</p>
            <a
              href="https://buy.stripe.com/test_quarterly_subscription"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 px-4 py-2 rounded-2xl bg-yellow-500 text-black font-semibold inline-block"
            >
              Subscribe
            </a>
          </div>
          <div className="bg-black p-6 rounded-2xl shadow-lg text-center">
            <h3 className="text-xl font-bold mb-2">Annual</h3>
            <p className="text-yellow-400 text-2xl font-bold">$599</p>
            <a
              href="https://buy.stripe.com/test_annual_subscription"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 px-4 py-2 rounded-2xl bg-yellow-500 text-black font-semibold inline-block"
            >
              Subscribe
            </a>
          </div>
        </div>
        <div className="mt-10 text-sm text-gray-400">
          * Risk guide: Max 0.5% per trade. Max 3 trades/day. Avoid trading ±15m of red news.
        </div>
      </Section>
    </div>
  );
}

function AlgoPage() {
  return (
    <div id="algo">
      <Section title="BTS Missile 🤖 Algo – Automate Your Edge">
        <ul className="list-disc ml-6 space-y-2">
          <li>M1/M5/M15 alignment filter (only trade when all agree).</li>
          <li>TP1 auto-take with 95% hit probability.</li>
          <li>Turbo early-exit when momentum stalls after TP1.</li>
          <li>News Guard: automatic block around CPI / FOMC / NFP.</li>
          <li>Prop-safe: risk capped at 0.5%/trade, max 3 trades/day.</li>
        </ul>
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <div className="bg-gray-900 p-6 rounded-2xl text-center">
            <h3 className="text-xl font-bold mb-2">Monthly License</h3>
            <p className="text-yellow-400 text-2xl font-bold">$149</p>
            <a
              href="https://buy.stripe.com/test_algo_monthly"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 px-4 py-2 rounded-2xl bg-red-500 font-semibold inline-block"
            >
              Get Monthly
            </a>
          </div>
          <div className="bg-gray-900 p-6 rounded-2xl text-center">
            <h3 className="text-xl font-bold mb-2">Lifetime License</h3>
            <p className="text-yellow-400 text-2xl font-bold">$999</p>
            <a
              href="https://buy.stripe.com/test_algo_lifetime"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 px-4 py-2 rounded-2xl bg-red-500 font-semibold inline-block"
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
        <div className="bg-gray-900 h-40 rounded-2xl flex items-center justify-center text-gray-500">
          FXBlue Widget
        </div>
        <div className="bg-gray-900 h-40 rounded-2xl flex items-center justify-center text-gray-500">
          MyFXBook Equity
        </div>
        <div className="bg-gray-900 h-40 rounded-2xl flex items-center justify-center text-gray-500">
          Weekly Recap
        </div>
      </div>
    </Section>
  );
}

function AboutPage() {
  return (
    <Section title="About BTS Missile 🚀">
      <p>
        Built for prop traders who value capital protection and consistency. BTS Missile combines
        discretionary precision with quant-style filters and hard risk caps. The core idea:{" "}
        <strong>win early with TP1</strong>, let winners run to TP2 only when conditions remain
        aligned.
      </p>
      <ul className="list-disc ml-6 mt-4 space-y-2">
        <li>Ultra-conservative TP1 before SL is touched</li>
        <li>3-chart alignment (M1/M5/M15)</li>
        <li>News Guard filter</li>
        <li>Prop firm safe risk model</li>
      </ul>
    </Section>
  );
}

function ContactPage() {
  return (
    <Section title="Contact & Support">
      <p>Questions or partnership inquiries? Reach us via:</p>
      <ul className="list-disc ml-6 mt-3 space-y-2">
        <li>Email: support@btsmissile.com</li>
        <li>Telegram: @BTSMissileSupportBot</li>
      </ul>
      <div className="bg-gray-900 rounded-2xl p-6 mt-6">
        <form className="grid gap-4">
          <input className="bg-black rounded-xl p-3" placeholder="Your name" />
          <input className="bg-black rounded-xl p-3" placeholder="Your email" />
          <textarea className="bg-black rounded-xl p-3" placeholder="How can we help?" rows={4} />
          <button
            type="button"
            className="bg-yellow-500 text-black px-6 py-3 rounded-2xl font-semibold w-max"
          >
            Send
          </button>
        </form>
      </div>
    </Section>
  );
}

export default function App() {
  const [page, setPage] = useState("Home");
  const pages = ["Home", "Signals", "Algo", "Results", "About", "Contact"];

  return (
    <div className="font-sans bg-black text-white min-h-screen">
      {/* Top Bar */}
      <header className="sticky top-0 z-40 backdrop-blur bg-black/70 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-2xl bg-red-600 flex items-center justify-center">🚀</div>
            <div className="font-bold">BTS Missile</div>
          </div>
          <nav className="flex flex-wrap gap-2">
            {pages.map((p) => (
              <NavLink key={p} label={p} active={page === p} onClick={() => setPage(p)} />
            ))}
          </nav>
        </div>
      </header>

      {/* Routed Pages */}
      {page === "Home" && <HomePage />}
      {page === "Signals" && <SignalsPage />}
      {page === "Algo" && <AlgoPage />}
      {page === "Results" && <ResultsPage />}
      {page === "About" && <AboutPage />}
      {page === "Contact" && <ContactPage />}

      {/* Footer */}
      <footer className="bg-gray-900 text-center py-8 mt-10">
        <p className="text-gray-500 text-sm">© 2025 BTS Missile 🚀 – Precision Strike Trading</p>
      </footer>
    </div>
  );
}
