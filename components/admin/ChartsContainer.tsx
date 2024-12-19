import { fetchChartsData } from "@/utils/actions";
import Chart from "./Chart";
import EmptyList from "../home/EmptyList";

async function ChartsContainer() {
  const bookings = await fetchChartsData();
  console.log(bookings)
  if (bookings.length < 1) return null;
  return <Chart data={bookings} />;
}

export default ChartsContainer;
