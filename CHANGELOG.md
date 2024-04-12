# Changelog

All notable changes to this project will be documented in this file. See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

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
