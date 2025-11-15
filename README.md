# Playwright Automation - Saucedemo Test

This project contains an automated end-to-end (E2E) test using **Playwright with JavaScript**.  
The scenario covers login, adding a product to the cart, validating the cart, and logging out.

---

## Test Scenario

**A user logs in with valid credentials, adds one product to the cart, verifies the product name in the cart, and logs out.**

Steps performed:

1. Navigate to saucedemo.com  
2. Enter valid username & password  
3. Log in  
4. Open a product  
5. Add it to the cart  
6. Go to the cart  
7. Verify the added product name  
8. Logout from the application  

---

## Technology Used
1. Playwright (JavaScript)
2. Chromium / WebKit / Firefox 
3. Node.js

## Output
<img width="1057" height="712" alt="Screenshot 2025-11-15 233510" src="https://github.com/user-attachments/assets/ead010cb-6111-4581-b65e-624112291aa8" />

---
### 1️⃣ Clone the repository
```bash
git clone https://github.com/Mirajuddin202/Bit-Mascot-SQA-Engineer-Assessment.git
cd Bit-Mascot-SQA-Engineer-Assessment
```

---

### 2️⃣ Install project dependencies
```bash
npm install
```

---

### 3️⃣ Install Playwright browsers
```bash
npm init playwright@latest
```
---

### 4️⃣ Run the test suite (headless mode)
```bash
npx playwright test
```
---

### 5️⃣ Run tests in headed mode (visible browser)
```bash
npx playwright test --headed
```

