import { ReviewCard } from "@/sections/ReviewsSection/components/ReviewCard";
import { CarouselDots } from "@/components/CarouselDots";

export const ReviewsCarousel = () => {
  return (
    <div className="relative text-sm box-border caret-transparent leading-[22.4px] max-w-full outline-[3px] mb-[15px] md:text-base md:leading-[25.6px]">
      <div className="relative text-sm box-border caret-transparent leading-[22.4px] outline-[3px] md:text-base md:leading-[25.6px]">
        <div className="text-sm box-border caret-transparent leading-[22.4px] outline-[3px] w-full overflow-hidden pt-[30px] pb-[15px] px-[15px] md:text-base md:leading-[25.6px]">
          <div className="relative text-sm box-border caret-transparent h-full leading-[22.4px] max-w-full outline-[3px] w-full mx-auto md:text-base md:leading-[25.6px]">
            <div className="relative text-sm items-stretch box-border caret-transparent gap-x-[42px] flex h-full justify-start leading-[22.4px] max-w-full outline-[3px] gap-y-[42px] w-full md:text-base md:gap-x-12 md:leading-[25.6px] md:gap-y-12">
              <ReviewCard
                reviewerName="Sarah Cooke"
                reviewTime="2 days ago"
                reviewText="We needed help with a dehumidifier that failed after 10 years.  It was installed by the previous owners and it needed to be replaced.  Richard from"
                expandedText=" Heart was very knowledgeable and helped us with this unique situation regarding the electrical. Thank you Heart for all your help!"
                ratingAriaLabel="5 / 5"
                platformLogoSrc="https://c.animaapp.com/moump05judxXNB/assets/google-logo.png"
                platformLogoAlt=""
                showExpandableContent={true}
              />
              <ReviewCard
                reviewerName="Logan A. Michaels"
                reviewTime="2 days ago"
                reviewText="We have only had amazing experiences with Heart. Very happy to work with them and to continue working with them. Richard and Taylor are amazing!"
                platformLogoSrc="https://c.animaapp.com/moump05judxXNB/assets/google-logo.png"
                platformLogoAlt=""
              />
              <ReviewCard
                reviewerName="Cody Ades"
                reviewTime="3 days ago"
                reviewText="Joel was super through, a wealth of knowledge, kind, and efficient. I really appreciate him taking the time and double checking everything on the"
                expandedText=" furnace and HVAC system. 10 of 10 will recommend him and Heart again and again."
                platformLogoSrc="https://c.animaapp.com/moump05judxXNB/assets/google-logo.png"
                platformLogoAlt=""
                showExpandableContent={true}
              />
              <ReviewCard
                reviewerName="CU BOULDER LAB RAT Joseph Medina"
                reviewTime="4 days ago"
                reviewText="Excellent professional service."
                platformLogoSrc="https://c.animaapp.com/moump05judxXNB/assets/image-8.svg"
                platformLogoAlt=""
              />
              <ReviewCard
                reviewerName="Amy Erhard"
                reviewTime="4 days ago"
                reviewText="Joel Ramirez was so friendly and helpful. He always does a great job."
                platformLogoSrc="https://c.animaapp.com/moump05judxXNB/assets/image-8.svg"
                platformLogoAlt=""
              />
              <ReviewCard
                reviewerName="Emilie Stienbarger"
                reviewTime="4 days ago"
                reviewText="replaced kitchen  faucet  and (2) shower head provided by customer. Seth very good service"
                platformLogoSrc="https://c.animaapp.com/moump05judxXNB/assets/image-8.svg"
                platformLogoAlt=""
              />
              <ReviewCard
                reviewerName="Cathy Smith"
                reviewTime="5 days ago"
                reviewText="I was very pleased with Omar and his help with my electrical problem, found the most reasonable solution and was very courteous"
                platformLogoSrc="https://c.animaapp.com/moump05judxXNB/assets/image-8.svg"
                platformLogoAlt=""
              />
              <ReviewCard
                reviewerName="Chris Ness"
                reviewTime="5 days ago"
                reviewText="Ben Miller was great! He checked everything out and Wales me through the process. He explained everything clearly and was concise. He identified any"
                expandedText=" fixes and improvements. Good work!"
                ratingAriaLabel="5 / 5"
                starIconSrc="https://c.animaapp.com/moump05judxXNB/assets/icon-8.svg"
                platformLogoSrc="https://c.animaapp.com/moump05judxXNB/assets/image-8.svg"
                platformLogoAlt=""
                showExpandableContent={true}
                readMoreText="Read more"
                readLessText="Read less"
              />
              <ReviewCard
                reviewerName="Diane Taylor"
                reviewTime="5 days ago"
                reviewText="Gerardo did a great job!! I really appreciate Heart and its excellent techs"
                platformLogoSrc="https://c.animaapp.com/moump05judxXNB/assets/image-8.svg"
                platformLogoAlt=""
              />
              <ReviewCard
                reviewerName="Joanne Boysen"
                reviewTime="5 days ago"
                reviewText="Chris did and exceptional and incredibly timely job in fixing all my needs. I would recommend him with the highest praise."
                platformLogoSrc="https://c.animaapp.com/moump05judxXNB/assets/image-8.svg"
                platformLogoAlt=""
              />
              <ReviewCard
                reviewerName="Trevor Hughes"
                reviewTime="6 days ago"
                reviewText="We’ve used Heart multiple times and have always been satisfied with their work, their staff and their pricing."
                platformLogoSrc="https://c.animaapp.com/moump05judxXNB/assets/image-8.svg"
                platformLogoAlt=""
              />
              <ReviewCard
                reviewerName="Michael Burke"
                reviewTime="6 days ago"
                reviewText="Joel Ramirez was very thorough and extremely educational. Really appreciate the professionalism and suggestions for repair or replacement. Highly"
                expandedText=" recommend!"
                platformLogoSrc="https://c.animaapp.com/moump05judxXNB/assets/image-8.svg"
                platformLogoAlt=""
                showExpandableContent={true}
              />
              <ReviewCard
                reviewerName="Richard Rickert"
                reviewTime="6 days ago"
                reviewText="Very professional interaction's. Work performed as quoted to replace a couple of breakers in main panel and cap off conduit for 50 amp service."
                expandedText=" Install box to terminal wires and replace 120 outdoor outlet."
                ratingAriaLabel="5 / 5"
                starIconSrc="https://c.animaapp.com/moump05judxXNB/assets/icon-8.svg"
                platformLogoSrc="https://c.animaapp.com/moump05judxXNB/assets/image-8.svg"
                platformLogoAlt=""
                showExpandableContent={true}
                readMoreText="Read more"
                readLessText="Read less"
              />
              <ReviewCard
                reviewerName="Logan A. Michaels"
                reviewTime="6 days ago"
                reviewText="We have only had amazing experiences with Heart. Very happy to work with them and to continue working with them"
                platformLogoSrc="https://c.animaapp.com/moump05judxXNB/assets/image-8.svg"
                platformLogoAlt=""
              />
              <ReviewCard
                reviewerName="Mackenzie Gault"
                reviewTime="6 days ago"
                reviewText="I worked with both Chris and Daniel to have a kitchen drain clog cleared, the line hydro-jetted, and camera scoped. Both Chris and Daniel were"
                expandedText=" knowledgeable, fast, kind, and had great communication! Very happy with all of the services they provided."
                platformLogoSrc="https://c.animaapp.com/moump05judxXNB/assets/image-8.svg"
                platformLogoAlt=""
                showExpandableContent={true}
              />
              <ReviewCard
                reviewerName="Donna Matela"
                reviewTime="7 days ago"
                reviewText="Davion was amazing! He explained everything to me perfectly. And showed me instructions on how to work my system for all seasons. He was kind,"
                expandedText=" friendly, and professional. 10/10"
                platformLogoSrc="https://c.animaapp.com/moump05judxXNB/assets/image-8.svg"
                platformLogoAlt=""
                showExpandableContent={true}
              />
              <ReviewCard
                reviewerName="Alan Wickman"
                reviewTime="7 days ago"
                reviewText="Seneca arrived promptly and figured out my puzzling situation in a hurry.  Very pleased with the visit and getting things working.  (Inexpensively as"
                expandedText=" well.)"
                platformLogoSrc="https://c.animaapp.com/moump05judxXNB/assets/image-8.svg"
                platformLogoAlt=""
                showExpandableContent
              />
              <ReviewCard
                reviewerName="C"
                reviewTime="1 week ago"
                reviewText="Ben showed up early and gave detailed explanations of the status of my HVAC. 10/10 recommend"
                platformLogoSrc="https://c.animaapp.com/moump05judxXNB/assets/image-8.svg"
                platformLogoAlt=""
              />
            </div>
          </div>
        </div>
      </div>
      <CarouselDots />
    </div>
  );
};
