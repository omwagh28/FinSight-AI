"use client";

import { useState } from "react";

interface Props {
  documentId: string;
}

interface Message {
  role: "user" | "assistant";
  content: string;
}

const suggestedQuestions = [
  "Why is debt risk high?",
  "Summarize the key risks.",
  "What are the biggest concerns?",
  "Explain the liquidity problem.",
];

export default function ChatPanel({
  documentId,
}: Props) {
  const [input, setInput] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const [messages, setMessages] =
    useState<Message[]>([]);

  async function sendMessage(
    question?: string
  ) {
    const text =
      question || input;


    if (!text.trim()) return;

    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        content: text,
      },
    ]);

    setInput("");
    setLoading(true);

   try {

      const response = await fetch(
        "http://localhost:8000/api/v1/chat",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify({
            documentId,
            question: text,
          }),
        }
      );

      const data =
        await response.json();

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            data.answer ||
            "No answer available.",
        },
      ]);

    } catch (error) {

      console.error(error);

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Unable to reach Financial Intelligence Agent.",
        },
      ]);

    } finally {

      setLoading(false);

    }
  }

  return (
    <section className="mt-28">
      <div className="section-divider mb-14" />

      <div className="mb-10">
        <p className="label-wide mb-5">
          FINANCIAL INTELLIGENCE CHAT
        </p>

        <h3
          className="
            display
            text-[clamp(3rem,5vw,5rem)]
            leading-[1.02]
          "
        >
          Ask anything about
          <br />
          this report.
        </h3>

        <p
          className="
            mt-6
            max-w-6xl

           text-[24px]
           leading-10

            text-[var(--color-ink-mid)]
          "
        >
          Ask follow-up questions
          about risks, metrics,
          debt exposure, liquidity,
          management commentary,
          or financial performance.
        </p>
      </div>

      {messages.length === 0 && (
        <div className="flex flex-wrap gap-4 mb-12">
          {suggestedQuestions.map(
            (question) => (
              <button
                key={question}
                onClick={() =>
                  sendMessage(question)
                }
                className="
                  px-8
                  py-4

                  border
                  border-[var(--color-rule)]

                  rounded-full

                  text-lg


                  transition-all
                  duration-300

                  hover:border-[var(--color-accent)]
                  hover:bg-[rgba(255,255,255,0.02)]
                "
              >
                {question}
              </button>
            )
          )}
        </div>
      )}

      {(messages.length > 0 ||
        loading) && (
        <div className="space-y-8 mb-12">
          {messages.map(
            (
              message,
              index
            ) => (
              <div
                key={index}
                className={
                  message.role ===
                  "assistant"
                    ? `
                      border-l-2
                      border-[var(--color-accent)]
                      pl-8
                      py-2
                    `
                    : `
                      border
                      border-[var(--color-rule)]

                      rounded-[28px]

                      p-6

                      bg-[rgba(255,255,255,0.01)]
                    `
                }
              >
                <div
                  className="
                    label-wide
                    mb-4
                  "
                >
                  {message.role ===
                  "user"
                    ? "YOU"
                    : "FINSIGHT"}
                </div>

                <div
                  className="
                    text-[22px]
                    leading-8

                    whitespace-pre-wrap

                    text-[var(--color-ink-mid)]

                    max-w-5xl
                  "
                >
                  {message.content}
                </div>
              </div>
            )
          )}

          {loading && (
            <div
              className="
                border-l-2
                border-[var(--color-accent)]
                pl-10
                py-4
              "
            >
              <div
                className="
                  label-wide
                  mb-4
                "
              >
                FINSIGHT
              </div>

              <div
                className="
                  text-lg
                  italic
                  text-[var(--color-ink-low)]
                "
              >
                Thinking...
              </div>
            </div>
          )}
        </div>
      )}

      <form
        onSubmit={(e) => {
          e.preventDefault();
          sendMessage();
        }}
        className="flex gap-4"
      >
        <input
          value={input}
          onChange={(e) =>
            setInput(
              e.target.value
            )
          }
          placeholder="Ask about this report..."
          className="
            flex-1

            bg-transparent

            border
            border-[var(--color-rule)]

            rounded-full

            px-8
            py-6

            text-xl

            outline-none

            focus:border-[var(--color-accent)]
          "
        />

        <button
          type="submit"
          disabled={loading}
          className="try-now"
        >
          <span
            className="try-now-border"
            aria-hidden
          />

          <span className="try-now-inner">
            <span className="display-italic">
              Ask
            </span>

            <span
              className="
                text-[var(--color-accent)]
              "
            >
              ↗
            </span>
          </span>
        </button>
      </form>
    </section>
  );
}