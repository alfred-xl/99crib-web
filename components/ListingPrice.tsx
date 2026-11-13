import { shortPeriod, type Listing } from "@/data/listings";

// "₦2.25M", "₦975K", "₦195.2K": short enough to sit beside the card button at any card width,
// including much larger figures (₦125M). The listing page still shows the exact amount.
const compact = new Intl.NumberFormat("en-US", { notation: "compact", maximumFractionDigits: 2 });

// Card price: compact amount + abbreviated period in smaller grey text.
// Screen readers get the exact amount and the full period instead ("₦2,250,000 per year").
export default function ListingPrice({ price, className = "" }: { price: Listing["price"]; className?: string }) {
  if (!price) {
    return (
      <p className={`whitespace-nowrap ${className}`} title="Price on request">
        <span aria-hidden="true">On request</span>
        <span className="sr-only">Price on request</span>
      </p>
    );
  }
  const period = shortPeriod(price.period);

  return (
    <p className={`whitespace-nowrap ${className}`} title={`${price.amount} ${period.spoken}`}>
      <span aria-hidden="true">
        ₦{compact.format(price.value)}
        <span className="ml-0.5 text-xs font-medium text-gray-500">{period.short}</span>
      </span>
      <span className="sr-only">{price.amount} {period.spoken}</span>
    </p>
  );
}
