import React from 'react';

export default ({ testimonials }) => (
  <div>
    {testimonials.map((testimonial,index) => (
      <article className="message" key={index}>
        <div className="message-body">
          {testimonial.quote}
          <br />
          <cite> – {testimonial.author}</cite>
        </div>
      </article>
    ))}
  </div>
);
