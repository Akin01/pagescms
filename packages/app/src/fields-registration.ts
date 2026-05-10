import { registerFieldComponents } from "@pagescms/core/fields";

import { EditComponent as BooleanEdit } from "./components/fields/edit/boolean";
import { ViewComponent as BooleanView } from "./components/fields/view/boolean";

import { EditComponent as CodeEdit } from "./components/fields/edit/code";

import { EditComponent as DateEdit } from "./components/fields/edit/date";
import { ViewComponent as DateView } from "./components/fields/view/date";

import { EditComponent as FileEdit } from "./components/fields/edit/file";
import { ViewComponent as FileView } from "./components/fields/view/file";

import { EditComponent as ImageEdit } from "./components/fields/edit/image";
import { ViewComponent as ImageView } from "./components/fields/view/image";

import { EditComponent as NumberEdit } from "./components/fields/edit/number";

import { EditComponent as ReferenceEdit } from "./components/fields/edit/reference";
import { ViewComponent as ReferenceView } from "./components/fields/view/reference";

import { EditComponent as RichTextEdit } from "./components/fields/edit/rich-text";
import { ViewComponent as RichTextView } from "./components/fields/view/rich-text";

import { EditComponent as SelectEdit } from "./components/fields/edit/select";

import { EditComponent as StringEdit } from "./components/fields/edit/string";

import { EditComponent as TextEdit } from "./components/fields/edit/text";

import { EditComponent as UuidEdit } from "./components/fields/edit/uuid";

registerFieldComponents("boolean", { edit: BooleanEdit, view: BooleanView });
registerFieldComponents("code", { edit: CodeEdit });
registerFieldComponents("date", { edit: DateEdit, view: DateView });
registerFieldComponents("file", { edit: FileEdit, view: FileView });
registerFieldComponents("image", { edit: ImageEdit, view: ImageView });
registerFieldComponents("number", { edit: NumberEdit });
registerFieldComponents("reference", { edit: ReferenceEdit, view: ReferenceView });
registerFieldComponents("rich-text", { edit: RichTextEdit, view: RichTextView });
registerFieldComponents("select", { edit: SelectEdit });
registerFieldComponents("string", { edit: StringEdit });
registerFieldComponents("text", { edit: TextEdit });
registerFieldComponents("uuid", { edit: UuidEdit });