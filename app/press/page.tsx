import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Press | Nicholas Cade for Cook County",
  description: "News and media coverage of Nicholas Cade's campaign for Cook County Commissioner, District 8.",
};

export default function PressPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-navy to-[#0d2d54] text-white py-16 md:py-24 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">Press</h1>
          <p className="text-white/80 text-lg">
            News and media coverage will be posted here.
          </p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 py-16 md:py-24">
        <div className="bg-light-gray rounded-xl p-8 md:p-12 text-center">
          <p className="text-text/60 text-lg">
            No press releases yet. Check back soon.
          </p>
          <p className="text-text/50 text-sm mt-4">
            For press inquiries, please reach out via the{" "}
            <a href="/get-involved" className="text-navy underline hover:no-underline focus:outline-2 focus:outline-offset-2 focus:outline-navy">
              Get Involved
            </a>{" "}
            page.
          </p>
        </div>
      </section>
    </>
  );
}
