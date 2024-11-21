import { Field, ResourceOption } from "../types/form";

export const mockResourceOptions: Record<string, ResourceOption[]> = {
  countries: [
    { id: "us", label: "United States" },
    { id: "vn", label: "Vietnam" },
    { id: "uk", label: "United Kingdom" },
  ],
  languages: [
    { id: "en", label: "English" },
    { id: "vi", label: "Vietnamese" },
    { id: "es", label: "Spanish" },
  ],
  productCategories: [
    { id: "electronics", label: "Electronics" },
    { id: "fashion", label: "Fashion" },
    { id: "home", label: "Home & Living" },
  ],
  subscriptionOptions: [
    { id: "newsletter", label: "Newsletter" },
    { id: "promotions", label: "Promotions" },
  ],
  departments: [
    { id: "hr", label: "Human Resources" },
    { id: "it", label: "IT Department" },
    { id: "marketing", label: "Marketing" },
  ],
  skills: [
    { id: "js", label: "JavaScript" },
    { id: "python", label: "Python" },
    { id: "java", label: "Java" },
  ],
  eventTypes: [
    { id: "conference", label: "Conference" },
    { id: "workshop", label: "Workshop" },
    { id: "webinar", label: "Webinar" },
  ],
  dietaryPreferences: [
    { id: "veg", label: "Vegetarian" },
    { id: "nonVeg", label: "Non-Vegetarian" },
    { id: "none", label: "No Preference" },
  ],
  contactMethods: [
    { id: "email", label: "Email" },
    { id: "phone", label: "Phone" },
  ],
  courses: [
    { id: "react", label: "React.js" },
    { id: "node", label: "Node.js" },
    { id: "aws", label: "AWS Cloud" },
  ],
  trainers: [
    { id: "trainer1", label: "John Doe" },
    { id: "trainer2", label: "Jane Smith" },
  ],
  sessionTypes: [
    { id: "online", label: "Online" },
    { id: "onsite", label: "Onsite" },
  ],
};

