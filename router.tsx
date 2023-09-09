import {BrowserRouter , Routes , Route} from 'react-router-dom'
import DashbordData from '../pages/Dashbord'

function AppRouter() {
    return<>
    <BrowserRouter>
    \<Routes>
       <Route path='/*' element={<DashbordData/>}/>
    </Routes>
    </BrowserRouter>
    
    </>
}
export default AppRouter