"use client";

import { useRef, useState } from "react";
import { services, site, whatsappLink } from "@/lib/site";

type FormValues = {
  nom: string;
  telephone: string;
  email: string;
  prestation: string;
  localisation: string;
  surface: string;
  delai: string;
  message: string;
};

type Action = "whatsapp" | "email";

const initialValues: FormValues = {
  nom: "",
  telephone: "",
  email: "",
  prestation: "",
  localisation: "",
  surface: "",
  delai: "",
  message: "",
};

const requiredFields: (keyof FormValues)[] = [
  "nom",
  "telephone",
  "prestation",
  "localisation",
  "message",
];

export function buildMessage(values: FormValues): string {
  const details = [
    values.nom.trim() && `Nom : ${values.nom.trim()}`,
    values.telephone.trim() && `Téléphone : ${values.telephone.trim()}`,
    values.email.trim() && `E-mail : ${values.email.trim()}`,
    values.prestation.trim() && `Prestation : ${values.prestation.trim()}`,
    values.localisation.trim() &&
      `Localisation du terrain : ${values.localisation.trim()}`,
    values.surface.trim() && `Surface : ${values.surface.trim()}`,
    values.delai.trim() && `Délai souhaité : ${values.delai.trim()}`,
  ].filter(Boolean);

  const sections = ["Demande de devis — IdéalTP", details.join("\n")];

  if (values.message.trim()) {
    sections.push(`Projet :\n${values.message.trim()}`);
  }

  return sections.filter(Boolean).join("\n\n");
}

