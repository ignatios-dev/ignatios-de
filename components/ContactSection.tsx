'use client';

import { useState, type FormEvent } from 'react';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    description: '',
  });
  const [honeypot, setHoneypot] = useState('');

  function getWhatsAppNumber(): string {
    const k = [5, 2, 9, 12, 11, 1, 4, 3, 6, 10, 0, 7, 8];
    const d = ['4','7','9','0','0','4','0','7','6','1','5','1','5'];
    let n = '';
    for (let i = 0; i < k.length; i++) n += d[k[i]];
    return n;
  }

  function buildMessage(): string {
    return [
      'Projektanfrage über ignatios.de',
      '',
      `Name: ${formData.name}`,
      `Kontakt: ${formData.contact}`,
      '',
      'Beschreibung:',
      formData.description,
    ]
      .filter(Boolean)
      .join('\n');
  }

  function handleWhatsAppSubmit(e: FormEvent) {
    e.preventDefault();
    if (honeypot) return;
    const message = encodeURIComponent(buildMessage());
    window.open(
      `https://wa.me/${getWhatsAppNumber()}?text=${message}`,
      '_blank',
    );
  }

  const isValid =
    formData.name.trim() &&
    formData.contact.trim() &&
    formData.description.trim();

  const inputClass =
    'w-full px-4 py-3 border border-gray-200 rounded-xl bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all';

  return (
    <form className="space-y-6 max-w-lg" onSubmit={handleWhatsAppSubmit}>
      <input
        type="text"
        name="website"
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
        value={honeypot}
        onChange={(e) => setHoneypot(e.target.value)}
      />

      <div>
        <label className="block text-sm font-semibold text-gray-900 mb-2">
          Name *
        </label>
        <input
          type="text"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className={inputClass}
          placeholder="Ihr Name"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-900 mb-2">
          E-Mail oder WhatsApp *
        </label>
        <input
          type="text"
          required
          value={formData.contact}
          onChange={(e) =>
            setFormData({ ...formData, contact: e.target.value })
          }
          className={inputClass}
          placeholder="ihre@email.de oder +49 ..."
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-900 mb-2">
          Was möchten Sie lösen? *
        </label>
        <textarea
          required
          rows={4}
          value={formData.description}
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
          className={`${inputClass} resize-y`}
          placeholder="Beschreiben Sie kurz Ihr Vorhaben oder Problem..."
        />
      </div>


      <div className="pt-2">
        <button
          type="submit"
          disabled={!isValid}
          className="px-8 py-3.5 bg-[#25D366] text-white font-semibold rounded-full hover:bg-[#1fb855] hover:shadow-lg transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed"
        >
          Per WhatsApp senden
        </button>
      </div>
    </form>
  );
}
