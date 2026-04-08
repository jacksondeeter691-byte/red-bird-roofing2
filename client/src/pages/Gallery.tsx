import React from 'react';
import { cn } from '@/lib/utils';
import Lenis from '@studio-freight/lenis';
import { ZoomParallax } from '@/components/ui/zoom-parallax';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { ArrowLeft } from 'lucide-react';

export default function Gallery() {
  React.useEffect(() => {
    const lenis = new Lenis();
    let rafId: number;

    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  const images = [
    {
      src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663508713270/HYcTdwKJLJLCoeDT7Duqkg/eNAkmKC6pqzJ_1baa9242.jpg',
      alt: 'Professional roofing work',
    },
    {
      src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663508713270/HYcTdwKJLJLCoeDT7Duqkg/HlZYmiPZX1q6_64f8f958.jpg',
      alt: 'Roof installation project',
    },
    {
      src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663508713270/HYcTdwKJLJLCoeDT7Duqkg/4V0TxRkIAnR0_8613afcf.jpg',
      alt: 'Gutter work and maintenance',
    },
    {
      src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663508713270/HYcTdwKJLJLCoeDT7Duqkg/37YlX73E39lf_6c66367b.jpg',
      alt: 'Roofing contractor team',
    },
    {
      src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663508713270/HYcTdwKJLJLCoeDT7Duqkg/mdnbdcH8ZZkB_5d9de03f.jpg',
      alt: 'Professional roof maintenance',
    },
    {
      src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663508713270/HYcTdwKJLJLCoeDT7Duqkg/7g1GviiF1IAA_6c66367b.jpeg',
      alt: 'Modern gutter design',
    },
    {
      src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663508713270/HYcTdwKJLJLCoeDT7Duqkg/rwWt29nUG7Ws_8613afcf.jpg',
      alt: 'Quality roofing installation',
    },
  ];

  return (
    <main className='min-h-screen w-full bg-background'>
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

      <div className='pt-20'>
        <div className='relative flex h-[50vh] items-center justify-center flex-col'>
          <Link href='/'>
            <Button variant='outline' className='mb-8 gap-2'>
              <ArrowLeft className='w-4 h-4' />
              Back to Home
            </Button>
          </Link>

          {/* Radial spotlight */}
          <div
            aria-hidden='true'
            className={cn(
              'pointer-events-none absolute -top-1/2 left-1/2 h-[120vmin] w-[120vmin] -translate-x-1/2 rounded-full',
              'bg-[radial-gradient(ellipse_at_center,--theme(--color-foreground/.1),transparent_50%)]',
              'blur-[30px]',
            )}
          />
          <h1 className='text-center text-4xl font-bold text-foreground'>
            Our Project Gallery
          </h1>
          <p className='text-center text-muted-foreground mt-4 max-w-2xl'>
            Scroll down to see our professional roofing and gutter work in an interactive gallery
          </p>
        </div>
        <ZoomParallax images={images} />
        <div className='h-[50vh] bg-background flex items-center justify-center'>
          <div className='text-center'>
            <h2 className='text-3xl font-bold mb-4 text-foreground'>Ready to Start Your Project?</h2>
            <p className='text-muted-foreground mb-6 max-w-2xl mx-auto'>
              Contact us today to discuss your roofing, gutter, or skylight needs. Our team is ready to help!
            </p>
            <Link href='/booking'>
              <Button className='bg-accent hover:bg-accent/90'>Schedule a Consultation</Button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
