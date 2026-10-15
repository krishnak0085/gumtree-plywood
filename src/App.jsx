
import React, { useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import {
  ArrowUpRight,
  Mail,
  MessageCircle,
  Instagram,
  Facebook,
  ArrowLeft,
} from "lucide-react";

const contacts = [
  {
    title: "WhatsApp",
    subtitle: "Chat with us · +91 80530 31325",
    href: "https://wa.me/918053031325",
    className: "whatsapp",
    icon: <MessageCircle size={27} strokeWidth={2.5} />,
  },
  {
    title: "Facebook",
    subtitle: "Visit our Facebook page",
    href: "https://www.facebook.com/share/14raxYK29ZM/?mibextid=wwXIfr",
    className: "facebook",
    icon: <Facebook size={27} fill="currentColor" />,
  },
  {
    title: "Instagram",
    subtitle: "@gumtreeplywood · Explore our products",
    href: "https://www.instagram.com/gumtreeplywood/",
    className: "instagram",
    icon: <Instagram size={27} strokeWidth={2.5} />,
  },
  {
    title: "Gmail",
    subtitle: "gumtree.plywoods@gmail.com",
    href: "mailto:gumtree.plywoods@gmail.com",
    className: "gmail",
    icon: <Mail size={27} strokeWidth={2.5} />,
  },
];

export default function App() {
const [showContacts, setShowContacts] = useState(
  new URLSearchParams(window.location.search).get("contact") === "1"
);
  return (
    <main className="page-shell">
      <div className="leaf leaf-one" aria-hidden="true" />
      <div className="leaf leaf-two" aria-hidden="true" />

      <section className="contact-card">
        <header className="hero">
          <div className="logo-frame">
            <img
              src="/gumtree-logo.jpeg"
              alt="Gumtree Plywood original tree logo"
              className="brand-logo"
            />
          </div>

          <p className="eyebrow">
            QUALITY · TRUST · CRAFTSMANSHIP
          </p>

          <h1>GUMTREE</h1>

          <p className="brand-subtitle">
            <span />PLYWOOD<span />
          </p>

          <p className="hero-copy">
            Quality products. Trusted relationships.
          </p>
        </header>

        <section className="products" aria-label="Our products">
          <div className="product-tile">
            <span className="product-mark">▤</span>
            <span>PLYWOOD</span>
          </div>

          <div className="product-tile">
            <span className="product-mark">▥</span>
            <span>BLOCKBOARD</span>
          </div>

          <div className="product-tile">
            <span className="product-mark">▱</span>
            <span>FLUSH DOOR</span>
          </div>
        </section>

        {!showContacts ? (
          
<section className="qr-section">
  <h2>Scan & Connect</h2>

  <p>
    Scan this QR code to connect with Gumtree Plywood
  </p>

  <div className="qr-box">
    <QRCodeSVG
      value={`${window.location.origin}/?contact=1`}
      size={210}
      level="H"
      includeMargin={true}
    />
  </div>

  <strong>GUMTREE PLYWOOD</strong>
  <span>Scan me to connect with us</span>
</section>


            <strong>GUMTREE PLYWOOD</strong>
            <span>Scan me to connect with us</span>

           
          </section>
        ) : (
          <section className="contact-section">
            <button
              type="button"
              className="back-button"
              onClick={() => setShowContacts(false)}
            >
              <ArrowLeft size={18} />
              Back to QR Code
            </button>

            <h2>Let’s connect</h2>

            <p className="intro">
              For product details, orders and business enquiries,
              reach us here.
            </p>

            <div className="contact-list">
              {contacts.map((contact) => (
                <a
                  className="contact-link"
                  href={contact.href}
                  key={contact.title}
                  target={
                    contact.title === "Gmail" ? undefined : "_blank"
                  }
                  rel={
                    contact.title === "Gmail"
                      ? undefined
                      : "noreferrer"
                  }
                >
                  <span
                    className={`contact-icon ${contact.className}`}
                  >
                    {contact.icon}
                  </span>

                  <span className="contact-text">
                    <strong>{contact.title}</strong>
                    <small>{contact.subtitle}</small>
                  </span>

                  <ArrowUpRight className="arrow" size={21} />
                </a>
              ))}
            </div>
          </section>
        )}

        <footer className="footer">
          <div className="footer-line" />

          <p className="footer-brand">GUMTREE PLYWOOD</p>

          <p className="footer-slogan">
            Let’s Build a Better Tomorrow
          </p>

          <p className="footer-products">
            Plywood <span>•</span> Blockboard <span>•</span> Flush Door
          </p>
        </footer>
      </section>

      <p className="page-note">
        A stronger foundation for every space.
      </p>
    </main>
  );
}
