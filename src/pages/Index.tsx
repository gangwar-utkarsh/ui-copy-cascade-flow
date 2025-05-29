import React from 'react';
import Footer from '@/components/footer/Footer';
import { Button } from "@/components/ui/button";

export default function Index() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-primary/10 to-primary/5 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                Welcome to TWI Group of Companies
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Your trusted partner in innovative business solutions and exceptional service delivery
              </p>
              <Button size="lg" className="bg-primary text-primary-foreground">
                Explore Our Services
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Business Solutions",
                  description: "Comprehensive business solutions tailored to your needs",
                  icon: "💼"
                },
                {
                  title: "Global Network",
                  description: "Connected worldwide for your business success",
                  icon: "🌐"
                },
                {
                  title: "Expert Support",
                  description: "24/7 professional support from our expert team",
                  icon: "👥"
                }
              ].map((feature, index) => (
                <div 
                  key={index}
                  className="p-6 rounded-lg border border-border bg-card hover:shadow-lg transition-shadow"
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-16 bg-primary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Join thousands of satisfied clients who trust TWI Group for their business needs
              </p>
              <div className="flex gap-4 justify-center">
                <Button variant="default" size="lg">
                  Contact Us
                </Button>
                <Button variant="outline" size="lg">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Latest Updates Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Latest Updates</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "New Office Opening",
                  date: "March 15, 2024",
                  description: "Expanding our presence with a new office in Delhi"
                },
                {
                  title: "Partnership Announcement",
                  date: "March 10, 2024",
                  description: "Strategic partnership to enhance global services"
                },
                {
                  title: "Industry Recognition",
                  date: "March 5, 2024",
                  description: "TWI Group receives excellence award"
                }
              ].map((update, index) => (
                <div 
                  key={index}
                  className="p-6 rounded-lg border border-border bg-card hover:shadow-lg transition-shadow"
                >
                  <p className="text-sm text-muted-foreground mb-2">{update.date}</p>
                  <h3 className="text-xl font-semibold mb-2">{update.title}</h3>
                  <p className="text-muted-foreground">{update.description}</p>
                  <Button variant="link" className="mt-4 p-0">
                    Read More →
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
