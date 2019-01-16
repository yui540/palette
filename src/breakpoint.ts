export const pcLayout = (styles: string): string => {
  return `
    @media screen and (min-width: 761px) {
      ${styles}
    }
  `
}

export const spLayout = (styles: string): string => {
  return `
    @media screen and (max-width: 760px) {
      ${styles}
    }
  `
}
