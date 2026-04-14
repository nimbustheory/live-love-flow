import { useState } from "react";
import {
  Calendar, TrendingUp, Users, Heart, Sparkles, Layers, LayoutDashboard,
  Bell, Headphones, ChevronRight, Monitor, Smartphone, Star, Shield, Zap
} from "lucide-react";
import App from "./App.jsx";
import { DEMO_CONFIG } from "./demo.config.js";

const iconMap = { LayoutDashboard, Sparkles, Layers, Heart, Shield, Star, Zap, Calendar, TrendingUp, Users, Bell, Headphones, Monitor, Smartphone };
const getIcon = (name) => iconMap[name] || Star;

export default function DemoWrapper() {
  const c = DEMO_CONFIG;
  const accent = c.accent;
  const accentDark = c.accentDark;
  const [isAdmin, setIsAdmin] = useState(false);

  if (isAdmin) {
    return (
      <div style={{ width: "100vw", height: "100vh", fontFamily: "'Archivo', system-ui, sans-serif" }}>
        <App
          isAdminProp={true}
          onEnterAdmin={() => setIsAdmin(true)}
          onExitAdmin={() => setIsAdmin(false)}
        />
      </div>
    );
  }

  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#f5f5f5", fontFamily: "'Archivo', system-ui, sans-serif", color: "#1f2937" }}>

      {/* --- LEFT SIDEBAR --- */}
      <aside style={{ width: 320, flexShrink: 0, background: "#fff", borderRight: "1px solid #e5e7eb", display: "flex", flexDirection: "column", position: "fixed", top: 0, left: 0, bottom: 0, zIndex: 10, overflowY: "auto" }}>
        {/* Prototype Label */}
        <div style={{ padding: "16px 24px 0" }}>
          <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: accent, background: `${accent}12`, padding: "4px 10px", borderRadius: 4 }}>Prototype Demo</span>
        </div>

        {/* Studio Identity */}
        <div style={{ padding: "20px 24px 16px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ width: 44, height: 44, borderRadius: 12, background: accent, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Space Grotesk', serif", fontSize: 22, fontWeight: 700, color: "#fff" }}>
              {c.studio.logo}
            </div>
            <div>
              <div style={{ fontFamily: "'Space Grotesk', serif", fontSize: 18, fontWeight: 600, letterSpacing: "0.02em", color: "#1f2937" }}>{c.studio.name}</div>
              <div style={{ fontSize: 11, color: "#6b7280", marginTop: 1 }}>{c.studio.tagline}</div>
            </div>
          </div>
        </div>

        {/* Feature List */}
        <div style={{ padding: "0 24px", flex: 1 }}>
          <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#9ca3af", marginBottom: 12 }}>App Features</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            {c.features.map((f, i) => (
              <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10, padding: "8px 10px", borderRadius: 8, background: "#f9fafb", border: "1px solid #f3f4f6" }}>
                <div style={{ width: 28, height: 28, borderRadius: 6, background: `${accent}12`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 1 }}>
                  <Star size={14} color={accent} />
                </div>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: "#1f2937" }}>{f.label}</div>
                  <div style={{ fontSize: 11, color: "#6b7280", marginTop: 1, lineHeight: 1.3 }}>{f.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div style={{ padding: "16px 24px 20px", borderTop: "1px solid #e5e7eb" }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#9ca3af", textAlign: "center" }}>
            Built by <span style={{ color: accent }}>LUMI</span> — LumiClass.App
          </div>
        </div>
      </aside>

      {/* --- CENTER: PHONE FRAME --- */}
      <main style={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "flex-start", paddingTop: 32, paddingBottom: 32, marginLeft: 320, marginRight: 340 }}>
        <div style={{ position: "relative" }}>
          {/* Phone chrome — the device bezel stays dark (it is the physical phone frame) */}
          <div style={{
            width: 410, background: "#1a1a24", borderRadius: 44, padding: "12px 10px",
            boxShadow: "0 0 0 1px #2a2a34, 0 20px 60px rgba(0,0,0,.18), 0 0 80px rgba(0,0,0,.06)"
          }}>
            {/* Notch */}
            <div style={{ width: 120, height: 6, background: "#2a2a34", borderRadius: 3, margin: "0 auto 8px" }} />
            {/* Screen container */}
            <div style={{
              width: 390, height: 844, position: "relative", overflow: "hidden",
              borderRadius: 40, background: "#fff"
            }}>
              <App
                onEnterAdmin={() => setIsAdmin(true)}
                onExitAdmin={() => setIsAdmin(false)}
              />
            </div>
            {/* Home indicator */}
            <div style={{ width: 134, height: 5, background: "#3a3a44", borderRadius: 3, margin: "8px auto 4px" }} />
          </div>
        </div>
      </main>

      {/* --- RIGHT SIDEBAR --- */}
      <aside style={{ width: 340, flexShrink: 0, background: "#fff", borderLeft: "1px solid #e5e7eb", position: "fixed", top: 0, right: 0, bottom: 0, overflowY: "auto", padding: "24px 20px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {c.salesCards.map((card, i) => {
            const IconComp = getIcon(card.icon);
            return (
              <div key={i} style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: 14, padding: "18px 16px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                  <div style={{ width: 36, height: 36, borderRadius: 10, background: `${accent}12`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <IconComp size={18} color={accent} />
                  </div>
                  <h3 style={{ fontFamily: "'Space Grotesk', serif", fontSize: 18, fontWeight: 600, color: "#1f2937", margin: 0 }}>{card.title}</h3>
                </div>
                <p style={{ fontSize: 12, color: "#6b7280", lineHeight: 1.6, margin: 0 }}>{card.description}</p>
              </div>
            );
          })}

          {/* CTA Card */}
          <div style={{ background: `linear-gradient(135deg, ${accent}10, ${accent}06)`, border: `1px solid ${accent}25`, borderRadius: 14, padding: "22px 18px", textAlign: "center" }}>
            <h3 style={{ fontFamily: "'Space Grotesk', serif", fontSize: 22, fontWeight: 600, color: "#1f2937", margin: "0 0 6px" }}>{c.cta.heading}</h3>
            <p style={{ fontSize: 13, color: "#6b7280", margin: "0 0 16px", lineHeight: 1.4 }}>{c.cta.subheading}</p>
            <a href={c.cta.buttonUrl} target="_blank" rel="noopener noreferrer" style={{
              display: "inline-flex", alignItems: "center", gap: 6, padding: "12px 28px",
              borderRadius: 10, background: accent, color: "#fff", fontWeight: 700, fontSize: 14,
              textDecoration: "none", letterSpacing: "0.02em"
            }}>
              {c.cta.buttonText} <ChevronRight size={16} />
            </a>
          </div>
        </div>
      </aside>

      {/* Responsive collapse for small viewports */}
      <style>{`
        @media (max-width: 1100px) {
          aside { display: none !important; }
          main { margin-left: 0 !important; margin-right: 0 !important; }
        }
      `}</style>
    </div>
  );
}
