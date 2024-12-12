import CategoriesList from "@/components/home/CategoriesList";
import PropertiesContainer from "@/components/home/PropertiesContainer";
import LoadingCards from "@/components/card/LoadingCards";
import { Suspense } from "react";
async function HomePage(
  props: {
    searchParams: Promise<{ category?: string; search?: string }>;
  }
) {
  const searchParams = await props.searchParams;
  const category = searchParams?.category ;
  const search = searchParams?.search ;
  return (
    <section>
      <CategoriesList
        category={category}
        search={search}
      />
      <Suspense fallback={<LoadingCards />}>
        <PropertiesContainer
          category={category}
          search={search}
        />
      </Suspense>
    </section>
  );
}
export default HomePage;
