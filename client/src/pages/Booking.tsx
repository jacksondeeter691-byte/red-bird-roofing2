import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { trpc } from '@/lib/trpc';
import { toast } from 'sonner';
import { Link } from 'wouter';
import { ArrowLeft } from 'lucide-react';

const bookingSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Valid email is required'),
  phone: z.string().min(10, 'Valid phone number is required'),
  address: z.string().min(5, 'Address is required'),
  serviceType: z.string().min(1, 'Service type is required'),
  description: z.string().optional(),
  preferredDate: z.string().optional(),
  preferredTime: z.string().optional(),
});

type BookingFormData = z.infer<typeof bookingSchema>;

export default function Booking() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const createBooking = trpc.bookings.create.useMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    watch,
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
  });

  const serviceType = watch('serviceType');

  const onSubmit = async (data: BookingFormData) => {
    setIsSubmitting(true);
    try {
      await createBooking.mutateAsync(data);
      toast.success('Booking submitted successfully! We\'ll contact you soon.');
      reset();
    } catch (error) {
      toast.error('Failed to submit booking. Please try again.');
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

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

      <div className='container mx-auto px-4 py-12 max-w-2xl'>
        <Link href='/'>
          <Button variant='outline' className='mb-8 gap-2'>
            <ArrowLeft className='w-4 h-4' />
            Back to Home
          </Button>
        </Link>

        <Card>
          <CardHeader>
            <CardTitle className='text-3xl'>Schedule Your Service</CardTitle>
            <CardDescription>
              Fill out the form below and we'll contact you to confirm your booking.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
              {/* Name Fields */}
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <div>
                  <Label htmlFor='firstName'>First Name *</Label>
                  <Input
                    id='firstName'
                    placeholder='John'
                    {...register('firstName')}
                    className={errors.firstName ? 'border-red-500' : ''}
                  />
                  {errors.firstName && (
                    <p className='text-red-500 text-sm mt-1'>{errors.firstName.message}</p>
                  )}
                </div>
                <div>
                  <Label htmlFor='lastName'>Last Name *</Label>
                  <Input
                    id='lastName'
                    placeholder='Doe'
                    {...register('lastName')}
                    className={errors.lastName ? 'border-red-500' : ''}
                  />
                  {errors.lastName && (
                    <p className='text-red-500 text-sm mt-1'>{errors.lastName.message}</p>
                  )}
                </div>
              </div>

              {/* Contact Fields */}
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <div>
                  <Label htmlFor='email'>Email *</Label>
                  <Input
                    id='email'
                    type='email'
                    placeholder='john@example.com'
                    {...register('email')}
                    className={errors.email ? 'border-red-500' : ''}
                  />
                  {errors.email && (
                    <p className='text-red-500 text-sm mt-1'>{errors.email.message}</p>
                  )}
                </div>
                <div>
                  <Label htmlFor='phone'>Phone Number *</Label>
                  <Input
                    id='phone'
                    type='tel'
                    placeholder='(317) 555-0000'
                    {...register('phone')}
                    className={errors.phone ? 'border-red-500' : ''}
                  />
                  {errors.phone && (
                    <p className='text-red-500 text-sm mt-1'>{errors.phone.message}</p>
                  )}
                </div>
              </div>

              {/* Address */}
              <div>
                <Label htmlFor='address'>Property Address *</Label>
                <Input
                  id='address'
                  placeholder='123 Main St, Carmel, IN 46032'
                  {...register('address')}
                  className={errors.address ? 'border-red-500' : ''}
                />
                {errors.address && (
                  <p className='text-red-500 text-sm mt-1'>{errors.address.message}</p>
                )}
              </div>

              {/* Service Type */}
              <div>
                <Label htmlFor='serviceType'>Service Type *</Label>
                <Select value={serviceType} onValueChange={(value) => setValue('serviceType', value)}>
                  <SelectTrigger className={errors.serviceType ? 'border-red-500' : ''}>
                    <SelectValue placeholder='Select a service' />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value='roof-inspection'>Roof Inspection</SelectItem>
                    <SelectItem value='roof-repair'>Roof Repair</SelectItem>
                    <SelectItem value='roof-replacement'>Roof Replacement</SelectItem>
                    <SelectItem value='gutter-cleaning'>Gutter Cleaning</SelectItem>
                    <SelectItem value='gutter-repair'>Gutter Repair</SelectItem>
                    <SelectItem value='gutter-installation'>Gutter Installation</SelectItem>
                    <SelectItem value='skylight-installation'>Skylight Installation</SelectItem>
                    <SelectItem value='skylight-repair'>Skylight Repair</SelectItem>
                    <SelectItem value='other'>Other</SelectItem>
                  </SelectContent>
                </Select>
                {errors.serviceType && (
                  <p className='text-red-500 text-sm mt-1'>{errors.serviceType.message}</p>
                )}
              </div>

              {/* Description */}
              <div>
                <Label htmlFor='description'>Description (Optional)</Label>
                <Textarea
                  id='description'
                  placeholder='Tell us more about your roofing or gutter needs...'
                  rows={4}
                  {...register('description')}
                />
              </div>

              {/* Preferred Date and Time */}
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <div>
                  <Label htmlFor='preferredDate'>Preferred Date (Optional)</Label>
                  <Input
                    id='preferredDate'
                    type='date'
                    {...register('preferredDate')}
                  />
                </div>
                <div>
                  <Label htmlFor='preferredTime'>Preferred Time (Optional)</Label>
                  <Select value={watch('preferredTime') || ''} onValueChange={(value) => setValue('preferredTime', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder='Select a time' />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value='morning'>Morning (8am - 12pm)</SelectItem>
                      <SelectItem value='afternoon'>Afternoon (12pm - 5pm)</SelectItem>
                      <SelectItem value='evening'>Evening (5pm - 8pm)</SelectItem>
                      <SelectItem value='flexible'>Flexible</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Submit Button */}
              <div className='flex gap-4 pt-6'>
                <Button
                  type='submit'
                  disabled={isSubmitting}
                  className='bg-accent hover:bg-accent/90 flex-1'
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Booking'}
                </Button>
                <Link href='/'>
                  <Button type='button' variant='outline' className='flex-1'>
                    Cancel
                  </Button>
                </Link>
              </div>

              {/* Contact Info */}
              <div className='bg-muted/50 p-4 rounded-lg mt-6'>
                <p className='text-sm text-muted-foreground'>
                  <strong>Prefer to call?</strong> Reach us at <a href='tel:3175939742' className='text-accent hover:underline font-semibold'>(317) 593-9742</a>
                </p>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
