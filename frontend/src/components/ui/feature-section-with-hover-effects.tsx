import { cn } from "@/lib/utils";
import {
  IconShare,
  IconChartBar,
  IconPalette,
  IconCards,
} from "@tabler/icons-react";

export function FeaturesSectionWithHoverEffects() {
  const features = [
    {
      title: "Instant Profile Sharing",
      description:
        "Share your digital business card instantly via NFC tap, QR code scan, or a simple link—no app downloads required for your contacts.",
      icon: <IconShare />,
    },
    {
      title: "Smart Analytics Dashboard",
      description:
        "Track profile views, link clicks, and engagement metrics in real-time to understand how people interact with your digital card.",
      icon: <IconChartBar />,
    },
    {
      title: "Customizable Templates",
      description:
        "Choose from premium templates or create your own unique design with custom colors, fonts, and layouts that match your brand perfectly.",
      icon: <IconPalette />,
    },
    {
      title: "Multi-Card Management",
      description:
        "Create and manage multiple digital cards for different roles, businesses, or occasions—all from one powerful dashboard interface.",
      icon: <IconCards />,
    },
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 h-full">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col border-2 border-slate-200 dark:border-zinc-700 rounded-xl p-4 relative group/feature bg-white dark:bg-zinc-800 transition-all duration-300 hover:shadow-xl hover:border-indigo-300 dark:hover:border-indigo-600 cursor-pointer",
      )}
    >
      {/* Gradient overlay on hover */}
      <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30 pointer-events-none rounded-xl" />
      
      {/* Icon */}
      <div className="mb-3 relative z-10 w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center transform group-hover/feature:scale-110 transition-transform text-white">
        {icon}
      </div>
      
      {/* Title with animated bar */}
      <div className="relative z-10 mb-2">
        <div className="absolute left-0 top-0 h-6 group-hover/feature:h-full w-1 rounded-r-full bg-slate-300 dark:bg-neutral-700 group-hover/feature:bg-indigo-500 transition-all duration-200 origin-top" />
        <h3 className="text-base font-bold pl-3 group-hover/feature:translate-x-2 transition duration-200 inline-block text-slate-900 dark:text-zinc-100 group-hover/feature:text-indigo-600 dark:group-hover/feature:text-indigo-400">
          {title}
        </h3>
      </div>
      
      {/* Description */}
      <p className="text-sm text-slate-600 dark:text-zinc-400 leading-relaxed relative z-10">
        {description}
      </p>
    </div>
  );
};
