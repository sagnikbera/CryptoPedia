# CryptoPedia

A modern cryptocurrency dashboard built with **React**, **Tailwind CSS**, and **react-google-charts**, powered by the **CoinGecko API**.  
Easily track crypto prices, market caps, and view historical price charts.

---

## ✨ Features

- 🔐 **Live Crypto Data**  
  Fetches real-time cryptocurrency data from the CoinGecko API.

- 📊 **Interactive Charts**  
  Line charts displaying the last 10 days of price history using `react-google-charts`.

- 🎨 **Clean & Responsive UI**  
  Styled with Tailwind CSS for a modern look and mobile-first design.

- 💱 **Currency Selection**  
  Switch between different fiat currencies to view crypto values.

- ⚡ **Loading States**  
  Custom CSS-based spinner while data loads.

- 📈 **Key Metrics at a Glance**
  - Current Price
  - Market Cap
  - 24-Hour High & Low (with arrow indicators)

---

---

## 🛠️ Tech Stack

- **Frontend:** React, Tailwind CSS, React Router
- **Charts:** react-google-charts
- **API:** [CoinGecko API](https://www.coingecko.com/en/api)
- **State Management:** React Context API
- **Icons:** react-icons

---

## 📦 Installation & Setup

```bash
 git clone https://github.com/sagnikbera/CryptoPedia.git
 cd CryptoPedia
```

```env
//Create a .env file in the root directory and add your CoinGecko API key:

VITE_CG_API_KEY=paste_your_api_key_here
```

```bash
    npm install
    npm run dev
```

### API get from

```
https://www.coingecko.com/
```

### Docs

```
https://docs.coingecko.com/v3.0.1/reference/coins-list
```
