import { Truncated } from '../../src/lib/truncated'
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'

describe('Truncated Web Component', () => {
  let container: HTMLElement
  let breadcrumbsNav: HTMLElement
  let truncatedElement: Truncated
  let resizeObserverCallback: ResizeObserverCallback
  let resizeObserverInstance: { observe: any; unobserve: any; disconnect: any }

  beforeEach(() => {
    // Mock ResizeObserver
    resizeObserverInstance = {
      observe: vi.fn(),
      unobserve: vi.fn(),
      disconnect: vi.fn(),
    }

    global.ResizeObserver = class ResizeObserver {
      constructor(callback: ResizeObserverCallback) {
        resizeObserverCallback = callback
      }
      observe = resizeObserverInstance.observe
      unobserve = resizeObserverInstance.unobserve
      disconnect = resizeObserverInstance.disconnect
    }

    // Mock offsetWidth since JSDOM doesn't calculate layout
    Object.defineProperty(HTMLElement.prototype, 'offsetWidth', {
      configurable: true,
      value: 50,
    })

    // Define custom element if not already defined
    if (!customElements.get('astro-breadcrumbs')) {
      customElements.define('astro-breadcrumbs', Truncated)
    }

    // Setup DOM with the component already having attributes
    document.body.innerHTML = `
      <nav id="breadcrumbs-id" class="c-breadcrumbs">
        <ol class="c-breadcrumbs__crumbs">
          <li class="c-breadcrumbs__crumb" data-crumb>Home</li>
          <li class="c-breadcrumbs__crumb" data-crumb>Page 1</li>
          <li class="c-breadcrumbs__crumb" data-crumb>Page 2</li>
          <li class="c-breadcrumbs__crumb has-ellipsis" data-crumb>
             <button class="c-breadcrumbs__truncated-button" data-truncated-button>...</button>
          </li>
        </ol>
      </nav>
      <astro-breadcrumbs
        data-main-bem-class="c-breadcrumbs"
        data-id="breadcrumbs-id"
        data-truncated="true">
      </astro-breadcrumbs>
    `

    truncatedElement = document.querySelector('astro-breadcrumbs') as Truncated
    breadcrumbsNav = document.getElementById('breadcrumbs-id')!
  })

  afterEach(() => {
    vi.restoreAllMocks()
    document.body.innerHTML = ''
  })

  it('initializes correctly and calculates total width', () => {
    // We can't spy on the class constructor directly easily with this setup,
    // but we can check if observe was called.
    expect(resizeObserverInstance.observe).toHaveBeenCalledWith(breadcrumbsNav)
  })

  it('toggles is-truncated class when overflowing', () => {
    // Simulate resize to 100px (less than total 200px)
    resizeObserverCallback(
      [
        {
          target: { clientWidth: 100 } as Element,
          contentRect: {} as DOMRectReadOnly,
          borderBoxSize: [],
          contentBoxSize: [],
          devicePixelContentBoxSize: [],
        },
      ],
      resizeObserverInstance as unknown as ResizeObserver,
    )

    expect(breadcrumbsNav.classList.contains('is-truncated')).toBe(true)
  })

  it('removes is-truncated class when not overflowing', () => {
    // First make it truncated
    breadcrumbsNav.classList.add('is-truncated')

    // Simulate resize to 300px (more than total 200px)
    resizeObserverCallback(
      [
        {
          target: { clientWidth: 300 } as Element,
          contentRect: {} as DOMRectReadOnly,
          borderBoxSize: [],
          contentBoxSize: [],
          devicePixelContentBoxSize: [],
        },
      ],
      resizeObserverInstance as unknown as ResizeObserver,
    )

    expect(breadcrumbsNav.classList.contains('is-truncated')).toBe(false)
  })

  it('handles manual toggle via button click', () => {
    // Force truncated state
    breadcrumbsNav.classList.add('is-truncated')

    const button = breadcrumbsNav.querySelector(
      '.c-breadcrumbs__truncated-button',
    ) as HTMLElement
    expect(button).toBeTruthy()

    button.click()

    expect(breadcrumbsNav.classList.contains('is-truncated')).toBe(false)
  })

  it('respects manual toggle during resize', () => {
    const button = breadcrumbsNav.querySelector(
      '.c-breadcrumbs__truncated-button',
    ) as HTMLElement

    // 1. Truncate initially
    resizeObserverCallback(
      [
        {
          target: { clientWidth: 100 } as Element,
          contentRect: {} as DOMRectReadOnly,
          borderBoxSize: [],
          contentBoxSize: [],
          devicePixelContentBoxSize: [],
        },
      ],
      resizeObserverInstance as unknown as ResizeObserver,
    )
    expect(breadcrumbsNav.classList.contains('is-truncated')).toBe(true)

    // 2. Manually expand
    button.click()
    expect(breadcrumbsNav.classList.contains('is-truncated')).toBe(false)

    // 3. Resize again to small width (should stay expanded because of manual toggle)
    resizeObserverCallback(
      [
        {
          target: { clientWidth: 100 } as Element,
          contentRect: {} as DOMRectReadOnly,
          borderBoxSize: [],
          contentBoxSize: [],
          devicePixelContentBoxSize: [],
        },
      ],
      resizeObserverInstance as unknown as ResizeObserver,
    )

    expect(breadcrumbsNav.classList.contains('is-truncated')).toBe(false)
  })

  it('resets manual toggle when space is sufficient', () => {
    const button = breadcrumbsNav.querySelector(
      '.c-breadcrumbs__truncated-button',
    ) as HTMLElement

    // 1. Truncate initially
    resizeObserverCallback(
      [
        {
          target: { clientWidth: 100 } as Element,
          contentRect: {} as DOMRectReadOnly,
          borderBoxSize: [],
          contentBoxSize: [],
          devicePixelContentBoxSize: [],
        },
      ],
      resizeObserverInstance as unknown as ResizeObserver,
    )

    // 2. Manually expand
    button.click()
    expect(breadcrumbsNav.classList.contains('is-truncated')).toBe(false)

    // 3. Resize to large width (sufficient space)
    resizeObserverCallback(
      [
        {
          target: { clientWidth: 300 } as Element,
          contentRect: {} as DOMRectReadOnly,
          borderBoxSize: [],
          contentBoxSize: [],
          devicePixelContentBoxSize: [],
        },
      ],
      resizeObserverInstance as unknown as ResizeObserver,
    )

    // 4. Resize back to small width
    resizeObserverCallback(
      [
        {
          target: { clientWidth: 100 } as Element,
          contentRect: {} as DOMRectReadOnly,
          borderBoxSize: [],
          contentBoxSize: [],
          devicePixelContentBoxSize: [],
        },
      ],
      resizeObserverInstance as unknown as ResizeObserver,
    )

    expect(breadcrumbsNav.classList.contains('is-truncated')).toBe(true)
  })

  it('disconnects observer on disconnectedCallback', () => {
    truncatedElement.remove()

    expect(resizeObserverInstance.unobserve).toHaveBeenCalledWith(
      breadcrumbsNav,
    )
    expect(resizeObserverInstance.disconnect).toHaveBeenCalled()
  })

  it('does nothing if truncated dataset is missing', () => {
    document.body.innerHTML = `
      <nav id="breadcrumbs-id-2" class="c-breadcrumbs"></nav>
      <astro-breadcrumbs data-id="breadcrumbs-id-2"></astro-breadcrumbs>
    `
    const nav2 = document.getElementById('breadcrumbs-id-2')
    expect(resizeObserverInstance.observe).not.toHaveBeenCalledWith(nav2)
  })

  it('does not observe if breadcrumbs element is not found', () => {
    vi.clearAllMocks()
    document.body.innerHTML = `
      <astro-breadcrumbs data-id="non-existent-id" data-truncated="true"></astro-breadcrumbs>
    `
    // The component initializes, but should not call observe because the element with ID "non-existent-id" is missing.
    expect(resizeObserverInstance.observe).not.toHaveBeenCalled()
  })
})
