import { BrowserRouter, Route, Routes } from "react-router";
import NotFound from "../pages/NotFound";
import Default from "../layouts/Default";
import Home from "../pages/Home";

const Patchs = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Default />}>
                        <Route index element={<Home/>}/>
                    </Route>
                        <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default Patchs;