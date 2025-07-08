---
sidebar_position: 1
---

# Change Plan 

---

The Change Plan feature allows users to switch their current subscription plan to better suit their usage needs and desired features. This functionality integrates seamlessly with the platform’s native payment system.

**Key Benefits**

- **Flexible management**: Upgrade your plan as your needs evolve
- **Cost optimization**: Choose a plan that matches your usage patterns and budget
- **Service continuity**: Retain access to premium features throughout the transition
- **Instant upgrade benefits**: Gain access to enhanced features immediately upon upgrading
- **Transparent billing**: Clearly display price changes and billing cycles

---
## 1. UI/UX Specification

**Screen Components**

- **Plan cards**: Visual representations of available subscription tiers with pricing and feature highlights
- **Current plan indicator**: A “Your Plan” label marking the active subscription
- **Feature comparison matrix**: Detailed breakdown of capabilities per plan tier
- **Change Plan button**: Primary action element to execute the plan change (enabled only when a different plan is selected)
- **Payment confirmation flow**: Integration with the device’s native payment interface

**User Experience Flow**

1. **Entry points**: Multiple access paths via the avatar menu (Settings)
2. **Plan visualization**: Grid layout displaying all subscription options
3. **Selection feedback**: Visual highlight on the chosen plan card
4. **Confirmation process**: Clear “Change Plan” button with descriptive labeling
5. **Payment integration**: Seamless handoff to the platform’s native payment flow

**Navigation Path**

Home Screen → Avatar Icon ( Settings ) → Account ( Plan Selection Screen )

---
## 2. How to Use

**Step 1: Access Account Settings**

1. Open the app and go to the Home screen
2. Tap the **Avatar** icon located in the top-left corner to open **Settings**
3. Navigate to **Account**

<p align="center">
  <img src="https://pub-661d733d32f14d8684c7617d2f2e3372.r2.dev/docs/settings_account.png" />
  <br/>
  <em>The account settings screen displays your avatar, username, email address, and current plan</em>
</p>

**Step 2: View Available Plans**

1. Review the plan comparison interface showing all subscription tiers
2. Identify your current plan (marked **“Your Plan”**)
3. Examine pricing, features, and billing cycle for each plan
4. Compare options to determine the most suitable plan

<p align="center">
  <img src="https://pub-661d733d32f14d8684c7617d2f2e3372.r2.dev/docs/change_plan_free_subscription.png" />
  <br/>
  <em>The card is highlighted with a “Your Plan” badge, indicating it as your current subscription</em>
</p>

**Step 3: Select a New Plan**

1. Tap the desired plan card to select it
2. Verify the plan details match your requirements
3. Ensure the **Change Plan** button becomes active
4. Review any billing change notifications or warnings

<p align="center">
  <img src="https://pub-661d733d32f14d8684c7617d2f2e3372.r2.dev/docs/change_plan_select_new_plan.png" />
  <br/>
  <em>The selected card features an accent-colored border and a check icon to indicate your choice</em>
</p>

**Step 4: Confirm Plan Change**

1. Tap **Change Plan** at the bottom of the screen
2. Read the confirmation dialog detailing the plan change
3. Proceed through the native payment confirmation flow
4. Complete any required authentication (e.g., biometrics, password)

**Step 5: Verify the Change**

1. Wait for payment processing confirmation
2. Return to the **Account** screen to confirm the updated plan
3. Verify access to new features (for upgrades)
4. Check for any billing cycle adjustment notifications

<p align="center">
  <img src="https://pub-661d733d32f14d8684c7617d2f2e3372.r2.dev/docs/change_plan_pro_subscription.png" />
  <br/>
  <em>The card has a “Your Plan” badge, which displays the price and expiration date, and indicates your active Pro subscription</em>
</p>

---
## 3. Notes & Tips

**Payment Considerations**

- **Instant upgrades**: New features and higher usage limits activate immediately upon successful payment

**Optimization Strategies**

- **Annual savings**: Yearly subscriptions typically offer 40–50% discount compared to monthly billing
- **Lifetime value**: A one-time purchase provides permanent access without recurring fees
- **Usage monitoring**: Regularly review your feature usage to choose the most cost-effective plan

