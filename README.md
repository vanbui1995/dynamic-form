
# Dynamic Forms Example Remote API, React Hook Form, and Zod

This repository demonstrates how to build dynamic forms powered by API data using modern tools like **Vite**, **React**, **React Hook Form**, and **Zod**. The example is designed to complement the blog post: [How we build Dynamic Forms in Admina Migration](https://www.notion.so/mfi/How-we-build-Dynamic-Forms-in-Admina-Migration-1439b9c183cb805c83b2e47d68192e09).

![2024-11-21_11-36-21-ezgif com-video-to-gif-converter](https://github.com/user-attachments/assets/46f667b9-e5b1-4e1c-aa43-3bfa8b7839b1)


Live Demo: https://dynamic-form-steven.netlify.app/

## Features

- **Dynamic Form Rendering**: Fields are generated dynamically based on API responses includes (input types, input options, validation, initial values...)
- **Custom API Board: Simulate update fields and field options in your backend database and affect immediately to the current form
- **Validation with Zod**: Leverage schema-based validation for better type safety and error handling
- **React Hook Form**: Manage form state efficiently and integrate with validation seamlessly.


## Getting Started

### Prerequisites
- Node.js (>= 16.x)
- Yarn (>= 1.x)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/vanbui1995/dynamic-form.git
   cd dynamic-form
   ```

2. Install dependencies:
   ```bash
   yarn install
   ```

3. Start the development server:
   ```bash
   yarn dev
   ```

4. Open your browser and navigate to `http://localhost:3000` to view the app.

## Project Structure

```
├── public/         # Static assets
├── src/
│   ├── components/ # Reusable components
│   ├── hooks/      # Custom React hooks
│   ├── utils/      # Utility functions
│   ├── App.tsx     # Main application entry point
│   └── main.tsx    # Vite entry point
├── vite.config.ts  # Vite configuration
├── package.json    # Project dependencies
└── README.md       # Project documentation
```

## How It Works

1. **Fetch Form Configuration**: Fetches field configurations dynamically from an API endpoint.
2. **Render Fields**: Maps the configuration into React components like text inputs, selects, checkboxes, etc.
3. **Validation**: Validates user input with Zod schemas associated with each field.
4. **Submit Data**: Submits the form data back to the API after validation passes.

## References

- Blog: [How we build Dynamic Forms in Admina Migration](https://www.notion.so/mfi/How-we-build-Dynamic-Forms-in-Admina-Migration-1439b9c183cb805c83b2e47d68192e09)
- [React Hook Form Documentation](https://react-hook-form.com/)
- [Zod Documentation](https://zod.dev/)
- [Vite Documentation](https://vitejs.dev/)

## Contribution

Feel free to fork this repository and create a pull request with improvements or additional features. Feedback is always welcome!

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.
