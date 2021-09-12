interface Reportable {
  summary(): string;
}

const drink: Reportable = {
  summary(): string {
    return "im a coco cola zero drink";
  },
};
