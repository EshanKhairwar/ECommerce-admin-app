
import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import ResetPassword from './pages/ResetPassword';
import Forgotpassword from './pages/Forgotpassword';
import MainLayout from './components/MainLayout';
import Enquiries from './pages/Enquiries';
import Bloglist from './pages/Bloglist';
import Blogcatlist from './pages/Blogcatlist';
import Orders from './pages/Orders';
import Customers from './pages/Customers';
import Colorlist from './pages/Colorlist';
import Categorylist from './pages/Categorylist';
import Brandlist from './pages/Brandlist';
import Productlist from './pages/Productlist';
import AddBlog from './pages/AddBlog';
import AddBlogCat from './pages/AddBlogCat';
import AddColor from './pages/AddColor';
import AddCat from './pages/AddCat';
import AddBrand from './pages/AddBrand';
import AddProduct from './pages/AddProduct';
import Couponlist from './pages/Couponlist';
import AddCoupon from './pages/AddCoupon';
import ViewEnq from './pages/ViewEnq';
import ViewOrder from './pages/ViewOrder';
function App() {
  return (
    <Router>
<Routes>
  <Route path='/' element={<Login/>}/>
  <Route path='/reset-password' element={<ResetPassword/>}/>
  <Route path='/forgot-password' element={<Forgotpassword/>}/>
  <Route path='/admin' element={<MainLayout/>}>
    <Route index element={<Dashboard/>} />
    <Route path='enquiries' element={<Enquiries/>} />
    <Route path='enquiries/:id' element={<ViewEnq/>} />
    <Route path='blog' element={<AddBlog/>} />
    <Route path='blog/:id' element={<AddBlog/>} />
    <Route path='coupon' element={<AddCoupon/>} />
    <Route path='coupon/:id' element={<AddCoupon/>} />
    <Route path='coupon-list' element={<Couponlist/>} />
    <Route path='blog-category' element={<AddBlogCat/>} />
    <Route path='blog-category/:id' element={<AddBlogCat/>} />
    <Route path='blog-list' element={<Bloglist/>} />
    <Route path='blog-category-list' element={<Blogcatlist/>} />
    <Route path='orders' element={<Orders/>} />
    <Route path="order/:id" element={<ViewOrder />} />
    {/* <Route path='orders/:id' element={<Orders/>} /> */}
    <Route path='customers' element={<Customers/>} />
    <Route path='color' element={<AddColor/>} />
    <Route path='color/:id' element={<AddColor/>} />
    <Route path='list-color' element={<Colorlist/>} />
    <Route path='category' element={<AddCat/>} />
    <Route path='category/:id' element={<AddCat/>} />
    <Route path='list-category' element={<Categorylist/>} />
    <Route path='list-brand' element={<Brandlist/>} />
    <Route path='brand' element={<AddBrand/>} />
    <Route path='brand/:id' element={<AddBrand/>} />
    <Route path='list-product' element={<Productlist/>} />
    <Route path='product' element={<AddProduct/>} />
    <Route path='product/:id' element={<AddProduct/>} />


  </Route>
</Routes>
    </Router>
  );
}

export default App;
