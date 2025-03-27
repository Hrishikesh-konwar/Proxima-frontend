import SignIn from "./SingIn";
import Home from './Home';

interface Props {
    bodyComponent: "Home" | "SignIn" | "Features" | "Pricing" | "FAQs" | "About"; // Use union type for type safety
}


const BodyContentMap = {
    "Home": <Home />,
    "SignIn": <SignIn />,
    "Features" : <Home />,
    "Pricing" : <Home />,
    "FAQs" : <Home />,
    "About" : <Home />,

}

const BodyContent: React.FC<Props> = ({ bodyComponent }) => {
    const content = BodyContentMap[bodyComponent];
    return (
        <>
            {content}
        </>
    )
}

export default BodyContent