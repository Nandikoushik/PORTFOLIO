import { Helmet } from "react-helmet";
import { Route } from "react-router-dom";
import Header from "../components/Header";
import LeftNav from "../components/LeftNav";
import Footer from "../components/Footer";

export const Routers = ({ component: Component, title, ...rest }) => {
    return (
        <Route
            {...rest}
            render={(props) =>
                <main>
                    <Helmet>
                        <title>{title}</title>
                    </Helmet>
                    <LeftNav />
                    <div className="main-content">
                        <Header />
                        <Component {...props} title={title} />
                        <Footer />
                    </div>
                </main>
            }
        />
    );
};
