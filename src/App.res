@react.component
let make = () => {

  <div className="container-fluid">
    <div className="row pt-1 pb-1">
      <div className="col-12 d-flex align-items-center">
        <div className="border-end fw-bold text-indigo-600 p-2">
          {"Умные панели"->React.string}
        </div>
      </div>
    </div>
    <div className="row border-bottom pt-3 pb-3">
      <div className="col-12 d-flex align-items-center">
        <div className="fw-bold">
          <i className="fa-solid fa-file-zipper me-2"></i> {"Сборки"->React.string}
        </div>
      </div>
    </div>
    <div className="row mt-5">
      <div className="col-12">
        <h1>{"Заголовок"->React.string}</h1>
      </div>
    </div>
  </div>
}