import "./App.css";
import { useState } from "react";

export default function App() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  return (
    <>
      {/* ─── NAVBAR ──────────────────────────── */}
      <nav>
        <div className="nav-inner">
          <div className="nav-top">
            <span className="nav-brand">SCH</span>

            {/* Botón hamburguesa, posicionado a la derecha en pantallas pequeñas */}
            <button
              className="nav-toggle"
              onClick={() => setMenuAbierto(!menuAbierto)}
              aria-label="Abrir menú"
            >
              {menuAbierto ? "✕" : "☰"}
            </button>
          </div>

          <ul className={menuAbierto ? "nav-links abierto" : "nav-links"}>
            <li>
              <a href="#inicio" onClick={() => setMenuAbierto(false)}>
                Inicio
              </a>
            </li>
            <li>
              <a href="#sobre-mi" onClick={() => setMenuAbierto(false)}>
                Sobre mí
              </a>
            </li>
            <li>
              <a href="#academico" onClick={() => setMenuAbierto(false)}>
                Académico
              </a>
            </li>
            <li>
              <a href="#contacto" onClick={() => setMenuAbierto(false)}>
                Contacto
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* ─── CONTENIDO PRINCIPAL ──────────────── */}
      <main className="page">
        {/* ─── HERO ─────────────────────────── */}
        <section className="hero" id="inicio">
          <div className="avatar">SCH</div>
          <div className="hero-info">
            <h1>Sebastián Cruz Hernández</h1>
            <p className="tagline">
              Ingeniero en Mecatrónica · Ciudad de México
            </p>
            <div className="tags">
              <span className="tag">Robótica</span>
              <span className="tag">Data Science</span>
              <span className="tag">UX / UI</span>
            </div>
          </div>
        </section>

        {/* ─── FILA: PERSONAL + CONTACTO ─────── */}
        <div className="grid2">
          <div className="card">
            <p className="card-label">Datos personales</p>

            <div className="info-row">
              <span className="key">Nombre</span>
              <span className="val">Sebastián Cruz Hernández</span>
            </div>
            <div className="info-row">
              <span className="key">Edad</span>
              <span className="val">22 años</span>
            </div>
            <div className="info-row">
              <span className="key">Nacimiento</span>
              <span className="val">2 de julio del 2003</span>
            </div>
            <div className="info-row">
              <span className="key">Nacionalidad</span>
              <span className="val">Mexicana</span>
            </div>
            <div className="info-row">
              <span className="key">Ciudad</span>
              <span className="val">Ciudad de México</span>
            </div>
          </div>

          <div className="card" id="contacto">
            <p className="card-label">Contacto</p>
            <div className="contact-item">
              <div className="icon">
                <svg viewBox="0 0 24 24">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <polyline points="2,4 12,13 22,4" />
                </svg>
              </div>
              <a href="mailto:0217956@up.edu.mx">0217956@up.edu.mx</a>
            </div>
            <div className="contact-item">
              <div className="icon">
                <svg viewBox="0 0 24 24">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 3.08 4.18 2 2 0 0 1 5.09 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L9.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <span>+52 55 5555 5555</span>
            </div>
            <div className="contact-item">
              <div className="icon">
                <svg viewBox="0 0 24 24">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </div>
              <a
                href="https://www.linkedin.com/in/sebastián-cruz-hernández-9106a2348"
                target="_blank"
                rel="noreferrer"
              >
                linkedin.com/in/sebitas
              </a>
            </div>
          </div>
        </div>

        {/* ─── BIO ───────────────────────────── */}
        <div className="card" id="sobre-mi">
          <p className="card-label">Sobre mí</p>
          <p className="bio-text">
            Ingeniero mecatrónico con especialidad en Diseño Interactivo.
            Apasionado por la tecnología, el diseño y la innovación. En mis
            tiempos libres doy clases de robótica y toco instrumentos musicales.
            Busco oportunidades para aplicar mis habilidades en proyectos
            desafiantes.
          </p>
        </div>

        {/* ─── FILA: ACADÉMICO + HABILIDADES ─── */}
        <div className="grid2" id="academico">
          <div className="card">
            <p className="card-label">Formación académica</p>

            <div className="edu-item">
              <div className="edu-degree">Ing. en Mecatrónica</div>
              <div className="edu-school">Universidad Panamericana</div>
              <div className="edu-year">2021 – 2026</div>
            </div>
            <div className="edu-item">
              <div className="edu-degree">Diplomado en Ciencia de Datos</div>
              <div className="edu-school">Universidad Panamericana</div>
              <div className="edu-year">2025 – 2026</div>
            </div>
            <div className="edu-item">
              <div className="edu-degree">
                Especialidad en Diseño Interactivo
              </div>
              <div className="edu-school">Universidad Panamericana</div>
              <div className="edu-year">2025 - 2026</div>
            </div>
          </div>

          <div className="card">
            <p className="card-label">Habilidades</p>
            <div className="skills-grid" style={{ marginBottom: "1.25rem" }}>
              <span className="skill-chip">Python</span>
              <span className="skill-chip">JavaScript</span>
              <span className="skill-chip">C#</span>
              <span className="skill-chip">Machine Learning</span>
              <span className="skill-chip">SolidWorks</span>
              <span className="skill-chip">Figma</span>
            </div>

            <p className="card-label">Idiomas</p>
            <div className="lang-row">
              <span className="lang-name">Español</span>
              <span className="lang-level">Nativo</span>
            </div>
            <div className="lang-row">
              <span className="lang-name">Inglés</span>
              <span className="lang-level">B2 — Intermedio</span>
            </div>
            <div className="lang-row">
              <span className="lang-name">Japonés</span>
              <span className="lang-level">A1 — Básico</span>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
