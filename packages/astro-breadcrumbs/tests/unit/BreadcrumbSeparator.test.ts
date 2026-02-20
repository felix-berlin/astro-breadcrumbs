import { experimental_AstroContainer as AstroContainer } from 'astro/container'
import BreadcrumbSeparator from '../../src/BreadcrumbSeparator.astro'

const cssClass = 'c-breadcrumb'
const separator = '>'

async function renderBreadcrumbSeparator(
  props: any = { mainBemClass: cssClass },
  slots: any = { separator: separator },
) {
  const container = await AstroContainer.create()
  return container.renderToString(BreadcrumbSeparator, {
    props,
    slots,
  })
}

describe('BreadcrumbSeparator', () => {
  test('Separator has slot', async () => {
    const result = await renderBreadcrumbSeparator()

    expect(result).toContain(separator)
    expect(result).toContain(cssClass)
  })

  test('Separator is aria-hidden', async () => {
    const result = await renderBreadcrumbSeparator({
      separatorAriaHidden: true,
    })

    expect(result).toContain('aria-hidden="true"')
  })

  test('Separator is not aria-hidden', async () => {
    const result = await renderBreadcrumbSeparator({
      separatorAriaHidden: false,
    })

    expect(result).toContain('aria-hidden="false"')
  })

  test('No separator slot provided', async () => {
    const result = await renderBreadcrumbSeparator({ mainBemClass: cssClass })

    expect(result).not.toContain('aria-hidden')
  })

  test('Separator with custom class', async () => {
    const customClass = 'custom-separator'
    const result = await renderBreadcrumbSeparator({
      mainBemClass: customClass,
    })

    expect(result).toContain(customClass)
    expect(result).toContain(separator)
  })
})
