import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Table() {
  let reportData = JSON.parse(localStorage.getItem("reportList")) || [];
  const [reportLocal] = useState(reportData);
  const [branchName, setBranchName] = useState("");

  useEffect(() => {
    const getBranchName = localStorage.getItem("branch");
    setBranchName(getBranchName);
  }, []);

  const tableData = reportLocal.map((dt) => {
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
              className="btn bg-success m-2"
            >
              الصفحة الرئيسية <i className="fa-solid fa-house"></i>
            </Link>
            <button
              style={{ color: "white" }}
              className="btn bg-info  m-2"
              onClick={() => {
                window.print();
              }}
            >
              طباعة التقرير <i className="fa-solid fa-print"></i>
            </button>
            <button
              style={{ color: "white" }}
              className="btn bg-danger m-2"
              onClick={() => {
                if (confirm("هل انت متأكد ؟")) {
                  localStorage.clear();
                  // window.location.reload();
                }
              }}
            >
              حذف الكل <i className="fa-solid fa-trash"></i>
            </button>
          </div>
        </div>
        <hr style={{ color: "black" }} />
        <div className="row">
          <div className="col">
            <h2>{branchName}</h2>
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
