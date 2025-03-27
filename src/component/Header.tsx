
interface ListHeaderProps {
    handleClick: (item: string) => void;
}
const ListHeader: React.FC<ListHeaderProps> = ({ handleClick }) => {

    const handleSelect = (event: string) => {
        handleClick(event)
    };

    return (
        <>
            <header className="p-3 text-bg-dark">
                <div className="container">
                    <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                        <nav className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                            <li><a href="#" className="nav-link px-2 text-secondary" onClick={() => handleSelect("Home")}>Home</a></li>
                            <li><a href="#" className="nav-link px-2 text-white" onClick={() => handleSelect("Features")}>Features</a></li>
                            <li><a href="#" className="nav-link px-2 text-white" onClick={() => handleSelect("Pricing")}>Pricing</a></li>
                            <li><a href="#" className="nav-link px-2 text-white" onClick={() => handleSelect("FAQs")}>FAQs</a></li>
                            <li><a href="#" className="nav-link px-2 text-white" onClick={() => handleSelect("About")}>About</a></li>
                        </nav>


                        <div className="text-end">
                            <button type="button" className="btn btn-outline-light me-2" onClick={() => handleSelect("SignIn")}>Login</button>
                            <button type="button" className="btn btn-warning" onClick={() => handleSelect("SignIn")}>Sign-up</button>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default ListHeader