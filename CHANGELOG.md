# Changelog

All notable changes to this project will be documented in this file. See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [3.3.1](https://github.com/felix-berlin/astro-breadcrumbs/compare/v3.3.0...v3.3.1) (2024-12-11)


### Bug Fixes

* docs state customizeLinks instead of customizeListElements ([a427479](https://github.com/felix-berlin/astro-breadcrumbs/commit/a427479c319e45bc3d2a809c3259f75892d4b5e0))

# [3.3.0](https://github.com/felix-berlin/astro-breadcrumbs/compare/v3.2.2...v3.3.0) (2024-12-04)


### Features

* **support:** add astro v5 support ([746c256](https://github.com/felix-berlin/astro-breadcrumbs/commit/746c256b8daad0e5166789485b914ec50c47ff63))

## [3.2.2](https://github.com/felix-berlin/astro-breadcrumbs/compare/v3.2.1...v3.2.2) (2024-11-29)


### Bug Fixes

* typo in slot name ([ade10b1](https://github.com/felix-berlin/astro-breadcrumbs/commit/ade10b1e2024b6445a8ef147404b344a9b0399f6))

## [3.2.1](https://github.com/felix-berlin/astro-breadcrumbs/compare/v3.2.0...v3.2.1) (2024-11-29)


### Bug Fixes

* **generateCrumbs:** fix extra separator with excludeCurrentPage prop ([abfd508](https://github.com/felix-berlin/astro-breadcrumbs/commit/abfd508e72f47a20473b6d441b3e9f8487963cee))
* make sure excludeCurrentPage is used ([0d3f27f](https://github.com/felix-berlin/astro-breadcrumbs/commit/0d3f27ffd5c0ef7fea6700ff3faf4fd8e1f9c02e))

# [3.2.0](https://github.com/felix-berlin/astro-breadcrumbs/compare/v3.1.0...v3.2.0) (2024-09-19)


### Features

* add new prop id ([0821c42](https://github.com/felix-berlin/astro-breadcrumbs/commit/0821c42c6ff7ef38df334287ee2da823f8408dcd))

# [3.1.0](https://github.com/felix-berlin/astro-breadcrumbs/compare/v3.0.1...v3.1.0) (2024-09-13)


### Bug Fixes

* **excludeCurrentPage:** exclusion was carried out twice ([d866c98](https://github.com/felix-berlin/astro-breadcrumbs/commit/d866c984dc34e3500bf1536305a6062e8465aad4))


### Features

* **customizeListElements:** add special key "remove" to remove specific crumb ([7fe2e4a](https://github.com/felix-berlin/astro-breadcrumbs/commit/7fe2e4abfa558c420a8e713e05aeee1edc94600f))

## [3.0.1](https://github.com/felix-berlin/astro-breadcrumbs/compare/v3.0.0...v3.0.1) (2024-08-15)


### Bug Fixes

* broken breadcrumb text on non latin languages ([2a975c7](https://github.com/felix-berlin/astro-breadcrumbs/commit/2a975c79a5f0a4939a407d8b9c0019f835613b92))

# [3.0.0](https://github.com/felix-berlin/astro-breadcrumbs/compare/v2.3.1...v3.0.0) (2024-08-14)


* feat(customizeLinks)!: add new prop customizeLinks ([2cb7ac7](https://github.com/felix-berlin/astro-breadcrumbs/commit/2cb7ac7ef7d04096267668ebea4b342db977a4a6))


### Bug Fixes

* **customElements:** define only if not allready defined ([5df3c7f](https://github.com/felix-berlin/astro-breadcrumbs/commit/5df3c7fd1de4eaad8ed297a0157a2774b0992716))
* parts were overwritten directly ([dec7f13](https://github.com/felix-berlin/astro-breadcrumbs/commit/dec7f13d4982622de99e895c3ad6724de547695f))
* **spacing:** replace margin with margin-inline ([76da2aa](https://github.com/felix-berlin/astro-breadcrumbs/commit/76da2aadca709c655ab1a0b28a11b607f86d1463))
* type errors ([f57f4fa](https://github.com/felix-berlin/astro-breadcrumbs/commit/f57f4fa3f3b2741012a0f2fd8a53861a3e725d2c))


### Features

* "is-last" special key for customizeLinks ([18955d8](https://github.com/felix-berlin/astro-breadcrumbs/commit/18955d88db7ee3fdfdfe6151e2de36a6bbb4b5bd))
* add props customizeList and customizeNav for attr customization ([e1bf0b3](https://github.com/felix-berlin/astro-breadcrumbs/commit/e1bf0b3ea63fe60908bbd1cb8a3f0cb6fd111000))
* **customizeLinks:** set index in object to modify spezific parts ([006b8be](https://github.com/felix-berlin/astro-breadcrumbs/commit/006b8be250aa62968dbe4fc0528e44edfc70fd9f))
* **customizeListElements:** customize list elements attributes ([3afb70e](https://github.com/felix-berlin/astro-breadcrumbs/commit/3afb70e057b94e9bbd9ae441a440ff0aefb0b4ce))
* **separator:** add prop to control aria-hidden; missing css main class ([ff2f4ee](https://github.com/felix-berlin/astro-breadcrumbs/commit/ff2f4ee6fe3aa48b31b659d9ac9acbe2ed45877d))


### BREAKING CHANGES

* customize every attribute of the breadcrumb link including the text, therefore you can define an array of objects. Each entry will be merged with the original generated crumbs array.

# [3.0.0-beta.10](https://github.com/felix-berlin/astro-breadcrumbs/compare/v3.0.0-beta.9...v3.0.0-beta.10) (2024-08-14)


### Bug Fixes

* **spacing:** replace margin with margin-inline ([76da2aa](https://github.com/felix-berlin/astro-breadcrumbs/commit/76da2aadca709c655ab1a0b28a11b607f86d1463))

# [3.0.0-beta.9](https://github.com/felix-berlin/astro-breadcrumbs/compare/v3.0.0-beta.8...v3.0.0-beta.9) (2024-08-14)


### Bug Fixes

* **customElements:** define only if not allready defined ([5df3c7f](https://github.com/felix-berlin/astro-breadcrumbs/commit/5df3c7fd1de4eaad8ed297a0157a2774b0992716))

# [3.0.0-beta.8](https://github.com/felix-berlin/astro-breadcrumbs/compare/v3.0.0-beta.7...v3.0.0-beta.8) (2024-07-21)


### Features

* **separator:** add prop to control aria-hidden; missing css main class ([ff2f4ee](https://github.com/felix-berlin/astro-breadcrumbs/commit/ff2f4ee6fe3aa48b31b659d9ac9acbe2ed45877d))

# [3.0.0-beta.7](https://github.com/felix-berlin/astro-breadcrumbs/compare/v3.0.0-beta.6...v3.0.0-beta.7) (2024-07-21)


### Features

* add props customizeList and customizeNav for attr customization ([e1bf0b3](https://github.com/felix-berlin/astro-breadcrumbs/commit/e1bf0b3ea63fe60908bbd1cb8a3f0cb6fd111000))

# [3.0.0-beta.6](https://github.com/felix-berlin/astro-breadcrumbs/compare/v3.0.0-beta.5...v3.0.0-beta.6) (2024-06-22)


### Features

* **customizeListElements:** customize list elements attributes ([3afb70e](https://github.com/felix-berlin/astro-breadcrumbs/commit/3afb70e057b94e9bbd9ae441a440ff0aefb0b4ce))

# [3.0.0-beta.5](https://github.com/felix-berlin/astro-breadcrumbs/compare/v3.0.0-beta.4...v3.0.0-beta.5) (2024-06-21)


### Bug Fixes

* type errors ([f57f4fa](https://github.com/felix-berlin/astro-breadcrumbs/commit/f57f4fa3f3b2741012a0f2fd8a53861a3e725d2c))

# [3.0.0-beta.4](https://github.com/felix-berlin/astro-breadcrumbs/compare/v3.0.0-beta.3...v3.0.0-beta.4) (2024-06-21)


### Bug Fixes

* parts were overwritten directly ([dec7f13](https://github.com/felix-berlin/astro-breadcrumbs/commit/dec7f13d4982622de99e895c3ad6724de547695f))

# [3.0.0-beta.3](https://github.com/felix-berlin/astro-breadcrumbs/compare/v3.0.0-beta.2...v3.0.0-beta.3) (2024-06-21)


### Features

* **customizeLinks:** set index in object to modify spezific parts ([006b8be](https://github.com/felix-berlin/astro-breadcrumbs/commit/006b8be250aa62968dbe4fc0528e44edfc70fd9f))

# [3.0.0-beta.2](https://github.com/felix-berlin/astro-breadcrumbs/compare/v3.0.0-beta.1...v3.0.0-beta.2) (2024-06-21)


### Features

* "is-last" special key for customizeLinks ([18955d8](https://github.com/felix-berlin/astro-breadcrumbs/commit/18955d88db7ee3fdfdfe6151e2de36a6bbb4b5bd))

# [3.0.0-beta.1](https://github.com/felix-berlin/astro-breadcrumbs/compare/v2.3.1...v3.0.0-beta.1) (2024-06-21)


* feat(customizeLinks)!: add new prop customizeLinks ([2cb7ac7](https://github.com/felix-berlin/astro-breadcrumbs/commit/2cb7ac7ef7d04096267668ebea4b342db977a4a6))


### BREAKING CHANGES

* customize every attribute of the breadcrumb link including the text, therefore you can define an array of objects. Each entry will be merged with the original generated crumbs array.

## [2.3.1](https://github.com/felix-berlin/astro-breadcrumbs/compare/v2.3.0...v2.3.1) (2024-06-02)


### Bug Fixes

* **base url:** multipart base url was breaking breadcrumbs ([4894a29](https://github.com/felix-berlin/astro-breadcrumbs/commit/4894a2906511c95305416ce0feea128cb342840b)), closes [#262](https://github.com/felix-berlin/astro-breadcrumbs/issues/262)

# [2.3.0](https://github.com/felix-berlin/astro-breadcrumbs/compare/v2.2.0...v2.3.0) (2024-04-12)


### Features

* **Breadcrumbs:** add new prop excludeCurrentPage prop ([b08d9fa](https://github.com/felix-berlin/astro-breadcrumbs/commit/b08d9fa55906927ec62110f8c3c8a8e7d36d40cb))

# [2.2.0](https://github.com/felix-berlin/astro-breadcrumbs/compare/v2.1.0...v2.2.0) (2024-03-07)


### Bug Fixes

* checkStringStartAndEnd regex ([b75eb48](https://github.com/felix-berlin/astro-breadcrumbs/commit/b75eb48350d9f01267a68a5e6e4ec1dec96aae3f))
* remove customBaseUrl validation ([8b465d5](https://github.com/felix-berlin/astro-breadcrumbs/commit/8b465d52ddd82b183dc54369dbf3c210c217e0fa))


### Features

* add new prop customBaseUrl ([73ab93e](https://github.com/felix-berlin/astro-breadcrumbs/commit/73ab93e1dd059456f5bf747d56c8b8bc5a6e2a97))
* **customBaseUrl:** show warning if invalid customBaseUrl is set ([b24909a](https://github.com/felix-berlin/astro-breadcrumbs/commit/b24909acd28f0bda1e8b2235f15b9653c7eeec69))

# [2.1.0](https://github.com/felix-berlin/astro-breadcrumbs/compare/v2.0.2...v2.1.0) (2024-03-06)


### Features

* add new prop linkTextFormat ([52fb2a1](https://github.com/felix-berlin/astro-breadcrumbs/commit/52fb2a186d4c8ee5ac98fed7692bb0e06030f4e8))

## [2.0.2](https://github.com/felix-berlin/astro-breadcrumbs/compare/v2.0.1...v2.0.2) (2024-02-02)


### Bug Fixes

* **truncated-button:** missing styles ([80ed6cc](https://github.com/felix-berlin/astro-breadcrumbs/commit/80ed6cc18bba7ce0223f4c77aac83f02d9261ea6))

## [2.0.1](https://github.com/felix-berlin/astro-breadcrumbs/compare/v2.0.0...v2.0.1) (2024-02-02)


### Bug Fixes

* **truncated-button:** missing color ([b8e18c8](https://github.com/felix-berlin/astro-breadcrumbs/commit/b8e18c84e1f5f60639f2ebaad52d53ec66115e86))

# [2.0.0](https://github.com/felix-berlin/astro-breadcrumbs/compare/v1.10.0...v2.0.0) (2024-02-02)


### Code Refactoring

* crumb generation ([158df4d](https://github.com/felix-berlin/astro-breadcrumbs/commit/158df4d34a26b36881eb1bcbc8b500a563d87478))


### BREAKING CHANGES

* baseUrl and trailingSlash properties are now deprecated. Both values are now obtained directly from Astro Config.

# [1.10.0](https://github.com/felix-berlin/astro-breadcrumbs/compare/v1.9.0...v1.10.0) (2024-02-01)


### Features

* if to long on mobile activate truncated area ([ebc1917](https://github.com/felix-berlin/astro-breadcrumbs/commit/ebc1917a129888a2ec858cd1afb99c43cb086d9a))
* make truncated styles optional ([7020927](https://github.com/felix-berlin/astro-breadcrumbs/commit/702092702ed0dbffb6be3bc88046964419136a44))
* **truncated:** better overflow calc ([5664bc6](https://github.com/felix-berlin/astro-breadcrumbs/commit/5664bc6fe35e716b04c71457c6433be882de7c38))

# [1.9.0](https://github.com/felix-berlin/astro-breadcrumbs/compare/v1.8.1...v1.9.0) (2024-01-28)


### Bug Fixes

* **baseUrl:** fallback to relative urls ([eab9c73](https://github.com/felix-berlin/astro-breadcrumbs/commit/eab9c73d1431f8748fe707c8bc443b51f5831f34))


### Features

* **trailing slash:** add new prop trailingSlash ([61912c3](https://github.com/felix-berlin/astro-breadcrumbs/commit/61912c34b430977587e669b36c192c647f1c5f59))

## [1.8.1](https://github.com/felix-berlin/astro-breadcrumbs/compare/v1.8.0...v1.8.1) (2023-12-06)


### Bug Fixes

* make sure astro breadcrumb works with astro 4 ([11c820a](https://github.com/felix-berlin/astro-breadcrumbs/commit/11c820a94e57dab94f1665d7b3c36e816e83a486))
* outdated lockfile ([f5dcac1](https://github.com/felix-berlin/astro-breadcrumbs/commit/f5dcac10f6163f5b359c10701c1d603a2da5b160))

# [1.8.0](https://github.com/felix-berlin/astro-breadcrumbs/compare/v1.7.0...v1.8.0) (2023-09-03)


### Bug Fixes

* leading slash missing ([729c3a5](https://github.com/felix-berlin/astro-breadcrumbs/commit/729c3a59ee37de8d1d212e25c22948d88173e878))


### Features

* **baseUrl:** add new property ([066820e](https://github.com/felix-berlin/astro-breadcrumbs/commit/066820e92fc854738202244804ea1ef80a36cc66))

# [1.7.0](https://github.com/felix-berlin/astro-breadcrumbs/compare/v1.6.1...v1.7.0) (2023-08-30)


### Features

* makes sure astro breadcrumbs is still compatible with astro v3 ([6b69c9d](https://github.com/felix-berlin/astro-breadcrumbs/commit/6b69c9de1eddb67656ffbb3f21f91834c30daf9c))

## [1.6.1](https://github.com/felix-berlin/astro-breadcrumbs/compare/v1.6.0...v1.6.1) (2023-07-15)


### Bug Fixes

* **zero config:** strip out any file extensions ([6ee9531](https://github.com/felix-berlin/astro-breadcrumbs/commit/6ee95315ee1b162646304c78172da7124fdfe4d2))

# [1.6.0](https://github.com/felix-berlin/astro-breadcrumbs/compare/v1.5.1...v1.6.0) (2023-02-21)


### Features

* add error handling for $overflow-behavior ([de34c36](https://github.com/felix-berlin/astro-breadcrumbs/commit/de34c36ead68e435f6b0e4681bde004e6cba580c))

## [1.5.1](https://github.com/felix-berlin/astro-breadcrumbs/compare/v1.5.0...v1.5.1) (2023-02-19)


### Bug Fixes

* missing scss & css export ([7573f78](https://github.com/felix-berlin/astro-breadcrumbs/commit/7573f7866cae89f249ab85fa0b539337a56da2fc))

# [1.5.0](https://github.com/felix-berlin/astro-breadcrumbs/compare/v1.4.2...v1.5.0) (2023-02-19)


### Features

* add scss style api ([a847c05](https://github.com/felix-berlin/astro-breadcrumbs/commit/a847c05cad6eb39338931b9be13bb223f2648dcf))

## [1.4.2](https://github.com/felix-berlin/astro-breadcrumbs/compare/v1.4.1...v1.4.2) (2023-02-17)


### Bug Fixes

* wrong export path ([1babc98](https://github.com/felix-berlin/astro-breadcrumbs/commit/1babc98d09c1d11398609a2f78adb8679cf83601))

## [1.4.1](https://github.com/felix-berlin/astro-breadcrumbs/compare/v1.4.0...v1.4.1) (2023-02-17)


### Bug Fixes

* missing peer dependencies ([16ee9c3](https://github.com/felix-berlin/astro-breadcrumbs/commit/16ee9c3e806617c282fc5c7678dfa359b9c7ba59))

# [1.4.0](https://github.com/felix-berlin/astro-breadcrumbs/compare/v1.3.1...v1.4.0) (2023-02-17)


### Features

* add schema.org JSON script tag generaton ([6bc8529](https://github.com/felix-berlin/astro-breadcrumbs/commit/6bc852959ef5ad34dc0bdffe87d980a8a7972bbe))

## [1.3.1](https://github.com/felix-berlin/astro-breadcrumbs/compare/v1.3.0...v1.3.1) (2023-02-11)


### Bug Fixes

* remove console.log ([197c9fc](https://github.com/felix-berlin/astro-breadcrumbs/commit/197c9fc4b2546b6ea639c7d57c520aed01221eef))

# [1.3.0](https://github.com/felix-berlin/astro-breadcrumbs/compare/v1.2.0...v1.3.0) (2023-02-11)


### Features

* Add new prop crumbs - Create breadcrumbs by your own ([aa2d111](https://github.com/felix-berlin/astro-breadcrumbs/commit/aa2d111f993fd1a36e0f0804a4fe5ec4e6384b0c))

# [1.2.0](https://github.com/felix-berlin/astro-breadcrumbs/compare/v1.1.0...v1.2.0) (2023-02-11)


### Bug Fixes

* **aria-current:** attribute is now created correctly ([a18acf1](https://github.com/felix-berlin/astro-breadcrumbs/commit/a18acf1186b705906d23fbd2a1f4dec20c15bcd0))


### Features

* **aria-label:** is now a optional prop ([60b3463](https://github.com/felix-berlin/astro-breadcrumbs/commit/60b34630de64ba1b541f4c83f1c5138a3ec4375d))

# [1.1.0](https://github.com/felix-berlin/astro-breadcrumbs/compare/v1.0.0...v1.1.0) (2022-11-26)


### Features

* optional slot (index) that replaces the first element when needed ([936d58c](https://github.com/felix-berlin/astro-breadcrumbs/commit/936d58caeafdea44b2b47e2d9e7012916bea23d7))

# 1.0.0 (2022-11-25)


### Features

* **breadcrumbs:** add astro component ([6cbce5d](https://github.com/felix-berlin/astro-breadcrumbs/commit/6cbce5d3ff646d3b4bdaddf1011127b8fed971c1))
