"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { MagneticButton } from "@/components/ui/MagneticButton";

const schema = z.object({
  name: z.string().min(1, "Please enter your name").max(120, "Name is too long"),
  email: z.string().min(1, "Please enter your email").email("Please enter a valid email").max(200),
  phone: z
    .string()
    .min(1, "Please enter your phone number")
    .max(40, "Phone number is too long")
    .regex(/^[\d\s\+\-\(\)]+$/, "Please enter a valid phone number"),
  fit: z
    .string()
    .min(12, "Tell us a little more — at least a sentence or two")
    .max(4000, "Please keep it under 4000 characters"),
  website: z.string().max(0).optional(), // honeypot — must stay empty
});

type FormValues = z.infer<typeof schema>;

type SubmitState = "idle" | "submitting" | "success" | "error";

export function InviteForm() {
  const [submitState, setSubmitState] = useState<SubmitState>("idle");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { website: "" },
  });

  async function onSubmit(data: FormValues) {
    // Silently succeed if honeypot filled
    if (data.website) {
      setSubmitState("success");
      return;
    }

    setSubmitState("submitting");
    try {
      const res = await fetch("/api/gathering-inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          phone: data.phone,
          fit: data.fit,
          gathering: "sri-lanka-aug-2026",
          source: "page-form",
        }),
      });
      if (res.ok || res.status === 200) {
        setSubmitState("success");
        if (typeof window !== "undefined" && (window as typeof window & { gtag?: Function }).gtag) {
          (window as typeof window & { gtag: Function }).gtag("event", "gathering_invite_requested");
        }
      } else if (res.status === 429) {
        setSubmitState("error");
      } else {
        setSubmitState("error");
      }
    } catch {
      setSubmitState("error");
    }
  }

  const isSubmitting = submitState === "submitting";

  return (
    <section id="request-invite" className="bg-[var(--paper)] w-full py-[var(--space-24)] pb-[var(--space-32)]">
      <div className="container max-w-[720px] mx-auto px-6 lg:px-16">

        {/* Above-form header */}
        <div className="text-center mb-10">
          <span className="t-eyebrow text-[var(--ink-mute)] block mb-4">REQUEST YOUR INVITE</span>
          <h2 className="t-display-2 text-[var(--ink)] mb-4">Tell us a little about you.</h2>
          <p className="t-h3-italic text-[var(--denim)] max-w-[480px] mx-auto">
            <em>We read every application ourselves.</em>
          </p>
        </div>

        {submitState === "success" ? (
          /* Success state */
          <div className="text-center py-16">
            <p
              className="text-[var(--clay)] mb-4"
              style={{
                fontFamily: "var(--font-brush)",
                fontSize: "clamp(36px, 5vw, 56px)",
                lineHeight: 1.1,
              }}
            >
              we got it.{" "}
              <span style={{ color: "var(--wheat)" }}>✦</span>
            </p>
            <p className="t-body text-[var(--ink-soft)]">
              Tanya &amp; Keerthi will reply from{" "}
              <a
                href="mailto:hello@lostandfoundtravel.com"
                className="text-[var(--denim)] underline underline-offset-2"
              >
                hello@lostandfoundtravel.com
              </a>
              .
            </p>
          </div>
        ) : (
          /* Form */
          <form onSubmit={handleSubmit(onSubmit)} noValidate>

            {/* Honeypot — hidden from real users */}
            <input
              type="text"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              {...register("website")}
              style={{ position: "absolute", left: -9999, width: 1, height: 1, opacity: 0 }}
            />

            {/* Name */}
            <FormField
              id="name"
              label="NAME"
              error={errors.name?.message}
            >
              <input
                id="name"
                type="text"
                className="input"
                placeholder="your full name"
                disabled={isSubmitting}
                aria-required="true"
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? "name-error" : undefined}
                {...register("name")}
              />
            </FormField>

            {/* Email */}
            <FormField
              id="email"
              label="EMAIL"
              error={errors.email?.message}
            >
              <input
                id="email"
                type="email"
                className="input"
                placeholder="where we can write back"
                disabled={isSubmitting}
                aria-required="true"
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "email-error" : undefined}
                {...register("email")}
              />
            </FormField>

            {/* Phone */}
            <FormField
              id="phone"
              label="PHONE NUMBER"
              error={errors.phone?.message}
            >
              <input
                id="phone"
                type="tel"
                className="input"
                placeholder="with country code"
                disabled={isSubmitting}
                aria-required="true"
                aria-invalid={!!errors.phone}
                aria-describedby={errors.phone ? "phone-error" : undefined}
                {...register("phone")}
              />
            </FormField>

            {/* Fit textarea */}
            <FormField
              id="fit"
              label="HOW ARE YOU A RIGHT FIT TO JOIN US?"
              error={errors.fit?.message}
            >
              <textarea
                id="fit"
                className="input resize-y"
                placeholder="as much or as little as you like — three lines is enough"
                disabled={isSubmitting}
                aria-required="true"
                aria-invalid={!!errors.fit}
                aria-describedby={errors.fit ? "fit-error" : undefined}
                style={{ minHeight: 140 }}
                {...register("fit")}
              />
            </FormField>

            {/* Error message */}
            {submitState === "error" && (
              <p className="t-body-italic text-[var(--denim)] mb-6 text-center">
                <em>
                  Something went sideways on our end. Try again, or write to us directly at{" "}
                  <a href="mailto:hello@lostandfoundtravel.com" className="underline underline-offset-2">
                    hello@lostandfoundtravel.com
                  </a>
                  .
                </em>
              </p>
            )}

            {/* Submit */}
            <div className="flex flex-col items-center gap-4 mt-8">
              <MagneticButton
                type="submit"
                disabled={isSubmitting}
                aria-label="Send my application"
              >
                {isSubmitting ? "Sending…" : "Send My Application →"}
              </MagneticButton>
              <p className="t-mono text-[var(--ink-mute)] text-xs tracking-widest text-center">
                WE&apos;LL BE IN TOUCH WHEN WE&apos;VE READ IT.
              </p>
            </div>

          </form>
        )}
      </div>
    </section>
  );
}

function FormField({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-7">
      <label
        htmlFor={id}
        className="label"
        style={{
          display: "flex",
          gap: 2,
        }}
      >
        {label}
        <span aria-hidden="true" className="text-[var(--clay)]" style={{ marginLeft: 2 }}>
          *
        </span>
      </label>
      {children}
      {error && (
        <p
          id={`${id}-error`}
          role="alert"
          style={{
            fontFamily: "var(--font-body)",
            fontStyle: "italic",
            fontSize: "var(--type-body-sm)",
            color: "var(--clay-deep)",
            marginTop: 6,
          }}
        >
          {error}
        </p>
      )}
    </div>
  );
}
