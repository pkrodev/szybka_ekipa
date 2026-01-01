import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Utility function to merge Tailwind CSS classes
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Format price to Polish currency format
 * @param price - Price in PLN
 * @returns Formatted price string (e.g., "150 zł")
 */
export function formatPrice(price: number): string {
  return `${price.toLocaleString("pl-PL")} zł`;
}

/**
 * Format price range
 * @param min - Minimum price
 * @param max - Maximum price
 * @returns Formatted price range (e.g., "150-200 zł")
 */
export function formatPriceRange(min: number, max: number): string {
  return `${min.toLocaleString("pl-PL")}-${max.toLocaleString("pl-PL")} zł`;
}

/**
 * Format phone number for display
 * @param phone - Raw phone number
 * @returns Formatted phone number (e.g., "733 435 333")
 */
export function formatPhone(phone: string): string {
  const cleaned = phone.replace(/\D/g, "");
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{3})$/);
  if (match) {
    return `${match[1]} ${match[2]} ${match[3]}`;
  }
  return phone;
}

/**
 * Convert phone number to tel: link
 * @param phone - Phone number
 * @returns Tel link (e.g., "tel:+48733435319")
 */
export function phoneToHref(phone: string): string {
  const cleaned = phone.replace(/\D/g, "");
  return `tel:+48${cleaned}`;
}

/**
 * Calculate distance-based travel cost
 * @param distanceKm - Distance in kilometers
 * @param pricePerKm - Price per kilometer
 * @returns Travel cost
 */
export function calculateTravelCost(distanceKm: number, pricePerKm: number): number {
  return Math.round(distanceKm * pricePerKm);
}

/**
 * Slugify text for URLs
 * @param text - Text to slugify
 * @returns Slugified text
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}
