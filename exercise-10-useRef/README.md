| Feature                 | **`useRef`**                                                                              | **`useState`**                                                       |
| ----------------------- | ----------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| **Primary Purpose**     | Access and persist mutable values (DOM elements or variables) without causing re-renders. | Manage state that causes component re-renders when updated.          |
| **Triggers Re-render?** | No, updates to `useRef` values do not trigger re-renders.                                 | Yes, updates to `useState` values trigger re-renders.                |
| **Persistence**         | Persists values across renders.                                                           | Persists values across renders.                                      |
| **Common Use Cases**    | - Access DOM elements<br>- Store mutable variables like timers                            | Manage UI state like form inputs, toggles, counters                  |
| **Usage with DOM**      | Commonly used to directly access DOM elements.                                            | Not suitable for DOM manipulation.                                   |
| **Performance**         | Low overhead since no re-render occurs.                                                   | Triggers re-render, which can be more performance-heavy if overused. |
