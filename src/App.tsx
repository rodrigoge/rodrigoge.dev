import './styles/colors.scss';
import './styles/global.scss';
import './styles/themes.scss';
import Router from "./routes/Router";
import AnimatedCursor from "react-animated-cursor"

function App() {
  return (
    <>
      <Router />
      <AnimatedCursor
        innerSize={8}
        outerSize={22}
        innerScale={1}
        outerScale={2}
        showSystemCursor={false}
        clickables={[
          'a',
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          'label[for]',
          'select',
          'textarea',
          'button',
          '.link',
          'label'
        ]}
      />
    </>
  )
}

export default App
