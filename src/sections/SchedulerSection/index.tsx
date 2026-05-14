import { useState, type FormEvent } from "react";
import { CalendarDays, Phone, Send } from "lucide-react";

const schedulerEmail = "valorhvacma@gmail.com";

export const SchedulerSection = () => {
  const [preferredDate, setPreferredDate] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showNotification, setShowNotification] = useState(false);
  const today = new Date().toISOString().slice(0, 10);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const subject = "Heat Pump Service Request";
    const body = [
      "A user requested heat pump service.",
      "",
      `Preferred date: ${preferredDate}`,
      `Phone number: ${phoneNumber}`,
      "",
      "Please follow up with more details.",
    ].join("\n");

    window.location.href = `mailto:${schedulerEmail}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;

    setShowNotification(true);
    window.setTimeout(() => setShowNotification(false), 5000);
  };

  return (
    <section id="scheduler" className="relative bg-white py-[75px] md:py-[100px]">
      <div className="mx-auto grid w-[88%] max-w-[1200px] gap-10 md:grid-cols-[minmax(0,0.9fr)_minmax(360px,1.1fr)] md:items-center">
        <div>
          <p className="font-roboto_condensed text-[15.4px] font-bold uppercase tracking-[0.18em] text-blue-900 md:text-[17.6px]">
            Heat Pump Service Scheduler
          </p>
          <h2 className="mt-3 text-[32px] font-bold leading-[40px] text-red-600 md:text-[48px] md:leading-[56px]">
            Pick a day and leave your number.
          </h2>
          <p className="mt-5 text-base leading-8 text-neutral-700 md:text-lg">
            Choose the best day for heat pump service and share the phone number
            where we can reach you. We will follow up to confirm timing and
            details.
          </p>
          <div className="mt-7 flex items-start gap-4 bg-[#A9D1F8] p-5 text-blue-950">
            <Phone className="mt-1 h-7 w-7 shrink-0" aria-hidden="true" />
            <div>
              <h3 className="text-xl font-bold">Prefer to call?</h3>
              <a
                href="tel:+19788474141"
                className="mt-1 inline-block text-lg font-bold text-blue-900"
              >
                (978) 847-4141
              </a>
            </div>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-blue-950 p-6 text-white shadow-[0_24px_70px_rgba(15,23,42,0.2)] md:p-8"
        >
          <div className="grid gap-5">
            <label className="grid gap-2">
              <span className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.12em] text-[#A9D1F8]">
                <CalendarDays className="h-4 w-4" aria-hidden="true" />
                Preferred Date
              </span>
              <input
                type="date"
                value={preferredDate}
                min={today}
                onChange={(event) => setPreferredDate(event.target.value)}
                required
                className="h-14 w-full border-2 border-white bg-white px-4 text-base font-bold text-blue-950 outline-none focus:border-[#A9D1F8]"
              />
            </label>

            <label className="grid gap-2">
              <span className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.12em] text-[#A9D1F8]">
                <Phone className="h-4 w-4" aria-hidden="true" />
                Phone Number
              </span>
              <input
                type="tel"
                value={phoneNumber}
                onChange={(event) => setPhoneNumber(event.target.value)}
                placeholder="(978) 847-4141"
                required
                className="h-14 w-full border-2 border-white bg-white px-4 text-base font-bold text-blue-950 outline-none focus:border-[#A9D1F8]"
              />
            </label>

            <button
              type="submit"
              className="mt-2 inline-flex h-14 items-center justify-center gap-2 bg-red-600 px-5 text-sm font-bold uppercase tracking-[0.08em] text-white transition-colors hover:bg-red-700"
            >
              Send Request
              <Send className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </form>
      </div>

      {showNotification && (
        <div
          role="status"
          className="fixed bottom-6 right-6 z-[10000] max-w-[340px] bg-blue-950 px-5 py-4 text-sm font-bold uppercase tracking-[0.08em] text-white shadow-[0_18px_50px_rgba(15,23,42,0.35)]"
        >
          we will get back to you with more details
        </div>
      )}
    </section>
  );
};
