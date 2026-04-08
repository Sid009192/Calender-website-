"use client";

import { useState, useEffect } from "react";

interface NotesPanelProps {
  month: number;
  year: number;
}

export default function NotesPanel({ month, year }: NotesPanelProps) {
  const [notes, setNotes] = useState("");

  const monthLabel = new Date(year, month).toLocaleString("default", {
    month: "long",
  });
  const storageKey = `calendar-notes-${month}-${year}`;

  useEffect(() => {
    const savedNotes = localStorage.getItem(storageKey);
    if (savedNotes) {
      setNotes(savedNotes);
    } else {
      setNotes(
        "Welcome to your calendar notes! Add reminders, events, or thoughts here."
      );
    }
  }, [month, year, storageKey]);

  const handleSave = () => {
    localStorage.setItem(storageKey, notes);
    alert("Notes saved!");
  };

  const handleClear = () => {
    setNotes("");
    localStorage.removeItem(storageKey);
  };

  return (
    <div className="notes-glass flex h-full min-h-[280px] w-full flex-col p-5 text-white sm:p-6">
      <h3 className="mb-1 text-lg font-semibold tracking-wide text-slate-50">
        Notes
      </h3>
      <p className="mb-3 text-xs text-slate-400">
        Saved for {monthLabel} {year}
      </p>
      <textarea
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        placeholder="Add your notes here..."
        className="min-h-[200px] w-full flex-1 resize-none rounded-lg border border-white/20 bg-white/[0.08] p-3.5 text-[0.9375rem] leading-relaxed text-slate-100 placeholder:text-slate-500 outline-none transition-all duration-200 ease-out focus:border-blue-400/50 focus:bg-white/[0.1] focus:ring-2 focus:ring-blue-500/35"
      />
      <div className="mt-4 flex flex-wrap gap-2.5 sm:gap-3">
        <button
          type="button"
          onClick={handleSave}
          className="min-w-[120px] flex-1 rounded-lg border border-blue-400/35 bg-blue-600 px-4 py-2.5 text-sm font-medium text-white shadow-sm transition-all duration-200 ease-out hover:bg-blue-500 hover:shadow-[0_0_22px_rgba(59,130,246,0.4)] active:scale-[0.98]"
        >
          Save
        </button>
        <button
          type="button"
          onClick={handleClear}
          className="min-w-[120px] flex-1 rounded-lg border border-white/20 bg-white/[0.08] px-4 py-2.5 text-sm font-medium text-slate-100 transition-all duration-200 ease-out hover:border-white/30 hover:bg-white/[0.14] active:scale-[0.98]"
        >
          Clear
        </button>
      </div>
    </div>
  );
}
