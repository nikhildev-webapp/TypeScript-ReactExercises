import React from 'react'
import './ObjectList.css'

const ObjectList = () => {
    interface Product{
        id:number,
        name: string,
        model:string,
        price: number,
        emoji?: string,
    }
    const products: Product[] = [
        {id:1, name:"Laptop", model:"Dell XPS 13", price:999, emoji: '💻'},
        {id:2, name:"Smartphone", model:"iPhone 13", price:799, emoji: '📱'},
        {id:3, name:"Tablet", model:"iPad Pro", price:899, emoji: '📱'},
        {id:4, name:"Monitor", model:"LG UltraFine", price:299, emoji: '🖥️'},
        {id:5, name:"Headphones", model:"Sony WH-1000XM4", price:349, emoji: '🎧'},
        {id:6, name:"Smartwatch", model:"Apple Watch 6", price:399, emoji: '⌚'},
        {id:7, name:"Camera", model:"Canon EOS R", price:1199, emoji: '📷'},
        {id:8, name:"Keyboard", model:"Logitech MX Keys", price:129, emoji: '⌨️'},
    ]
  return (
      <>
          <h1 className="ol-title">Products</h1>
          <div className="products" role="list">
              {products.map((product) => (
                    <div className="product-card" key={product.id} role="listitem" aria-label={`${product.name} ${product.model}`}>
                        <div className="product-emoji" role="img" aria-label={product.name}>{product.emoji}</div>
                        <div className="product-name">{product.name}</div>
                        <div className="product-model">Model: {product.model}</div>
                        <div className="product-price">${product.price}</div>
                    </div>
                ))}
          </div>
      </>
  )
}

export default ObjectList