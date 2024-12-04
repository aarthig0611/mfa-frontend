# Design and Implementation of MFA Using Microsoft Azure Active Directory B2C Authentication

Aarthi Ganesan (MSCS), Inderdeep Rathore (MSCS), Zandra Nguyen (MSCS)

CS504 Software Engineering, School of Technology & Computing, City University of Seattle  

## Abstract

Multi-Factor Authentication (MFA) enhances security by requiring multiple factors to verify a user’s identity. These factors include knowledge (e.g., passwords), possession (e.g., smartphone), inherence (e.g., biometrics), location, and time-sensitive links.

This project explores the implementation of MFA using Microsoft Azure Active Directory B2C (Azure AD B2C) in a React application. Azure AD B2C was selected for its robust security features, ease of integration, and scalability. Comparisons were made with other MFA solutions, including:
- **Microsoft Entra Multi-Factor Authentication**: Offers advanced security layers.
- **Google Authenticator**: A free app for generating one-time PINs.
- **Okta Adaptive MFA**: A customizable, cloud-based identity and access management platform.
- **Cisco Duo Security**: Provides MFA, Single Sign-On (SSO), and secure remote access.

### Keywords
Multi-Factor Authentication (MFA), Azure AD B2C, Google Authenticator, Okta Adaptive MFA, Cisco Duo Security.

---

## Methodology

The implementation utilized Azure AD B2C as the identity management solution to integrate MFA into a React application. Key steps included:

1. **Azure AD B2C Tenant Setup**:
   - Created a tenant to manage identity-related services securely.
   - Configured the React application with necessary redirect URIs and permissions.

2. **User Flow Configuration**:
   - Customized "Sign up and Sign in" flows to enforce MFA.
   - MFA modes included OTPs via SMS or app-generated codes for enhanced security.
   - Session behaviors were tailored for optimal user convenience and security.

3. **Integration with React**:
   - Employed the Microsoft Authentication Library (`@azure/msal-react` and `@azure/msal-browser`).
   - Configured authentication parameters in `authConfig.js` (e.g., client ID, authority URL, redirect URI).
   - Used the `MsalProvider` component for global authentication context propagation.
   - Developed a `SignIn` component for login, logout, and profile display, incorporating JWT decoding for user personalization.

4. **Token Management**:
   - Utilized the `acquireTokenSilent` method to acquire tokens in the background, ensuring a seamless user experience.
   - Stored tokens securely in browser session storage for enhanced performance.

5. **Rigorous Testing**:
   - Validated MFA enforcement across different scenarios.
   - Tested token retrieval, refresh processes, and error handling (e.g., for invalid tokens and network outages).

---

## Results

The project successfully implemented Azure AD B2C with MFA in a React application, delivering a secure and user-friendly authentication system. Key outcomes included:

- **Enhanced Security**: MFA effectively mitigated credential theft and unauthorized access.
- **Seamless Integration**: Azure AD B2C's libraries simplified identity management tasks, reducing developer overhead.
- **Customizable User Flows**: Flexibility in balancing user convenience and security.
- **Scalability**: Suitable for applications ranging from small-scale to enterprise-level.

### Conclusion

This project demonstrated the efficacy of Azure AD B2C in building secure, scalable, and efficient authentication systems. By leveraging advanced identity management platforms, developers can address modern security challenges while delivering an intuitive user experience.

---

## How to Run

1. **Clone the repository**:
   ```bash
   git clone https://github.com/aarthig0611/mfa-frontend.git
   cd mfa-azure-ad-b2c

2. **Install Dependencies**:  
   Run the following command to install the required packages:
   ```bash
   npm install

3. **Set Up Azure AD B2C**:
   Configure your Azure AD B2C tenant and update the authConfig.js file with the relevant credentials.

4. **Start the Application**:
    Run the following command to start the application:
    ```bash
    npm start
    
The application will be available at http://localhost:3000/. Use the login button to test the authentication flow.
