import React, { useState } from "react";
import { db } from "../../firebase/config.js";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import TableHeader  from './TableHeader';
import Inputs  from './Inputs';
import Swal from "sweetalert2";
import withReactContent from "sweetalert2";
import '../../stylesheets/WaiterView/ButtonsAddLess.css';
import '../../stylesheets/WaiterView/WaiterMainView.css';
import '../../stylesheets/WaiterView/TableFooter.css';

const SidebarLunch = (props) => {
  const { cartItems, addItem, removeItem, newName} = props;
  const userCollectionRef = collection(db, "orders");

  const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
  const tip = itemsPrice * 0.1;
  const totalPrice = itemsPrice + tip;
 
  const createOrder = async () => {
    console.log("creado");
    await addDoc(userCollectionRef, {
      Customer: newName,
      Order: cartItems,
      status: "Pending",
      created: Timestamp.fromDate(new Date()),
    });
    console.log();
    Swal.fire({
      position: 'bottom-end',
      title: 'Orden enviada',
      icon: 'success',
      timer: 2000,
      timerProgressBar: true,
      showConfirmButton:false,
      toast: true,
     

    })
  };

  return (
    <>
      {/* <Inputs onChange={(e) => {setNewName(e.target.value); }}/> */}
      <div className='div_select_item_by_customer'>
      <table id="table_select_item" className="table table-striped">
      <TableHeader />
      <tbody>
  
        
        {cartItems.map((item) => (
          <tr key={item.id}>
        
          <th>{item.name}</th>
          <th>
        <div className="div_add_subs">
        <button className='btn_add' onClick={() => addItem(item)}><i className="icon-plus-sign"></i></button>
        <span className="span_quantity">{item.qty}</span>
        <button className='btn_subs' onClick={() => removeItem(item)}><i className="icon-minus"></i></button>
        </div>
        </th>
        <th>$ {item.price}.00</th>
        </tr>
        ))}
        
        </tbody>
        </table>
     
      </div>
      {cartItems.length !== 0 && (
        <>
          <div className='div_table_foot'>
          <div className='div_title_total'></div>
          <h5 className='h5_total'>Total $</h5>
          <div className='inp_total'> $ {totalPrice.toFixed(2)}</div>
          </div>
        </>
      )}
      
      <div className="btns_deleted_and_send_order">
      <button id="btn_trash" className='btn'><i className="icon-trash"></i> Eliminar</button>
      <button id="btn_send" className='btn' onClick={createOrder}><i className="icon-ok-sign"></i> Enviar</button>
   
     
    </div>

     
      </>
  );
};

export default SidebarLunch;