**Technical Requirements**

- Stable internet connection throughout the change process
- Valid payment method configured on the device’s app store
- An active subscription status on your account

---
## 4. FAQ

### General Questions

### Will changing my plan affect my existing data or notes?**  
No. All your data, notes, folders, and content remain intact. Only your plan’s features and limits are modified.
---
### Can I change my plan multiple times?**  
Yes. You can switch plans as often as needed, subject to platform billing policies and processing limits.
---
### Are there any restrictions on which plans I can switch between?**  
No. You are free to switch among any available subscription tiers.
---
### Billing & Payment Issues

### Why is my payment declined when changing plans?**  
Common causes include:

- Insufficient account balance or card limit
- Expired payment method information
- Geographic restrictions on payment processing
- Platform payment system maintenance  
  **Solution:** Update your payment information in your App Store or Google Play account settings.
---
### What happens if an upgrade payment fails?**  
Your current plan remains active without interruption. After resolving the payment issue, you can retry the plan change without losing features.
---
### How are mid-cycle plan changes billed?**

**iOS (App Store Billing):**

* **Upgrades:**

  * You're immediately charged the prorated difference for the remaining time on your current billing cycle.
  * **Example:** Upgrading from a Weekly plan (\$14.99) to a Monthly plan (\$34.99) halfway through the month means you only pay the prorated difference for the remaining 15 days.
  * New features unlock immediately after payment is successful.

**Android (Google Play Billing):**

* **Upgrades:**

  * Prorated billing: you pay only the difference for the remaining period.
  * Your billing cycle is then adjusted to align with your original payment date.
  * Premium features become available right away.
---
### Technical Issues

### Why is the Change Plan button not showing or disabled?**  
Ensure that:

- You have selected a different plan than your current one
- Your internet connection is stable
- You are logged into an account with an active subscription
- The app is updated to the latest version  
  **Solution:** Restart the app and try again.
---
### My plan changed successfully but features haven’t updated.**  
Synchronization may take 2–3 minutes. Force-close the app, reopen it, wait 5 minutes, and contact support if the issue persists.
---
### Access & Navigation Issues

### I can’t find the Account section in Settings.**  

1. Home Screen → Tap Avatar (top-left) → Settings → Account
2. Or tap the avatar from any screen header
3. Ensure you’re logged into a subscription-enabled account
4. Update the app if the Account section is missing
---
### The app crashes when I attempt to change plans.**  
Possible causes:

- Insufficient device memory or storage
- Outdated app version
- Conflicts with the payment system  
  **Solution:** Update the app, restart your device, and free up storage space.
---
### Plan-Specific Questions

### Besides price, what’s the difference between Quarterly and Annual plans?**  
They offer identical feature sets. The differences are billing frequency (every 3 months vs. every 12 months) and total annual cost (the annual plan is more economical).
---
### Does the Lifetime plan include future feature updates?**  
Yes. It includes all future premium feature releases and app updates at no additional cost.
---
### Can I pause my subscription instead of changing plans?**

**On the App Store (iOS):**

1. Open **Settings** → tap your name → **Subscriptions**
2. Select the subscription you want to pause → tap **Cancel Subscription**

> Or open the **App Store** → tap your profile avatar → **Subscriptions** → select and cancel

**On Google Play Store (Android):**

1. Open **Play Store** → tap your profile avatar → **Payments & subscriptions** → **Subscriptions**
2. Select the subscription → tap **Cancel subscription** 
---
### Support & Contact

### Who should I contact if I continue experiencing issues?**  

- **Email:** [hello@notexapp.com](mailto:hello@notexapp.com) (24/7 support)
- **In-app:** Settings → Contact Support (includes diagnostic information)
- **Live Chat:** Available during business hours via our support portal
---
### What information should I provide when reporting plan change issues?**  
- Your current and desired subscription plans
- Any error messages or screenshots
- Device model and operating system version
- App version number
- Transaction ID (if a payment attempt was made)
