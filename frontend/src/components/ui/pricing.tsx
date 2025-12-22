"use client";

import { buttonVariants } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useMediaQuery } from "@/hooks/use-media-query";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";
import { useState, useRef } from "react";
import confetti from "canvas-confetti";
import NumberFlow from "@number-flow/react";

interface PricingPlan {
  name: string;
  price: string;
  yearlyPrice: string;
  period: string;
  features: string[];
  description: string;
  buttonText: string;
  href: string;
  isPopular: boolean;
}

interface PricingProps {
  plans: PricingPlan[];
  title?: string;
  description?: string;
  onCTAClick?: (plan: PricingPlan) => void;
}

export function Pricing({
  plans,
  title = "Simple, Transparent Pricing",
  description = "Choose the plan that works for you\nAll plans include access to our platform, lead generation tools, and dedicated support.",
  onCTAClick,
}: PricingProps) {
  const [isMonthly, setIsMonthly] = useState(true);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const switchRef = useRef<HTMLButtonElement>(null);

  const handleToggle = (checked: boolean) => {
    setIsMonthly(!checked);
    if (checked && switchRef.current) {
      const rect = switchRef.current.getBoundingClientRect();
      const x = rect.left + rect.width / 2;
      const y = rect.top + rect.height / 2;

      confetti({
        particleCount: 50,
        spread: 60,
        origin: {
          x: x / window.innerWidth,
          y: y / window.innerHeight,
        },
        colors: [
          "hsl(var(--primary))",
          "hsl(var(--accent))",
          "hsl(var(--secondary))",
          "hsl(var(--muted))",
        ],
        ticks: 200,
        gravity: 1.2,
        decay: 0.94,
        startVelocity: 30,
        shapes: ["circle"],
      });
    }
  };

  return (
    <div className="container py-20">
      <div className="text-center space-y-4 mb-12">
        <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
          {title}
        </h2>
        <p className="text-muted-foreground text-lg whitespace-pre-line">
          {description}
        </p>
      </div>

      <div className="flex justify-center items-center gap-3 mb-10">
        <span className="font-semibold text-slate-900">Monthly</span>
        <Label>
          <Switch
            ref={switchRef as any}
            checked={!isMonthly}
            onCheckedChange={handleToggle}
            className="relative"
          />
        </Label>
        <span className="font-semibold text-slate-900">
          Annual <span className="text-indigo-600">(Save 20%)</span>
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            initial={{ y: 50, opacity: 0 }}
            whileInView={
              isDesktop
                ? {
                    y: plan.isPopular ? -20 : 0,
                    opacity: 1,
                    x: index === 2 ? -15 : index === 0 ? 15 : 0,
                    scale: index === 0 || index === 2 ? 0.96 : 1.0,
                  }
                : { y: 0, opacity: 1 }
            }
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              type: "spring",
              stiffness: 100,
              damping: 30,
              delay: index * 0.1,
            }}
            className={cn(
              `rounded-3xl border-2 p-8 bg-white text-center flex flex-col relative shadow-lg hover:shadow-2xl transition-all duration-300`,
              plan.isPopular ? "border-indigo-600 shadow-indigo-200" : "border-slate-200",
              !plan.isPopular && "mt-5",
              index === 0 || index === 2
                ? "z-0"
                : "z-10"
            )}
          >
            {plan.isPopular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-indigo-600 to-purple-600 py-1.5 px-6 rounded-full flex items-center shadow-lg">
                <Star className="text-white h-4 w-4 fill-current" />
                <span className="text-white ml-1.5 font-semibold text-sm">
                  Most Popular
                </span>
              </div>
            )}
            <div className="flex-1 flex flex-col">
              <p className="text-sm font-bold text-slate-500 uppercase tracking-wider">
                {plan.name}
              </p>
              <div className="mt-6 flex items-baseline justify-center gap-x-2">
                <span className="text-6xl font-bold tracking-tight text-slate-900">
                  <NumberFlow
                    value={
                      isMonthly ? Number(plan.price) : Number(plan.yearlyPrice)
                    }
                    format={{
                      style: "currency",
                      currency: "USD",
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 0,
                    }}
                    transformTiming={{
                      duration: 500,
                      easing: "ease-out",
                    }}
                    willChange
                  />
                </span>
                {plan.period !== "Next 3 months" && (
                  <span className="text-sm font-semibold text-slate-500">
                    / {plan.period}
                  </span>
                )}
              </div>

              <p className="text-xs text-slate-500 mt-2">
                {isMonthly ? "billed monthly" : "billed annually"}
              </p>

              <ul className="mt-8 space-y-3 flex flex-col">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-left">
                    <Check className="h-5 w-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <hr className="w-full my-8 border-slate-200" />

              <button
                onClick={() => onCTAClick?.(plan)}
                className={cn(
                  buttonVariants({
                    variant: plan.isPopular ? "default" : "outline",
                  }),
                  "group relative w-full gap-2 overflow-hidden text-base font-bold tracking-tight h-12 rounded-xl",
                  "transform-gpu ring-offset-current transition-all duration-300 ease-out hover:scale-105",
                  plan.isPopular
                    ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg hover:shadow-xl"
                    : "border-2 border-slate-300 bg-white text-slate-900 hover:bg-slate-50"
                )}
              >
                {plan.buttonText}
              </button>
              <p className="mt-4 text-xs text-slate-500">
                {plan.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