export default function DevisForm() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<Partial<Record<keyof FormValues, string>>>({});
  const [submitCount, setSubmitCount] = useState(0);
  const [confirmation, setConfirmation] = useState("");
  const formRef = useRef<HTMLFormElement | null>(null);
  const fieldRefs = useRef<Partial<Record<keyof FormValues, HTMLElement | null>>>({});

  const setValue = (field: keyof FormValues, value: string) => {
    setValues((current) => ({ ...current, [field]: value }));

    if (errors[field]) {
      setErrors((current) => {
        const next = { ...current };
        delete next[field];
        return next;
      });
    }
  };

  const validate = () => {
    const nextErrors: Partial<Record<keyof FormValues, string>> = {};

    requiredFields.forEach((field) => {
      if (!values[field].trim()) {
        nextErrors[field] = "Ce champ est obligatoire.";
      }
    });

    setErrors(nextErrors);
    setSubmitCount((count) => count + 1);

    const firstInvalid = requiredFields.find((field) => nextErrors[field]);

    if (firstInvalid) {
      fieldRefs.current[firstInvalid]?.focus();
      setConfirmation("");
      return false;
    }

    return true;
  };

  const handleSubmit = (action: Action) => {
    if (!validate()) return;
    if (!formRef.current?.reportValidity()) {
      setConfirmation("");
      return;
    }

    const message = buildMessage(values);

    if (action === "whatsapp") {
      window.open(whatsappLink(message), "_blank", "noopener,noreferrer");
      setConfirmation(
        "Votre message est prêt : terminez l’envoi dans WhatsApp.",
      );
      return;
    }

    const subject = `Demande de devis — ${values.prestation} — ${values.nom}`;
    const mailto = `mailto:${site.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(message)}`;
    window.open(mailto, "_self");
    setConfirmation(
      "Votre message est prêt : terminez l’envoi dans votre messagerie.",
    );
  };

  const errorCount = Object.keys(errors).length;
  const summary =
    submitCount > 0 && errorCount > 0
      ? `${errorCount} ${errorCount > 1 ? "champs sont" : "champ est"} à compléter`
      : "";

  const fieldClass = (field: keyof FormValues) =>
    `mt-2 w-full border bg-white px-4 py-3 text-para text-ink-900 transition-colors duration-300 focus:border-ink-900 focus:outline-none ${
      errors[field] ? "border-red-600" : "border-ink-200"
    }`;

  const describedBy = (field: keyof FormValues) =>
    errors[field] ? `${field}-error` : undefined;

  const errorMessage = (field: keyof FormValues) =>
    errors[field] ? (
      <p id={`${field}-error`} className="mt-2 text-para-s text-red-700">
        {errors[field]}
      </p>
    ) : null;

  const requiredMark = <span className="text-gold-500" aria-hidden="true"> *</span>;

  return (
    <form ref={formRef} className="border border-ink-100 bg-white p-6 md:p-8">
      <p className="text-para-s text-ink-500">
        <span className="text-gold-500" aria-hidden="true">*</span> champs obligatoires
      </p>

      <p aria-live="polite" className="mt-4 min-h-[1.5rem] text-para-s text-red-700">
        {summary}
      </p>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="nom" className="text-para-xs font-semibold uppercase tracking-[0.12em] text-ink-500">
            Nom{requiredMark}
          </label>
          <input
            ref={(node) => {
              fieldRefs.current.nom = node;
            }}
            id="nom"
            name="nom"
            type="text"
            required
            value={values.nom}
            onChange={(event) => setValue("nom", event.target.value)}
            aria-invalid={errors.nom ? "true" : undefined}
            aria-describedby={describedBy("nom")}
            className={fieldClass("nom")}
          />
          {errorMessage("nom")}
        </div>

        <div>
          <label htmlFor="telephone" className="text-para-xs font-semibold uppercase tracking-[0.12em] text-ink-500">
            Téléphone{requiredMark}
          </label>
          <input
            ref={(node) => {
              fieldRefs.current.telephone = node;
            }}
            id="telephone"
            name="telephone"
            type="tel"
            required
            value={values.telephone}
            onChange={(event) => setValue("telephone", event.target.value)}
            aria-invalid={errors.telephone ? "true" : undefined}
            aria-describedby={describedBy("telephone")}
            className={fieldClass("telephone")}
          />
          {errorMessage("telephone")}
        </div>

        <div>
          <label htmlFor="email" className="text-para-xs font-semibold uppercase tracking-[0.12em] text-ink-500">
            E-mail
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={values.email}
            onChange={(event) => setValue("email", event.target.value)}
            className={fieldClass("email")}
          />
        </div>

        <div>
          <label htmlFor="prestation" className="text-para-xs font-semibold uppercase tracking-[0.12em] text-ink-500">
            Prestation{requiredMark}
          </label>
          <select
            ref={(node) => {
              fieldRefs.current.prestation = node;
            }}
            id="prestation"
            name="prestation"
            required
            value={values.prestation}
            onChange={(event) => setValue("prestation", event.target.value)}
            aria-invalid={errors.prestation ? "true" : undefined}
            aria-describedby={describedBy("prestation")}
            className={fieldClass("prestation")}
          >
            <option value="">Sélectionner une prestation</option>
            {services.map((service) => (
              <option key={service.slug} value={service.title}>
                {service.title}
              </option>
            ))}
            <option value="Autre / je ne sais pas">Autre / je ne sais pas</option>
          </select>
          {errorMessage("prestation")}
        </div>

        <div>
          <label htmlFor="localisation" className="text-para-xs font-semibold uppercase tracking-[0.12em] text-ink-500">
            Où se situe le terrain ?{requiredMark}
          </label>
          <input
            ref={(node) => {
              fieldRefs.current.localisation = node;
            }}
            id="localisation"
            name="localisation"
            type="text"
            required
            value={values.localisation}
            onChange={(event) => setValue("localisation", event.target.value)}
            aria-invalid={errors.localisation ? "true" : undefined}
            aria-describedby={describedBy("localisation")}
            className={fieldClass("localisation")}
          />
          {errorMessage("localisation")}
        </div>

        <div>
          <label htmlFor="surface" className="text-para-xs font-semibold uppercase tracking-[0.12em] text-ink-500">
            Surface approximative, si connue
          </label>
          <input
            id="surface"
            name="surface"
            type="text"
            value={values.surface}
            onChange={(event) => setValue("surface", event.target.value)}
            className={fieldClass("surface")}
          />
        </div>

        <div className="md:col-span-2">
          <label htmlFor="delai" className="text-para-xs font-semibold uppercase tracking-[0.12em] text-ink-500">
            Délai souhaité
          </label>
          <select
            id="delai"
            name="delai"
            value={values.delai}
            onChange={(event) => setValue("delai", event.target.value)}
            className={fieldClass("delai")}
          >
            <option value="">Sélectionner un délai</option>
            {site.delais.map((delai) => (
              <option key={delai} value={delai}>
                {delai}
              </option>
            ))}
          </select>
        </div>

        <div className="md:col-span-2">
          <label htmlFor="message" className="text-para-xs font-semibold uppercase tracking-[0.12em] text-ink-500">
            Décrivez votre projet{requiredMark}
          </label>
          <textarea
            ref={(node) => {
              fieldRefs.current.message = node;
            }}
            id="message"
            name="message"
            required
            rows={7}
            value={values.message}
            onChange={(event) => setValue("message", event.target.value)}
            aria-invalid={errors.message ? "true" : undefined}
            aria-describedby={describedBy("message")}
            className={fieldClass("message")}
          />
          {errorMessage("message")}
        </div>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <button
          type="button"
          onClick={() => handleSubmit("whatsapp")}
          className="inline-flex items-center justify-center bg-gold-400 px-6 py-4 text-para-s font-semibold uppercase tracking-[0.08em] text-ink-900 transition-colors duration-300 hover:bg-gold-300"
        >
          Envoyer via WhatsApp
        </button>
        <button
          type="button"
          onClick={() => handleSubmit("email")}
          className="inline-flex items-center justify-center border border-ink-300 px-6 py-4 text-para-s font-semibold uppercase tracking-[0.08em] text-ink-900 transition-colors duration-300 hover:border-ink-900"
        >
          Envoyer par e-mail
        </button>
      </div>

      {confirmation && (
        <p className="mt-5 text-para-s text-ink-600">{confirmation}</p>
      )}
    </form>
  );
}
