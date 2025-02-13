import FilterSideBar from "./components/FilterSideBar";
import PublicationList from "./components/PublicationList";

export default function PublicationsPage() {
  return (
    <div className="w-full flex justify-between items-start gap-4 flex-col-reverse md:flex-row px-4 md:px-8">
      <PublicationList />
      <FilterSideBar />
    </div>
  );
}
