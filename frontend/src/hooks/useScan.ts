"use client";

import { useState } from "react";

export function useScan() {
  const [stage, setStage] =
    useState("idle");

  const [result, setResult] =
    useState(null);

  const [error, setError] =
    useState("");

  return {
    stage,
    setStage,

    result,
    setResult,

    error,
    setError,
  };
}