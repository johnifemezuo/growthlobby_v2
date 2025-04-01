export interface ITestimonial {
  name: string;
  title: string;
  testimonial: string;
  id: string;
  clientProject: string;
  profile: {
    url: string;
  };
}

export interface ITestimonialData {
  data: { testimonials: ITestimonial[] };
}
