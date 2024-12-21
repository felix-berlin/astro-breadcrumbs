import { experimental_AstroContainer as AstroContainer } from "astro/container";
import Breadcrumbs from "../../src/Breadcrumbs.astro";

describe("Breadcrumbs", () => {
  async function renderBreadcrumbs(props: any, slots: any) {
    const container = await AstroContainer.create();
    return container.renderToString(Breadcrumbs, {
      props,
      slots,
    });
  }

  it("renders with default props", async () => {
    const render = await renderBreadcrumbs({}, {});
    expect(render).toContain(
      '<nav aria-label="breadcrumbs" class="c-breadcrumbs"',
    );
  });

  it("renders with custom indexText", async () => {
    const render = await renderBreadcrumbs({ indexText: "Start" }, {});
    expect(render).toContain("Start");
  });

  it("renders with custom ariaLabel", async () => {
    const render = await renderBreadcrumbs({ ariaLabel: "navigation" }, {});
    expect(render).toContain('aria-label="navigation"');
  });

  it("renders with custom crumbs", async () => {
    const crumbs = [
      { text: "Home", url: "/" },
      { text: "About", url: "/about" },
    ];
    const render = await renderBreadcrumbs({ crumbs }, {});
    expect(render).toContain("Home");
    expect(render).toContain("About");
  });

  it("renders with custom separator slot", async () => {
    const slots = { separator: "/" };
    const render = await renderBreadcrumbs({}, slots);
    expect(render).toContain("/");
  });

  it("renders with custom index slot", async () => {
    const slots = { index: "Start" };
    const render = await renderBreadcrumbs({}, slots);
    expect(render).toContain("Start");
  });

  it("renders with schemaJsonScript", async () => {
    const render = await renderBreadcrumbs({ schemaJsonScript: true }, {});
    expect(render).toContain('<script type="application/ld+json"');
  });
});
