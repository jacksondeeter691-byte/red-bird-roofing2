import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { ArrowLeft, ChevronDown } from 'lucide-react';
import { SparklesCore } from '@/components/ui/sparkles';
import { useState } from 'react';

export default function FAQ() {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: 'How long does a roof replacement typically take?',
      answer: 'A typical roof replacement can take 1-3 days depending on the size of your home, weather conditions, and the complexity of the roof. We always provide a timeline estimate before starting work.',
    },
    {
      question: 'What is the lifespan of a new roof?',
      answer: 'Most asphalt shingle roofs last 15-20 years. Metal roofs can last 40-70 years, and tile roofs can last 50+ years. The lifespan depends on the material chosen, installation quality, and maintenance.',
    },
    {
      question: 'Do you offer emergency roof repair services?',
      answer: 'Yes! We offer 24/7 emergency roofing services for storm damage, leaks, and other urgent issues. Call us immediately at (317) 593-9742 for emergency assistance.',
    },
    {
      question: 'Are your services covered by insurance?',
      answer: 'Most homeowner insurance policies cover roof damage from storms, hail, and other covered perils. We work directly with insurance companies and can help you file claims. Contact us to discuss your specific situation.',
    },
    {
      question: 'What warranty do you provide?',
      answer: 'We provide a 10-year workmanship warranty on all roof installations and repairs. We also transfer manufacturer warranties to new homeowners. Full warranty details are provided in your contract.',
    },
    {
      question: 'How do I know if my roof needs repair or replacement?',
      answer: 'Signs you need repair include missing shingles, leaks, or sagging sections. Signs you need replacement include age (15+ years), widespread damage, or multiple repairs. We offer free inspections to assess your roof.',
    },
    {
      question: 'Do you handle gutter installation and cleaning?',
      answer: 'Yes! We provide comprehensive gutter services including cleaning, repair, installation, and maintenance. Proper gutter maintenance is essential to protect your roof and foundation.',
    },
    {
      question: 'What areas do you service?',
      answer: 'We proudly serve Carmel, Indiana and the surrounding areas including Indianapolis, Fishers, Noblesville, and Westfield. Contact us to confirm service availability for your location.',
    },
  ];

  return (
    <div className='min-h-screen bg-background'>
      {/* Navigation */}
      <nav className='fixed top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur border-b border-border'>
        <div className='container mx-auto px-4 py-4 flex items-center justify-between'>
          <Link href='/'>
            <div className='flex items-center gap-2 cursor-pointer hover:opacity-80 transition'>
              <div className='w-10 h-10 bg-accent rounded-lg flex items-center justify-center'>
                <span className='text-white font-bold text-lg'>RB</span>
              </div>
              <span className='font-bold text-xl text-foreground'>Red Bird Roofing</span>
            </div>
          </Link>
        </div>
      </nav>

      {/* Hero Section with Sparkles */}
      <div className='relative pt-20 pb-12 overflow-hidden'>
        <div className='h-[40rem] relative w-full bg-gradient-to-b from-slate-900 to-slate-950 flex flex-col items-center justify-center overflow-hidden rounded-b-3xl'>
          <div className='w-full absolute inset-0 h-full'>
            <SparklesCore
              id='faq-sparkles'
              background='transparent'
              minSize={0.6}
              maxSize={1.4}
              particleDensity={80}
              className='w-full h-full'
              particleColor='#ea580c'
              speed={0.8}
            />
          </div>

          <div className='relative z-20 text-center px-4'>
            <Link href='/'>
              <Button variant='outline' className='mb-8 gap-2 bg-white/10 border-white/20 text-white hover:bg-white/20'>
                <ArrowLeft className='w-4 h-4' />
                Back to Home
              </Button>
            </Link>
            <h1 className='text-5xl md:text-6xl font-bold text-white mb-4'>
              Frequently Asked Questions
            </h1>
            <p className='text-xl text-white/80 max-w-2xl mx-auto'>
              Find answers to common questions about our roofing services
            </p>
          </div>
        </div>
      </div>

      {/* FAQ Content */}
      <div className='container mx-auto px-4 py-12 max-w-3xl'>
        <div className='space-y-4'>
          {faqs.map((faq, index) => (
            <div
              key={index}
              className='border border-border rounded-lg overflow-hidden transition-all duration-200'
            >
              <button
                onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
                className='w-full px-6 py-4 flex items-center justify-between bg-white hover:bg-muted/50 transition-colors'
              >
                <h3 className='text-lg font-semibold text-foreground text-left'>{faq.question}</h3>
                <ChevronDown
                  className={`w-5 h-5 text-accent transition-transform duration-200 flex-shrink-0 ml-4 ${
                    expandedFAQ === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {expandedFAQ === index && (
                <div className='px-6 py-4 bg-muted/30 border-t border-border'>
                  <p className='text-muted-foreground leading-relaxed'>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className='mt-16 p-8 bg-gradient-to-r from-accent/10 to-accent/5 rounded-2xl border border-accent/20 text-center'>
          <h2 className='text-3xl font-bold mb-4 text-foreground'>Still have questions?</h2>
          <p className='text-muted-foreground mb-6 max-w-xl mx-auto'>
            Our team is ready to help! Contact us today for a free consultation and personalized recommendations for your roofing needs.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Link href='/booking'>
              <Button className='bg-accent hover:bg-accent/90'>Schedule Consultation</Button>
            </Link>
            <a href='tel:3175939742'>
              <Button variant='outline'>Call (317) 593-9742</Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
