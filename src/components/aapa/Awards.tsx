import { useEffect, useRef } from "react";
import saadath from "/assets/saadath.jpeg";

const Awards = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".fade-up").forEach((el, i) => {
              setTimeout(() => {
                el.classList.add("visible");
              }, i * 150);
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="awards"
      ref={sectionRef}
      className="section-padding bg-charcoal-light relative overflow-hidden"
    >
      {/* Decorative accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image side */}
          <div className="fade-up relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-muted relative">
              <img
                src={saadath}
                alt="The Aapa Foods Award Recognition"
                className="w-full h-full object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 lg:right-auto lg:-left-6 card-luxury p-6 max-w-xs">
              <p className="font-serif text-lg text-primary mb-1">Best Agri-Food Brand</p>
              <p className="text-sm text-muted-foreground">
                SKUAST Kashmir Recognition
              </p>
            </div>
          </div>

          {/* Content side */}
          <div className="lg:py-8">
            <div className="fade-up mb-6">
              <span className="badge-premium">Awards & Recognition</span>
            </div>

            <h2 className="fade-up text-headline text-foreground mb-6">
              The Aapa Foods Honoured as
              <br />
              <span className="text-primary">Best Agri-Food Brand</span>
              <br />
              by SKUAST Kashmir
            </h2>

            <div className="divider-ornate mb-8 fade-up lg:mx-0" />

            <div className="space-y-6 text-body">
              <p className="fade-up">
                In a proud and defining milestone, The Aapa Foods has been honoured with Best Agri-Food Brand award, recognising its excellence in preserving authentic flavours while building a strong identity in agri-food sector.
              </p>

              <p className="fade-up">
                The award was presented by Prof. Nazir Ahmad Ganai, Vice Chancellor of Sher-e-Kashmir University of Agricultural Sciences and Technology, acknowledging the brand's commitment to quality, traditional food heritage, and entrepreneurial innovation.
              </p>

              <p className="fade-up">
                Beyond recognition, this achievement also highlights powerful institutional support behind the brand's growth. The Aapa Foods is a mentored brand under the Agricultural Branding Centre (ABC), an initiative dedicated to empowering agricultural entrepreneurs, strengthening brand development, and enhancing market linkages.
              </p>

              <p className="fade-up">
                Saadath Mohi-ud-din affirms that the brand has been actively mentored, guided, and promoted by Agricultural Branding Centre (ABC), HADP-04, under the aegis of SKUAST-Kashmir. This association has played a crucial role in shaping the identity, positioning, and expansion of The Aapa Foods as a recognised food brand.
              </p>

              <p className="fade-up">
                Expressing gratitude, founder Saadath Mohi ud din said, "Special thanks to IBPR, Dr. Farhat Shaheen, Dr. Abid Sultan, and Mr. Arif Zargar for their constant guidance and support."
              </p>

              <p className="fade-up">
                While the brand's journey first connected with audiences through The Aapa Podcasts, today's recognition stands as a testament to structured growth, institutional mentorship, and successful transformation of tradition into a professionally recognised agri-food brand.
              </p>

              <p className="fade-up font-medium text-foreground">
                This award not only celebrates a product, it honours a vision supported by mentorship, guided development, and a commitment to preserving authenticity while building a sustainable future for local food entrepreneurship.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Awards;
