import {
  Props as SortDropdownProps,
  SortDropdown,
} from "../shared/SortDropdown";

export function CollectionSort() {
  const options: SortDropdownProps["options"] = [
    {
      label: "Most Popular",
      value: "popularity",
    },
    {
      label: "New Arrivals",
      value: "created-descending",
    },
  ];

  return <SortDropdown options={options} />;
}
