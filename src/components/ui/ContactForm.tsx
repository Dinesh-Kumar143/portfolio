"use client";
import { useState, FormEvent } from "react";
import Button from "./Button";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    const formData = new FormData(e.currentTarget);
    const data = {
      firstName: formData.get("firstName") as string,
      lastName: formData.get("lastName") as string,
      email: formData.get("email") as string,
      subject: formData.get("subject") as string,
      message: formData.get("message") as string,
      // recaptchaToken will be added here when you implement reCAPTCHA
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to send message");
      }

      setStatus("sent");
      (e.target as HTMLFormElement).reset();
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Something went wrong");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <div className="border-0 border-gray-600 rounded-2xl shadow-[0_4px_16px_rgba(0,0,0,0.1),0_12px_40px_rgba(0,0,0,0.12)] p-4">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {/* Name row */}
        <div className="grid grid-cols-2 gap-3 max-sm:grid-cols-1">
          <div className="flex flex-col gap-1.5">
            <label className="text-[10px] font-semibold tracking-[0.14em] uppercase text-[#6b6b6b]">
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              required
              placeholder="John"
              className="bg-white border border-[#e4e0da] rounded-[4px] px-4 py-3 font-sans text-sm text-[#1a1a1a] outline-none transition-all focus:border-[#c8622a] focus:shadow-[0_0_0_3px_rgba(200,98,42,0.1)] placeholder:text-[#bbb]"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-[10px] font-semibold tracking-[0.14em] uppercase text-[#6b6b6b]">
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              required
              placeholder="Doe"
              className="bg-white border border-[#e4e0da] rounded-[4px] px-4 py-3 font-sans text-sm text-[#1a1a1a] outline-none transition-all focus:border-[#c8622a] focus:shadow-[0_0_0_3px_rgba(200,98,42,0.1)] placeholder:text-[#bbb]"
            />
          </div>
        </div>

        {/* Email */}
        <div className="flex flex-col gap-1.5">
          <label className="text-[10px] font-semibold tracking-[0.14em] uppercase text-[#6b6b6b]">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            required
            placeholder="john@company.com"
            className="bg-white border border-[#e4e0da] rounded-[4px] px-4 py-3 font-sans text-sm text-[#1a1a1a] outline-none transition-all focus:border-[#c8622a] focus:shadow-[0_0_0_3px_rgba(200,98,42,0.1)] placeholder:text-[#bbb]"
          />
        </div>

        {/* Subject */}
        <div className="flex flex-col gap-1.5">
          <label className="text-[10px] font-semibold tracking-[0.14em] uppercase text-[#6b6b6b]">
            Subject
          </label>
          <input
            type="text"
            name="subject"
            placeholder="Project Inquiry · Collaboration · Hello"
            className="bg-white border border-[#e4e0da] rounded-[4px] px-4 py-3 font-sans text-sm text-[#1a1a1a] outline-none transition-all focus:border-[#c8622a] focus:shadow-[0_0_0_3px_rgba(200,98,42,0.1)] placeholder:text-[#bbb]"
          />
        </div>

        {/* Message */}
        <div className="flex flex-col gap-1.5">
          <label className="text-[10px] font-semibold tracking-[0.14em] uppercase text-[#6b6b6b]">
            Message
          </label>
          <textarea
            name="message"
            required
            rows={5}
            minLength={10}
            maxLength={5000}
            placeholder="Tell me about your project or opportunity..."
            className="bg-white border border-[#e4e0da] rounded-[4px] px-4 py-3 font-sans text-sm text-[#1a1a1a] outline-none transition-all focus:border-[#c8622a] focus:shadow-[0_0_0_3px_rgba(200,98,42,0.1)] placeholder:text-[#bbb] resize-y"
          />
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <Button
            type="submit"
            variant="accent"
            disabled={status === "sending"}
            className="min-w-[180px] justify-center"
          >
            {status === "idle" && (
              <>
                Send Message
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
              </>
            )}
            {status === "sending" && "Sending…"}
            {status === "sent" && "Message Sent ✓"}
            {status === "error" && "Try Again"}
          </Button>
          <span className="text-[12px] text-[#6b6b6b]">I typically reply within 24 hours.</span>
        </div>

        {status === "sent" && (
          <p className="text-[13px] font-medium text-green-600">
            Thank you! I&apos;ll be in touch within 24 hours.
          </p>
        )}

        {status === "error" && (
          <p className="text-[13px] font-medium text-red-600">
            {errorMessage || "Failed to send message. Please try again."}
          </p>
        )}
      </form>
    </div>
  );
}