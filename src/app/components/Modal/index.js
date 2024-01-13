import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
    return (
        <>
            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded shadow-md max-w-md w-full">
                        {children}
                        <button className="top-2 right-2 text-gray-700" onClick={onClose}>
                            Fechar
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default Modal;