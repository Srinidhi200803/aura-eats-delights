# Aura Eats: Elevated Dining

Build a Premium Food Ordering Interface — AURA EATS

Create a premium, modern, fully functional food ordering web application called AURA EATS.

This is a frontend-focused food ordering interface project. The website must demonstrate strong UI/UX design, responsive layouts, JavaScript interactions, component-based React development, and a working shopping cart.

Do not create a basic template or a generic food delivery clone. Make the interface look like a polished, premium food-tech startup product with a distinctive visual identity.

1. TECHNOLOGY REQUIREMENTS

Use:

React + Vite + TypeScript

Tailwind CSS

Lucide React icons

Framer Motion for animations, if supported

Local static product data

React state for cart functionality

localStorage to persist the cart when practical

Do not add a backend, payment gateway, authentication system, or unnecessary complexity for this task.

The application must run correctly and all interactive features must work.

2. BRAND IDENTITY

Brand name: AURA EATS

Brand tagline: Crave the extraordinary.

Brand description:
A premium food ordering experience that brings delicious food, curated menus, and seamless ordering into one beautiful interface.

Visual personality:

Premium

Modern

Elegant

App-like

Warm

Interactive

Minimal but visually rich

Avoid:

Generic Bootstrap layouts

Excessive gradients

Cluttered screens

Poor contrast

Unnecessary text

Broken buttons

Excessive animations

Fake functionality

3. DESIGN SYSTEM

Color palette

Use a sophisticated dark theme.

Primary background:

Deep charcoal / near-black

#0B0B0D

#121216

Surface colors:

Translucent charcoal glass cards

Subtle warm-gray borders

Background blur where appropriate

Accent colors:

Warm amber

Golden orange

Soft cream

Subtle coral accents for food highlights

Use gradients sparingly and maintain readable text contrast.

Typography

Use a clean modern sans-serif font such as Inter or Plus Jakarta Sans.

Typography hierarchy:

Large, bold hero heading

Clear section headings

Readable product names

High-contrast prices

Small, subtle metadata

Glassmorphism

Use glassmorphism selectively for:

Navbar

Category controls

Food card overlays where appropriate

Cart drawer

Floating interface elements

Glassmorphism must not reduce readability.

Use:

backdrop blur

translucent backgrounds

subtle borders

soft shadows

consistent corner radii

Do not make every section transparent.

4. PAGE STRUCTURE

Create a single-page food ordering interface with the following sections.

A. Sticky Navigation Bar

Create a premium sticky navbar.

Include:

AURA EATS logo

Small food-related icon or custom brand mark

Navigation links: Home, Menu, Offers

Search icon/button

Cart icon with live item count

A visually polished layout

The navbar should:

Remain usable on mobile

Have a subtle glass effect

Use smooth transitions

Collapse or adapt for smaller screens

B. HERO SECTION

Create an eye-catching premium restaurant hero section.

Main heading:

"Crave the extraordinary."

Supporting text:

"Discover handcrafted flavors, curated favorites, and unforgettable bites delivered to your table."

Include:

Primary CTA: Explore Menu

Secondary CTA: View Offers

A premium food image or a carefully chosen food visual

Decorative abstract elements

Subtle animated accents

Responsive two-column layout on desktop

Hero design:

Dark luxury restaurant aesthetic

Strong visual hierarchy

Beautiful spacing

Subtle depth

No excessive clutter

The Explore Menu button must scroll to the menu section.

The View Offers button must navigate to or reveal an offers area within the interface.

C. FEATURED RESTAURANT / PROMOTIONAL BANNER

Add a visually appealing promotional banner below the hero.

Example:

"Your cravings, elevated."

Supporting text:
"Explore today's curated selection of comfort food and chef-inspired favorites."

Include:

A food image

Small promotional label

CTA button

Responsive design

Premium visual treatment

Use a generic brand identity and royalty-free or appropriately licensed food imagery. Do not use copyrighted restaurant branding or misleading brand claims.

D. FOOD CATEGORIES

Create a horizontal category navigation section.

Categories:

All

Pizza

Burgers

Indian

Asian

Desserts

Drinks

Requirements:

Each category is interactive.

Selected category has a clear active state.

Clicking a category filters the food cards.

Use icons or simple visual indicators.

Horizontal scrolling should work on mobile.

Include smooth transitions.

E. FOOD MENU GRID

Create a premium responsive food card grid.

Display at least 10 realistic sample food items across the categories.

Each food card must include:

High-quality food image

Food name

Short description

Price in Indian Rupees (₹)

Category

Vegetarian indicator where applicable

Rating or small metadata label

Add to Cart button

