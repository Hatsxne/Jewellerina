import React from "react";
import "./Reviews.css";

function Reviews() {
  return (
    <div className="reviews-container">
      <h1 class="quote-title">Customers' Reviews</h1>
      <div class="quote">
        <h5 class="quote-header">Moe Bayaa</h5>
        <img src="five-star.png" alt="stars" />
        <p class="quote-desc">
            "I recently purchased a stunning engagement ring from Jewellerina, and I couldn't be happier with my experience. 
            The staff was incredibly knowledgeable and took the time to guide me through their extensive collection. 
            The craftsmanship of their rings is remarkable, and the attention to detail is second to none. 
            I highly recommend Jewellerina for anyone looking for a special piece of jewelry."
        </p>
      </div>
      <div class="quote">
        <h5 class="quote-header">Sarah Lee</h5>
        <img src="five-star.png" alt="stars" />
        <p class="quote-desc">
          "I cannot speak highly enough of Jewellerina. 
            The moment I walked into their store, I was greeted with warmth and genuine interest in helping me find the perfect piece of jewelry. 
            The staff's expertise and passion for their craft are evident in every item they showcase. 
            I purchased a pair of diamond earrings for my daughter's graduation, and she was absolutely thrilled. 
            Thank you, Jewellerina, for making this special occasion even more memorable!"
        </p>
      </div>
      <div class="quote">
        <h5 class="quote-header">Scott Hamilton</h5>
        <img src="five-star.png" alt="stars" />
        <p class="quote-desc">
           "I recently had a custom-made bracelet created by the talented artisans at Jewellerina. 
            The whole process was seamless, from the initial design consultation to the final product. 
            The attention to detail and the ability to capture my vision was impressive. However, I wish the turnaround time for the piece was a bit shorter. 
            Nevertheless, the end result was beyond my expectations, and I receive compliments on my bracelet wherever I go!"
        </p>
      </div>
      <div class="quote">
        <h5 class="quote-header">Maria Kim</h5>
        <img src="five-star.png" alt="stars" />
        <p class="quote-desc">
            "Jewellerina is my go-to jewelry store for all my special occasions. 
            Their collection is simply breathtaking, and their staff is incredibly friendly and knowledgeable. 
            I have purchased several pieces from them, and the quality has always been exceptional. 
            Their commitment to customer satisfaction is commendable, as they always go above and beyond to ensure I am happy with my purchase. 
            I highly recommend Jewellerina to anyone in search of exquisite, timeless jewelry."
        </p>
      </div>
    </div>
  );
}

export default Reviews;