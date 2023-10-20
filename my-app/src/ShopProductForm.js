import React, { Component } from 'react';
import './ShopProductForm.css';

class ShopProductForm extends Component {
  constructor() {
    super();
    this.state = {
      shopForm: {
        logo: null,
        name: '',
        description: ''
      },
      productForm: {
        photo: null,
        name: '',
        description: '',
        category: '',
        quantity: '',
        price: ''
      },
    };
  }

  handleShopFormChange = (e) => {
    const { name, value, type, files } = e.target;
    this.setState((prevState) => ({
      shopForm: {
        ...prevState.shopForm,
        [name]: type === 'file' ? files[0] : value,
      },
    }));
  }

  handleProductFormChange = (e) => {
    const { name, value, type, files } = e.target;
    this.setState((prevState) => ({
      productForm: {
        ...prevState.productForm,
        [name]: type === 'file' ? files[0] : value,
      },
    }));
  }

  handleShopFormSubmit = (e) => {
    e.preventDefault();
    // Handle shop form submission, you can send the data to a server or perform other actions here.
    console.log(this.state.shopForm);

    // Show an alert on submit
    alert('Shop form submitted successfully.');

    // Reset the form fields after submission
    this.setState({
      shopForm: {
        logo: null,
        name: '',
        description: ''
      }
    });
  }

  handleProductFormSubmit = (e) => {
    e.preventDefault();
    // Handle product form submission, you can send the data to a server or perform other actions here.
    console.log(this.state.productForm);

    // Show an alert on submit
    alert('Product form submitted successfully.');

    // Reset the form fields after submission
    this.setState({
      productForm: {
        photo: null,
        name: '',
        description: '',
        category: '',
        quantity: '',
        price: ''
      }
    });
  }

  handleCancel = () => {
    // Reset the form fields when cancel is clicked
    this.setState({
      shopForm: {
        logo: null,
        name: '',
        description: ''
      },
      productForm: {
        photo: null,
        name: '',
        description: '',
        category: '',
        quantity: '',
        price: ''
      }
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleShopFormSubmit}>
          <h2>New Shop</h2>
          <label>
            Upload Logo:
            <input type="file" name="logo" onChange={this.handleShopFormChange} />
          </label>
          <label>
            Name:
            <input type="text" name="name" value={this.state.shopForm.name} onChange={this.handleShopFormChange} />
          </label>
          <label>
            Description:
            <input type="text" name="description" value={this.state.shopForm.description} onChange={this.handleShopFormChange} />
          </label>
          <button type="submit">Submit</button>
          <button type="button" onClick={this.handleCancel}>Cancel</button>
        </form>

        <form onSubmit={this.handleProductFormSubmit}>
          <h2>New Product</h2>
          <label>
            Upload Photo:
            <input type="file" name="photo" onChange={this.handleProductFormChange} />
          </label>
          <label>
            Name:
            <input type="text" name="name" value={this.state.productForm.name} onChange={this.handleProductFormChange} />
          </label>
          <label>
            Description:
            <input type="text" name="description" value={this.state.productForm.description} onChange={this.handleProductFormChange} />
          </label>
          <label>
            Category:
            <input type="text" name="category" value={this.state.productForm.category} onChange={this.handleProductFormChange} />
          </label>
          <label>
            Quantity:
            <input type="text" name="quantity" value={this.state.productForm.quantity} onChange={this.handleProductFormChange} />
          </label>
          <label>
            Price:
            <input type="text" name="price" value={this.state.productForm.price} onChange={this.handleProductFormChange} />
          </label>
          <button type="submit">Submit</button>
          <button type="button" onClick={this.handleCancel}>Cancel</button>
        </form>
      </div>
    );
  }
}

export default ShopProductForm;
