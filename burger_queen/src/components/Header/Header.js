import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth  } from '../../context/authContext';
import Swal from "sweetalert2";
import styles from './Header.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const logo = require('../../img/font1.png')

function Header()  {
    const { logout } = useAuth();
    const navigate = useNavigate();
 
    const signOut = () => {
        logout()
        .then(() => 
        { {setTimeout(function() { navigate('/')},1200)};
        sessionStorage.clear();})
        Swal.fire({
            title: '<b>Cerrando sesión</b>',
            position: 'bottom-end',
            icon: 'success',
            timer: 1500,
            timerProgressBar: true,
            showConfirmButton:false,
            allowOutsideClick: false,
            toast: true,
            backdrop: true,
            footer: 'Espere unos segundos por favor...',
          })
    }
    return (
    <div id={styles.divBtnHeader}  data-testid='containerHeader'>
    <img className= {styles.imgLogo} src={logo} alt="Logo"/>
    <h3 className={styles.title}>TOMA DE PEDIDOS</h3>
    <button id={styles.btnLogout} className='btn btn-danger' data-testid='btnLogout' onClick={signOut}><i id={styles.icoOff} className='icon-off'></i> Cerrar sesión</button>
    </div>
    )
};
export default Header;