export class Truncated extends HTMLElement {
  isManualToggle = false;
  breadcrumbs: HTMLElement | null = null;
  mainBemClass: string | null = null;
  totalWidth = 0;
  resizeObserver: ResizeObserver | null = null;

  constructor() {
    super();

    this.mainBemClass = this.dataset.mainBemClass || null;
    const id = this.dataset.id;

    if (!("truncated" in this.dataset) || !id) return;

    // Select the breadcrumbs element
    this.breadcrumbs = document.getElementById(id);

    this.initializeCrumbs();
    this.setupResizeObserver();
  }

  /**
   * Initialize the crumbs and calculate the total width of the breadcrumbs
   *
   * @return  {void}
   */
  initializeCrumbs(): void {
    const crumbs = this.breadcrumbs?.querySelectorAll(
      `.${this.mainBemClass}__crumb`,
    );
    crumbs?.forEach((crumb) => {
      this.totalWidth += (crumb as HTMLElement).offsetWidth;
    });
  }

  /**
   * Setup the ResizeObserver to check for overflow on the breadcrumbs
   *
   * @return  {void}
   */
  setupResizeObserver(): void {
    this.resizeObserver = new ResizeObserver((entries) => {
      entries.forEach((entry) => {
        this.checkOverflow(entry.target.clientWidth);
      });
    });

    if (this.breadcrumbs) this.resizeObserver.observe(this.breadcrumbs);
  }

  connectedCallback() {
    this.showHiddenCrumbs();
  }

  disconnectedCallback() {
    if (this.resizeObserver && this.breadcrumbs) {
      this.resizeObserver.unobserve(this.breadcrumbs);
      this.resizeObserver.disconnect();
    }
  }

  /**
   * Toggle the visibility of the truncated crumb
   *
   * @param isTruncated
   */
  toggleTruncated(isTruncated: boolean) {
    this.breadcrumbs?.classList.toggle("is-truncated", isTruncated);
  }

  /**
   * Show the hidden crumbs when the truncated button is clicked
   */
  showHiddenCrumbs() {
    const truncatedButton = this.breadcrumbs?.querySelector(
      `.${this.mainBemClass}__truncated-button`,
    );
    truncatedButton?.removeEventListener(
      "click",
      this.handleTruncatedButtonClick,
    );
    truncatedButton?.addEventListener(
      "click",
      this.handleTruncatedButtonClick.bind(this),
    );
  }

  /**
   * Handle the click event on the truncated button
   *
   * @return  {void}
   */
  handleTruncatedButtonClick = (): void => {
    this.breadcrumbs?.classList.remove("is-truncated");
    this.isManualToggle = true;
  };

  /**
   * Check if the breadcrumbs are overflowing
   *
   * @param   {number}  clientWidth
   *
   * @return  {void}
   */
  checkOverflow(clientWidth: number): void {
    const isOverflowing = this.totalWidth > clientWidth && !this.isManualToggle;
    this.toggleTruncated(isOverflowing);
    if (!isOverflowing) this.isManualToggle = false;
  }
}
