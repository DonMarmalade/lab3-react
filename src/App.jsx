import Header from "@components/Header/index.js";
import Footer from "@components/Footer/index.js";
import {Router, Routes, Route} from "@components/navigation";
import {BrowsePage, ForumPage, GeekListPage, HomePage} from "@pages";

function App() {
      return (
            <Router>
                <Header />
                <Routes>
                    <Route path="/">
                        <HomePage />
                    </Route>
                    <Route path="/explore">
                        <HomePage />
                    </Route>
                    <Route path="/community">
                        <HomePage />
                    </Route>
                    <Route path="/discussion">
                        <HomePage />
                    </Route>
                    <Route path="/contact">
                        <BrowsePage />
                    </Route>
                    <Route path="/recipe">
                        <ForumPage />
                    </Route>
                    <Route path="/blog">
                        <GeekListPage />
                    </Route>
                </Routes>
                <Footer />
            </Router>
      )
}

export default App
