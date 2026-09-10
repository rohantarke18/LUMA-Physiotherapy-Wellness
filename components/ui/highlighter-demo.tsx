"use client";

import * as React from "react";
import { cn } from "@/src/lib/utils";
import { useAnimate } from "framer-motion";
import { Mail, MessageCircle, Activity, ArrowRight, Sparkles } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  HighlighterItem,
  HighlightGroup,
  Particles,
} from "@/components/ui/highlighter";

interface ConnectProps {
  onOpenAppointment?: () => void;
  className?: string;
}

export function Connect({ onOpenAppointment, className = "" }: ConnectProps) {
  const [scope, animate] = useAnimate();

  React.useEffect(() => {
    if (!scope.current) return;
    try {
      animate(
        [
          ["#pointer", { left: 190, top: 50 }, { duration: 0 }],
          ["#spine-care", { opacity: 1 }, { duration: 0.3 }],
          [
            "#pointer",
            { left: 40, top: 96 },
            { at: "+0.5", duration: 0.5, ease: "easeInOut" },
          ],
          ["#spine-care", { opacity: 0.4 }, { at: "-0.3", duration: 0.1 }],
          ["#sports-rehab", { opacity: 1 }, { duration: 0.3 }],
          [
            "#pointer",
            { left: 210, top: 160 },
            { at: "+0.5", duration: 0.5, ease: "easeInOut" },
          ],
          ["#sports-rehab", { opacity: 0.4 }, { at: "-0.3", duration: 0.1 }],
          ["#mobility-strength", { opacity: 1 }, { duration: 0.3 }],
          [
            "#pointer",
            { left: 75, top: 185 },
            { at: "+0.5", duration: 0.5, ease: "easeInOut" },
          ],
          ["#mobility-strength", { opacity: 0.4 }, { at: "-0.3", duration: 0.1 }],
          ["#post-surgery", { opacity: 1 }, { duration: 0.3 }],
          [
            "#pointer",
            { left: 190, top: 50 },
            { at: "+0.5", duration: 0.5, ease: "easeInOut" },
          ],
          ["#post-surgery", { opacity: 0.5 }, { at: "-0.3", duration: 0.1 }],
        ],
        {
          repeat: Number.POSITIVE_INFINITY,
        },
      );
    } catch {
      // Fallback gracefully if DOM is unmounting
    }
  }, [animate, scope]);

  return (
    <section
      id="consultation"
      className={cn("relative mx-auto my-14 max-w-5xl px-4 sm:px-6 scroll-mt-24", className)}
    >
      <HighlightGroup className="group h-full">
        <div className="group/item h-full">
          <HighlighterItem className="rounded-3xl p-1 bg-gradient-to-b from-[#506B5B]/30 to-[#DDE4DB]/40 shadow-sm">
            <div className="relative z-20 h-full overflow-hidden rounded-3xl border border-[#506B5B]/20 bg-[#FFFFFF] shadow-sm">
              <Particles
                className="absolute inset-0 -z-10 opacity-30 transition-opacity duration-1000 ease-in-out group-hover/item:opacity-90"
                quantity={60}
                color={"#506B5B"}
                vy={-0.15}
              />
              <div className="flex justify-center">
                <div className="flex h-full flex-col justify-center gap-6 p-6 md:h-[340px] md:flex-row md:items-center">
                  {/* Interactive Clinic Specialties Visualizer */}
                  <div
                    className="relative mx-auto h-[260px] w-[290px] sm:w-[320px] shrink-0"
                    ref={scope}
                  >
                    {/* Central Clinic Hub Icon */}
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-2xl bg-[#DDE4DB] border border-[#506B5B]/30 flex items-center justify-center shadow-xs">
                      <Activity className="h-7 w-7 text-[#26332C]" />
                    </div>

                    <div
                      id="post-surgery"
                      className="absolute bottom-10 left-6 rounded-full border border-[#DDE4DB] bg-[#F7F5F0] px-3 py-1.5 text-xs font-medium text-[#26332C] opacity-50 shadow-xs"
                    >
                      Post-Surgery Care
                    </div>
                    <div
                      id="sports-rehab"
                      className="absolute left-1 top-16 rounded-full border border-[#DDE4DB] bg-[#F7F5F0] px-3 py-1.5 text-xs font-medium text-[#26332C] opacity-50 shadow-xs"
                    >
                      Sports Recovery
                    </div>
                    <div
                      id="mobility-strength"
                      className="absolute bottom-16 right-2 rounded-full border border-[#DDE4DB] bg-[#F7F5F0] px-3 py-1.5 text-xs font-medium text-[#26332C] opacity-50 shadow-xs"
                    >
                      Joint Mobility
                    </div>
                    <div
                      id="spine-care"
                      className="absolute right-8 top-8 rounded-full border border-[#DDE4DB] bg-[#F7F5F0] px-3 py-1.5 text-xs font-medium text-[#26332C] opacity-50 shadow-xs"
                    >
                      Spine &amp; Posture
                    </div>

                    {/* Animated Doctor/Therapist Pointer */}
                    <div id="pointer" className="absolute pointer-events-none z-30">
                      <svg
                        width="16.8"
                        height="18.2"
                        viewBox="0 0 12 13"
                        className="fill-[#C98F65] drop-shadow-sm"
                        stroke="#26332C"
                        strokeWidth="0.8"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12 5.50676L0 0L2.83818 13L6.30623 7.86537L12 5.50676V5.50676Z"
                        />
                      </svg>
                      <span className="relative -top-1 left-2 rounded-full bg-[#26332C] px-2.5 py-0.5 text-[11px] font-medium text-[#F7F5F0] shadow-sm whitespace-nowrap">
                        Dr. Maya Shah
                      </span>
                    </div>
                  </div>

                  {/* Consultation Copy & Fast Contact CTAs */}
                  <div className="flex h-full flex-col justify-center p-2 md:ml-6 md:max-w-[420px]">
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#DDE4DB] border border-[#DDE4DB] w-fit mb-2">
                      <Sparkles className="w-3 h-3 text-[#506B5B]" />
                      <span className="text-[11px] font-semibold tracking-wider uppercase text-[#506B5B]">
                        Clinical Guidance
                      </span>
                    </div>

                    <h3 className="font-serif text-2xl md:text-3xl text-[#26332C] leading-snug">
                      Unsure which recovery path fits you best?
                    </h3>

                    <p className="mt-2 mb-5 text-sm text-[#6E756F] leading-relaxed">
                      Every condition is unique. Speak directly with our clinical team to understand expected timelines, treatment options, and insurance coverage.
                    </p>

                    <div className="flex flex-wrap items-center gap-2.5">
                      <Button
                        onClick={onOpenAppointment}
                        className="bg-[#506B5B] text-white hover:bg-[#26332C] rounded-full px-5 py-2 text-sm font-medium transition-colors shadow-xs"
                      >
                        <span>Book a Consult</span>
                        <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                      </Button>

                      <a
                        href="mailto:care@lumawellness.com"
                        className={cn(
                          buttonVariants({
                            variant: "outline",
                            size: "icon",
                          }),
                          "rounded-full border-[#DDE4DB] hover:bg-[#F7F5F0] text-[#26332C]",
                        )}
                        aria-label="Email our clinic"
                        title="Email care@lumawellness.com"
                      >
                        <Mail className="h-4 w-4" />
                      </a>

                      <a
                        href="https://wa.me/919876543210"
                        target="_blank"
                        rel="noreferrer"
                        className={cn(
                          buttonVariants({
                            variant: "outline",
                            size: "icon",
                          }),
                          "rounded-full border-[#DDE4DB] hover:bg-[#F7F5F0] text-[#26332C]",
                        )}
                        aria-label="Chat on WhatsApp"
                        title="Chat on WhatsApp"
                      >
                        <MessageCircle className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </HighlighterItem>
        </div>
      </HighlightGroup>
    </section>
  );
}

export default Connect;
