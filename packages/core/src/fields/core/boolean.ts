import { z } from "zod";
import { Field } from "../../types/field";

const schema = (field: Field) => {
  return z.boolean();
};

const defaultValue = false;
const label = "Boolean";

export { label, schema, defaultValue };