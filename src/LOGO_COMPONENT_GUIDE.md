# Logo Component Usage Guide

## Overview
A centralized, reusable logo component for the Haven Communities brand.

## Location
`/components/Logo.tsx`

## Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `onClick` | `() => void` | No | `undefined` | Click handler for navigation |
| `className` | `string` | No | `""` | Additional CSS classes |

## Features
- ✅ SVG-based Haven Communities logo
- ✅ Automatic hover effects when clickable
- ✅ Consistent styling across all pages
- ✅ Supports custom CSS classes
- ✅ Optimized for performance

## Usage Examples

### Basic Usage (Non-clickable)
```tsx
import Logo from './components/Logo';

function Header() {
  return (
    <div>
      <Logo />
    </div>
  );
}
```

### With Navigation (Clickable)
```tsx
import Logo from './components/Logo';

function Header({ onNavigate }) {
  return (
    <div>
      <Logo onClick={() => onNavigate('home')} />
    </div>
  );
}
```

### With Custom Styling
```tsx
import Logo from './components/Logo';

function Header({ onNavigate }) {
  return (
    <div>
      <Logo 
        onClick={() => onNavigate('home')}
        className="opacity-90"
      />
    </div>
  );
}
```

## Design Specifications
- **Width:** 105px
- **Logo Icon:** 48.49px × 21.72px
- **Main Text:** "H A V E N" (Times New Roman, 24px)
- **Subtitle:** "C O M M U N I T I E S" (Microsoft Sans Serif, 8.25px)
- **Color:** White
- **Gap:** 4.5px between elements

## Replacing Existing Logos

### Current Implementation (Multiple Files)
```tsx
// Each file has its own Frame1000003793 or Frame1000003794
function Frame1000003793() {
  return (
    <div className="...">
      <Group1000003696 />
      <p>H A V E N</p>
      <p>C O M M U N I T I E S</p>
    </div>
  );
}
```

### New Implementation (Centralized)
```tsx
import Logo from '../components/Logo';

// Replace Frame1000003793/Frame1000003794 with:
<Logo onClick={() => navigateTo('home')} />
```

## Files Currently Using Old Logo Pattern
The following files can be updated to use the new Logo component:

### Desktop Pages
- `/imports/Desktop.tsx`
- `/imports/Desktop-17-25589.tsx`
- `/imports/Desktop-21-86850.tsx`
- `/imports/Desktop-34-12746.tsx`
- `/imports/Desktop-34-20344.tsx`
- `/imports/Desktop-34-38105.tsx`
- `/imports/Desktop-34-45968.tsx`
- `/imports/Desktop-34-49489.tsx`
- `/imports/Desktop-34-7755.tsx`

### Mobile Pages
- `/imports/Mobile.tsx`
- `/imports/Mobile-34-4856.tsx`
- (Other mobile variants)

### Component Pages
- `/components/About.tsx`
- `/components/Contact.tsx`
- `/components/Projects.tsx`
- `/components/ProjectDetail.tsx`
- `/components/Blog.tsx`
- `/components/BlogDetail.tsx`

## Benefits of Centralized Logo

1. **Easy Updates** - Change logo in one place, updates everywhere
2. **Consistency** - Same design across all pages
3. **Less Code** - Reduces duplication
4. **Better Maintenance** - Single source of truth
5. **Type Safety** - Proper TypeScript props
6. **Accessibility** - Can easily add alt text if needed

## Migration Guide

### Step 1: Import the Logo
```tsx
import Logo from '../components/Logo';
```

### Step 2: Find Old Logo Usage
Look for:
- `Frame1000003793()`
- `Frame1000003794()`
- `<Frame1000003793 />`
- `<Frame1000003794 />`

### Step 3: Replace with New Logo
```tsx
// Before
<Frame1000003794 onClick={() => onNavigate?.('home')} />

// After
<Logo onClick={() => onNavigate?.('home')} />
```

### Step 4: Remove Old Functions
Delete the old `Frame1000003793`, `Frame1000003794`, and `Group1000003696` functions if they're no longer needed.

## Notes
- Logo is optimized for white backgrounds (white text/SVG)
- For dark mode or different backgrounds, you may need to create a variant
- SVG paths are imported from `/imports/svg-hg4rvefa5p.ts`
- Component is fully responsive and scales appropriately

## Support
For questions or issues with the Logo component, refer to:
- Component file: `/components/Logo.tsx`
- SVG paths: `/imports/svg-hg4rvefa5p.ts`
- Design reference: Figma imports
