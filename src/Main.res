%%raw("import './index.css'")
%%raw("import 'bootstrap/dist/css/bootstrap.min.css'")
%%raw("import '@fortawesome/fontawesome-free/css/all.min.css'")

switch ReactDOM.querySelector("#root") {
| Some(domElement) =>
  ReactDOM.Client.createRoot(domElement)->ReactDOM.Client.Root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  )
| None => ()
}