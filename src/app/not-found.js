"use client";

import { useRouter } from "next/navigation";

export default function Custom404() {
  const router = useRouter();

  return (
    <div className="custom-404">
      <div className="error-content">
        <h1 className="error-title">404</h1>
        <p className="error-message">
          Oops! The page you're looking for doesn't exist.
        </p>
        <button className="error-btn" onClick={() => router.push("/")}>
          Go Back Home
        </button>
      </div>
    </div>
  );
}
