import Container from "@/components/Container";
import HomeBanner from "@/components/HomeBanner";
import HomeCategorise from "@/components/HomeCategorise";
import ProductGrid from "@/components/ProductGrid";
import { getCategories } from "@/sanity/queries";
import React from "react";
const Home = async () => {
  const categories = await getCategories(6);
  console.log(categories)
  return (
    <Container>
      <HomeBanner />
        <ProductGrid />
        <HomeCategorise categories={categories}/>
    </Container>
  );
};
export default Home;
