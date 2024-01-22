import { useState } from "react";
import { Link } from "react-router-dom";

function Table() {
  let reportData = JSON.parse(localStorage.getItem("reportList")) || [];
  const [reportLocaly, setReportLocaly] = useState(reportData);

  const tableData = reportLocaly.map((dt) => {
    return (
      <tr key={dt.id}>
        <td>{dt.date}</td>
        <td> {dt.customerNum} </td>
        <td> {dt.val} </td>
      </tr>
    );
  });

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col text-center">
            <Link
              to="/"
              style={{ color: "white" }}
              className="btn bg-success m-4"
            >
              الصفحة الرئيسية <i className="fa-solid fa-house"></i>
            </Link>
            <button
              style={{ color: "white" }}
              className="btn bg-info  m-4"
              onClick={() => {
                window.print();
              }}
            >
              طباعة التقرير <i className="fa-solid fa-print"></i>
            </button>
            <button
              style={{ color: "white" }}
              className="btn bg-danger m-4"
              onClick={() => {
                if (confirm("هل انت متأكد ؟")) {
                  setReportLocaly({});
                  localStorage.setItem(
                    "reportList",
                    JSON.stringify(reportLocaly)
                  );
                  // window.location.reload();
                }
              }}
            >
              حذف الكل <i className="fa-solid fa-trash"></i>
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <table className="table table-bordered text-center">
              <thead>
                <tr>
                  <th scope="col">التاريخ</th>
                  <th scope="col">عدد الاشخاص</th>
                  <th scope="col">الملاحظة</th>
                </tr>
              </thead>
              <tbody>{tableData}</tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Table;
