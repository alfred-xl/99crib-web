"use client";

export default function SortSelect({ defaultValue }: { defaultValue: string }) {
  return (
    <select
      id="f-sort"
      name="sort"
      defaultValue={defaultValue}
      onChange={(event) => event.currentTarget.form?.requestSubmit()}
      className="rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm text-navy transition-colors focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/15"
    >
      <option value="">Recommended</option>
      <option value="low">Price: low to high</option>
      <option value="high">Price: high to low</option>
    </select>
  );
}
