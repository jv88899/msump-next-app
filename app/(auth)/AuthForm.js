"use client";

import React from "react";

export default function AuthForm({ handleSubmit }) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <form onSubmit={(e) => handleSubmit(e, email, password)}>
      <input
        className="w-full mb-6"
        type="email"
        placeholder="Email Address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        className="w-full mb-6"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button className="btn-primary w-full block text-center rounded-md p-2 text-lg">
        Submit
      </button>
    </form>
  );
}
