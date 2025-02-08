export default function textFill({ element, elements, minSize = 10, maxSize = 512, step = 1, unit = "px" }) {
  if (!element && !elements?.length) {
    return;
  }

  for (const el of (elements || [element])) {
    let i = minSize
    let overflow = false

    while (!overflow && i <= maxSize) {
      el.style.fontSize = `${i}${unit}`

      const isOverflown = el.scrollWidth > el.clientWidth;
      overflow = isOverflown

      if (!overflow) i += step
    }

    // revert to last state where no overflow happened
    el.style.fontSize = `${i - step}${unit}`
  }
}
