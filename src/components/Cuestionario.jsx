import { useState } from "react";
import { questionsAndAnswers } from "../data/questions";

export default function Cuestionario() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="w-full max-w-5xl mx-auto px-4 py-6">
      <div className="mb-8">
        <p className="mb-6 text-gray-300 leading-relaxed">
          Hacé clic en cada pregunta para ver una respuesta breve. El podcast puede ampliar
          cada punto en profundidad.
        </p>
      </div>

      <div className="grid gap-4">
        {questionsAndAnswers.map((item, idx) => (
          <div
            key={idx}
            className="bg-white/5 p-6 rounded-xl shadow-inner cursor-pointer hover:bg-white/10 transition-colors border border-white/10"
            onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
          >
            <div className="flex items-start justify-between">
              <div className="flex-1 pr-4">
                <div className="font-semibold text-lg mb-2">{item.q}</div>
                {openIndex !== idx && (
                  <div className="text-sm text-white/70 mt-1">
                    {item.a.substring(0, 150)}{item.a.length > 150 ? "..." : ""}
                  </div>
                )}
              </div>
              <div className="text-lg text-white/70 px-3 py-2 bg-white/10 rounded-full min-w-[2.5rem] text-center">
                {openIndex === idx ? "−" : "+"}
              </div>
            </div>

            {openIndex === idx && (
              <div className="mt-6 text-sm text-white/90 bg-white/5 p-4 rounded-lg border-l-4 border-indigo-400 leading-relaxed">
                {item.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}