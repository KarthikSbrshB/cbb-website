import BorderedButton from "../components/BorderedButton";
import Footer from "../components/Footer";
import HeadingNText from "../components/HeadingNText";

function Contact() {
  return (
    <div className="relative flex w-full items-center justify-center bg-black">
      {/* Grid background */}
      <div className="absolute inset-0 [background-size:40px_40px] [background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]" />
      {/* Radial mask effect */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

      {/* Main content */}
      <div className="relative z-20 w-full text-white">
        <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-8 pb-20">
          <HeadingNText title="Contact Us">
            Reach out to the CBB team for collaborations, queries, or just to say hi!
          </HeadingNText>

          <form
            action="/api/contact"
            method="POST"
            className="mt-12 w-full max-w-2xl bg-[#0e0e0e] backdrop-blur-md border border-white/10 rounded-xl p-4 sm:p-6 md:p-8 shadow-lg flex flex-col gap-6 text-left"
          >
            {/* Name Field */}
            <div>
              <label className="block text-neutral-400 mb-2 text-sm">Name</label>
              <input
                type="text"
                name="name"
                required
                className="w-full p-3 rounded-md bg-black border border-neutral-700 text-white placeholder-neutral-500 text-sm md:text-base focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder="Your Name"
              />
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-neutral-400 mb-2 text-sm">Email</label>
              <input
                type="email"
                name="email"
                required
                className="w-full p-3 rounded-md bg-black border border-neutral-700 text-white placeholder-neutral-500 text-sm md:text-base focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder="you@example.com"
              />
            </div>

            {/* Message Field */}
            <div>
              <label className="block text-neutral-400 mb-2 text-sm">Message</label>
              <textarea
                name="message"
                rows="5"
                required
                className="w-full p-3 rounded-md bg-black border border-neutral-700 text-white placeholder-neutral-500 text-sm md:text-base focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder="Type your message here..."
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <BorderedButton type="submit" className="px-6 py-2 text-sm sm:text-base">
                Send Message
              </BorderedButton>
            </div>
          </form>
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}

export default Contact;
