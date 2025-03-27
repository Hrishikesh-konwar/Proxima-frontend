// vite-project/src/component/sign-in/SignIn.tsx
import React from 'react';

const Home: React.FC = () => {
    return (
        <div className="d-flex align-items-center py-4 bg-body-tertiary">
            <main className="form-signin w-100 m-auto">
                <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-body-tertiary">
                    <div className="col-md-6 p-lg-5 mx-auto my-5">
                        <h1 className="display-3 fw-bold">Designed for engineers</h1>
                        <h3 className="fw-normal text-muted mb-3">Build anything you want with Aperture</h3>
          
                    </div>
                    <div className="product-device shadow-sm d-none d-md-block"></div>
                    <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
                </div>
            </main>
        </div>
    );
};

export default Home;