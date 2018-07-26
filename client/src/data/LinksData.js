import escapeStringRegexp from 'escape-string-regexp'

import LinksData from './legal-housing-resources.json'

export default LinksData

export const LinksWithTagMatching =
  (tagRegex) =>
    LinksData.filter(resource => resource.tags.some(tag => tag.match(tagRegex)))

export const LinksWithNoTagMatching =
  (tagRegex) =>
    LinksData.filter(resource => !resource.tags.some(tag => tag.match(tagRegex)))

export const UniqueSortTags = (tags) => Array.from(new Set(tags.map(tag => tag.toLowerCase()))).sort()

export const GetUniqueTags =
  (resources) => UniqueSortTags([].concat(...resources.map(resource => resource.tags)))

export const DropdownOption = (text, value) => ({ text: text, value: value || text })

export const DropdownOptionsForTags =
  (tags) => tags.map((tag) => DropdownOption(tag))

export const TagMatch = (tag, input) => {
  const minify = (str) => str.replace(/(\s|-)/g, '')
  const inputRegex = new RegExp(escapeStringRegexp(minify(input)), 'i')
  return minify(tag).match(inputRegex);
}

export const LocationSearch = (options, input) => {
  const minify = (str) => str.replace(/(\s|-)/g, '')
  const inputRegex = new RegExp(escapeStringRegexp(minify(input)), 'i')
  return options.filter((option) => minify(option.value).match(inputRegex))
}

export const TagSearch = (options, input) => {
  const minify = (str) => str.replace(/(\s|-)/g, '')
  const inputRegex = new RegExp(escapeStringRegexp(minify(input)), 'i')
  return options.filter((option) => minify(option.value).match(inputRegex))
}