
import React, { useEffect, useRef } from 'react';
import { Layers, Zap, Clock, Shield } from 'lucide-react';

type FeatureProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
};

const Feature = ({ icon, title, description, index }: FeatureProps) => {
  const featureRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (featureRef.current) {
      observer.observe(featureRef.current);
    }

    return () => {
      if (featureRef.current) {
        observer.unobserve(featureRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={featureRef} 
      className="p-6 rounded-2xl border border-border bg-background shadow-subtle opacity-0"
      style={{ animationDelay: `${index * 150}ms` }}
    >
      <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center mb-6 text-accent">
        {icon}
      </div>
      <h3 className="text-xl font-medium mb-3">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

const Features = () => {
  const features = [
    {
      icon: <Layers size={24} />,
      title: "Thoughtful Design",
      description: "Every detail is meticulously crafted to create a seamless and intuitive user experience."
    },
    {
      icon: <Zap size={24} />,
      title: "Lightning Fast",
      description: "Optimized performance ensures everything runs smoothly without unnecessary lag or delay."
    },
    {
      icon: <Clock size={24} />,
      title: "Time Saving",
      description: "Streamlined workflows and intuitive interfaces help you accomplish more in less time."
    },
    {
      icon: <Shield size={24} />,
      title: "Secure by Design",
      description: "Built with security as a priority, protecting your data and privacy at every step."
    }
  ];

  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="features" className="section-padding">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 opacity-0 animate-fade-in" ref={sectionRef}>
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
            Features
          </span>
          <h2 className="font-bold mb-4 text-balance">
            Designed with simplicity in mind
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Our minimalist approach focuses on the essentials, removing clutter and complexity
            to highlight what truly matters.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Feature 
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
