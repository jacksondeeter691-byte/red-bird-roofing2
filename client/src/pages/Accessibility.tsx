import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { ArrowLeft } from 'lucide-react';

export default function Accessibility() {
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
          <h1 className='text-4xl font-bold mb-8 text-foreground'>Accessibility Statement</h1>
          
          <p className='text-muted-foreground mb-6'>
            Last updated: April 2026
          </p>

          <section className='mb-8'>
            <h2 className='text-2xl font-bold mb-4 text-foreground'>Our Commitment to Accessibility</h2>
            <p className='text-muted-foreground mb-4'>
              Red Bird Roofing is committed to ensuring digital accessibility for people with disabilities. We are continuously improving the user experience for everyone and applying the relevant accessibility standards.
            </p>
          </section>

          <section className='mb-8'>
            <h2 className='text-2xl font-bold mb-4 text-foreground'>Accessibility Features</h2>
            <p className='text-muted-foreground mb-4'>Our website includes the following accessibility features:</p>
            <ul className='list-disc pl-6 text-muted-foreground space-y-2 mb-4'>
              <li><strong>Keyboard Navigation:</strong> All interactive elements can be accessed using keyboard navigation.</li>
              <li><strong>Screen Reader Support:</strong> Our website is compatible with screen readers and other assistive technologies.</li>
              <li><strong>Color Contrast:</strong> We maintain sufficient color contrast ratios to ensure text is readable for users with low vision.</li>
              <li><strong>Responsive Design:</strong> Our website is fully responsive and works on various devices and screen sizes.</li>
              <li><strong>Alt Text:</strong> Images include descriptive alt text for screen reader users.</li>
              <li><strong>Form Labels:</strong> All form fields are properly labeled for clarity and accessibility.</li>
              <li><strong>Focus Indicators:</strong> Clear focus indicators are visible when navigating with keyboard.</li>
            </ul>
          </section>

          <section className='mb-8'>
            <h2 className='text-2xl font-bold mb-4 text-foreground'>Standards Compliance</h2>
            <p className='text-muted-foreground mb-4'>
              We aim to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards. This ensures that our website is accessible to the widest possible audience, including people with disabilities.
            </p>
          </section>

          <section className='mb-8'>
            <h2 className='text-2xl font-bold mb-4 text-foreground'>Accessibility Tools</h2>
            <p className='text-muted-foreground mb-4'>We recommend the following tools to enhance your browsing experience:</p>
            <ul className='list-disc pl-6 text-muted-foreground space-y-2 mb-4'>
              <li><strong>Browser Extensions:</strong> Consider using accessibility extensions for your web browser.</li>
              <li><strong>Browser Settings:</strong> Most browsers allow you to adjust text size, zoom levels, and color settings.</li>
              <li><strong>Operating System Settings:</strong> Your device's accessibility settings can help customize your experience.</li>
            </ul>
          </section>

          <section className='mb-8'>
            <h2 className='text-2xl font-bold mb-4 text-foreground'>Known Accessibility Issues</h2>
            <p className='text-muted-foreground mb-4'>
              While we strive to make our website fully accessible, some third-party content or embedded media may have limitations. If you encounter any accessibility barriers, please let us know.
            </p>
          </section>

          <section className='mb-8'>
            <h2 className='text-2xl font-bold mb-4 text-foreground'>Feedback and Accessibility Support</h2>
            <p className='text-muted-foreground mb-4'>
              We welcome your feedback on the accessibility of our website. If you experience difficulty accessing any part of our site or have suggestions for improvement, please contact us:
            </p>
            <div className='bg-muted/50 p-4 rounded-lg text-muted-foreground'>
              <p><strong>Red Bird Roofing</strong></p>
              <p>356 Ridge Pointe Dr</p>
              <p>Carmel, IN 46032</p>
              <p>Phone: <a href='tel:3175939742' className='text-accent hover:underline'>(317) 593-9742</a></p>
            </div>
          </section>

          <section className='mb-8'>
            <h2 className='text-2xl font-bold mb-4 text-foreground'>Continuous Improvement</h2>
            <p className='text-muted-foreground mb-4'>
              We are committed to ongoing accessibility improvements. We regularly review and update our website to ensure it meets the highest accessibility standards. Your feedback helps us identify areas for improvement.
            </p>
          </section>

          <section className='mb-8'>
            <h2 className='text-2xl font-bold mb-4 text-foreground'>Third-Party Content</h2>
            <p className='text-muted-foreground mb-4'>
              Our website may contain links to third-party websites and services. We are not responsible for the accessibility of external content, but we encourage all our partners to maintain accessible websites.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
