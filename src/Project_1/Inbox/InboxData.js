import React, { useEffect, useState } from 'react';
import '../Sidebar.css'
const InboxData = () => {
    const [data, setData] = useState([]);

    const Cart = () => {
        const requestOptions = {
            method: "GET",
            redirect: "follow"
        };

        fetch("https://fakestoreapi.com/carts", requestOptions)
            .then((response) => response.json())
            .then((result) => { setData(result) })
            .catch((error) => console.error(error));
    }

    useEffect(() => {
        Cart();
    }, []);

    return (
        <div>
            <div className='container m-5'>
                <div className='row'>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th scope="col">id</th>
                                <th scope="col">UserId</th>
                                <th scope="col">Date</th>
                                <th scope="col">Products</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((cart) => (
                                <tr key={cart.id}>
                                    <td>{cart.id}</td>
                                    <td>{cart.userId}</td>
                                    <td>{cart.date}</td>
                                    <td>
                                        {cart.products.map((product, i) => (
                                            <React.Fragment key={i}>
                                                <tr>
                                                    <td>{product.quantity}</td>
                                                    <td>{product.productId}</td>
                                                </tr>
                                            </React.Fragment>
                                        ))}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default InboxData;
