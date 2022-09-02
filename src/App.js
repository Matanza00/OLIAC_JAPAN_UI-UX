import './App.scss';
import 'boxicons/css/boxicons.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppLayout from './components/layout/AppLayout';
import Blank from './pages/Blank';
import Client from './pages/Client';
import Inventory from './pages/Inventory';
import Order from './pages/Order';
import Employee from './pages/Employee';
import Form from './components/form/Form';
import Form_Edit from './components/form/Form_Edit';
import Form_View from './components/form/Form_View';
import {userInputs,productInputs,orderInputs,adminInputs,paymentInputs} from './Form_Data'


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<AppLayout />}>
                    <Route index element={<Blank />} />
                    <Route path='/client'>
                        <Route index element={<Client/>}/>
                        <Route path='form' element={<Form inputs={userInputs} title="Add New Client"/>}/>
                        <Route path='payment' element={<Form inputs={paymentInputs} title="Add New Client"/>}/>
                    </Route>
                    <Route path='/inventory'>
                        <Route index element={<Inventory/>}/>
                        <Route path='form' element={<Form_Edit inputs={productInputs} title="Add New Inventory"/>}/>
                    </Route>
                    <Route path='order'>
                        <Route index element={<Order/>}/>
                        <Route path='form' element={<Form_View inputs={adminInputs} title="Order PANEL"/>}/>
                    </Route>
                    <Route path='/employee'>
                        <Route index element={<Form_View/>}/>
                        <Route path='form' element={<Form inputs={orderInputs} title="Add New Employee"/>}/>
                    </Route>
                    
                    
                    <Route path='/login' element={<Blank />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
