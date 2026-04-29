# FootyViz Frontend Conventions

## Architecture

Light-DOM web components + htmx + tiny EventTarget store.
Server renders complete HTML. Components enhance existing DOM.

## Required patterns

1. Server renders meaningful content. View-source must show real data.
2. Components enhance DOM in connectedCallback (find children, add 
   listeners). They do NOT generate primary content.
3. Light DOM only. No attachShadow, no declarative shadow DOM.
4. Component CSS lives in the global stylesheet, loaded in <head>.
5. Component JS loaded in <head> with defer.
6. Inline `:not(:defined) { visibility: hidden }` to prevent FOUC.
7. htmx fragments are HTML only. No <script> tags, no JS execution.

## Composition

Components compose via child tags, not via symbolic prop values that name a
child. The host element's attributes are limited to:

- Behavior — aria-disabled, data-loading, etc. State the user (or server)
  flips at runtime.
- Variant — data-variant from a fixed visual set defined by the design
  system.
- Size — data-size from a fixed scale.

Anything else is a child. CSS reacts to composition via descendant
selectors and :has().

```html
<!-- yes -->
<fv-button data-variant="primary"><fv-icon name="play"></fv-icon><span>Watch live</span></fv-button>

<!-- no -->
<fv-button data-variant="primary" data-icon="play" data-label="Watch live"/>
```

Why: composition keeps each component small and replaceable. A consumer can
substitute a different icon component, drop the icon entirely, or wrap text
in their own element without the host having to know about it.

## Forbidden patterns

- this.attachShadow(...)
- <template shadowrootmode="...">
- this.innerHTML = '...' for primary content in connectedCallback
- <script> tags in htmx response fragments
- Putting server-fetched data in the store
- Defining custom elements anywhere except the initial page load bundle

## State management hierarchy

1. Server state: coordinate via htmx (OOB swaps, hx-trigger events). 
   Default choice for anything involving data.
2. Client UI state: use store.js for ephemeral state shared between 
   components (selections, view modes). Never put server data here.
3. Component-local state: instance fields, no external coordination.

Rule: if state should survive reload, it belongs on the server.
If two unrelated components read it, it goes in the store.
Otherwise it's component-local.

## Component file structure

- One component per file
- Filename matches tag name (match-card.js → <match-card>)
- DOM contract documented in JSDoc comment at top of file
- connectedCallback queries existing children, adds listeners
- disconnectedCallback removes all listeners and subscriptions
- Subscribe to store with store.addEventListener, unsubscribe in disconnectedCallback

## Styling

- Component styles target tag name + data-attributes in global stylesheet
- Per-instance dynamic values use CSS custom properties via inline style
- Never inject <style> tags from JS
- Never inject <style> tags in htmx fragments (use global styles + data-attributes)