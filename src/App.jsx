import { BrowserRouter, Routes, Route } from 'react-router-dom';

// LAYOUTS
import AdminLayout from './layouts/AdminLayout';
import CustomerLayout from './layouts/CustomerLayout';

// ADMIN PAGES
import Dashboard from './pages/Dashboard';
import CustomerManagement from './pages/CustomerManagement';
import EventInquiries from './pages/EventInquiries';
import Inventory from './pages/Inventory';
import PackageBuilder from './pages/PackageBuilder';
import RoomManagement from './pages/RoomManagement';
import Expenses from './pages/Expenses';
import StaffManagement from './pages/StaffManagement';
import Finance from './pages/Finance';
import AddEditEventInquiry from './pages/AddEditEventInquiry';
import AddEditCustomer from './pages/AddEditCustomer';
import AddEditInventory from './pages/AddEditInventory';
import AddEditPackage from './pages/AddEditPackage';
import DetailedReport from './pages/DetailedReport';
import LoginPage from './pages/LoginPage'; // <-- Import the new Login Page

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Customer-Facing Website Routes */}
        <Route element={<CustomerLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/packages" element={<PublicPackages />} />
          <Route path="/book-now" element={<BookingPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>

        {/* NEW: Admin Login Route */}
        <Route path="/admin/login" element={<LoginPage />} />

        {/* Admin Panel Routes (these will be protected later) */}
        <Route path="/admin" element={<AdminLayout />}>
          {/* Note: In a real app, a check would redirect to /admin/login if not authenticated */}
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="customers" element={<CustomerManagement />} />
          <Route path="customers/new" element={<AddEditCustomer />} />
          <Route path="customers/edit/:id" element={<AddEditCustomer />} />
          <Route path="inquiries" element={<EventInquiries />} />
          <Route path="inquiries/new" element={<AddEditEventInquiry />} />
          <Route path="inquiries/edit/:id" element={<AddEditEventInquiry />} />
          <Route path="inventory" element={<Inventory />} />
          <Route path="inventory/new" element={<AddEditInventory />} />
          <Route path="inventory/edit/:id" element={<AddEditInventory />} />
          <Route path="packages" element={<PackageBuilder />} />
          <Route path="packages/new" element={<AddEditPackage />} />
          <Route path="packages/edit/:id" element={<AddEditPackage />} />
          <Route path="rooms" element={<RoomManagement />} />
          <Route path="expenses" element={<Expenses />} />
          <Route path="staff" element={<StaffManagement />} />
          <Route path="finance" element={<Finance />} />
          <Route path="reports/:type" element={<DetailedReport />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

// We still need to import the customer pages for this to work
import HomePage from './pages/HomePage';
import PublicPackages from './pages/PublicPackages';
import BookingPage from './pages/BookingPage';
import ContactPage from './pages/ContactPage';

export default App;