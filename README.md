# Customisable Alerts in Power Apps Model-Driven Apps  
### A Dynamic, User-Controlled Alert System Using JavaScript

This repository contains a **customisable alert system** for Power Apps model-driven apps.  

It allows *users* (not developers) to control the alerts that appear at the top of the form UI by simply populating one or more “Alert” fields on the record.

This pattern supports **Warning**, **Information**, and **Error** alerts and can be adapted to *any* table, *any* form, and *any* scenario.

This sample is part of the **Solution Sunday** series by **Howdang Rashid (Powercademy)**.

---

## 🎯 Scenario

Organisations often need a way to display important information at the *top* of a record form.

Examples include:

- Inventory warnings  
- Credit hold notifications  
- Compliance requirements  
- Risk or safety alerts  
- Account flags  
- Missing documentation  
- Internal notes  
- Case escalations  

Instead of hardcoding logic, this pattern gives **full control to your end users**.

They simply type a message into an “Alert” field, choose the alert type (Warning, Info, Error), and the banner automatically appears on the form.

---

## ✔️ Supported Alert Types

This solution supports the same alert types as the platform:

### 🔶 **Warning**
Used for “attention needed” scenarios.

### 🔷 **Information**
Used for guidance, context, or non-critical messaging.

### 🔴 **Error**
Used for important issues that should not be ignored.

All alert types are driven from the record data.

---

## 🧠 How the Code Works

The function:

```javascript
dynamicFormAlert(executionContext, alertFieldNames, alertType)
```
### **1. Reads one or more alert fields**
- You can pass multiple field names (comma-separated).  
- The function checks them in order.

### **2. Shows the first alert message found**
- If any alert field contains a value → that message is shown as an alert.

### **3. Supports three alert types**
- Pass `"WARNING"`, `"INFO"`, or `"ERROR"` as a parameter.

### **4. Clears the alert**
- If all fields are empty, any existing notification is removed.

### **5. Runs on both On Load and On Save**
- Ensures alerts stay accurate as the form loads or changes.

This makes the pattern extremely flexible and reusable.

---

## 📁 Files in This Repository

### **dynamicFormAlert.js**
Main JavaScript file containing the dynamic alert logic.

---
## 🛠️ Step 1 — Create Your Alert Field

1. Go to your **table** (e.g., Inventory Tracking, Contact, Account).  
2. Create a **Text** column named something like **Alert** or **Custom Alert**.  
3. Add it to your form inside a section called **Alerts**.  
4. Publish the form.

This field is where users will type the alert message.

---

## 🚀 Step 2 — Add the Script as a Web Resource

1. Go to **Power Apps Maker Portal → Solutions**  
2. Open or create a solution  
3. Select **+ New → More → Web resource**  
4. Upload **dynamicFormAlert.js**  
5. Give it a meaningful name  
6. Set **Type:** JavaScript (JS)  
7. Save & publish  

---

## 📌 Step 3 — Add the Library to Your Form

1. Open the form editor  
2. Select **Form Libraries**  
3. Click **+ Add Library**  
4. Add your uploaded JS web resource  
5. Save the form  

---

## 🔔 Step 4 — Register the Event Handlers

Do this for **both On Load and On Save**.

1. Go to **Events** in the form editor  
2. Open the **On Load** event  
3. Click **+ Event Handler**  
4. Choose your JS library  
5. Set the function name:

   ```text
   dynamicFormAlert
   ```
### Pass parameters like this:
#### Function Parameters Example:

   ```text
   hrashid_alert,hrashid_alertadditional|WARNING
   ```

### Recommended format: two separate parameters
#### Parameter 1:
Comma-separated list of alert field logical names

   ```text
   hrashid_alert
   ```

#### Parameter 2:
Alert type (one of WARNING, INFO, ERROR)

  ```text
   WARNING
   ```

6. Tick Pass execution context

7. Repeat all steps for On Save

8. Publish the form

---

## 🧪 Step 5 — Test It

Try adding:
- A warning message
- An information message
- An error message

### Expected:
- If the field contains a message → alert appears
- If the field is empty → the alert disappears
- Works on both load and save

This empowers your users to manage their own alerts without touching code.

---

## ⭐ Tips & Best Practices
- Create multiple alert fields for more complex scenarios
- Keep alerts short and relevant
- Use different alert types to guide user behaviour
- Always test in a sandbox environment

---

## 👤 About the Author

Created by Howdang Rashid
Power Platform Architect & Founder at Powercademy

Part of the Solution Sunday series — weekly practical patterns for Power Platform professionals.

Connect on LinkedIn:
https://www.linkedin.com/in/howdangrashid
