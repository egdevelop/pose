import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";
import "./Modal.css";
import product from '../../assets/img/product.svg'
import { Link } from "react-router-dom";

const Modal = props => {
    const closeOnEscapeKeyDown = e => {
        if ((e.charCode || e.keyCode) === 27) {
            props.onClose();
        }
    };

    useEffect(() => {
        document.body.addEventListener("keydown", closeOnEscapeKeyDown);
        return function cleanup() {
            document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
        };
    }, []);

    return ReactDOM.createPortal(
        <CSSTransition
            in={props.show}
            unmountOnExit
            timeout={{ enter: 0, exit: 300 }}
        >
            <div className="modal" onClick={props.onClose}>
                <div className="modal-content" onClick={e => e.stopPropagation()}>
                    <div className="modal-body text-abu">
                        <div className="flex justify-between">
                            <h5 className="text-lg font-medium text-abu">Pesanan</h5>
                            <span className="cursor-pointer" onClick={props.onClose}>x</span>
                        </div>
                        <div className="flex mt-4 gap-x-6">
                            <div className="bg-abu w-26 rounded-xl py-2 px-6">
                                <img src={product} alt="" className='m-auto w-full h-full object-cover' />
                            </div>
                            <div className="flex flex-col">
                                <span className="font-semibold text-xs">Indomie Goreng Special</span>
                                <span className="text-xs">85g</span>
                                <div className="flex justify-between mt-3">
                                    <span className="font-bold text-sm">Rp6.000,-</span>
                                    <span className="font-bold text-sm">2x</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-between mt-10">
                            <div className="text-sm font-medium text-abu">
                                Total Produk
                            </div>
                            <div className="text-xs font-bold">
                                1 Produk
                            </div>
                        </div>
                    </div>
                    <div className="text-center my-6">
                        <Link to='/buy' className="bg-biru rounded-full w-auto mt-2 text-white px-8 py-2 text-xs">Pembayaran</Link>
                    </div>
                </div>
            </div>
        </CSSTransition>,
        document.getElementById("root")
    );
};

export default Modal;