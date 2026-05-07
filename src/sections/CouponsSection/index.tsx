import { SectionHeader } from "@/components/SectionHeader";
import { CouponCard } from "@/sections/CouponsSection/components/CouponCard";
import { SectionActions } from "@/components/SectionActions";

export const CouponsSection = () => {
  return (
    <div className="relative text-sm box-border caret-transparent leading-[22.4px] outline-[3px] py-[75px] md:text-base md:leading-[25.6px] md:py-[100px]">
      <div className="relative text-sm items-stretch box-border caret-transparent flex justify-center leading-[22.4px] max-w-[1200px] outline-[3px] w-[88%] mb-[60px] mx-auto p-px md:text-base md:leading-[25.6px] md:mb-0">
        <div className="text-sm items-stretch box-border caret-transparent flex grow flex-wrap justify-center leading-[22.4px] mb-[-26px] mt-[-26px] outline-[3px] -mx-4 md:text-base md:leading-[25.6px]">
          <SectionHeader
            eyebrow="Save on service Today"
            title="Latest Coupons & Special Offers"
            rootVariantClass="basis-[calc(100%_-_30px)] mx-[15px] my-[25px]"
            titleVariantClass="text-red-600"
          />
          <CouponCard
            badgeText="Special Offer"
            priceText="$69 "
            offerTitle="Water Heater Flush"
            valueText="($242 Value)"
            ctaHref="https://servicebyheart.com/contact-us/"
            ctaText="Schedule Now"
            disclaimerText="Offer cannot be combined with any other promotions, discounts, or special offers. Terms and conditions may apply.  "
            expiryText={"Expires: \n            May 31, 2026"}
            logoSrc="https://c.animaapp.com/moump05judxXNB/assets/heart-logo-gradient.png"
            logoAlt=""
            iconSrc="https://c.animaapp.com/moump05judxXNB/assets/icon-2.svg"
            iconAlt="Icon"
          />
          <CouponCard
            badgeText="Special Offer"
            priceText="$1,000 Off "
            offerTitle="Sewer Line Replacement"
            valueText="Valid on full traditional or trenchless replacements."
            ctaHref="https://servicebyheart.com/contact-us/"
            ctaText="Schedule Now"
            disclaimerText="Offer cannot be combined with any other promotions, discounts, or special offers. Terms and conditions may apply."
            expiryText="Expires: May 31, 2026"
            logoSrc="https://c.animaapp.com/moump05judxXNB/assets/heart-logo-gradient.png"
            logoAlt=""
            iconSrc="https://c.animaapp.com/moump05judxXNB/assets/icon-2.svg"
            iconAlt="Icon"
          />
          <CouponCard
            badgeText="Special Offer"
            priceText="FREE "
            offerTitle="Sewer Camera Inspection with Drain Service"
            valueText="Visual inspection included with visit."
            ctaHref="https://servicebyheart.com/contact-us/"
            ctaText="Schedule Now"
            disclaimerText="Offer cannot be combined with any other promotions, discounts, or special offers. Terms and conditions may apply.  "
            expiryText="Expires: May 31, 2026"
            logoSrc="https://c.animaapp.com/moump05judxXNB/assets/heart-logo-gradient.png"
            logoAlt=""
            iconSrc="https://c.animaapp.com/moump05judxXNB/assets/icon-2.svg"
            iconAlt="Icon"
          />
          <SectionActions />
        </div>
      </div>
    </div>
  );
};
