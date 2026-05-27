import React, { useRef, useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';
import emailjs from "@emailjs/browser";

export const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement | null>(null);

  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState<"success" | "error" | "">("");

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    // Récupération des champs
    const formData = new FormData(form.current);

    const name = formData.get("name")?.toString().trim();
    const email = formData.get("email")?.toString().trim();
    const subject = formData.get("subject")?.toString().trim();
    const messageText = formData.get("message")?.toString().trim();

    // Vérification des champs vides
    if (!name || !email || !subject || !messageText) {
      setMessageType("error");
      setMessage("Veuillez remplir tous les champs.");
      return;
    }

    emailjs
      .sendForm(
        "service_3l2c432",
        "template_fbq4jqp",
        form.current,
        "YtOxLgVhD1w0PCQwi"
      )
      .then(() => {
        setMessageType("success");
        setMessage("Message envoyé avec succès !");
        form.current?.reset();
      })
      .catch((error) => {
        setMessageType("error");
        setMessage("Erreur lors de l'envoi : " + error.text);
      });
  };

  return (
    <section id="contact" className="section-padding bg-slate-900/50">
      <div className="container mx-auto">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-brand-secondary uppercase tracking-[0.3em] text-sm font-bold mb-4">
              Contact
            </h2>

            <h3 className="text-4xl font-bold text-white mb-4">
              Collaborons pour votre{" "}
              <span className="text-gradient-gold">Prochaine Étape</span>
            </h3>

            <p className="text-slate-400">
              "Construisons ensemble une performance financière durable."
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            <div className="space-y-8">
              <div className="glass-card p-6 flex items-start gap-4">
                <div className="p-3 rounded-lg bg-brand-secondary/10 text-brand-secondary">
                  <Phone size={24} />
                </div>

                <div>
                  <h4 className="text-white font-bold mb-1">Téléphone</h4>
                  <p className="text-slate-400">+261 34 58 703 06</p>
                </div>
              </div>

              <div className="glass-card p-6 flex items-start gap-4">
                <div className="p-3 rounded-lg bg-brand-secondary/10 text-brand-secondary">
                  <Mail size={24} />
                </div>

                <div>
                  <h4 className="text-white font-bold mb-1">Email</h4>
                  <p className="text-slate-400 text-sm">
                    brichardap19.aps2b@gmail.com
                  </p>
                </div>
              </div>

              <div className="glass-card p-6 flex items-start gap-4">
                <div className="p-3 rounded-lg bg-brand-secondary/10 text-brand-secondary">
                  <MapPin size={24} />
                </div>

                <div>
                  <h4 className="text-white font-bold mb-1">Adresse</h4>
                  <p className="text-slate-400">
                    Lot PRES 64 DC Antanetibe Ilafy
                  </p>
                </div>
              </div>

              <a
                href="https://wa.me/261345870306"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-400 border border-emerald-600/50 rounded-xl flex items-center justify-center gap-2 transition-all font-bold"
              >
                <MessageSquare size={20} />
                WhatsApp Direct
              </a>
            </div>

            <div className="lg:col-span-2">
              <form
                ref={form}
                onSubmit={sendEmail}
                className="glass-card p-8 space-y-6"
              >
                {/* Message */}
                {message && (
                  <div
                    className={`p-4 rounded-lg text-sm font-medium ${
                      messageType === "success"
                        ? "bg-green-500/20 text-green-400 border border-green-500/30"
                        : "bg-red-500/20 text-red-400 border border-red-500/30"
                    }`}
                  >
                    {message}
                  </div>
                )}

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm text-slate-400 font-medium">
                      Nom Complet
                    </label>

                    <input
                      name="name"
                      type="text"
                      className="w-full bg-slate-800/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-brand-secondary outline-none transition-colors"
                      placeholder="John Doe"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm text-slate-400 font-medium">
                      Email Professionnel
                    </label>

                    <input
                      name="email"
                      type="email"
                      className="w-full bg-slate-800/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-brand-secondary outline-none transition-colors"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm text-slate-400 font-medium">
                    Sujet
                  </label>

                  <input
                    name="subject"
                    type="text"
                    className="w-full bg-slate-800/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-brand-secondary outline-none transition-colors"
                    placeholder="Opportunité de collaboration"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm text-slate-400 font-medium">
                    Message
                  </label>

                  <textarea
                    name="message"
                    rows={4}
                    className="w-full bg-slate-800/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-brand-secondary outline-none transition-colors"
                    placeholder="Votre message..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-brand-secondary text-brand-primary font-bold rounded-lg flex items-center justify-center gap-2 hover:bg-opacity-90 transition-all shadow-lg"
                >
                  Envoyer le message <Send size={18} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};