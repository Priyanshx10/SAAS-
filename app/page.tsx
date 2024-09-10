"use client";

import {
  MessageSquare,
  Zap,
  Shield,
  Search,
  BarChart,
  Users,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Transition } from "@headlessui/react";
import { useState, useEffect } from "react";

const features = [
  {
    title: "Interactive PDF Conversations",
    description:
      "Transform your PDFs into dynamic, interactive conversations for enhanced engagement.",
    icon: MessageSquare,
  },
  {
    title: "Fast Processing",
    description:
      "Experience lightning-fast document processing for quick access and analysis.",
    icon: Zap,
  },
  {
    title: "Secure Storage",
    description:
      "Advanced encryption ensures your sensitive information remains protected.",
    icon: Shield,
  },
  {
    title: "Smart Search",
    description:
      "Powerful search functionality finds the exact information you need in seconds.",
    icon: Search,
  },
  {
    title: "Analytics Dashboard",
    description:
      "Gain valuable insights from your document interactions with comprehensive analytics.",
    icon: BarChart,
  },
  {
    title: "Collaboration Tools",
    description:
      "Easily share and collaborate on interactive PDF conversations and document management.",
    icon: Users,
  },
];

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState<number | null>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <main className="bg-gradient-to-br from-blue-100 via-white to-purple-100 min-h-screen flex flex-col items-center justify-start px-4 py-16 overflow-y-auto pb-32">
      <div className="w-full max-w-6xl flex flex-col items-center">
        <Transition
          show={isVisible}
          enter="transition-all duration-1000"
          enterFrom="opacity-0 translate-y-10"
          enterTo="opacity-100 translate-y-0"
          as="div"
          className="text-center"
        >
          <h1 className="text-6xl font-extrabold mb-6 text-blue-900 leading-tight">
            Transform Your PDFs into <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              Interactive Conversations
            </span>
          </h1>
          <p className="text-xl text-blue-700 mb-12 max-w-2xl mx-auto">
            Revolutionize your document experience with our powerful SaaS
            solution for interactive PDF conversations, processing, and
            collaboration.
          </p>
        </Transition>

        <Transition
          show={isVisible}
          enter="transition-all duration-1000 delay-700"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          as="div"
          className="mt-16 text-center"
        >
          <h2 className="text-4xl font-bold text-blue-900 mb-8">
            Ready to Transform Your PDFs?
          </h2>
          <div className="flex justify-center">
            <Link href="/dashboard" passHref>
              <Button variant="default" size="lg" className="mr-4 bg-blue-600 hover:bg-blue-700 text-white">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/signup" passHref>
              <Button variant="outline" size="lg" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                Start Your Free Trial
              </Button>
            </Link>
          </div>
        </Transition>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {features.map((feature, index) => (
            <Transition
              key={index}
              show={isVisible}
              enter="transition-all duration-700 delay-300"
              enterFrom="opacity-0 translate-y-10"
              enterTo="opacity-100 translate-y-0"
              as="div"
              className="flex"
            >
              <div
                className={`bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer flex flex-col justify-between h-full ${
                  activeFeature === index ? "ring-2 ring-blue-500" : ""
                }`}
                onMouseEnter={() => setActiveFeature(index)}
                onMouseLeave={() => setActiveFeature(null)}
              >
                <div>
                  <div className="flex items-center mb-4">
                    <feature.icon
                      className={`w-10 h-10 mr-3 ${
                        activeFeature === index
                          ? "text-blue-600"
                          : "text-blue-400"
                      }`}
                    />
                    <h2
                      className={`text-2xl font-semibold ${
                        activeFeature === index
                          ? "text-blue-900"
                          : "text-blue-700"
                      }`}
                    >
                      {feature.title}
                    </h2>
                  </div>
                  <p
                    className={`text-lg ${
                      activeFeature === index
                        ? "text-blue-700"
                        : "text-blue-500"
                    }`}
                  >
                    {feature.description}
                  </p>
                </div>
              </div>
            </Transition>
          ))}
        </div>
      </div>
    </main>
  );
}
