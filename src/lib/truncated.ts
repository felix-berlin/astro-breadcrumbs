export class Truncated extends HTMLElement {
  isManualToggle = false;
  breadcrumbs: HTMLElement | null = null;
  mainBemClass: string | null = null;
  totalWidth = 0;

  constructor() {
    super();

    this.mainBemClass = this.dataset.mainBemClass || null;
    const id = this.dataset.id;

    if (!("truncated" in this.dataset)) return;
    if (!id) return;

    // Select the breadcrumbs element
    this.breadcrumbs = document.getElementById(id);

    // Select all the crumb elements
    const crumbs = this.breadcrumbs?.querySelectorAll(
      `.${this.mainBemClass}__crumb`,
    );

    // Calculate the total width of the crumb elements
    crumbs?.forEach((crumb) => {
      this.totalWidth += (crumb as HTMLElement).offsetWidth;
    });

    // Create a new ResizeObserver instance
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        // Check if the breadcrumbs are overflowing
        this.checkOverflow(entry.target.clientWidth);
      }
    });

    // Start observing the breadcrumbs element
    if (this.breadcrumbs) resizeObserver.observe(this.breadcrumbs);
  }

  connectedCallback() {
    this.showHiddenCrumbs();
  }

  /**
   * Toggle the visibility of the truncated crumb
   *
   * @param isTruncated
   */
  toggleTruncated(isTruncated: boolean) {
    if (isTruncated) {
      this.breadcrumbs?.classList.add("is-truncated");
    } else {
      this.breadcrumbs?.classList.remove("is-truncated");
    }
  }

  /**
   * Show the hidden crumbs when the truncated button is clicked
   */
  showHiddenCrumbs() {
    const truncatedButton = this.breadcrumbs?.querySelector(
      `.${this.mainBemClass}__truncated-button`,
    );

    truncatedButton?.addEventListener("click", () => {
      this.breadcrumbs?.classList.remove("is-truncated");
      this.isManualToggle = true;
    });
  }

  /**
   * Check if the breadcrumbs are overflowing
   *
   * @param   {number}  clientWidth
   *
   * @return  {void}
   */
  checkOverflow(clientWidth: number): void {
    if (this.totalWidth > clientWidth && !this.isManualToggle) {
      this.toggleTruncated(true);
    } else {
      this.toggleTruncated(false);
      this.isManualToggle = false;
    }
  }
}
