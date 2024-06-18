@react.component
let make = () => {

  <div className="container-fluid">
    <div className="row pt-1 pb-1">
      <div className="col-6 d-flex align-items-center">
        <div className="text-capitalize border-end fw-bold text-indigo-600 pe-2 me-3">
          {"Умные панели"->React.string}
        </div>
        <div className="fw-bold pe-2">
          <div className="d-flex align-items-center bg-white p-2 border rounded">
            <i className="fa-solid fa-table-list" style={{color: "#5e5c64"}}></i>
            <span className="me-2 ms-2">{"Список"->React.string}</span>
            <i className="fa-solid fa-caret-down"></i>
          </div>
        </div>
      </div>
      <div className="col-6 d-flex align-items-center justify-content-end">
        <div className="fw-bold pe-2 border-end me-3">
          <i className="fa-solid fa-gear me-3" style={{color: "#5e5c64"}}></i>
          <i className="fa-solid fa-bell" style={{color: "#5e5c64"}}></i>
        </div>
        <div className="fw-bold pe-2">
          <div className="fw-bold pe-2">
            <div className="d-flex align-items-center bg-white p-2 border rounded">
              <i className="fa-regular fa-user" style={{color: "#5e5c64"}}></i>
              <span className="me-2 ms-2">{"Имя пользователя"->React.string}</span>
              <i className="fa-solid fa-caret-down"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="row border-bottom pt-3 pb-3">
      <div className="col-12 d-flex align-items-center">
        <div className="fw-bold me-4">
          <i className="fa-regular fa-images me-2"></i> {"Галерея"->React.string}
        </div>
        <div className="fw-bold me-4">
          <i className="fa-solid fa-circle-play me-2"></i> {"Контент"->React.string}
        </div>
        <div className="fw-bold me-4">
          <i className="fa-solid fa-tv me-2"></i> {"Устройства"->React.string}
        </div>
        <div className="fw-bold me-4">
          <i className="fa-solid fa-object-group me-2"></i> {"Группы устройств"->React.string}
        </div>
        <div className="fw-bold me-4">
          <i className="fa-solid fa-file-video me-2"></i> {"Плэйлисты"->React.string}
        </div>
        <div className="fw-bold">
          <i className="fa-solid fa-list-check me-2"></i> {"Задания"->React.string}
        </div>
      </div>
    </div>
    <div className="row mt-5">
      <div className="col-12">
        <div className="fw-bold fs-5">{"Заголовок"->React.string}</div>
      </div>
    </div>
  </div>
}