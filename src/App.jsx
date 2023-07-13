import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Home} from "./pages/home.jsx";
import {Edit} from "./pages/edit.jsx";
import {Add} from "./pages/add.jsx";
import {ADD_PATH, EDIT_PATH, ROOT_PATH} from "./routes/Slug.jsx";
import {Header} from "./component/Header.jsx";
import {Footer} from "./component/Footer.jsx";
function App() {

  return (
    <div>
        <BrowserRouter>
            <div className={'flex justify-center bg-gray-100 py-10'}>
                <div className={'border border-gray-300 w-full md:w-2/3'}>
                    <div className={'bg-blue-700 h-[200px] flex justify-center items-center'}>
                        <h2 className={'text-lg lg:text-2xl xl:text-5xl font-bold text-white'}>URL SHORTENER</h2>
                    </div>
                    <Header/>
                    <div className={'bg-white p-4'}>
                        <Routes>
                            <Route path={ROOT_PATH} element={<Home/>} />
                            <Route path={ADD_PATH} element={<Add/>} />
                            <Route path={`${EDIT_PATH}/:id`} element={<Edit/>} />
                        </Routes>
                    </div>
                    <Footer/>
                </div>
            </div>
        </BrowserRouter>
    </div>
  )
}

export default App
