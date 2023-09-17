import "./App.css";

import "./styles/global.scss";
import "./styles/reset.scss";
import "./styles/variables.scss";

import { ConversationSection } from "./components/conversations";

function App() {
  return (
    <div className="container">
      <ConversationSection />
    </div>
  );
}

export default App;
