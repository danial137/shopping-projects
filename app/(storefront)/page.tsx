import React from 'react'
import { Hero } from "../components/storefront/Hero";
import { CategoriesSelection } from "../components/storefront/CategorySelection";
import { FeaturedProducts } from "../components/storefront/FeaturedProducts";
const page = () => {
  return (
    <div>
      <Hero />
      <CategoriesSelection />
    </div>
  )
}

export default page