Sample food items:

Truffle Mushroom Pizza — ₹349

Classic Smash Burger — ₹279

Spicy Paneer Tikka — ₹249

Korean Gochujang Bowl — ₹329

Creamy Alfredo Pasta — ₹299

Crispy Chicken Burger — ₹299

Chocolate Lava Cake — ₹199

Mango Matcha Cooler — ₹179

Margherita Pizza — ₹299

Loaded French Fries — ₹149

Use consistent pricing and realistic descriptions.

Food cards must:

Have equal visual structure

Maintain image aspect ratios

Display well on desktop and mobile

Use tasteful hover animations

Avoid layout shifting

Remain readable in the dark theme

5. FUNCTIONAL CART SYSTEM

This is a core requirement.

Implement a fully functional shopping cart using React state.

Add to Cart

When the user clicks Add to Cart:

Add the selected food item to the cart.

Show visual feedback.

Update the cart item count.

Prevent accidental duplicate entries by increasing quantity where appropriate.

Allow the user to continue browsing.

Cart Drawer

When the user clicks the cart icon, open a beautiful side drawer or responsive modal.

Display:

Selected food items

Food image

Food name

Unit price

Quantity controls

Remove button

Subtotal

Delivery fee

Total price

Include a close button and ensure the drawer is usable on mobile.

Quantity Controls

Each cart item must support:

Increase quantity

Decrease quantity

Remove when quantity reaches zero or through a remove action

All totals must update immediately.

Pricing

Use:

Subtotal

Delivery fee (e.g. ₹40 for a non-empty cart)

Total = Subtotal + Delivery fee

Do not charge delivery fee when the cart is empty.

Add a clear Checkout button.

Checkout may show a friendly "Demo checkout" message or confirmation state. Do not implement real payments.

Cart Empty State

When the cart has no items, display:

A clean empty-cart illustration or icon

Message: "Your cart is waiting for something delicious."

Button: "Explore Menu"

The button must close the cart and scroll to the menu.

6. SEARCH FUNCTIONALITY

Implement a functional food search interface.

Requirements:

Search by food name.

Search by description or category where practical.

Update displayed food cards as the user types.

Display a helpful empty-search state.

Include a clear search control if appropriate.

Ensure search works on mobile.

7. ANIMATIONS AND MICRO-INTERACTIONS

Use premium but purposeful animations.

Include:

Smooth hero entrance animation

Subtle scroll reveal for sections

Food card hover elevation

Image scale on hover

Button hover transitions

Cart drawer slide-in animation

Add-to-cart feedback

Smooth category filter transitions

Animation principles:

Keep the interface responsive.

Avoid long loading delays.

Respect prefers-reduced-motion where practical.

Do not block the user from interacting with the menu.

Do not add a heavy 3D background that delays initial rendering.

The website must feel fast and polished.

8. RESPONSIVE DESIGN

The application must work properly on:

Mobile phones

Tablets

Laptops

Desktop monitors

Mobile requirements:

Responsive navbar

Horizontal category scrolling

Food cards in a suitable mobile grid

Full-width or near-full-width cart drawer

Readable typography

Proper spacing

No horizontal page overflow

Accessible touch targets

Desktop requirements:

Balanced content width

Responsive food grid

Premium whitespace

Consistent alignment

Comfortable cart experience

Test the layout at different screen sizes.

9. ACCESSIBILITY AND CODE QUALITY

Implement:

Semantic HTML

Accessible buttons

Descriptive image alt text

Keyboard-friendly interactive controls where practical

Visible focus states

Good color contrast

Code requirements:

Organize the application into reusable React components.

Separate product data from UI components.

Use TypeScript types for products and cart items.

Keep cart calculations reliable.

Avoid unnecessary duplicated code.

Do not generate broken imports or missing components.

Do not leave placeholder buttons that do nothing.

10. FINAL QUALITY CHECK

Before finishing, verify:

The application runs without errors.

All food categories filter correctly.

Search works.

Add to Cart works.

Quantity controls work.

Remove item works.

Cart totals calculate correctly.

Delivery fee is handled correctly.

Empty cart state works.

Hero CTA scrolls to the menu.

Mobile layout is responsive.

Desktop layout is polished.

Animations do not block functionality.

No broken images or broken links.

No unnecessary backend setup.

Final design goal:

Make AURA EATS look like a premium food-tech product that a frontend developer would proudly showcase in a portfolio. Prioritize functional interactions, visual consistency, responsive design, and a professional user experience over unnecessary complexity.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://aura-eats-delights.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/d0f1408b-759c-4c6b-9a96-f582d9cb10e9).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
