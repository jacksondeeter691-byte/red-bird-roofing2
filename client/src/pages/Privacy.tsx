import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { ArrowLeft } from 'lucide-react';

export default function Privacy() {
  return (
    <div className='min-h-screen bg-background pt-20'>
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

      <div className='container mx-auto px-4 py-12 max-w-4xl'>
        <Link href='/'>
          <Button variant='outline' className='mb-8 gap-2'>
            <ArrowLeft className='w-4 h-4' />
            Back to Home
          </Button>
        </Link>

        <div className='prose prose-lg max-w-none'>
          <h1 className='text-4xl font-bold mb-8 text-foreground'>Privacy Policy</h1>
          
          <p className='text-muted-foreground mb-6'>
            Last updated: April 2026
          </p>

          <section className='mb-8'>
            <h2 className='text-2xl font-bold mb-4 text-foreground'>1. Introduction</h2>
            <p className='text-muted-foreground mb-4'>
              Red Bird Roofing ("we," "us," "our," or "Company") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
            </p>
          </section>

          <section className='mb-8'>
            <h2 className='text-2xl font-bold mb-4 text-foreground'>2. Information We Collect</h2>
            <p className='text-muted-foreground mb-4'>We may collect information about you in a variety of ways. The information we may collect on the Site includes:</p>
            <ul className='list-disc pl-6 text-muted-foreground space-y-2 mb-4'>
              <li><strong>Personal Data:</strong> Firstname, lastname, email address, phone number, physical address, and any other information you voluntarily provide.</li>
              <li><strong>Booking Information:</strong> Details about your service requests, preferred dates and times, and property information.</li>
              <li><strong>Automatic Data:</strong> Information collected automatically such as browser type, IP address, pages visited, and time spent on the website.</li>
              <li><strong>Cookies:</strong> We use cookies to enhance your experience and remember your preferences.</li>
            </ul>
          </section>

          <section className='mb-8'>
            <h2 className='text-2xl font-bold mb-4 text-foreground'>3. Use of Your Information</h2>
            <p className='text-muted-foreground mb-4'>Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:</p>
            <ul className='list-disc pl-6 text-muted-foreground space-y-2 mb-4'>
              <li>Process your service booking requests</li>
              <li>Send you promotional communications and updates</li>
              <li>Respond to your inquiries and customer service requests</li>
              <li>Monitor and analyze trends, usage, and activities</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section className='mb-8'>
            <h2 className='text-2xl font-bold mb-4 text-foreground'>4. Disclosure of Your Information</h2>
            <p className='text-muted-foreground mb-4'>We may share your information in the following circumstances:</p>
            <ul className='list-disc pl-6 text-muted-foreground space-y-2 mb-4'>
              <li>With our employees and contractors who need access to provide services</li>
              <li>When required by law or to protect our legal rights</li>
              <li>To third-party service providers who assist us in operating our website and conducting our business</li>
              <li>With your consent for other purposes</li>
            </ul>
          </section>

          <section className='mb-8'>
            <h2 className='text-2xl font-bold mb-4 text-foreground'>5. Security of Your Information</h2>
            <p className='text-muted-foreground mb-4'>
              We use administrative, technical, and physical security measures to protect your personal information. However, no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.
            </p>
          </section>

          <section className='mb-8'>
            <h2 className='text-2xl font-bold mb-4 text-foreground'>6. Contact Us</h2>
            <p className='text-muted-foreground mb-4'>
              If you have questions or comments about this Privacy Policy, please contact us at:
            </p>
            <div className='bg-muted/50 p-4 rounded-lg text-muted-foreground'>
              <p><strong>Red Bird Roofing</strong></p>
              <p>356 Ridge Pointe Dr</p>
              <p>Carmel, IN 46032</p>
              <p>Phone: <a href='tel:3175939742' className='text-accent hover:underline'>(317) 593-9742</a></p>
            </div>
          </section>

          <section className='mb-8'>
            <h2 className='text-2xl font-bold mb-4 text-foreground'>7. Changes to This Privacy Policy</h2>
            <p className='text-muted-foreground mb-4'>
              We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, and other factors. We will notify you of any material changes by updating the "Last updated" date of this Privacy Policy.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
