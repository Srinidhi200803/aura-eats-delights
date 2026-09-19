# AURA EATS — Premium Food Ordering Interface

## Goal
Build a polished, responsive, single-page food ordering experience with a dark luxury aesthetic and a fully working browser-persisted cart. Keep the project frontend-only.

## Experience
- Create a sticky glass navigation bar with AURA EATS branding, Home/Menu/Offers links, search control, and live cart count.
- Build a dramatic two-column restaurant hero using a generated premium food photograph, with working Menu and Offers actions.
- Add an editorial promotional banner and a dedicated offers area so every navigation action has a real destination.
- Add horizontally scrollable category controls for All, Pizza, Burgers, Indian, Asian, Desserts, and Drinks.
- Present at least ten consistent food cards with imagery, dietary indicators, ratings, descriptions, INR pricing, and responsive add-to-cart controls.
- Include functional live search across names, descriptions, and categories, plus clear zero-result feedback.
- Use focused entrance, reveal, hover, image, filter, and drawer motion while honoring reduced-motion preferences.

## Cart Behavior
- Maintain cart state in React and restore/save it through localStorage after hydration.
- Increase quantity when an existing item is added again.
- Provide a responsive side drawer with item images, quantity controls, remove actions, subtotal, ₹40 delivery fee for non-empty carts, and total.
- Provide a polished empty state whose action closes the drawer and scrolls to the menu.
- Make Checkout produce an explicit demo confirmation without introducing payments or a backend.

## Visual System
- Define an AURA EATS token system in the global stylesheet: charcoal backgrounds, warm amber primary, cream text, coral detail, warm-gray borders, glass surfaces, restrained shadows, and Plus Jakarta Sans.
- Use one cohesive radius and spacing language, selective glass treatments, high contrast, visible focus states, and stable image/card dimensions.
- Generate and bundle a cohesive set of food photography for the hero, promotion, and product menu so there are no external image dependencies.

## Structure
- Keep `/` as the application screen and split concerns into typed product data, menu/navigation components, and cart components.
- Reuse the existing Button, Input, Sheet, and toast primitives, refining their variants only where the brand needs it.
- Add route-specific title, description, Open Graph, and Twitter metadata for AURA EATS.

## Validation
- Verify category filtering, search, add/increment/decrement/remove actions, persistence, totals, delivery fee, empty state, menu scrolling, offers navigation, and checkout feedback.
- Check desktop and mobile layouts in the running preview for overflow, readability, touch targets, drawer usability, image loading, and console errors.
