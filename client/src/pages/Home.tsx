import { useState } from 'react';
import ScrollExpandMedia from '@/components/ui/scroll-expansion-hero';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Star, Hammer, Droplet, Eye, ClipboardCheck, Phone, MapPin, Clock } from 'lucide-react';
import { Link } from 'wouter';

const heroImages = [
  {
    src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663508713270/HYcTdwKJLJLCoeDT7Duqkg/eNAkmKC6pqzJ_1baa9242.jpg',
    bg: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663508713270/HYcTdwKJLJLCoeDT7Duqkg/HlZYmiPZX1q6_64f8f958.jpg',
  },
];

const services = [
  {
    icon: Hammer,
    title: 'Roofing Services',
    description: 'Professional roof installation, repair, and replacement for residential and commercial properties.',
  },
  {
    icon: Droplet,
    title: 'Gutter Services',
    description: 'Expert gutter installation, cleaning, and maintenance to protect your home\'s foundation.',
  },
  {
    icon: Eye,
    title: 'Roof Inspections',
    description: 'Comprehensive roof inspections to identify issues early and prevent costly damage.',
  },
  {
    icon: ClipboardCheck,
    title: 'Skylight Installation',
    description: 'Professional skylight installation and repair for natural light and ventilation.',
  },
];

const reviews = [
  {
    author: 'Nancy Largent',
    rating: 5,
    text: 'We recently built a house and wanted to make sure the builder properly insulated and ventilated our attic space. Red bird responded very promptly and was able to fit our inspection in the same week. Dave Colby came to do the inspection. He was thorough and professional.',
    date: 'a month ago',
  },
  {
    author: 'Sirrea Whittaker',
    rating: 5,
    text: 'I delayed as long as possible to get my roof completed because I was sure the process would be difficult; with Dave and the Red Bird team I am glad to say it was smooth sailing. Dave\'s patience, willingness to answer questions and take me through the process made all the difference.',
    date: '2 months ago',
  },
  {
    author: 'Tyler DeBusk',
    rating: 5,
    text: 'Red Bird Roofing recently replaced two skylights for me, and I couldn\'t be more pleased with the experience. Justin was extremely knowledgeable and handled the job with confidence and professionalism from start to finish.',
    date: '4 months ago',
  },
];

