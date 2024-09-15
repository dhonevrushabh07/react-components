import ReactDOM from "react-dom/client"

const AppLayout = () => {
    return (
        <div>
            <h1>Hello This is component library</h1>
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<AppLayout />)