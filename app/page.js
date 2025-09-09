"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ===== Animasi fade-up reusable =====
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

function FadeUp({ children, className, id }) {
  return (
    <motion.div
      id={id}
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.2 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ===== Rotating Text =====
const words = ["Boxy Fit", "Oversize", "Relaxed Fit", "Premium Cut"];

function RotatingText() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <span className="inline-block relative">
      <AnimatePresence mode="wait">
        <motion.span
          key={words[index]}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.5 }}
          className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400"
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

export default function Page() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);

  const portfolio = [
    {
      src: "/products/boxy1.jpg",
      title: "Boxy Tee – Hitam",
      desc: "Kaos boxy hitam dengan bahan cotton combed 30s premium. Nyaman dipakai untuk harian.",
      price: "Rp 95.000",
      sizes: "S – XL",
      material: "Cotton Combed 30s",
    },
    {
      src: "/products/boxy2.jpg",
      title: "Boxy Tee – Putih",
      desc: "Kaos boxy putih elegan, cocok untuk dipadukan dengan outfit apapun.",
      price: "Rp 95.000",
      sizes: "S – XL",
      material: "Cotton Combed 30s",
    },
    {
      src: "/products/boxy3.jpg",
      title: "Boxy Tee – Oversize",
      desc: "Kaos oversize dengan potongan longgar untuk style casual streetwear.",
      price: "Rp 105.000",
      sizes: "M – XXL",
      material: "Cotton Combed 24s",
    },
    {
      src: "/products/boxy4.jpg",
      title: "Boxy Tee – Premium",
      desc: "Boxy tee edisi premium dengan bahan bamboo cotton, lembut dan adem.",
      price: "Rp 135.000",
      sizes: "S – XL",
      material: "Bamboo Cotton",
    },
  ];

  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      {/* NAVBAR */}
      <header className="fixed inset-x-0 top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-neutral-900/60 border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full overflow-hidden">
              <img
                src="/logo.png"
                alt="Urban Void Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="font-semibold tracking-wide">Urban Void</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
            <a href="#portfolio" className="hover:text-white">
              Portfolio
            </a>
            <a href="#pricing" className="hover:text-white">
              Harga
            </a>
            <a href="#contact" className="hover:text-white">
              Kontak
            </a>
            <a
              href="https://wa.me/62895340992045"
              className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-white/5 px-4 py-2 hover:bg-white/10 transition"
            >
              WhatsApp Admin
            </a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <FadeUp className="relative overflow-hidden pt-28 sm:pt-32" id="home">
        <div className="absolute inset-0 -z-10">
          <div className="absolute -top-32 left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full blur-3xl bg-gradient-to-tr to-transparent" />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            Kaos <RotatingText /> Premium
          </h1>
          <p className="mt-4 text-white/70 max-w-2xl mx-auto">
            Oversize boxy tee dengan bahan cotton combed premium, nyaman dipakai
            sehari-hari atau untuk koleksi brand.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a
              href="#pricing"
              className="rounded-xl bg-emerald-500 px-5 py-3 font-medium transition hover:bg-emerald-400"
            >
              Lihat Harga
            </a>
            <a
              href="#portfolio"
              className="rounded-xl border border-white/15 px-5 py-3 font-medium hover:bg-white/5 transition"
            >
              Lihat Portfolio
            </a>
          </div>
        </div>
      </FadeUp>

      {/* PORTFOLIO */}
      <FadeUp
        className="py-16 sm:py-20 border-t border-white/10 bg-neutral-950"
        id="portfolio"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center">
            Portfolio Boxy Tee
          </h2>
          <p className="mt-2 text-white/70 text-center">
            Contoh hasil produksi kaos boxy premium.
          </p>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3">
            {portfolio.map((item) => (
              <FadeUp
                key={item.title}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 cursor-pointer"
              >
                <div
                  className="relative aspect-[3/4]"
                  onClick={() => setSelectedProduct(item)}
                >
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <figcaption className="absolute inset-x-0 bottom-0 p-3 text-xs bg-gradient-to-t from-black/60 to-transparent">
                  {item.title}
                </figcaption>
              </FadeUp>
            ))}
          </div>
        </div>
      </FadeUp>

      {/* MODAL DETAIL PRODUK */}
      {selectedProduct && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedProduct(null)}
        >
          <div
            className="relative max-w-3xl w-full bg-neutral-900 rounded-2xl overflow-hidden shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-3 right-3 text-white text-2xl"
            >
              ✕
            </button>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="relative h-80 md:h-full">
                <Image
                  src={selectedProduct.src}
                  alt={selectedProduct.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 flex flex-col justify-center">
                <h3 className="text-2xl font-bold">
                  {selectedProduct.title}
                </h3>
                <p className="mt-2 text-white/70">{selectedProduct.desc}</p>
                <div className="mt-4">
                  <p>
                    <span className="font-semibold">Harga:</span>{" "}
                    {selectedProduct.price}
                  </p>
                  <p>
                    <span className="font-semibold">Ukuran:</span>{" "}
                    {selectedProduct.sizes}
                  </p>
                  <p>
                    <span className="font-semibold">Material:</span>{" "}
                    {selectedProduct.material}
                  </p>
                </div>
                <a
                  href={`https://wa.me/62895340992045?text=Halo%20saya%20ingin%20pesan%20${encodeURIComponent(
                    selectedProduct.title
                  )}`}
                  target="_blank"
                  className="mt-6 inline-block rounded-xl bg-emerald-500 px-5 py-3 font-medium hover:bg-emerald-400 text-center"
                >
                  Pesan via WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* PRICING */}
      <FadeUp className="py-16 sm:py-20" id="pricing">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold">Harga Boxy Tee</h2>
          <p className="mt-2 text-white/70">
            Harga fleksibel sesuai jumlah pesanan.
          </p>
          <div className="mt-8 grid md:grid-cols-3 gap-4">
            {/* BASIC */}
            <FadeUp className="rounded-2xl border border-white/10 bg-white/5 p-6 transition-colors duration-300 hover:bg-emerald-500/20 hover:border-emerald-400/50">
              <h3 className="text-lg font-semibold">Basic</h3>
              <p className="mt-1 text-sm text-white/70">
                Boxy tee cotton combed 24s
              </p>
              <div className="mt-4 text-3xl font-bold">
                Rp75K
                <span className="text-base text-white/60">/pcs</span>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-white/70">
                <li>Min. 24 pcs</li>
                <li>Ukuran S–XL</li>
              </ul>
            </FadeUp>

            {/* PRO */}
            <FadeUp className="rounded-2xl border border-white/10 bg-white/5 p-6 transition-colors duration-300 hover:bg-emerald-500/30 hover:border-emerald-400/70">
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-200">
                Best Seller
              </div>
              <h3 className="mt-2 text-lg font-semibold">Pro</h3>
              <p className="mt-1 text-sm text-white/70">
                Boxy tee combed 24s + label custom
              </p>
              <div className="mt-4 text-3xl font-bold">
                Rp95K
                <span className="text-base text-white/60">/pcs</span>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-white/70">
                <li>Min. 36 pcs</li>
                <li>Free mockup</li>
              </ul>
            </FadeUp>

            {/* PREMIUM */}
            <FadeUp className="rounded-2xl border border-white/10 bg-white/5 p-6 transition-colors duration-300 hover:bg-emerald-500/20 hover:border-emerald-400/50">
              <h3 className="text-lg font-semibold">Premium</h3>
              <p className="mt-1 text-sm text-white/70">
                Boxy tee dengan material khusus
              </p>
              <div className="mt-4 text-3xl font-bold">Custom</div>
              <ul className="mt-4 space-y-2 text-sm text-white/70">
                <li>Min. 24 pcs</li>
                <li>Konsultasi material & warna</li>
              </ul>
            </FadeUp>
          </div>
        </div>
      </FadeUp>

      {/* CONTACT */}
      <FadeUp
        className="py-16 sm:py-20 border-t border-white/10"
        id="contact"
      >
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold">Pesan Boxy Tee</h2>
          <p className="mt-2 text-white/70">
            Konsultasi ukuran, warna, dan jumlah langsung via WhatsApp.
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const wa = `https://wa.me/62895340992045?text=Halo%20Urban%20Void,%20saya%20${encodeURIComponent(
                name
              )}.%20Email:%20${encodeURIComponent(
                email
              )}.%20${encodeURIComponent(message)}`;
              window.open(wa, "_blank");
            }}
            className="mt-6 space-y-3"
          >
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Nama"
              className="w-full rounded-xl border border-white/15 bg-neutral-900 px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-500"
            />
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email (opsional)"
              className="w-full rounded-xl border border-white/15 bg-neutral-900 px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-500"
            />
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Ceritakan kebutuhan kamu…"
              rows={4}
              className="w-full rounded-xl border border-white/15 bg-neutral-900 px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-500"
            />
            <button className="w-full rounded-xl bg-emerald-500 px-5 py-3 font-medium hover:bg-emerald-400">
              Kirim ke WhatsApp
            </button>
          </form>
        </div>
      </FadeUp>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-sm text-white/70">
            © {new Date().getFullYear()} Urban Void. All rights reserved.
          </span>
          <div className="flex items-center gap-3 text-sm">
            <a
              href="https://www.instagram.com/urbanvoid88"
              className="rounded-lg border border-white/15 px-3 py-2 hover:bg-white/5"
            >
              Instagram
            </a>
            <a
              href="https://wa.me/62895340992045"
              className="rounded-lg border border-white/15 px-3 py-2 hover:bg-white/5"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
