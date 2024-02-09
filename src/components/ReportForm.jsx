import { useState } from "react";
import { nanoid } from "nanoid";
import { positive, negative } from "./data";
import Footer from "./Footer";
import FormNav from "./FormNav";

const setLocalStorage = (item) => {
  localStorage.setItem("reportList", JSON.stringify(item));
};

function ReportForm() {
  const getLocalStorage = JSON.parse(localStorage.getItem("reportList")) || [];
  const [valList, setValList] = useState([]);
  const [saveList, setSaveList] = useState(getLocalStorage);
  const [report, setReport] = useState({
    id: "",
    date: "",
    customerNum: "",
    rate: "",
    val: "",
  });

  let isDisabled =
    report.customerNum === "" || report.rate === "" || report.val === "";

  const bg = isDisabled && "gray";

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO HERE
    const item = [...saveList, report];
    setSaveList(item);
    setLocalStorage(item);
    // window.location.reload();
    // alert("OK");
  };

  return (
    <>
      <FormNav />
      <div className="form">
        <div className="container">
          <h1>التقرير اليومي</h1>
          <hr />

          <form>
            <div className="date">
              <label htmlFor="day">التاريخ : </label>
              <input
                // value={report.date}
                onChange={(e) => {
                  setReport({ ...report, date: e.target.value });
                }}
                type="date"
                id="day"
              />
            </div>
            <div className="customers">
              <label htmlFor="num">عدد العملاء : </label>
              <input
                value={report.customerNum}
                onChange={(e) => {
                  setReport({
                    ...report,
                    customerNum: e.target.value,
                    id: nanoid(),
                  });
                }}
                min="1"
                type="number"
                id="num"
              />
            </div>

            <div className="rate">
              <label htmlFor="good">ايجابي : </label>
              <input
                value={report.rate}
                onChange={(e) => {
                  setReport({
                    ...report,
                    rate: e.target.id,
                  });
                  setValList(positive);
                }}
                type="radio"
                name="rate"
                id="good"
              />
              <label htmlFor="bad">سلبي : </label>
              <input
                value={report.rate}
                onChange={(e) => {
                  setReport({
                    ...report,
                    rate: e.target.id,
                  });
                  setValList(negative);
                }}
                type="radio"
                name="rate"
                id="bad"
              />
            </div>

            <div className="options-list">
              <label htmlFor="options"> الخيارات : </label>
              <select
                onChange={(e) => {
                  setReport({ ...report, val: e.target.value });
                }}
                id="options"
              >
                <option>== قائمة الخيارات ==</option>

                {valList.map((dt) => {
                  return <option key={dt.id}>{dt.ar}</option>;
                })}
              </select>
            </div>

            <button
              style={{ background: bg }}
              disabled={isDisabled}
              onClick={handleSubmit}
            >
              حفظ
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ReportForm;
