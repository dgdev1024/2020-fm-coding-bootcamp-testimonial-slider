/* DOM Elements */
const prevButton = document.querySelector('#prev');
const nextButton = document.querySelector('#next');
const currentImage = document.querySelector('#fm-current-image');
const testimonial = document.querySelector('#fm-testimonial');
const testimonialQuote = document.querySelector('#fm-testimonial-quote');
const testimonialName = document.querySelector('#fm-testimonial-name');
const testimonialTitle = document.querySelector('#fm-testimonial-title');

/* Testimonial Data */
const testimonials = [
  {
    name: 'Tanya Sinclair',
    title: 'UX Engineer',
    quote: `I've been interested in coding for a while but have never taken the jump, until now. I coundn't recommend this course enough. I'm now in the job of my dreams and so excited about the future.`,
    image: './img/image-tanya.jpg'
  },
  {
    name: 'John Tarkpor',
    title: 'Junior Front-end Developer',
    quote: `If you want to lay the best foundation possible I'd recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer.`,
    image: './img/image-john.jpg'
  }
];

/* Current Testimonial Index */
let currentTestimonialIndex = 0;

/* Loads the Current Testimonial */
const loadCurrentTestimonialImage = () => {
  prevButton.disabled = currentTestimonialIndex === 0;
  nextButton.disabled = currentTestimonialIndex === testimonials.length - 1;

  const { image } = testimonials[currentTestimonialIndex];
  currentImage.src = image;
  currentImage.classList.remove('fading');
  currentImage.classList.add('unfading');
};

const loadCurrentTestimonialBody = () => {
  const { quote, name, title } = testimonials[currentTestimonialIndex];
  testimonialQuote.innerHTML = `"${quote}"`;
  testimonialName.innerHTML = name;
  testimonialTitle.innerHTML = title;
  testimonial.classList.remove('fading');
  testimonial.classList.add('unfading');
};

/* Increments or Decrements Testimonial */
const incrementTestimonial = () => {
  if (currentTestimonialIndex === testimonials.length - 1) {
    return;
  }

  currentTestimonialIndex++;
  currentImage.classList.add('fading');
  testimonial.classList.add('fading');
};

const decrementTestimonial = () => {
  if (currentTestimonialIndex === 0) {
    return;
  }
  
  currentTestimonialIndex--;
  currentImage.classList.add('fading');
  testimonial.classList.add('fading');
};

/* On Window Load */
window.onload = () => {
  prevButton.addEventListener('click', decrementTestimonial);
  nextButton.addEventListener('click', incrementTestimonial);

  /* On Image Animation Finished */
  currentImage.onanimationend = (ev) => {
    const { animationName } = ev;
    if (animationName === 'image-fading') {
      loadCurrentTestimonialImage();
    } else if (animationName === 'image-unfading') {
      currentImage.classList.remove('unfading');
    }
  };

  /* On Testimonial Animation Finished */
  testimonial.onanimationend = (ev) => {
    const { animationName } = ev;
    console.log(ev.srcElement.style);
    if (animationName === 'testimonial-fading') {
      loadCurrentTestimonialBody();
    } else if (animationName === 'testimonial-unfading') {
      testimonial.classList.remove('unfading');
    }
  };


  loadCurrentTestimonialImage();
  loadCurrentTestimonialBody();
};
