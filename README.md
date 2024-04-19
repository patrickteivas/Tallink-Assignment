# 🧮 Calculator
Our accountant Margaret has misplaced her calculators, and we need to help her promptly by creating a "React Calculator".

## 🙋‍♀️ General

- Follow the [Figma designs](https://www.figma.com/file/gqjeD7VfneerS5ssLPzvb9/Calculator-and-currency-exchange-app?type=design&node-id=2-251&mode=design&t=MVvYb9hVTExx1pYJ-11) as closely as possible.
- The calculator supports two modes: math and currency. The math mode is opened by default.

## ➗ Math
- Users can enter up to 10 digits for numbers (both integers and floats) by clicking on the pad or hitting numbers on the keyboard.
- Five operations are supported: addition, subtraction, division, multiplication, and Prime Number operation ("P" button).
- "C" button resets the input to "0" and resets current operation. 
- Each of the five operations should `POST` its inputs, operation, and result to `/api/history`.

## 💸 Currency

- Currency rates are available at `/api/rates`.
- Users can choose both currencies, which are native Select elements.
- Users can enter a value for the first currency, and the second currency is calculated based on the rates upon each change (value for the first currency or any currency).
- Rates are downloaded upon each tab opening, and users can see how much time has passed since the last update and force an update by clicking the "reload" icon.

## 👩‍💻 Development

- While this project provides a solid foundation and can be used as a scaffold, if any aspect of the desired UI behavior is ambiguous, the developer is empowered to apply their expertise and implement the optimal user experience approach. The developer is also empowered to leverage any third-party libraries or frameworks they deem necessary to accomplish the desired user interface and user experience objectives effectively and efficiently.
- MirageJS is used for mocking the server; see mirage.js for API details.
- When finished, the app should be runnable via `npm run dev` and deployable via `npm run build`.

## 🔬 Tests

- You're encouraged to implement unit tests to ensure the application's robustness and maintainability.
