# 📊 Sales Analytics Dashboard

A modern **Sales Analytics Dashboard** built with **Next.js (App Router)**, **TypeScript**, **Tailwind CSS**, and **Recharts**, following the **Atomic Design Principle**.  
The application visualizes yearly sales data (2022–2024) using interactive charts and a clean, responsive UI.

---

## 🚀 Features

- 📈 Visualize sales data for **2022, 2023, and 2024**
- 🔄 Switch between **Bar, Line, and Pie charts**
- 🗂️ Year-based filtering
- 🎨 Modern UI with background images
- 🧩 Atomic Design architecture (Atoms → Molecules → Organisms → Templates)
- 📱 Fully responsive dashboard layout
- ❤️ Custom footer branding

---

## 🧬 Atomic Design Structure

src/
├── app/
│ ├── page.tsx # Landing page
│ └── dashboard/page.tsx # Dashboard page
│
├── components/
│ ├── atoms/
│ │ ├── Button.tsx
│ │ ├── Card.tsx
│ │ └── Footer.tsx
│ │
│ ├── molecules/
│ │ └── YearSelector.tsx
│ │
│ ├── organisms/
│ │ ├── SalesChart.tsx
│ │ └── SalesFilter.tsx
│ │
│ └── templates/
│ └── DashboardLayout.tsx
│
├── data/
│ └── salesData.ts # Mock Kaggle-style sales data
│
├── types/
│ ├── sales.ts
│ └── chart.ts
│
└── utils/
└── filterSalesByYear.ts


This structure ensures **scalability**, **maintainability**, and **clean separation of concerns**.

---

## 📊 Sales Data

- Mock sales data inspired by **Kaggle retail datasets**
- Monthly sales figures
- Realistic year-over-year growth
- Easily replaceable with live API data

Example:
```ts
{
  year: 2024,
  month: "March",
  sales: 190000
}

📈 Charts & Visualization

Charts are implemented using Recharts:

Bar Chart – Monthly sales comparison

Line Chart – Trend analysis

Pie Chart – Proportional sales distribution

A single reusable SalesChart component dynamically switches chart types.

🛠️ Tech Stack

Next.js (App Router)

TypeScript

Tailwind CSS

Recharts

React Hooks

Atomic Design Architecture

⚙️ Setup & Installation
1️⃣ Clone the Repository
git clone https://github.com/your-username/sales-dashboard-nextjs.git

2️⃣ Navigate to the Project
cd sales-dashboard-nextjs

3️⃣ Install Dependencies
npm install

4️⃣ Run the Development Server
npm run dev

5️⃣ Open in Browser
http://localhost:3000

🧪 Development Notes

Mock data is stored locally for simplicity

Architecture supports easy API integration

UI is optimized for desktop and mobile

Hydration warnings handled correctly for fonts

🔮 Future Enhancements

🔢 Sales threshold filtering

🌐 API integration for real-time sales data

📊 Additional analytics and KPIs

🔐 Authentication & role-based dashboards

📁 Export reports (CSV / PDF)