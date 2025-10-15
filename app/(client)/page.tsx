import Container from "@/components/Container";
import HomeBanner from "@/components/HomeBanner";
import HomeCategorise from "@/components/HomeCategorise";
import LatestBlog from "@/components/LatestBlog";
import ProductGrid from "@/components/ProductGrid";
import ShopByBrands from "@/components/ShopByBrands";
import { getCategories } from "@/sanity/queries";
import React from "react";
const Home = async () => {
  const categories = await getCategories(6);
  return (
    <Container>
      <HomeBanner />
        <ProductGrid />
        <HomeCategorise categories={categories}/>
        <ShopByBrands />
        <LatestBlog />
    </Container>
  );
};
export default Home;
