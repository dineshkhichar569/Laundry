import { Link } from "react-router-dom";
import { Truck, Headset, BadgeDollarSign, WashingMachine } from "lucide-react";

function Home() {
  const features = [
    {
      icon: (
        <WashingMachine
          strokeWidth={2.2}
          className="w-14 h-14 mx-auto text-black"
        />
      ),
      title: "Premium Services",
      text: "Elevate Your Wardroble with our meticulous dry cleaning, ensuring graments look and feel as good as new.",
    },
    {
      icon: (
        <Headset
          strokeWidth={2.2}
          className="w-14 h-14 mx-auto text-[#6d6875]"
        />
      ),
      title: "Quick Support",
      text: "Elevate Your Wardroble with our meticulous dry cleaning, ensuring graments look and feel as good as new.",
    },
    {
      icon: (
        <Truck strokeWidth={2.2} className="w-14 h-14 mx-auto text-black" />
      ),
      title: "Hassle Free Delivery",
      text: "Elevate Your Wardroble with our meticulous dry cleaning, ensuring graments look and feel as good as new.",
    },
    {
      icon: (
        <BadgeDollarSign
          strokeWidth={2.2}
          className="w-14 h-14 mx-auto text-black"
        />
      ),
      title: "Affordable Prices",
      text: "Elevate Your Wardroble with our meticulous dry cleaning, ensuring graments look and feel as good as new.",
    },
  ];

  return (
    <div className="bg-[#eaf2f7] overflow-hidden">
      {/* Hero */}
      <section className="max-w-[1440px] mx-auto min-h-[690px] px-6 md:px-10 lg:px-16 pt-14 md:pt-20 pb-0 grid md:grid-cols-2 items-center gap-10">
        <div className="max-w-[640px]">
          <h1 className="text-[#3b3b3f] font-extrabold leading-[1.12] tracking-[-0.02em] text-[42px] sm:text-[56px] lg:text-[64px]">
            Revitalize Your Clothes
            <br />
            with Expert
            <br />
            <span className="text-[#ef27c7]">Laundry Services!</span>
          </h1>

          <p className="mt-7 text-[20px] leading-[1.45] text-[#7b7b84] max-w-[760px]">
            From premium dry cleaning to swift wash and fold, we deliver care
            and convenience. Schedule a pickup and rediscover the freshness of
            your tody!
          </p>

          <Link
            to="/book"
            className="inline-flex items-center justify-center mt-10 h-[74px] px-10 min-w-[285px] rounded-[18px] bg-[#ef27c7] text-white text-[26px] font-bold shadow-none transition hover:opacity-95"
          >
            Book a service today!
          </Link>
        </div>

        <div className="flex justify-center md:justify-end">
          <img
            src="/wash.png"
            alt="Laundry machine"
            className="hero-img w-full max-w-[620px] object-contain drop-shadow-[0_0_50px_rgba(239,39,199,0.18)]"
          />
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[#e400b9]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 min-h-[138px] grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1fr_1fr] items-center">
          <div className="py-8 md:py-0 text-center md:text-left">
            <h2 className="text-[34px] md:text-[40px] font-extrabold text-[#231f20]">
              Our Achievements
            </h2>
          </div>

          <div className="text-center py-6 md:py-0 border-t md:border-t-0 md:border-l border-white/60">
            <div className="text-[48px] leading-none font-extrabold text-[#231f20]">
              15+
            </div>
            <div className="mt-1 text-[18px] text-black">Laundry Services</div>
          </div>

          <div className="text-center py-6 md:py-0 border-t md:border-t-0 md:border-l border-white/60">
            <div className="text-[48px] leading-none font-extrabold text-[#231f20]">
              240+
            </div>
            <div className="mt-1 text-[18px] text-black">Happy Customers</div>
          </div>

          <div className="text-center py-6 md:py-0 border-t md:border-t-0 md:border-l border-white/60">
            <div className="text-[48px] leading-none font-extrabold text-[#231f20]">
              2+ Yrs
            </div>
            <div className="mt-1 text-[18px] text-black">Experience</div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 py-20 md:py-24">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-y-14 gap-x-10">
          {features.map((f) => (
            <div key={f.title} className="text-center max-w-[360px] mx-auto">
              <div className="mb-5 flex justify-center">{f.icon}</div>
              <h3 className="text-[28px] font-extrabold text-black leading-tight">
                {f.title}
              </h3>
              <p className="mt-3 text-[20px] leading-[1.5] text-black">
                {f.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter section */}
      <section className="bg-[#e400b9]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 py-16 md:py-20 grid lg:grid-cols-[1.05fr_1.2fr] gap-10 items-start">
          <div>
            <h2 className="text-white font-extrabold leading-tight text-[44px] md:text-[56px]">
              Subscribe to our newsletter
            </h2>
          </div>

          <form className="grid grid-cols-1 md:grid-cols-[1fr_320px] gap-4 md:gap-5 items-start">
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Full name"
                className="w-full h-[74px] px-6 bg-[#df36c1] border border-white/35 text-white placeholder:text-white/80 text-[24px] outline-none"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full h-[74px] px-6 bg-[#df36c1] border border-white/35 text-white placeholder:text-white/80 text-[24px] outline-none"
              />
            </div>

            <button
              type="submit"
              className="h-[74px] w-full bg-[#ebebeb] text-[#e400b9] text-[24px] font-medium border border-black/10"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Home;
