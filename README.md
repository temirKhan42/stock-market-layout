# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). Link to the [website](https://stock-market-layout.vercel.app/).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm test`

Launches the test runner in the interactive watch mode.
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance. See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Resources

- [React-Redux library](https://redux-toolkit.js.org/tutorials/quick-start) - app state manager.
- [React-Router framework](https://reactrouter.com/en/main/start/overview) - handles client and server-side routing in React application.
- [IEX Cloud](https://iexcloud.io/docs/api/#rest-how-to) - is a platform that provides api for getting financial data like stocks, ETFs, mutual funds.
- [ChatGPT](https://chat.openai.com/chat) - helped with a lot small important questions that poped up from time to time.
- [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript) - as well as chatGPT helped to refresh some rarely using imbedded methods 
- [lodash](https://lodash.com/) - utility library

### Mistakes

In this project, I made three main mistakes that caused the project to fail.

-1 The first mistake was that I tried to implement the Future Sliced Design Frontend architecture without properly studying it. As a result, I got lost in the definitions of components, modules, module components, UI, module UI, and my project lost all structure. Although this helped me with styles, and I wasn't particularly concerned about style conflicts since each style was encapsulated in its own component.

-2 The second mistake was underestimating the importance of client-server interaction in this specific project. I didn't take into account how many requests the client needed to make to get enough data to render one page, and that this amount of requests would be enough to noticeably slow down the rendering of the page. As a solution to this problem, I see the use of SSR based on the NextJs platform.

-3 The third mistake was creating a table using HTML tags <table>, using CSS grid would have been a better idea.

PS. The task was to build the page with table of share report. As I didnt know how that kind of tables should like I decide to copy part of it from existing [website](https://www.tradingview.com/markets/stocks-usa/market-movers-all-stocks/)

