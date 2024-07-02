import './css/App.css';
import { AddProductForm } from './components/AddProductForm';
import { ProductList } from './components/ProductList';

function App() {
    return (
        <>
            <h1>Home</h1>
            <AddProductForm />
            <ProductList />
        </>
    );
}

export default App;
