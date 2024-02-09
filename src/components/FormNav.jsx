import { Link } from "react-router-dom";

function FormNav() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <nav className=" clo-6 text-center mt-3 ">
            <Link
              style={{ color: "white", padding: 14 }}
              to="/table"
              className="btn bg-success text-center"
            >
              الذهاب الى صفحة التقرير
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default FormNav;