export const mockFormByName: Record<string, Field[]> = {
  userProfileForm: [
    {
      key: "username",
      label: "Username",
      type: "text",
      constraints: {
        minLength: 5,
        maxLength: 15,
        required: true,
      },
      placeholder: "Enter your username",
    },
    {
      key: "email",
      label: "Email",
      type: "email",
      constraints: {
        required: true,
      },
      placeholder: "Enter your email",
    },
    {
      key: "country",
      label: "Country",
      type: "select",
      resource: "countries",
      constraints: {
        required: true,
      },
      placeholder: "Select your country",
    },
    {
      key: "language",
      label: "Language",
      type: "select",
      resource: "languages",
      constraints: {
        required: false,
      },
      placeholder: "Select your preferred language",
    },
    {
      key: "gender",
      label: "Gender",
      type: "select",
      values: [
        { id: "male", label: "Male" },
        { id: "female", label: "Female" },
        { id: "other", label: "Other" },
      ],
      constraints: {
        required: true,
      },
    },
  ],
  productFeedbackForm: [
    {
      key: "name",
      label: "Full Name",
      type: "text",
      constraints: {
        maxLength: 50,
        required: true,
      },
      placeholder: "Enter your full name",
    },
    {
      key: "productCategory",
      label: "Product Category",
      type: "select",
      resource: "productCategories",
      constraints: {
        required: true,
      },
      placeholder: "Select product category",
    },
    {
      key: "rating",
      label: "Rating",
      type: "select",
      values: [
        { id: "1", label: "1 - Poor" },
        { id: "2", label: "2 - Fair" },
        { id: "3", label: "3 - Good" },
        { id: "4", label: "4 - Very Good" },
        { id: "5", label: "5 - Excellent" },
      ],
      constraints: {
        required: true,
      },
    },
    {
      key: "comments",
      label: "Comments",
      type: "text",
      constraints: {
        maxLength: 200,
        required: false,
      },
      placeholder: "Share your thoughts",
    },
    {
      key: "subscribe",
      label: "Subscribe to Updates",
      type: "checkbox-group",
      resource: "subscriptionOptions",
      constraints: {
        required: false,
      },
    },
  ],
  employeeSurveyForm: [
    {
      key: "employeeId",
      label: "Employee ID",
      type: "text",
      constraints: {
        required: true,
      },
      placeholder: "Enter your employee ID",
    },
    {
      key: "department",
      label: "Department",
      type: "select",
      resource: "departments",
      constraints: {
        required: true,
      },
      placeholder: "Select your department",
    },
    {
      key: "satisfactionLevel",
      label: "Satisfaction Level",
      type: "select",
      values: [
        { id: "low", label: "Low" },
        { id: "medium", label: "Medium" },
        { id: "high", label: "High" },
      ],
      constraints: {
        required: true,
      },
    },
    {
      key: "skills",
      label: "Skills",
      type: "checkbox-group",
      resource: "skills",
      constraints: {
        required: false,
      },
    },
    {
      key: "comments",
      label: "Comments",
      type: "text",
      constraints: {
        maxLength: 300,
        required: false,
      },
      placeholder: "Share your feedback",
    },
  ],
  eventRegistrationForm: [
    {
      key: "name",
      label: "Full Name",
      type: "text",
      constraints: {
        required: true,
      },
      placeholder: "Enter your full name",
    },
    {
      key: "eventType",
      label: "Event Type",
      type: "select",
      resource: "eventTypes",
      constraints: {
        required: true,
      },
      placeholder: "Select the event type",
    },
    {
      key: "dietaryPreference",
      label: "Dietary Preference",
      type: "select",
      resource: "dietaryPreferences",
      constraints: {
        required: false,
      },
      placeholder: "Select your dietary preference",
    },
    {
      key: "contactMethod",
      label: "Preferred Contact Method",
      type: "select",
      resource: "contactMethods",
      constraints: {
        required: false,
      },
      placeholder: "Select a contact method",
    },
    {
      key: "notes",
      label: "Additional Notes",
      type: "text",
      constraints: {
        maxLength: 150,
        required: false,
      },
      placeholder: "Any special requirements",
    },
  ],
  trainingSessionForm: [
    {
      key: "traineeName",
      label: "Trainee Name",
      type: "text",
      constraints: {
        required: true,
      },
      placeholder: "Enter your name",
    },
    {
      key: "course",
      label: "Course",
      type: "select",
      resource: "courses",
      constraints: {
        required: true,
      },
      placeholder: "Select a course",
    },
    {
      key: "trainer",
      label: "Trainer",
      type: "select",
      resource: "trainers",
      constraints: {
        required: false,
      },
      placeholder: "Select a trainer",
    },
    {
      key: "sessionType",
      label: "Session Type",
      type: "select",
      resource: "sessionTypes",
      constraints: {
        required: true,
      },
      placeholder: "Select session type",
    },
    {
      key: "feedback",
      label: "Feedback",
      type: "text",
      constraints: {
        maxLength: 250,
        required: false,
      },
      placeholder: "Provide your feedback",
    },
  ],
};

export function generateRandomItems(forms: Record<string, Field[]>): Field[] {
  const keys = Object.keys(forms);
  const selectedItems: Field[] = [];

  for (const key of keys) {
    const formFields = forms[key].flat();
    if (formFields.length > 0) {
      const randomField =
        formFields[Math.floor(Math.random() * formFields.length)];
      selectedItems.push(randomField);
    }
  }

  return selectedItems.slice(0, 5);
}

export const formNames = [
  {
    key: "userProfileForm",
    label: "User Profile Form",
  },
  {
    key: "productFeedbackForm",
    label: "Product Feedback Form",
  },
  {
    key: "employeeSurveyForm",
    label: "Employee Survey Form",
  },
  {
    key: "eventRegistrationForm",
    label: "Event Registration Form",
  },
  {
    key: "trainingSessionForm",
    label: "Training Session Form",
  },
  {
    key: "random",
    label: "Random fields",
  },
];
