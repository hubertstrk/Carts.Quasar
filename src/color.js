function Color (r, g, b) {
  this.r = r
  this.g = g
  this.b = b
}
Color.prototype.toRGB = function () {
  return `rgb(${this.r}, ${this.g}, ${this.b})`
}

const colors = []
colors.push(new Color(255, 0, 0))
colors.push(new Color(255, 165, 0))
colors.push(new Color(255, 255, 0))
colors.push(new Color(50, 182, 67))

export const getColor = (percentage) => {
  if (percentage === 0) { return colors[0] }
  if (percentage === 100) { return colors[colors.length - 1] }

  const binSize = 100 / colors.length
  for (let i = 0; i <= 100; i += binSize) {
    if (percentage >= i && percentage < i + binSize) {
      return colors[i / binSize]
    }
  }
}
