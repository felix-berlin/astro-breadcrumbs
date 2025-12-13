import { experimental_AstroContainer as AstroContainer } from "astro/container";
import BreadcrumbLink from "../../src/BreadcrumbLink.astro";

describe("BreadcrumbLink", () => {
  const cssClass = "c-breadcrumb";

  async function renderBreadcrumbLink(
    props: any = { mainBemClass: cssClass },
    slots: any = {},
  ) {
    const container = await AstroContainer.create();
    return container.renderToString(BreadcrumbLink, {
      props,
      slots,
    });
  }

  it("renders with default props", async () => {
    const render = await renderBreadcrumbLink();
    expect(render).toContain('class="c-breadcrumb__link"');
  });

  it("renders with isCurrent prop", async () => {
    const render = await renderBreadcrumbLink({
      mainBemClass: cssClass,
      isCurrent: true,
    });
    expect(render).toContain('class="c-breadcrumb__link is-current"');
    expect(render).toContain('aria-current="location"');
  });

  it("renders with isIndex prop", async () => {
    const render = await renderBreadcrumbLink({
      mainBemClass: cssClass,
      isIndex: true,
    });
    expect(render).toContain('class="c-breadcrumb__link is-index"');
  });

  it("renders with both isCurrent and isIndex props", async () => {
    const render = await renderBreadcrumbLink({
      mainBemClass: cssClass,
      isCurrent: true,
      isIndex: true,
    });
    expect(render).toContain('class="c-breadcrumb__link is-current is-index"');
    expect(render).toContain('aria-current="location"');
  });

  it("renders with custom attributes", async () => {
    const render = await renderBreadcrumbLink({
      mainBemClass: cssClass,
      attrs: { href: "#", title: "Home" },
    });
    expect(render).toContain('href="#"');
    expect(render).toContain('title="Home"');
  });
});
