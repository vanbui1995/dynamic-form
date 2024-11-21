import { ResourceOption } from "../types/form";
import {
  generateRandomItems,
  mockFormByName,
  mockResourceOptions,
} from "./mock";

export async function fetchOptionsByResources(resources: string[]) {
  // return fetch("/api/resource-options").then((res) => res.json());
  // Mock api call
  return Object.keys(mockResourceOptions).reduce((resourceOptionMap, key) => {
    if (resources.includes(key)) {
      resourceOptionMap[key] = mockResourceOptions[key];
    }
    return resourceOptionMap;
  }, {} as Record<string, ResourceOption[]>);
}

export async function fetchFieldsDefByFormName(formName: string) {
  // return fetch("/api/form-fields").then((res) => res.json());

  // Mock api
  if (formName === "random") {
    return generateRandomItems(mockFormByName);
  }
  return mockFormByName[formName] || [];
}
