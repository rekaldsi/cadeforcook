import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get Involved | Nicholas Cade for Cook County",
  description: "Volunteer for Nicholas Cade's campaign for Cook County Commissioner, District 8.",
};

export default function GetInvolvedPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-navy to-[#0d2d54] text-white py-16 md:py-24 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">Get Involved</h1>
          <p className="text-white/80 text-lg">
            This campaign runs on people power. Whether you can knock doors, make calls, or spread the word — we need you.
          </p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 py-16 md:py-24">
        <div className="bg-white rounded-xl border border-gray-200 p-6 md:p-8 shadow-sm mb-10">
          <h2 className="font-heading text-2xl font-bold text-navy mb-6">Volunteer</h2>
          <form
            action="mailto:info@cadeforcook.com"
            method="POST"
            encType="text/plain"
            className="space-y-5"
          >
            <div>
              <label htmlFor="name" className="block font-medium text-text mb-1">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-text focus:outline-2 focus:outline-offset-2 focus:outline-navy"
              />
            </div>
            <div>
              <label htmlFor="email" className="block font-medium text-text mb-1">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-text focus:outline-2 focus:outline-offset-2 focus:outline-navy"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block font-medium text-text mb-1">Phone (optional)</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-text focus:outline-2 focus:outline-offset-2 focus:outline-navy"
              />
            </div>
            <div>
              <label htmlFor="message" className="block font-medium text-text mb-1">How would you like to help?</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-text focus:outline-2 focus:outline-offset-2 focus:outline-navy"
              />
            </div>
            <button
              type="submit"
              className="bg-navy text-white font-bold px-8 py-3 rounded-lg hover:bg-navy/90 transition-colors focus:outline-2 focus:outline-offset-2 focus:outline-navy"
            >
              Sign Up to Volunteer
            </button>
          </form>
        </div>

        <div className="bg-light-gray rounded-xl p-6 md:p-8">
          <h2 className="font-heading text-2xl font-bold text-navy mb-4">Follow the Campaign</h2>
          <p className="text-text/70 mb-4">Stay connected and spread the word.</p>
          <ul className="space-y-3">
            <li>
              <a
                href="https://secure.actblue.com/donate/ncadewebsite"
                target="_blank"
                rel="noopener noreferrer"
                className="text-navy font-medium hover:underline focus:outline-2 focus:outline-offset-2 focus:outline-navy"
              >
                💰 Donate via ActBlue
              </a>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
