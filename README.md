# 6am Coding Test

## [Live Website](https://6am-coding-test.vercel.app)

## Run the Project with the following steps

- First, Clone this GitHub Repository
```bash
git clone https://github.com/risalshahed/6am-coding-test.git
```

- Then, change the directory as follows
```bash
cd 6am-coding-test
```

- Finally, run the server using the command
```bash
npm i
```

## Project Overview
- Pixel Perfect Responsive website across various screen sizes & devices
- Components are well structured, different custom hooks used to fetch all of the data & the categorized data with several endpoints
- Data is displayed in an appealing & user friendly way
- Loading state handled with Skeleton
- Error messages are displayed (if any) as well
- Technologies & Libraries: Next JS App Router, Tailwind CSS, react-icons library to display the icons

## Project Structure
- ### 6am-coding-test
  - src
    - app
      - globals.css
      - layout.js
      - page.js
      - favicon.ico

    - components
      - global
        - Footer
          - Footer.jsx
          - Icons.jsx
          - Info.jsx
        - Header
          - Navbar
            - Categories.jsx
            - Menus.jsx
            - Navbar.jsx
          - Discount.jsx
          - Header.jsx
          - Shipping.jsx
          - Topbar.jsx
      - Products
        - EachProduct.jsx
        - Products.jsx
        - Recommedations.jsx
        - Stars.jsx
      - Banners.jsx
      - Services.jsx
      - Skeleton.jsx

    - hooks
      - useCategoryEndpoint.js
      - useFetchAllProducts
      - useFetchProducts

- package.json
- tailwind.config.js