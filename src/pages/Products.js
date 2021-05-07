import Product from '../components/product/Product';


function Products(props) {

    const productList = [
        {

            image: 'http://shfcs.org/en/wp-content/uploads/2015/11/MedRes_Product-presentation-2.jpg',
            title: 'Product 003568',
            description: ' An awesome product',
        },
        {

            image: 'https://lh3.googleusercontent.com/proxy/SKagI4JKMDrXyEo-u78wsMnRGlYiO7sQdCls74pjefx3ooHNC3s9nF_iFC9D6FPzD0AL6ywpQ113DZGApHYhj_262hM0lJjqYX7A2g',
            title: 'Product 003563',
            description: ' An awesome product 2',
        },
    ]
    const getProducts = () => {
        const products = productList.map((product, index) => {
            return <Product 
            
            key={index}
            image={product.image}
            title={product.title}
            description={product.description}
            />
        })
        return products

    }


    return <>
        <div className="container">
            <div className="row">
               {getProducts()}
            </div>

        </div>



    </>


}
export default Products;