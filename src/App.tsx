import {FullScreenButton} from "./components/fullscreenButton/FullScreenButton.tsx";
import {Logo} from "./components/logo/Logo.tsx";
import {Title} from "./components/title/Title.tsx";
import {Form} from "./components/form/Form.tsx";

function App() {
    return (
        <>
            <div className={'container'}>
                <Logo/>
                <Title/>
                <Form/>
                <FullScreenButton/>
            </div>
        </>
    )
}

export default App
