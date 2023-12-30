interface ITour {
  name: string
  description: string
  ratingAverage: number
  ratingQuantity: number
  price: number
  imageCover: string
  images: string[]
  createAt: Date
  startDates: Date[]
  startLocation: string
  locations: string[]
  guides: string[]
  slug: string
}

export { ITour }
