
const createFilterItemTemplate = (filter, isChecked) => {
  const {name, count} = filter;
  const checkedStatus = isChecked ? `checked` : ``;
  const countStatus = count === 0 ? `disabled` : ``;

  return (
    `<input
      type="radio"
      id="filter__${name}"
      class="filter__input visually-hidden"
      name="filter"
      ${checkedStatus}
      ${countStatus}
    />

    <label for="filter__${name}" class="filter__label">
      ${name} <span class="filter__${name}-count">${count}</span></label
    >`
  );
};

export const createFilterTemplate = (filterItems) => {
  const filterItemsTemplate = filterItems
    .map((filter, index) => createFilterItemTemplate(filter, index === 0))
    .join(``);

  return `<section class="main__filter filter container">
      ${filterItemsTemplate}
    </section>`;
};
