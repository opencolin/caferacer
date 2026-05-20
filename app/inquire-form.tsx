"use client";

import { useActionState } from "react";
import { inquireMembership, type InquiryState } from "./actions";

const initial: InquiryState = { status: "idle" };

export function InquireForm() {
  const [state, action, pending] = useActionState(inquireMembership, initial);

  return (
    <>
      <form action={action} className="cta-form">
        <input
          type="email"
          name="email"
          placeholder="your email, please"
          aria-label="email"
          required
          autoComplete="email"
        />
        <button type="submit" disabled={pending}>
          {pending ? "Sending" : "Sign Up"}
        </button>
      </form>
      <p className="fine">
        Club opens spring 2026 · capped at 200 riders · we will be in touch
      </p>
      {state.status !== "idle" && (
        <p className={`result ${state.status}`}>{state.message}</p>
      )}
    </>
  );
}
