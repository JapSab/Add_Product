import React from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
const AddProducts = props => {
    const addProductHandler = (event) => {
        event.preventDefault()
    }

    return(
        <Card>
            <form onSubmit={addProductHandler}>
                <label htmlFor="productname">Product Name:</label>
                <input id="productname" type="text"/>

                <label htmlFor="releaseDate">Release country:</label>
                <input id="releaseCountry" type="text"/>

                <Button type="submit">Add Product</Button>
            </form>
        </Card>
    )
}

export default AddProducts;