import { useEffect, useMemo, useState } from "react";
import { formNames } from "./services/mock";
import { cn, getResourceKeysInFields } from "./lib/utils";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import {
  fetchFieldsDefByFormName,
  fetchOptionsByResources,
} from "./services/form-field";
import { DynamicForm } from "./components/common/dynamic-form/DynamicForm";
import { JsonEditor } from "json-edit-react";
import { Field, ResourceOption } from "./types/form";

function Demo() {
  const [formName, setFormName] = useState("userProfileForm");
  const queryClient = useQueryClient();
  const [fieldsDefJSON, setFieldDefJSON] = useState<Field[]>([]);
  const [dynamicOptionJSON, setDynamicOptionJSON] = useState<
    Record<string, ResourceOption[]>
  >({});

  const { data: fields, refetch } = useQuery({
    queryKey: ["dynamic-fields", formName],
    queryFn: () => fetchFieldsDefByFormName(formName),
  });
  const resourceKeys = useMemo(
    () => getResourceKeysInFields(fields || []),
    [fields]
  );

  const { data: resourceOptionMap } = useQuery({
    queryKey: ["dynamic-options", resourceKeys],
    queryFn: () => fetchOptionsByResources(resourceKeys),
  });

  useEffect(() => {
    setFieldDefJSON(fields || []);
  }, [fields]);

  useEffect(() => {
    setDynamicOptionJSON(resourceOptionMap || {});
  }, [resourceOptionMap]);

  return (
    <div className="w-dvw h-dvh p-4">
      <div className="flex gap-4">
        <div className="flex-1">
          {formNames.map((form) => (
            <button
              key={form.key}
              onClick={() => {
                setFormName(form.key);
                if (form.key === "random") {
                  refetch();
                }
              }}
              className={cn("block", {
                "font-bold": formName === form.key,
              })}
            >
              {form.label}
            </button>
          ))}
        </div>
        <div className="flex-1">
          {fields && resourceOptionMap ? (
            <DynamicForm
              fields={fields}
              resourceOptionMap={resourceOptionMap}
              handleSubmit={(values) => {
                alert(JSON.stringify(values));
              }}
            />
          ) : (
            "Loading..."
          )}
        </div>
        <div className="flex-1 space-y-2">
          <h2 className="font-bold">Fields Def</h2>
          <JsonEditor
            theme={"githubLight"}
            rootName="fields"
            data={fieldsDefJSON}
            setData={(jsonValue) => {
              queryClient.setQueryData(["dynamic-fields", formName], jsonValue);
            }}
          />
          <hr />
          <h2 className="font-bold">Dynamic Options</h2>
          <JsonEditor
            theme={"githubLight"}
            rootName="dynamic_options"
            data={dynamicOptionJSON}
            setData={(jsonValue) => {
              queryClient.setQueryData(
                ["dynamic-options", resourceKeys],
                jsonValue
              );
            }} // optional
          />
        </div>
      </div>
    </div>
  );
}

export default Demo;
