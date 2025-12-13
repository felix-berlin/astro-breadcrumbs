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

  it("renders with schemaJsonScript false", async () => {
    const render = await renderBreadcrumbs({ schemaJsonScript: false }, {});
    expect(render).not.toContain('<script type="application/ld+json"');
  });

  it("renders with truncation", async () => {
    const container = await AstroContainer.create();
    const render = await container.renderToString(Breadcrumbs, {
      props: {
        truncated: true,
        crumbs: [
          { text: "Home", href: "/" },
          { text: "Level 1", href: "/1" },
          { text: "Level 2", href: "/2" },
          { text: "Level 3", href: "/3" },
          { text: "Current", href: "/4" },
        ],
      },
      slots: {
        ellipsis: "More...",
      },
      request: new Request("http://localhost/1/2/3/4"),
    });
    expect(render).toContain("More...");
  });

  it("renders with separator between crumbs", async () => {
    const render = await renderBreadcrumbs(
      {
        crumbs: [
          { text: "Home", href: "/" },
          { text: "Page", href: "/page" },
        ],
      },
      {
        separator: "<span>|</span>",
      },
    );
    expect(render).toContain("<span>|</span>");
  });

  it("renders without default styles when cssClasses is provided", async () => {
    const render = await renderBreadcrumbs({ cssClasses: {} }, {});
    expect(render).not.toContain(' class="c-breadcrumbs"');
    expect(render).not.toContain(' class="c-breadcrumbs__crumbs"');
    expect(render).not.toContain(' class="c-breadcrumbs__crumb"');
  });

  it("renders with custom classes when provided via cssClasses", async () => {
    const render = await renderBreadcrumbs(
      {
        cssClasses: {
          container: "custom-nav",
          list: "custom-list",
          item: "custom-item",
          link: "custom-link",
          separator: "custom-separator",
        },
        crumbs: [
          { text: "Home", href: "/" },
          { text: "Page", href: "/page" },
        ],
      },
      { separator: ">" }
    );

    expect(render).toContain('class="custom-nav"');
    expect(render).toContain('class="custom-list"');
    expect(render).toContain('class="custom-item"');
    expect(render).toContain('class="custom-link"');
    expect(render).toContain('class="custom-separator"');
  });
});
