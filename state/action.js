import axios from "axios";
import baseUrl from "./store";

export default async function getPortfolioDetails(id) {
  return await axios.get(
    `${baseUrl()}get-portfolio-details?portfolio_id=${id}`
  );
}