export default function Home() {
  const [currentImageIndex] = useState(0);
  const currentImage = heroImages[currentImageIndex];

  return (
    <div className='min-h-screen bg-background'>
      {/* Navigation */}
      <nav className='fixed top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur border-b border-border'>
        <div className='container mx-auto px-4 py-4 flex items-center justify-between'>
          <div className='flex items-center gap-2'>
            <div className='w-10 h-10 bg-accent rounded-lg flex items-center justify-center'>
              <span className='text-white font-bold text-lg'>RB</span>
            </div>
            <span className='font-bold text-xl text-foreground'>Red Bird Roofing</span>
          </div>
          <div className='hidden md:flex gap-8 items-center'>
            <a href='#services' className='text-foreground hover:text-accent transition'>Services</a>
            <a href='#reviews' className='text-foreground hover:text-accent transition'>Reviews</a>
            <a href='#about' className='text-foreground hover:text-accent transition'>About</a>
            <a href='#contact' className='text-foreground hover:text-accent transition'>Contact</a>
            <Link href='/booking'>
              <Button className='bg-accent hover:bg-accent/90'>Book Now</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section with Scroll Expansion */}
      <ScrollExpandMedia
        mediaType='image'
        mediaSrc={currentImage.src}
        bgImageSrc={currentImage.bg}
        title='Red Bird Roofing'
        date='Professional Roofing Services for Indiana'
        scrollToExpand='Scroll to explore'
      >
        <div className='bg-background pt-20'>
          {/* Services Section */}
          <section id='services' className='py-20 border-t border-border'>
            <div className='container mx-auto px-4'>
              <div className='text-center mb-16'>
                <h2 className='text-4xl md:text-5xl font-bold mb-4 text-foreground'>Our Services</h2>
                <p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
                  Comprehensive roofing and gutter services built for Indiana weather
                </p>
              </div>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                {services.map((service, idx) => {
                  const Icon = service.icon;
                  return (
                    <Card key={idx} className='hover:shadow-lg transition'>
                      <CardHeader>
                        <div className='w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4'>
                          <Icon className='w-6 h-6 text-accent' />
                        </div>
                        <CardTitle className='text-xl'>{service.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className='text-muted-foreground'>{service.description}</p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Reviews Section */}
          <section id='reviews' className='py-20 bg-muted/50 border-t border-border'>
            <div className='container mx-auto px-4'>
              <div className='text-center mb-16'>
                <div className='flex items-center justify-center gap-2 mb-4'>
                  <div className='flex gap-1'>
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className='w-6 h-6 fill-accent text-accent' />
                    ))}
                  </div>
                  <span className='text-3xl font-bold text-foreground'>4.9</span>
                  <span className='text-muted-foreground'>(202 reviews)</span>
                </div>
                <h2 className='text-4xl md:text-5xl font-bold mb-4 text-foreground'>Customer Reviews</h2>
                <p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
                  Trusted by hundreds of homeowners across Indiana
                </p>
              </div>
              <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                {reviews.map((review, idx) => (
                  <Card key={idx}>
                    <CardHeader>
                      <div className='flex items-center justify-between mb-2'>
                        <CardTitle className='text-lg'>{review.author}</CardTitle>
                        <div className='flex gap-1'>
                          {[...Array(review.rating)].map((_, i) => (
                            <Star key={i} className='w-4 h-4 fill-accent text-accent' />
                          ))}
                        </div>
                      </div>
                      <CardDescription>{review.date}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className='text-foreground line-clamp-4'>{review.text}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* About Section */}
          <section id='about' className='py-20 border-t border-border'>
            <div className='container mx-auto px-4'>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
                <div>
                  <h2 className='text-4xl md:text-5xl font-bold mb-6 text-foreground'>About Red Bird Roofing</h2>
                  <p className='text-lg text-muted-foreground mb-4'>
                    Your gutters quietly protect your roof, siding, and foundation—until something goes wrong. Sagging sections, clogs, or water pooling near your home are signs it's time for expert help.
                  </p>
                  <p className='text-lg text-muted-foreground mb-6'>
                    Red Bird Roofing provides reliable gutter services built for Indiana weather. With over 200 five-star reviews, we're committed to delivering top-notch work and truly trustworthy service.
                  </p>
                  <div className='flex gap-4'>
                    <Link href='/booking'>
                      <Button className='bg-accent hover:bg-accent/90'>Schedule Inspection</Button>
                    </Link>
                    <a href='tel:3175939742'>
                      <Button variant='outline'>Call Us</Button>
                    </a>
                  </div>
                </div>
                <div className='grid grid-cols-2 gap-4'>
                  <Card className='bg-accent text-white'>
                    <CardContent className='pt-6'>
                      <div className='text-4xl font-bold mb-2'>4.9</div>
                      <p className='text-sm'>Star Rating</p>
                    </CardContent>
                  </Card>
                  <Card className='bg-accent text-white'>
                    <CardContent className='pt-6'>
                      <div className='text-4xl font-bold mb-2'>202</div>
                      <p className='text-sm'>Reviews</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className='pt-6'>
                      <div className='text-2xl font-bold mb-2 text-accent'>24/7</div>
                      <p className='text-sm text-muted-foreground'>Available</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className='pt-6'>
                      <div className='text-2xl font-bold mb-2 text-accent'>Expert</div>
                      <p className='text-sm text-muted-foreground'>Service</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id='contact' className='py-20 bg-muted/50 border-t border-border'>
            <div className='container mx-auto px-4'>
              <h2 className='text-4xl md:text-5xl font-bold mb-12 text-foreground text-center'>Contact Information</h2>
              <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                <Card>
                  <CardHeader>
                    <div className='w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4'>
                      <Phone className='w-6 h-6 text-accent' />
                    </div>
                    <CardTitle>Phone</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <a href='tel:3175939742' className='text-accent hover:underline text-lg font-semibold'>
                      (317) 593-9742
                    </a>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <div className='w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4'>
                      <MapPin className='w-6 h-6 text-accent' />
                    </div>
                    <CardTitle>Address</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className='text-muted-foreground'>
                      356 Ridge Pointe Dr<br />
                      Carmel, IN 46032
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <div className='w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4'>
                      <Clock className='w-6 h-6 text-accent' />
                    </div>
                    <CardTitle>Hours</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className='text-muted-foreground'>
                      Open 24 Hours<br />
                      <span className='text-sm'>Emergency Service Available</span>
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className='py-20 bg-accent text-white border-t border-border'>
            <div className='container mx-auto px-4 text-center'>
              <h2 className='text-4xl md:text-5xl font-bold mb-6'>Ready to Protect Your Home?</h2>
              <p className='text-lg mb-8 max-w-2xl mx-auto opacity-90'>
                Schedule a free inspection today and let our experts assess your roofing and gutter needs.
              </p>
              <Link href='/booking'>
                <Button className='bg-white text-accent hover:bg-gray-100'>Book Your Inspection</Button>
              </Link>
            </div>
          </section>

          {/* Footer */}
          <footer className='bg-foreground text-white py-12 border-t border-border'>
            <div className='container mx-auto px-4'>
              <div className='grid grid-cols-1 md:grid-cols-4 gap-8 mb-8'>
                <div>
                  <div className='flex items-center gap-2 mb-4'>
                    <div className='w-10 h-10 bg-accent rounded-lg flex items-center justify-center'>
                      <span className='font-bold'>RB</span>
                    </div>
                    <span className='font-bold text-lg'>Red Bird Roofing</span>
                  </div>
                  <p className='text-white/70'>Professional roofing services built for Indiana weather.</p>
                </div>
                <div>
                  <h4 className='font-bold mb-4'>Services</h4>
                  <ul className='space-y-2 text-white/70'>
                    <li><a href='#services' className='hover:text-white transition'>Roofing</a></li>
                    <li><a href='#services' className='hover:text-white transition'>Gutters</a></li>
                    <li><a href='#services' className='hover:text-white transition'>Inspections</a></li>
                    <li><a href='#services' className='hover:text-white transition'>Skylights</a></li>
                  </ul>
                </div>
                <div>
                  <h4 className='font-bold mb-4'>Company</h4>
                  <ul className='space-y-2 text-white/70'>
                    <li><a href='#about' className='hover:text-white transition'>About</a></li>
                    <li><Link href='/privacy' className='hover:text-white transition'>Privacy Policy</Link></li>
                    <li><Link href='/accessibility' className='hover:text-white transition'>Accessibility</Link></li>
                  </ul>
                </div>
                <div>
                  <h4 className='font-bold mb-4'>Contact</h4>
                  <p className='text-white/70 mb-2'>(317) 593-9742</p>
                  <p className='text-white/70'>356 Ridge Pointe Dr<br />Carmel, IN 46032</p>
                </div>
              </div>
              <div className='border-t border-white/20 pt-8 text-center text-white/70'>
                <p>&copy; 2026 Red Bird Roofing. All rights reserved.</p>
              </div>
            </div>
          </footer>
        </div>
      </ScrollExpandMedia>
    </div>
  );
}
