import instanceDefaults from "./instanceDefaults";

function getElement(val, parent) {
  if (!val) return val;

  let ret = val;

  switch (typeof val) {
    case "string":
      ret = (parent || document).querySelectorAll(val);

      break;

    case "object":
      if (!!val.nodeType) {
        ret = [val];
      }

      break;
  }

  return ret;
}

export default function getInstances({
  container,
  item,
  separatorClassName,
  gridSizer,
}) {
  const instances = [],
    _container = [...getElement(container)];

  if (!!_container.length) {
    _container.map((elem, i) => {
      const items = [...getElement(item, elem)].filter(
        (item) =>
          !(!!item.classList && item.classList.contains(separatorClassName)),
      );

      if (!items.length) return;

      instances[i] = {
        ...{
          container: elem,
          items: items,
          sizer: getElement(gridSizer, elem)?.[0],
        },
        ...instanceDefaults,
      };
    });
  }

  return instances;
}
