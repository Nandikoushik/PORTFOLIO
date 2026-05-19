import { Routers } from "./Routers";
import { Switch } from "react-router-dom";
import language from "../language/language";
import About  from "../components/About"
import Skills from "../components/Skill";
import Portfolio from "../components/Projects";
import Contact from "../components/Contact";
import chatWithme from "../components/Chat";
export const Routes = () => (
  <Switch>
    <Routers exact path="/" component={About} title={language.title.about} />
    <Routers exact path="/skills" component={Skills} title={language.title.skills} />
    <Routers exact path="/projects" component={Portfolio} title={language.title.projects} />
    <Routers exact path="/contact" component={Contact} title={language.title.contact} />
    <Routers exact path="/company" component={About} title={language.title.contact} />
    <Routers exact path="/chat" component={chatWithme} title={language.title.chat} />
  </Switch>
);
