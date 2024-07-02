export function capitalize(string: string) {
    const lowercase = string.toLowerCase()
    const firstLetter = lowercase.charAt(0).toUpperCase()
    return `${firstLetter}${lowercase.slice(1)}`
}
